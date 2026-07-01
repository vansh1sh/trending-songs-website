# Top Trending Songs by Month

A simple Next.js app that shows top trending songs with a month/year selector. Ships with a sample chart-style dataset and is built as a fully static site.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on GitHub Pages

Deployment is automated with GitHub Actions ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)):

1. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions** (the workflow also attempts to enable this automatically).
2. Push to `main` (or run the workflow manually from the **Actions** tab).
3. The site builds a static export and publishes to `https://<user>.github.io/<repo>/`.

The app is exported statically (`output: "export"` in `next.config.ts`), and the workflow sets the correct `basePath` for the project site automatically.

## Stack

- Next.js 16 (App Router, static export)
- TypeScript
- Tailwind CSS
- GitHub Pages + GitHub Actions
