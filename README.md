# Top Trending Songs by Month

A simple Next.js app that shows top trending songs with a month/year selector. Uses Last.fm chart data when `LASTFM_API_KEY` is set; otherwise shows sample data.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Vercel

Deployment is automated with GitHub Actions ([`.github/workflows/deploy-vercel.yml`](.github/workflows/deploy-vercel.yml)). The public URL is a neutral `https://<project>.vercel.app` subdomain that does not expose your GitHub username, and Vercel runs the server so the live Last.fm data feature works.

One-time setup:

1. Create a free [Vercel account](https://vercel.com/signup) (any email).
2. Link this project once so Vercel creates the project IDs. Locally run:
   ```bash
   npm i -g vercel
   vercel link
   ```
   This creates `.vercel/project.json` containing your `orgId` and `projectId`.
3. Create a token at **Vercel → Account Settings → Tokens**.
4. In this GitHub repo, go to **Settings → Secrets and variables → Actions** and add:
   - `VERCEL_TOKEN` — the token from step 3
   - `VERCEL_ORG_ID` — `orgId` from `.vercel/project.json`
   - `VERCEL_PROJECT_ID` — `projectId` from `.vercel/project.json`
5. (Optional) In the Vercel dashboard, add env var `LASTFM_API_KEY` for live chart data. Get a free key at [last.fm/api](https://www.last.fm/api/account/create).

Then push to `main` (or run the workflow manually from the **Actions** tab).

> Prefer zero config? You can skip the workflow and simply import the repo at [vercel.com](https://vercel.com) using Vercel's Git integration — it auto-deploys on every push.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Vercel + GitHub Actions
