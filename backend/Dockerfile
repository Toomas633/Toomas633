FROM node:24-slim AS build

WORKDIR /app

# Install dependencies (including TypeScript and devDependencies)
COPY package*.json ./
RUN npm ci

# Copy TypeScript source code and configuration
COPY src/ ./src/
COPY tsconfig.json ./

# Compile TypeScript to JavaScript in dist/
RUN npm run build

# Production image
FROM node:24-slim

WORKDIR /app

# Install curl for health checks
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

# Copy package files and install production dependencies only
COPY package*.json ./
RUN npm ci --only=production

# Copy compiled JavaScript from build stage
COPY --from=build /app/dist/ ./dist/

RUN groupadd -r nodeuser && useradd -r -g nodeuser nodeuser
RUN chown -R nodeuser:nodeuser /app
USER nodeuser

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/health || exit 1

CMD ["node", "dist/server.js"]
