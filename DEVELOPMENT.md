# Development Guide

This guide covers Docker deployment, testing, and development workflows for Toomas633's Dungeon.

## 📋 Table of Contents

- [Testing](#-testing)
- [Docker Deployment](#-docker-deployment)
- [Additional Resources](#-additional-resources)

---

## 🧪 Testing

This project uses [Vitest](https://vitest.dev/) for testing both frontend and backend code.

### Running Tests

#### Frontend Tests

```bash
cd frontend

# Run tests in watch mode
npm run test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

#### Backend Tests

```bash
cd backend

# Run tests in watch mode
npm run test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

### Test Structure

#### Frontend

- **Test files**: Located alongside source files with `.spec.ts` or `.test.ts` extension
- **Setup**: `src/test/setup.ts` - Global test configuration with Vuetify stubs
- **Config**: `vitest.config.ts` - Vitest configuration with Vue support
- **Environment**: `happy-dom` for DOM testing

**Example Files:**
- `src/helpers/isBot.spec.ts` - Unit test for bot detection utility
- `src/components/InlineCode.spec.ts` - Component test example

#### Backend

- **Test files**: Located alongside source files with `.spec.ts` or `.test.ts` extension
- **Setup**: `src/test/setup.ts` - Global test configuration
- **Config**: `vitest.config.ts` - Vitest configuration for Node.js
- **Environment**: `node` for server-side testing

**Example Files:**
- `src/utils/helpers.spec.ts` - Unit test for helper utilities
- `src/routes/health.spec.ts` - API route test with supertest

### Writing Tests

#### Frontend Component Test Example

```typescript
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MyComponent from './MyComponent.vue'

describe('MyComponent', () => {
  it('renders properly', () => {
    const wrapper = mount(MyComponent, {
      props: { title: 'Hello' }
    })
    expect(wrapper.text()).toContain('Hello')
  })
})
```

#### Backend Route Test Example

```typescript
import { describe, it, expect } from 'vitest'
import request from 'supertest'
import express from 'express'
import myRouter from './myRouter'

describe('My Route', () => {
  it('should return success', async () => {
    const app = express()
    app.use('/api', myRouter)
    
    const response = await request(app).get('/api/endpoint')
    expect(response.status).toBe(200)
  })
})
```

### Coverage Reports

Coverage reports are generated in the `coverage/` directory with multiple formats:
- **Text**: Console output
- **HTML**: Browse `coverage/index.html`
- **LCOV**: For SonarCloud integration (`coverage/lcov.info`)
- **JSON**: For programmatic access

#### Coverage Exclusions

The following are excluded from coverage:
- Test files (`**/*.spec.ts`, `**/*.test.ts`)
- Type definitions (`**/*.d.ts`)
- Configuration files
- Constants and generated code

### CI/CD Integration

Tests with coverage run automatically in the GitHub Actions workflow:
- **SonarCloud workflow**: Runs tests and uploads coverage to SonarCloud
- **Coverage reports**: Integrated with SonarCloud for quality analysis

### Testing Tips

1. **Watch Mode**: Use `npm run test` for interactive development
2. **UI Mode**: Use `npm run test:ui` for visual test runner
3. **Coverage**: Use `npm run test:coverage` before committing
4. **Debugging**: Use `console.log` or debugger statements in tests
5. **Mocking**: Use `vi.mock()` and `vi.spyOn()` for mocking dependencies

### Testing Resources

- [Vitest Documentation](https://vitest.dev/)
- [Vue Test Utils](https://test-utils.vuejs.org/)
- [Supertest](https://github.com/visionmedia/supertest)

---

## 🐳 Docker Deployment

This guide explains how to build and deploy the application using Docker.

### Overview

The Docker setup builds both the frontend (Vue 3) and backend (Node.js/Express) in a single container, running:
- **Nginx** - Serves static frontend files and proxies API requests
- **Backend API** - Node.js Express server on port 3000
- **PM2** - Process manager running both nginx and backend

## 🏗️ Architecture

```
┌─────────────────────────────────────────┐
│         Docker Container (Port 80)       │
│  ┌────────────────────────────────────┐ │
│  │           Nginx (Port 80)          │ │
│  │  ┌──────────────┐  ┌────────────┐ │ │
│  │  │   Frontend   │  │  Proxy to  │ │ │
│  │  │  (Vue dist)  │  │  /api/*    │ │ │
│  │  └──────────────┘  └─────┬──────┘ │ │
│  └────────────────────────────┼───────┘ │
│                               │          │
│  ┌────────────────────────────▼───────┐ │
│  │   Backend API (Port 3000)          │ │
│  │   - Email service                  │ │
│  │   - Health checks                  │ │
│  └────────────────────────────────────┘ │
│                                          │
│         PM2 Process Manager              │
└─────────────────────────────────────────┘
```

## 🚀 Quick Start

### Using Docker Compose (Recommended)

```bash
# Build and start
docker-compose up -d

# View logs
docker-compose logs -f

# Stop
docker-compose down
```

### Manual Docker Commands

```bash
# Build image
docker build -t toomas633-dungeon .

# Run container
docker run -d \
  --name toomas633-dungeon \
  -p 80:80 \
  -p 3000:3000 \
  --env-file backend/.env \
  --restart unless-stopped \
  -v $(pwd)/logs:/app/logs \
  toomas633-dungeon:latest
```

## 🔧 Configuration

### Environment Variables

Docker Compose reads from a `.env` file in the root directory:

```env
EMAIL_HOST=smtp.gmail.com
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=recipient@example.com
ALLOWED_ORIGINS=https://toomas633.com,http://localhost
```

You can create this from the backend template:
```bash
cp backend/.env.example .env
# Edit .env with your actual credentials
```

### Port Configuration

- **Port 80**: Frontend (Nginx) and API proxy
- **Port 3000**: Backend API (can be accessed directly)

To use different ports:
```bash
docker run -p 8080:80 -p 3001:3000 ...
```

### File Structure

```
Toomas633/
├── Dockerfile              # Multi-stage build config
├── docker-compose.yml      # Compose configuration
├── ecosystem.config.cjs    # PM2 process config
├── nginx.conf             # Nginx server config
├── .env                   # Environment variables
├── frontend/              # Vue 3 application
└── backend/               # Express API server
```

## 🌐 Endpoints

- **Frontend**: http://localhost
- **Backend API**: http://localhost:3000
- **Health Check**: http://localhost/api/health
- **Email API**: http://localhost/api/email

## 🏥 Health Monitoring

### Health Check Endpoint

The application includes a comprehensive health check at `/api/health`:

```bash
curl http://localhost/api/health
```

**Response (Healthy):**
```json
{
  "status": "healthy",
  "timestamp": "2025-11-21T12:00:00.000Z",
  "email": {
    "status": "connected",
    "responseTime": "250ms"
  }
}
```

**Response (Unhealthy):**
```json
{
  "status": "unhealthy",
  "timestamp": "2025-11-21T12:00:00.000Z",
  "email": {
    "status": "disconnected",
    "error": "Connection timeout"
  }
}
```

### Docker Health Check

The container has a built-in Docker health check:

```bash
# Check container health
docker inspect --format='{{.State.Health.Status}}' toomas633-dungeon

# View health check logs
docker inspect --format='{{range .State.Health.Log}}{{.Output}}{{end}}' toomas633-dungeon
```

Health check runs every 30 seconds with:
- Start period: 40 seconds
- Timeout: 10 seconds
- Retries: 3

## 📊 Container Management

### Basic Commands

```bash
# Start
docker start toomas633-dungeon

# Stop
docker stop toomas633-dungeon

# Restart
docker restart toomas633-dungeon

# Remove
docker rm toomas633-dungeon

# View logs
docker logs -f toomas633-dungeon

# Shell access
docker exec -it toomas633-dungeon /bin/bash
```

### Monitoring and Logs

**Docker logs:**
```bash
docker logs -f toomas633-dungeon
```

**PM2 Management:**
```bash
# List processes
docker exec toomas633-dungeon pm2 list

# View logs
docker exec toomas633-dungeon pm2 logs

# Process details
docker exec toomas633-dungeon pm2 show backend
docker exec toomas633-dungeon pm2 show nginx

# Restart process
docker exec toomas633-dungeon pm2 restart backend
docker exec toomas633-dungeon pm2 restart nginx
```

**Application logs (mounted volume):**
```bash
# Backend logs
cat logs/backend-error.log
cat logs/backend-out.log

# Nginx logs (inside container)
docker exec toomas633-dungeon cat /var/log/nginx/access.log
docker exec toomas633-dungeon cat /var/log/nginx/error.log

# Process list
docker exec toomas633-dungeon ps aux
```

## 🐛 Troubleshooting

### Container won't start

```bash
# Check container logs
docker logs toomas633-dungeon

# Inspect container
docker inspect toomas633-dungeon

# Check if ports are already in use (Windows)
netstat -ano | findstr :80
netstat -ano | findstr :3000

# Check if ports are already in use (Linux/Mac)
lsof -i :80
lsof -i :3000
```

### Health check failing

```bash
# Check health endpoint manually
curl http://localhost/api/health

# Verify backend is running
docker exec toomas633-dungeon pm2 list

# Check nginx config
docker exec toomas633-dungeon nginx -t

# Test backend directly
curl http://localhost:3000/health
```

### Backend not responding

```bash
# Check backend logs
docker exec toomas633-dungeon pm2 logs backend

# Verify environment variables
docker exec toomas633-dungeon env | grep EMAIL
```

### Email service issues

Check that your email credentials are correct:
```bash
# Inside container
docker exec toomas633-dungeon node -e "
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransporter({
  host: process.env.EMAIL_HOST,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
transporter.verify().then(console.log).catch(console.error);
"
```

### Permission errors

The container runs as non-root user `appuser`. If you have permission issues with mounted volumes:

```bash
# Fix log directory permissions
chmod -R 777 logs/
```

## 🔄 Updates and Maintenance

### Rebuilding after changes

```bash
# Using docker-compose
docker-compose down
docker-compose up -d --build

# Or manually
docker stop toomas633-dungeon
docker rm toomas633-dungeon
docker build -t toomas633-dungeon .
docker run -d --name toomas633-dungeon -p 80:80 -p 3000:3000 --env-file backend/.env toomas633-dungeon
```

### Clean up old images

```bash
# Remove unused images
docker image prune

# Remove specific image
docker rmi toomas633-dungeon:old-tag
```

## 📦 Build Details

### Multi-Stage Build

The Dockerfile uses a multi-stage build:

1. **Frontend Build Stage**: Builds Vue 3 app with Vite
2. **Backend Build Stage**: Compiles TypeScript to JavaScript
3. **Production Stage**: Combines everything with Nginx and PM2

### Image Size Optimization

- Uses `node:24.8-slim` base image
- Cleans up apt cache
- Only copies necessary files
- Production dependencies only

### Security

- Runs as non-root user (`appuser`)
- Environment variable validation
- CORS protection
- Rate limiting
- Security headers in Nginx

## 🌐 Production Deployment

### Recommended Setup

1. Use a reverse proxy (like Traefik or Caddy) for HTTPS
2. Set up proper logging and monitoring
3. Use Docker secrets or vault for sensitive data
4. Configure backup for logs and data
5. Set up container restart policies

### Example with Traefik

```yaml
version: '3.8'
services:
  app:
    image: toomas633-dungeon
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.app.rule=Host(`toomas633.com`)"
      - "traefik.http.routers.app.entrypoints=websecure"
      - "traefik.http.routers.app.tls.certresolver=letsencrypt"
    networks:
      - traefik
```

## 📚 Additional Resources

- [Frontend Documentation](frontend/README.md)
- [Backend Documentation](backend/README.md)
- [Nginx Configuration](nginx.conf)
- [PM2 Configuration](ecosystem.config.cjs)
