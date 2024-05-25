<div data-type="custom-tableContents">
<h2>Table of Contents</h2><ul><li><p><a href="#overview">Overview</a></p></li><li><p><a href="#project-structure">Project Structure</a></p></li><li><p><a href="#project-summary">Project Summary</a></p></li><li><p><a href="#stack">Stack</a></p></li><li><p><a href="#setting-up">Setting Up</a></p></li><li><p><a href="#run-locally">Run Locally</a></p></li><li><p><a href="#deploy">Deploy</a></p></li></ul><div></div>
</div>

## Overview

logger-hub: Project using various essential dependencies for logging hub functionality.

## Project Structure

```bash
├── .eslintignore
├── .eslintrc.cjs
├── .gitignore
├── .npmrc
├── .prettierignore
├── .prettierrc
├── README.md
├── package-lock.json
├── package.json
├── playwright.config.ts
├── postcss.config.js
├── src
│   ├── app.css
│   ├── app.d.ts
│   ├── app.html
│   ├── lib
│   │   ├── components
│   │   │   ├── Results.svelte
│   │   │   ├── Search.svelte
│   │   │   └── index.ts
│   │   ├── images
│   │   │   ├── github.svg
│   │   │   ├── index.ts
│   │   │   └── svelte-welcome.webp
│   │   ├── types
│   │   │   └── user.ts
│   │   └── utils
│   │       └── fetch-refresh.ts
│   └── routes
│       ├── +error.svelte
│       ├── +layout.svelte
│       ├── +page.svelte
│       ├── +page.ts
│       ├── Welcome.svelte
│       ├── api
│       │   └── users
│       │       └── +server.ts
│       └── search
│           ├── +page.ts
│           └── [query]
│               ├── +page.svelte
│               ├── +page.ts
│               └── SortButton.svelte
├── static
│   ├── favicon.png
│   └── robots.txt
├── svelte.config.js
├── tailwind.config.js
├── test-results
│   └── .last-run.json
├── tests
│   └── test.ts
├── tsconfig.json
└── vite.config.ts
```

## Project Summary

- [src](src): Main source code directory for the project.
- [src/lib](src/lib): Library containing shared components, utilities, and types.
- [src/routes](src/routes): Directory for defining application routes.
- [src/routes/api](src/routes/api): API routes for backend communication.
- [src/routes/search](src/routes/search): Search functionality implementation.
- [src/routes/search/\[query\]](src/routes/search/[query]): Dynamic route for searching with specific query parameters.
- [static](static): Static assets like images, icons, and fonts.
- [tests](tests): Directory for writing and running tests.

## Stack

- [svelte](https://github.com/sveltejs/svelte): Component framework for building web applications.
- [sveltejs/kit](https://github.com/sveltejs/kit): Framework for building web applications with Svelte.
- [sveltejs/adapter-auto](https://github.com/sveltejs/adapter-auto): Adapter for deploying SvelteKit applications.
- [playwright/test](https://github.com/microsoft/playwright): End-to-end testing framework.
- [tailwindcss](https://github.com/tailwindlabs/tailwindcss): Utility-first CSS framework for styling.
- [typescript](https://github.com/microsoft/TypeScript): Typed superset of JavaScript.
- [eslint](https://github.com/eslint/eslint): Linting utility for maintaining code quality.
- [prettier](https://github.com/prettier/prettier): Opinionated code formatter.

## Setting Up

Insert your environment variables.

## Run Locally

1. Clone logger-hub repository:

   ```bash
   git clone https://github.com/olaleykhan/logger-hub
   ```
2. Install the dependencies with one of the package managers listed below:

   ```bash
   pnpm install
   
   bun install
   
   npm install
   
   yarn install
   ```
3. Start the development mode:

   ```bash
   pnpm dev
   
   bun dev
   
   npm run dev
   
   yarn dev
   ```

## Deploy

Insert your application URL.
https://logger-hub.vercel.app/