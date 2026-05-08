# Dorkcoin Website

This repository contains the public website for **Dorkcoin**, built with **Next.js** using the App Router.

The site is designed to be easy to update, maintain, and contribute to by the community.

## Overview

- Framework: **Next.js 15**
- Styling: **Tailwind CSS**
- Layout: **App Router** with server and client components
- Content: website sections are composed from React components
- Deployment: works with **Vercel**, **Netlify**, or any Node-compatible hosting

## Getting Started

### 1. Install dependencies
```sh
npm install
```

### 2. Run locally
```sh
npm run dev
```

### 3. Open in browser
```sh
http://localhost:3000
```

## Repository Structure

- `app/` — main application routes and layout
- `components/` — reusable UI components
- `public/` — static assets like images and fonts
- `app/api/` — server API routes
- `app/(landing)/_components/` — landing page sections and content

## Contributing

This repo is public and open for contributions. If you want to help improve the Dorkcoin website, please follow these steps:

1. Fork the repository
2. Create a feature branch for your changes
3. Make your updates
4. Open a pull request with a clear description

### Suggested improvements

- update site copy and branding
- improve responsiveness and accessibility
- add new sections or visuals
- fix layout or styling issues
- optimize performance

## Development Notes

- Keep UI changes consistent with the Dorkcoin brand
- Use Tailwind utility classes for styling
- Prefer semantic HTML and accessible markup
- Keep components small and reusable
- Restart the dev server after changing `.env.local`

## Environment

This project may use environment variables for local configuration. If any variables are needed, they should be defined in a `.env.local` file in the repo root.

Example:
```env
NEXT_PUBLIC_ENABLE_AI_CHAT=true
NEXT_PUBLIC_OPENROUTER_API_KEY=your_api_key_here
```

> Only add non-sensitive configuration to `.env.local`. Do not commit secret keys to the repository.

## Deployment

Deploy the site to a platform that supports Next.js apps. For Vercel, connect the repository and follow the deployment prompts.

## License

This project is intended for open community contribution. If a license is needed, add one to the repository root.
