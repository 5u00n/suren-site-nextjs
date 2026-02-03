# Suren Hembram Portfolio

A Next.js portfolio site for Suren Hembram — Full Stack Web Development, React, Next.js, Node.js.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy

The site is set up for Firebase Hosting. To deploy:

```bash
npm run deploy
```

This runs `next build` then `firebase deploy --only hosting`.

You can also deploy to [Vercel](https://vercel.com) by connecting the repo; the project works with the default Next.js preset.

## Optional: GitHub API rate limit

The Projects section fetches public repos from GitHub (user: 5u00n). Without a token you get 60 requests/hour. To increase the limit, add a personal access token:

1. Create a `.env.local` file (see `.env.example`).
2. Set `GITHUB_TOKEN` to a GitHub personal access token with `public_repo` (or no scopes for read-only public data).

## Tech

- Next.js 14 (App Router)
- Tailwind CSS
- Firebase Hosting
