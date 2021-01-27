FROM node:10 as node-stage

WORKDIR /project

COPY package*.json /project/

RUN npm install

COPY . /project/

ARG API_URL
ENV REACT_APP_API_URL=${API_URL}

ARG AUTHENTICATION_API_URL
ENV REACT_APP_AUTHENTICATION_API_URL=${AUTHENTICATION_API_URL}

RUN npm run build

FROM nginx:1.15.8-alpine

COPY --from=node-stage /project/build /usr/share/nginx/html
COPY --from=node-stage /project/nginx.conf /etc/nginx/conf.d/default.conf
