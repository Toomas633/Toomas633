# Copilot Instructions for Toomas633

## Project Overview
- This is a full-stack project with a Vue 3 + TypeScript frontend (in `src/`) and a Node.js backend (in `backend/server.mjs`).
- Uses Vite for frontend build and dev server (`vite.config.ts`).
- Vuetify is the main UI framework (`src/plugins/vuetify.ts`).
- Backend is a minimal Node.js server, likely for API or static file serving.
- Nginx config (`nginx.conf`) and Dockerfile are present for deployment.

## Key Directories & Files
- `src/` — Main Vue app, components, assets, helpers, plugins, router, services, types, utils, views.
- `backend/server.mjs` — Node.js backend entry point.
- `public/` — Static assets for the frontend.
- `icons/` — SVG icon assets, referenced in UI and docs.
- `scripts/generateSitemap.mjs` — Script for sitemap generation.
- `vite.config.ts` — Vite configuration (entry, plugins, aliases, etc).
- `nginx.conf` — Nginx reverse proxy/static server config.

## Build & Run
- **Frontend dev:** `npm run dev` (Vite, hot reload)
- **Frontend build:** `npm run build` (outputs to `dist/`)
- **Backend:** Run `node backend/server.mjs` (or use `ecosystem.config.js` for PM2)
- **Docker:** Use `Dockerfile` for containerized build/deploy
- **Lint:** `npm run lint` (uses `eslint.config.mjs`)

## Testing
- No explicit test framework or test files detected. If adding tests, follow Vue/Vite conventions and place in `src/` alongside components or in a `tests/` folder.

## Patterns & Conventions
- **Component structure:** Vue SFCs in `src/components/`, composables/helpers in `src/helpers/`, constants/enums in `src/constants/` and `src/enums/`.
- **TypeScript:** All business logic and components use TypeScript. Types are in `src/types/`.
- **Services:** API and utility services in `src/services/`.
- **Routing:** Vue Router config in `src/router/`.
- **Assets:** Images, icons, and SCSS in `src/assets/`.
- **Environment/config:** Use `src/constants/env.ts` for env/config values.
- **Icons:** Use SVGs from `icons/` or `src/assets/icons/`.

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

---
For more context, see `README.md`, `vite.config.ts`, and `src/` structure.
