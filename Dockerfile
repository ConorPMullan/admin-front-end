FROM node:10 as node-stage

WORKDIR /project

COPY package*.json /project/

RUN npm install

COPY . /project/

RUN npm run build

FROM nginx:1.15.8-alpine

COPY --from=node-stage /project/build /usr/share/nginx/html
COPY --from=node-stage /project/nginx.conf /etc/nginx/conf.d/default.conf
