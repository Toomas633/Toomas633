# Toomas633's Dungeon - Frontend

> Vue.js 3 + TypeScript frontend for Toomas633's personal projects homepage (v4.2.1)

[![Vue.js](https://img.shields.io/badge/Vue.js-3.5.24-4FC08D?style=flat&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Vuetify](https://img.shields.io/badge/Vuetify-3.10.11-1867C0?style=flat&logo=vuetify&logoColor=white)](https://vuetifyjs.com/)

## 🏗️ Architecture

This is a modern Vue.js 3 single-page application (SPA) built with:

- **Framework**: Vue 3 with Composition API
- **Build Tool**: Vite for fast development and optimized builds
- **UI Library**: Vuetify 3 for Material Design components
- **Language**: TypeScript for type safety
- **Styling**: SCSS with Material Design Icons
- **Maps**: Leaflet for interactive mapping
- **HTTP Client**: Axios for API communication
- **State Management**: Vue 3 reactivity system
- **Routing**: Vue Router 4 for client-side navigation

## 🚀 Features

- **Responsive Design**: Mobile-first approach with Vuetify components
- **Interactive Maps**: Leaflet integration for location visualization
- **Project Showcase**: Dynamic project galleries with image optimization
- **Contact Form**: Integrated email contact functionality
- **Code Highlighting**: Syntax highlighting for code examples
- **SEO Optimized**: Automatic sitemap generation and meta tags
- **Performance**: Image compression, Brotli compression, and lazy loading
- **Accessibility**: WCAG compliant with proper ARIA labels

## 📋 Requirements

| Technology | Version | Required                  |
| ---------- | ------- | ------------------------- |
| Node.js    | 24.x    | ✅                        |
| npm        | 10.x+   | ✅                        |
| Docker     | 20.x+   | 🔧 (for containerization) |

### Platform Support

| Platform | Support | Status          |
| -------- | ------- | --------------- |
| amd64    | ✅      | Fully Supported |
| arm64    | ✅      | Fully Supported |
| arm32    | ❌      | Not Supported   |

## 🛠️ Development

### Quick Start

```bash
# Clone the repository
git clone https://github.com/Toomas633/Toomas633.git
cd Toomas633/frontend

# Copy environment file
cp .env.example .env
# Edit .env with your configuration

# Install dependencies
npm install

# Start development server with hot reload
npm run dev

# Open http://localhost:5173
```

### Available Scripts

| Command                  | Description                             |
| ------------------------ | --------------------------------------- |
| `npm run dev`            | Start development server on port 5173   |
| `npm run build`          | Build for production                    |
| `npm run serve`          | Preview production build                |
| `npm run lint`           | Run ESLint for code quality             |
| `npm run stylelint`      | Run Stylelint for CSS/SCSS              |
| `npm run prettier`       | Format code with Prettier               |
| `npm run scan:lint`      | Generate ESLint report for SonarQube    |
| `npm run scan:stylelint` | Generate Stylelint report for SonarQube |

### Development Workflow

```bash
# Install dependencies
npm install

# Start development with hot reload
npm run dev

# In another terminal, run linting
npm run lint

# Format code before committing
npm run prettier

# Build for production
npm run build

# Preview production build
npm run serve
```

## 🐳 Docker

### Building the Image

```bash
# Build production image
docker build -t toomas633-frontend .

# Build with specific tag
docker build -t toomas633-frontend:v4.2.1 .
```

### Running the Container

```bash
# Run on port 8080
docker run -d -p 8080:80 --name frontend toomas633-frontend

# Run with health checks
docker run -d -p 8080:80 --name frontend --health-interval=30s toomas633-frontend
```

### Docker Compose

```bash
# Using docker-compose for easy deployment
docker-compose up -d

# View logs
docker-compose logs -f frontend

# Stop services
docker-compose down
```

The included `docker-compose.yml` provides:

- **Production-ready setup**: Optimized for production deployment
- **Health checks**: Automatic container health monitoring
- **Restart policies**: Automatic restart on failure
- **Network isolation**: Dedicated network for security
- **Traefik labels**: Ready for reverse proxy integration
- **Volume mounts**: Optional nginx config and log mounting

## ⚙️ Configuration

### Environment Variables

Copy `.env.example` to `.env` and configure:

| Variable            | Description                          | Required | Example                     |
| ------------------- | ------------------------------------ | -------- | --------------------------- |
| `VITE_GITHUB_TOKEN` | GitHub API token for repository data | ❌       | `ghp_xxxxxxxxxxxxxxxxxxxx`  |
| `VITE_API_URL`      | Backend API endpoint URL             | ✅       | `http://localhost:3000/api` |

#### GitHub Token Setup

1. Go to [GitHub Settings > Tokens](https://github.com/settings/tokens)
2. Create a new token with `public_repo` scope
3. Add to your `.env` file as `VITE_GITHUB_TOKEN`

**Note**:

- GitHub token is optional but enables repository data fetching, language statistics, and latest release information
- Backend API URL is **required** when using the separate Express.js backend service

### Build Configuration

#### Docker Build with Environment Variables

For production builds with environment variables:

```bash
# Build with API URL
docker build --build-arg VITE_API_URL=https://api.yoursite.com/api -t toomas633-frontend .

# For GitHub token, use .env file instead of build args for security
# Ensure your .env file contains: VITE_GITHUB_TOKEN=your_token_here
docker build -t toomas633-frontend .
```

**Security Note**: Sensitive data like GitHub tokens should be in `.env` files rather than passed as build arguments, as build args are visible in the image history.

## 🏗️ Project Structure

```
frontend/
├── public/                 # Static assets
│   ├── manifest.json      # PWA manifest
│   ├── robots.txt         # SEO robots file
│   └── ads.txt           # Ads configuration
├── src/
│   ├── assets/           # Build-time assets
│   │   ├── icons/        # SVG icons
│   │   ├── images/       # Images
│   │   ├── json/         # Static data files
│   │   └── scss/         # Global stylesheets
│   ├── components/       # Reusable Vue components
│   ├── constants/        # Application constants
│   ├── enums/           # TypeScript enums
│   ├── helpers/         # Utility functions
│   ├── plugins/         # Vue plugins (Vuetify)
│   ├── router/          # Vue Router configuration
│   ├── services/        # API service layer
│   ├── types/           # TypeScript type definitions
│   ├── util/            # General utilities
│   ├── views/           # Page components
│   ├── App.vue          # Root component
│   └── main.ts          # Application entry point
├── icons/               # Technology icons
├── plugins/             # Vite plugins
├── Dockerfile           # Production container
├── nginx.conf           # Nginx configuration
├── vite.config.ts       # Vite configuration
└── tsconfig.json        # TypeScript configuration
```

## 🔧 Configuration

### Environment Variables

The frontend can be configured through build-time environment variables:

| Variable            | Description                 | Default               |
| ------------------- | --------------------------- | --------------------- |
| `VITE_APP_TITLE`    | Application title           | "Toomas633's Dungeon" |
| `VITE_API_URL`      | Backend API URL             | `/api`                |
| `VITE_GITHUB_TOKEN` | GitHub API token (optional) | -                     |

### Vite Configuration

Key configuration features in `vite.config.ts`:

- **Build Optimization**: Terser minification, tree-shaking
- **Image Processing**: Automatic WebP conversion and compression
- **Code Splitting**: Vendor chunks for better caching
- **Development**: Vue DevTools integration
- **Compression**: Brotli compression for production

## 📊 Performance

### Build Optimizations

- **Image Compression**: Automatic WebP/AVIF generation
- **Code Splitting**: Separate chunks for vendors and components
- **Tree Shaking**: Dead code elimination
- **Minification**: Terser optimization with comment removal
- **Compression**: Brotli and Gzip compression

### Runtime Performance

- **Lazy Loading**: Route-based code splitting
- **Asset Caching**: Long-term caching for static assets
- **Service Worker**: PWA capabilities (if enabled)
- **Preload**: Critical resource preloading

## 🧪 Quality Assurance

### Code Quality Tools

- **ESLint**: JavaScript/TypeScript linting with Vue support
- **Stylelint**: CSS/SCSS linting
- **Prettier**: Code formatting
- **TypeScript**: Static type checking
- **SonarQube**: Code quality analysis integration

### Standards

- **Vue Style Guide**: Following official Vue.js style guide
- **TypeScript Strict**: Strict TypeScript configuration
- **Accessibility**: WCAG 2.1 AA compliance
- **Performance**: Core Web Vitals optimization

## 🚀 Deployment

### Production Build

```bash
# Create production build
npm run build

# Output will be in dist/ directory
ls dist/
```

### Nginx Configuration

The included `nginx.conf` provides:

- **Static File Serving**: Optimized for SPA routing
- **Compression**: Brotli and Gzip support
- **Security Headers**: XSS protection, CSP, etc.
- **Caching**: Optimal cache policies for different asset types
- **Health Checks**: `/health` endpoint for monitoring

### CI/CD Integration

The project includes configurations for:

- **ESLint Reports**: JSON output for CI integration
- **Stylelint Reports**: JSON output for CI integration
- **SonarQube**: Quality gate integration
- **Docker**: Multi-stage builds for optimization

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Install** dependencies: `npm install`
4. **Start** development: `npm run dev`
5. **Lint** your code: `npm run lint && npm run stylelint`
6. **Test** your build: `npm run build`
7. **Commit** changes: `git commit -m 'Add amazing feature'`
8. **Push** to branch: `git push origin feature/amazing-feature`
9. **Submit** a Pull Request

## 📄 License

This project is licensed under the **GPL-3.0** License - see the [LICENSE](../LICENSE) file for details.

## 🔗 Links

- **Live Site**: [toomas633.com](https://toomas633.com)
- **GitHub**: [Toomas633](https://github.com/Toomas633)
- **Backend**: [Backend Documentation](../backend/README.md)

---

_Built with ❤️ by Toomas633_
