# Build Frontend
FROM node:24.8-slim AS frontend-build

WORKDIR /app/frontend

COPY frontend/package*.json ./
RUN npm ci --ignore-scripts

COPY frontend/ ./

# Run tests
RUN npm run test:coverage

# Build for production
RUN npm run build

# Build Backend
FROM node:24.8-slim AS backend-build

WORKDIR /app/backend

COPY backend/package*.json ./
RUN npm ci --ignore-scripts

COPY backend/ ./

# Run tests
RUN npm run test:coverage

# Build for production
RUN npm run build

# Production Stage
FROM node:24.8-slim AS production-stage

# Environment variables
ENV NODE_ENV=production
ENV EMAIL_HOST=""
ENV EMAIL_USER=""
ENV EMAIL_PASS=""
ENV EMAIL_TO=""
ENV ALLOWED_ORIGINS=""
ENV PORT=3000

WORKDIR /app

# Install nginx and PM2
RUN apt-get update && apt-get install --no-install-recommends -y \
    nginx \
    curl \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* \
    && rm -f /etc/nginx/sites-enabled/default \
    && npm install -g pm2

# Copy nginx configuration
COPY nginx.conf /etc/nginx/sites-available/default
RUN ln -sf /etc/nginx/sites-available/default /etc/nginx/sites-enabled/default

# Copy frontend build
COPY --from=frontend-build /app/frontend/dist /app/dist

# Copy backend build and dependencies
COPY --from=backend-build /app/backend/dist /app/backend/dist
COPY --from=backend-build /app/backend/node_modules /app/backend/node_modules
COPY --from=backend-build /app/backend/package.json /app/backend/package.json

# Copy PM2 ecosystem configuration
COPY ecosystem.config.cjs /app/ecosystem.config.cjs

# Create logs directory and non-root user
RUN mkdir -p /app/logs \
    && groupadd -r appuser && useradd -r -g appuser appuser \
    && chown -R appuser:appuser /app \
    && chown -R appuser:appuser /var/log/nginx \
    && chown -R appuser:appuser /var/lib/nginx \
    && touch /run/nginx.pid \
    && chown -R appuser:appuser /run/nginx.pid

USER appuser

EXPOSE 80 3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
    CMD curl -f http://localhost/api/health || exit 1

CMD ["pm2-runtime", "start", "ecosystem.config.cjs"]
