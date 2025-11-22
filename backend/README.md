# Toomas633's Dungeon - Backend

Backend API server for Toomas633's projects homepage. A Node.js Express server that handles email functionality with CORS support and rate limiting.

## 🚀 Features

- **Email Service**: Contact form email forwarding via SMTP
- **CORS Protection**: Configurable allowed origins
- **Rate Limiting**: Email endpoint protection (10 requests per 15 minutes)
- **Health Monitoring**: Health check endpoint for Docker/monitoring
- **Security**: Non-root user in Docker, environment validation
- **Development**: Hot reload with Node.js `--watch` mode

## 📋 Requirements

- **Node.js**: 24+ (LTS recommended)
- **Docker**: Optional, for containerized deployment
- **SMTP Server**: For email functionality

### Platform Support

| Platform | Docker Support |
| :------: | :------------: |
|  amd64   |       ✅       |
|  arm64   |       ✅       |
|  arm32   |       ❌       |

## 🛠️ Quick Start

### Local Development

1. **Clone and setup**:

   ```bash
   git clone <repository>
   cd backend
   npm install
   ```

2. **Configure environment**:

   ```bash
   cp .env.example .env
   # Edit .env with your values
   ```

3. **Start development server**:

   ```bash
   npm run dev    # Development with hot reload (tsx)
   ```

   **For production**:

   ```bash
   npm run build  # Compile TypeScript
   npm start      # Run compiled JavaScript
   ```

4. **Verify health**:
   ```bash
   curl http://localhost:3000/health
   ```

### Docker Deployment

1. **Using docker-compose** (recommended):

   ```bash
   npm run docker:up
   ```

2. **Manual Docker build**:

   ```bash
   npm run docker:build
   npm run docker:run
   ```

3. **Stop containers**:
   ```bash
   npm run docker:down
   ```

## 📝 Environment Configuration

### Required Environment Variables

| Variable          | Description                                  | Example                                     |
| :---------------- | :------------------------------------------- | :------------------------------------------ |
| `EMAIL_HOST`      | SMTP server hostname                         | `mail.example.com`                          |
| `EMAIL_USER`      | SMTP authentication username                 | `info@example.com`                          |
| `EMAIL_PASS`      | SMTP authentication password                 | `secure_password_123`                       |
| `EMAIL_TO`        | Recipient email for contact form submissions | `admin@example.com`                         |
| `ALLOWED_ORIGINS` | Comma-separated list of allowed CORS origins | `http://localhost:5173,https://example.com` |

### Environment Setup

Create a `.env` file in the backend directory:

```bash
# Backend server configuration
EMAIL_HOST=your.smtp.server.com
EMAIL_USER=your-email@domain.com
EMAIL_PASS=your-secure-password
EMAIL_TO=recipient@domain.com
ALLOWED_ORIGINS=http://localhost:5173,https://yourdomain.com
```

## 🔧 Available Scripts

| Command                 | Description                              |
| :---------------------- | :--------------------------------------- |
| `npm run build`         | Compile TypeScript to JavaScript         |
| `npm run build:watch`   | Compile TypeScript in watch mode         |
| `npm run clean`         | Remove compiled dist directory           |
| `npm start`             | Start production server (requires build) |
| `npm run dev`           | Start with hot reload (tsx watch mode)   |
| `npm run dev:build`     | Build and start with Node.js watch       |
| `npm run test`          | Run tests in watch mode                  |
| `npm run test:ui`       | Run tests with visual UI                 |
| `npm run test:coverage` | Run tests with coverage report           |
| `npm run lint`          | Check code style and errors              |
| `npm run lint:fix`      | Auto-fix linting issues                  |
| `npm run format`        | Format TypeScript files with Prettier    |
| `npm run type-check`    | TypeScript type checking (no emit)       |
| `npm run docker:build`  | Build Docker image                       |
| `npm run docker:run`    | Run Docker container with .env           |
| `npm run docker:up`     | Start with docker-compose                |
| `npm run docker:down`   | Stop docker-compose services             |

## 🧪 Testing

