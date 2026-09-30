# BYTEEX

BYTEEX is a comfort-first ecommerce landing page for a modern lifestyle brand. The project focuses on soft luxury, everyday ease, and premium essentials with a clean editorial layout that adapts to both desktop and mobile screens.

## Tech Stack

- HTML5
- CSS3
- JavaScript
- Vite for local development and build tooling
- Vercel-ready static deployment

## Project Overview

This repository contains a responsive storefront landing page inspired by the supplied design mockups. It includes:

- hero section with product storytelling
- brand/value messaging blocks
- review card layout
- FAQ accordion interaction
- footer with payment/shipping messaging
- mobile responsive styling for smaller screens

## Prerequisites

- Node.js 18+ recommended
- npm

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Open the local URL shown in the terminal, usually:

```bash
http://localhost:3000
```

4. To create a production build:

```bash
npm run build
```

5. To preview the build locally:

```bash
npm run preview
```

## Headless CMS / API Notes

This project currently ships as a static front-end and does not require a live Headless CMS to run locally. Because there is no CMS dependency in this repository, no API keys or environment variables are required for review or local development.

If you later connect a Headless CMS such as Strapi, Contentful, or Sanity, add the required values in a local `.env.local` file and document them here. Example pattern:

```bash
VITE_CMS_API_URL=
VITE_CMS_TOKEN=
```

Make sure those values are also configured in the host environment (for example, Vercel environment variables) before deploying any CMS-powered version.

## Deployment

This project is Vercel-ready as a static site. To deploy:

1. Push the repository to GitHub.
2. Import the repo in Vercel.
3. Use the default Vercel settings for a static site.
4. If using environment variables in the future, add them in the Vercel project settings.

Live demo link:

- https://comfortable-pro.vercel.app

## Repository Access

The repository should be accessible to the designated reviewer email address for project review and collaboration.

## Notes

- The project is intentionally static and easy to review without backend setup.
- The implementation keeps the codebase simple while remaining flexible for future CMS or storefront integrations.
