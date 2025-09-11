FROM node:24.8-slim AS build-stage

WORKDIR /app

COPY package*.json ./

RUN npm ci --ignore-scripts

COPY . .

RUN node ./scripts/generateSitemap.mjs \
    && npm run build

FROM node:24.8-slim AS production-stage

ENV EMAIL_HOST=""
ENV EMAIL_USER=""
ENV EMAIL_PASS=""
ENV EMAIL_TO=""
ENV ALLOWED_ORIGINS=""

WORKDIR /app

RUN npm install -g --ignore-scripts pm2

COPY --from=build-stage /app /app
COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN apt-get update && apt-get --no-install-recommends install nginx -y \
    && apt-get clean \
    && rm /etc/nginx/sites-enabled/default

EXPOSE 80

CMD ["pm2-runtime", "start", "ecosystem.config.js"]
