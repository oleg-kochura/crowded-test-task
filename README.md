# Who's In Town

A React SPA built with Vite and TypeScript.

## Stack

- [Vite](https://vite.dev/) — build tool and dev server
- [React 19](https://react.dev/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — type safety
- [ESLint](https://eslint.org/) — linting (flat config, `typescript-eslint` recommended)
- [Prettier](https://prettier.io/) — code formatting

## Getting Started

```bash
npm install
cp .env.example .env
# Set VITE_API_KEY in .env (provided by Crowded)
npm run dev
```

## Environment variables

Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

| Variable | Required | Description |
| -------- | -------- | ----------- |
| `VITE_API_KEY` | Yes | API key from Crowded, sent as the `apiKey` query param on every request |
| `VITE_API_BASE_URL` | No | API base URL (defaults to `https://crowded-frontend-assignment.netlify.app/api`) |

Variables prefixed with `VITE_` are exposed to the client bundle at build time.

## Scripts

| Command                | Description                          |
| ---------------------- | ------------------------------------ |
| `npm run dev`          | Start the development server         |
| `npm run build`        | Type-check and build for production  |
| `npm run preview`      | Preview the production build locally |
| `npm run lint`         | Run ESLint                           |
| `npm run lint:fix`     | Run ESLint and auto-fix issues       |
| `npm run format`       | Format all files with Prettier       |
| `npm run format:check` | Check formatting without writing     |
