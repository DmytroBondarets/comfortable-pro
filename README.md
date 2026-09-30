# BYTEEX

BYTEEX is a comfort-first ecommerce landing page for a modern lifestyle brand. The project focuses on soft luxury, everyday ease, and premium essentials with a clean editorial layout designed for both desktop and mobile shopping experiences.

## Project Overview

This repository contains a responsive storefront landing page inspired by the provided design mockups. The site includes:

- a strong hero section and brand narrative
- value-driven product storytelling
- customer review cards
- FAQ accordion interaction
- payment/shipping footer messaging
- responsive mobile-first styling

The current build is a static front-end and does not require a backend or CMS at runtime. It is structured to be easy to review, modify, and later extend with a Headless CMS if needed.

## Tech Stack

- HTML5
- CSS3
- JavaScript
- Vite
- Vercel static hosting

## Prerequisites

Before running the project locally, confirm you have:

- Node.js 18 or newer
- npm 9 or newer

## Local Setup

1. Clone the repository:

```bash
git clone https://github.com/DmytroBondarets/comfortable-pro.git
cd comfortable-pro
```

2. Install dependencies:

```bash
npm install
```

3. Start the local development server:

```bash
npm run dev
```

4. Open the local URL shown in the terminal, usually:

```bash
http://localhost:3000
```

5. Build for production:

```bash
npm run build
```

6. Preview the production build locally:

```bash
npm run preview
```

## Environment Variables for Future Headless CMS Integration

This project currently runs without a CMS dependency, so no environment variables are required to view or review the page locally.

If a Headless CMS such as Strapi, Contentful, or Sanity is added later, create a local environment file named `.env.local` and include values like:

```bash
VITE_CMS_API_URL=https://your-cms-url
VITE_CMS_TOKEN=your-token
VITE_PUBLIC_SITE_URL=https://comfortable-pro.vercel.app
```

For Vercel deployment, add the same values in the project environment settings under the Vercel dashboard.

## Deployment

This project is ready for Vercel static deployment.

### Deploy to Vercel

1. Push the repository to GitHub.
2. Import the project into Vercel.
3. Keep the default build settings for Vite.
4. Add any environment variables in the Vercel project settings if the CMS is connected later.

### Live Demo

- https://comfortable-pro.vercel.app

## Repository Notes

- The project is intentionally lightweight for easy review.
- It is suitable for static presentation and can be expanded into a CMS-powered storefront later.
- The repository should remain accessible to the project reviewer email for collaboration and review.
