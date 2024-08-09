FROM node:22.1.0 AS build-stage

WORKDIR /app

COPY package*.json ./

RUN npm i --ignore-scripts

COPY . .

RUN npm run build

FROM node:22.1.0 AS production-stage

WORKDIR /app

RUN npm install -g --ignore-scripts pm2

COPY --from=build-stage /app /app
COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN apt-get update && apt-get --no-install-recommends install nginx -y \
    && apt-get clean \
    && rm /etc/nginx/sites-enabled/default

EXPOSE 80 3000

CMD ["pm2-runtime", "start", "ecosystem.config.js"]
