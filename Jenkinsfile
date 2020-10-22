#!groovy

import com.petfoodexperts.leader.pack.operation.Constants
import com.petfoodexperts.leader.pack.operation.PipelineTools
import static com.petfoodexperts.leader.pack.operation.Slack.*

final pipelineTools = new PipelineTools(this)

deploymentToQAPreapproved = false
deploymentToQAApproved = false
deployedTo = []

def buildAndPushImage(String instance) {
    sh "gcloud builds submit --config cloudbuild/build-push.yaml --substitutions=TAG_NAME=${env.buildImageName}"
}

def performDeployment(String instance, pipelineTools) {
  buildAndPushImage("${instance}")
  pipelineTools.deployPod("${instance}")
  deployedTo.add("${instance}")
  pipelineTools.updateImageTag("${instance}")
}

pipeline {
  agent {
    docker {
      label 'linux-agent'
      image 'operation-pack-leader/jenkins-nodejs10-agent:latest'
      args '-u root:root'
    }
  }
  options {
    timestamps()
    buildDiscarder(logRotator(numToKeepStr: '5', artifactNumToKeepStr: '5'))
  }
  environment {
    PFE_DOMAIN = credentials('pfe-domain')
    project = 'operation-pack-leader'
    appName = 'admin-front-end'
    shortCommit = sh(returnStdout: true, script: 'git rev-parse --short HEAD').trim()
    imageTag = "${shortCommit}.${env.BUILD_NUMBER}"
    registry = "gcr.io/${project}"
    baseImageName = "${registry}/${appName}"
    buildImageName = "${baseImageName}:${imageTag}"
    region = "us-east4"
    zone = "${region}-a"
  }
  stages {
    stage('Pre-approve deployment to dev and QA') {
      when { branch 'develop' }
      steps {
        script {
          try {
            timeout(time: 30, unit: 'SECONDS') {
              input 'Proceed with deployment to dev and QA?'
            }
            deploymentToQAPreapproved = true
          } catch (err) {
              echo 'Confirmation timed out or user chose not to proceed, pipeline will run as normal with an option to deploy to QA later'
          }
        }
      }
    }
    stage('Install packages') {
      when { expression { return !pipelineTools.isSandboxDeploy() } }
      steps {
        sh 'npm i'
      }
    }
    stage('Run tests') {
      when { expression { return !pipelineTools.isSandboxDeploy() } }
      steps {
        sh 'npm test'
      }
    }
    // stage('Run lint check') {
    //   when { expression { return !pipelineTools.isSandboxDeploy() } }
    //   steps {
    //     sh 'npm run lint'
    //   }
    // }
    stage('GCP authentication') {
      steps {
        withCredentials([file(credentialsId: 'gcloud', variable: 'gcloud')]) {
          sh 'gcloud auth activate-service-account --key-file ${gcloud}'
        }
      }
    }
    stage('Build image with Cloud Build') {
      when { expression { return !pipelineTools.isDeployCandidate() } }
      steps {
        script {
          sh "gcloud builds submit --config cloudbuild/build.yaml --substitutions=TAG_NAME=${env.buildImageName}"
        }
      }
    }
    stage('Prepare K8s configuration files') {
      when { expression { return pipelineTools.isDeployCandidate() } }
      steps {
        script {
          pipelineTools.prepareK8sConfiguration()
        }
      }
    }
    stage('Deploy Sandbox') {
      when { expression { return pipelineTools.isSandboxDeploy() } }
      steps {
        script {
          def instance  = 'sandbox'
          performDeployment("${instance}", pipelineTools)
        }
      }
    }
    stage('Deploy Dev') {
      when { branch 'develop' }
      steps {
        script {
          def instance  = 'dev'
          performDeployment("${instance}", pipelineTools)
        }
      }
    }
    stage('Confirm deployment to QA') {
      when { expression { return pipelineTools.isQAConfirmationRequired(deploymentToQAPreapproved) } }
      steps {
        script {
          timeout(time: 5, unit: 'MINUTES') {
            input 'Proceed with deployment to QA?'
          }
          deploymentToQAApproved = true
        }
      }
    }
    stage('Deploy QA') {
      when { expression { return pipelineTools.isQADeploy(deploymentToQAPreapproved, deploymentToQAApproved) } }
      steps {
        script {
          def instance = 'qa'
          performDeployment("${instance}", pipelineTools)
        }
      }
    }
    stage('Confirm deployment to Staging') {
      when { branch 'develop' }
      steps {
        timeout(time: 5, unit: 'MINUTES') {
          input 'Proceed with deployment to Staging?'
        }
      }
    }
    stage('Deploy Staging') {
      when { branch 'develop' }
      steps {
        script {
          def instance = 'staging'
          performDeployment("${instance}", pipelineTools)
        }
      }
    }
    stage('Deploy Production') {
      when { branch 'master' }
      steps {
        script {
          def instance = 'prod'
          performDeployment("${instance}", pipelineTools)
        }
      }
    }
  }
  post {
    always {
      script {
        sendSlackMessage this, "${currentBuild.result}", deployedTo
        pipelineTools.containerCleanup()
      }
    }
  }
}