The backend uses [Vitest](https://vitest.dev/) with [Supertest](https://github.com/visionmedia/supertest) for API and unit testing.

### Running Tests

```bash
# Run tests in watch mode (interactive)
npm run test

# Run tests with UI (visual test runner)
npm run test:ui

# Run tests with coverage report
npm run test:coverage
```

### Test Structure

- **Test files**: Place `*.spec.ts` or `*.test.ts` files alongside source files
- **Setup**: `src/test/setup.ts` - Global test configuration
- **Config**: `vitest.config.ts` - Vitest configuration for Node.js environment
- **Environment**: `node` for server-side testing

### Writing Tests

**API Route Test Example:**

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

**Utility Function Test Example:**

```typescript
import { describe, it, expect, vi } from 'vitest'
import { myFunction } from './myFunction'

describe('myFunction', () => {
	it('should process data correctly', () => {
		const result = myFunction({ key: 'value' })
		expect(result).toBe('expected output')
	})
})
```

### Coverage Reports

Coverage reports are generated in `coverage/` directory:

- **HTML**: Open `coverage/index.html` in a browser
- **LCOV**: `coverage/lcov.info` for SonarCloud integration
- **Console**: Summary displayed after running tests

### Example Test Files

- `src/utils/helpers.spec.ts` - Utility function tests
- `src/routes/health.spec.ts` - API route testing with supertest

For more detailed testing information, see [DEVELOPMENT.md](../DEVELOPMENT.md#-testing).

## 🌐 API Endpoints

### Health Check

```http
GET /health
```

Returns server health status, timestamp, and email service verification.

**Response:**

```json
{
	"status": "healthy",
	"timestamp": "2025-11-21T12:00:00.000Z",
	"email": {
		"status": "connected",
		"responseTime": "150ms"
	}
}
```

### Send Email

```http
POST /send-email
```

Send contact form email. Rate limited to 10 requests per 15 minutes per IP.

**Request Body:**

```json
{
	"from": "user@example.com",
	"message": "Hello, this is a test message",
	"project": "Subject line for the email"
}
```

**Response (Success):**

```json
{
	"success": true,
	"info": {
		/* nodemailer response */
	}
}
```

**Response (Error):**

```json
{
	"success": false,
	"message": "Error sending email",
	"error": "error details"
}
```

## 🏗️ Project Structure

```
backend/
├── src/                      # TypeScript source files
│   ├── app.ts               # Express app configuration, middleware, and server startup
│   ├── config/
│   │   └── env.ts          # Environment validation and configuration
│   ├── middleware/
│   │   ├── cors.ts         # CORS configuration
│   │   └── rateLimiter.ts  # Rate limiting setup
│   ├── routes/
│   │   ├── health.ts       # Health check endpoint
│   │   └── email.ts        # Email sending endpoint
│   ├── services/
│   │   └── emailService.ts # Nodemailer email operations
│   ├── types/
│   │   └── index.ts        # TypeScript type definitions
│   └── utils/
│       └── helpers.ts      # Utility functions
├── dist/                    # Compiled JavaScript (gitignored)
├── .env.example            # Environment template
├── .env                    # Environment variables (gitignored)
├── docker-compose.yml      # Docker compose configuration
├── Dockerfile              # Multi-stage container build
├── tsconfig.json           # TypeScript compiler configuration
├── eslint.config.js        # ESLint configuration
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## 🐳 Docker Configuration

### Dockerfile Features

- **Base Image**: `node:24-slim`
- **Security**: Non-root user execution
- **Health Check**: Built-in endpoint monitoring
- **Optimization**: Multi-layer caching, minimal image size

### Docker Compose

The `docker-compose.yml` provides:

- Environment variable injection
- Port mapping (3000:3000)
- Health checks with retry logic
- Restart policies

## 🔒 Security Features

- **CORS Protection**: Configurable allowed origins
- **Rate Limiting**: Email endpoint protection
- **Environment Validation**: Required variables check on startup
- **Non-root User**: Docker container security
- **Input Sanitization**: Email content validation

## 🚨 Troubleshooting

### Common Issues

1. **Email verification fails**:
   - Check SMTP credentials and host
   - Verify firewall/network access to SMTP server
   - Ensure SMTP server supports TLS on port 587

2. **CORS errors**:
   - Add your frontend URL to `ALLOWED_ORIGINS`
   - Check for trailing slashes in origins

3. **Rate limit errors**:
   - Default: 10 emails per 15 minutes per IP
   - Wait for rate limit window to reset

4. **Health check fails**:
   - Verify server is running on port 3000
   - Check Docker container logs: `docker logs <container-id>`

### Logs and Debugging

- **Development**: Use `npm run dev` for detailed console output
- **Docker**: View logs with `docker-compose logs backend`
- **Health Status**: Check `/health` endpoint regularly

## 📄 License

GPL-3.0-only - See [LICENSE](../LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make changes with proper testing
4. Run linting: `npm run lint:fix`
5. Submit a pull request

---

**Version**: 4.2.1  
**Node.js**: 24+  
**License**: GPL-3.0-only
