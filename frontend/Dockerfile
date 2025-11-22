FROM node:slim AS build-stage

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production=false --ignore-scripts

COPY .env* ./

COPY . .

ARG VITE_API_URL=http://localhost:3000/api
ENV VITE_API_URL=$VITE_API_URL

RUN npm run lint
RUN npx vue-tsc --noEmit
RUN npm run build

FROM nginx:alpine AS production-stage

RUN apk update && apk upgrade && apk add --no-cache wget

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build-stage /app/dist /usr/share/nginx/html

RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001 && \
    chown -R nextjs:nodejs /usr/share/nginx/html && \
    chown -R nextjs:nodejs /var/cache/nginx && \
    chown -R nextjs:nodejs /var/log/nginx && \
    chown -R nextjs:nodejs /etc/nginx/conf.d && \
    mkdir -p /var/run/nginx && \
    chown -R nextjs:nodejs /var/run/nginx

USER nextjs

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
