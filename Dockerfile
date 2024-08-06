FROM node:22.1.0 AS build-stage

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

FROM node:22.1.0 AS production-stage

WORKDIR /app

RUN npm install -g pm2

COPY --from=build-stage /app /app
COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN apt-get update && apt-get install -y nginx && apt-get clean
RUN rm /etc/nginx/sites-enabled/default

EXPOSE 80 3000

CMD ["pm2-runtime", "start", "ecosystem.config.js"]
