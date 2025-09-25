# Copilot Instructions for Toomas633

## Project Overview

- **Name:** "Toomas633's Dungeon" - Personal projects homepage (v4.1.0)
- This is a full-stack project with a Vue 3 + TypeScript frontend (in `src/`) and a Node.js Express backend (in `backend/server.mjs`).
- Uses Vite for frontend build and dev server (`vite.config.ts`).
- Vuetify is the main UI framework (`src/plugins/vuetify.ts`).
- Backend is an Express server with CORS, rate limiting, and email functionality.
- Nginx config (`nginx.conf`) and Dockerfile are present for deployment.
- SonarQube integration for code quality analysis (`sonar-project.properties`).

## Key Directories & Files

- `src/` — Main Vue app, components, assets, helpers, plugins, router, services, types, util, views.
- `backend/server.mjs` — Express.js backend entry point with email, CORS, and rate limiting.
- `public/` — Static assets (favicon, manifest, robots.txt, 404.html).
- `icons/` — SVG icon assets for technologies and social links.
- `plugins/sitemap-plugin.ts` — Custom Vite plugin for automatic sitemap generation.
- `vite.config.ts` — Vite configuration (entry, plugins, aliases, etc).
- `nginx.conf` — Nginx reverse proxy/static server config.
- `sonar-project.properties` — SonarQube configuration for code quality analysis.
- `ecosystem.config.js` — PM2 configuration for production deployment.

## Build & Run

- **Frontend dev:** `npm run dev` (Vite, hot reload)
- **Frontend build:** `npm run build` (outputs to `dist/`)
- **Backend:** Run `node backend/server.mjs` (or use `ecosystem.config.js` for PM2)
- **Docker:** Use `Dockerfile` for containerized build/deploy
- **Lint:** `npm run lint` (uses `eslint.config.mjs`)
- **Style lint:** `npm run stylelint` (CSS/SCSS/Vue styles)
- **Prettier:** `npm run prettier` (code formatting)
- **Quality scans:** `npm run scan:lint` and `npm run scan:stylelint` (for SonarQube)

## Testing

- No explicit test framework or test files detected. If adding tests, follow Vue/Vite conventions and place in `src/` alongside components or in a `tests/` folder.

## Patterns & Conventions

- **Component structure:** Vue SFCs in `src/components/`, composables/helpers in `src/helpers/`, constants/enums in `src/constants/` and `src/enums/`.
- **TypeScript:** All business logic and components use TypeScript. Types are in `src/types/`.
- **Services:** API and utility services in `src/services/`.
- **Routing:** Vue Router config in `src/router/` (modular: main.ts, projects.ts, servers.ts, demos.ts, archive.ts).
- **Assets:** Images, icons, and SCSS in `src/assets/`.
- **Utilities:** Event bus and other utilities in `src/util/`.
- **Environment/config:** Use `src/constants/env.ts` for env/config values.
- **Icons:** Use SVGs from `icons/` or `src/assets/icons/`.
- **Cookie components:** Specialized cookie handling components in `src/components/cookies/`.

## External Integrations

- **Email, GitHub, Minecraft:** See `src/services/` for API integrations.
- **PayPal:** Payment button in `src/components/PayPalBtn.vue`.
- **Nginx/Docker:** For deployment, see `nginx.conf` and `Dockerfile`.

## Special Notes

- **No test or CI config detected.**
- **No monorepo tools (e.g., Lerna, Turborepo) in use.**
- **No custom AI agent rules found in repo.**

## Examples

- To add a new Vue component: place `.vue` file in `src/components/`, register in parent or router as needed.
- To add a new API service: add to `src/services/`, use TypeScript types from `src/types/`.
- To update environment/config: edit `src/constants/env.ts`.
- For cookie-related components: use `src/components/cookies/` (CookieBanner, CookieButton, CookieDialog).

---

For more context, see `README.md`, `vite.config.ts`, and `src/` structure.
