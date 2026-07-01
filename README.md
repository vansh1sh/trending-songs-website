# Top Trending Songs by Month

A simple Next.js app that shows top trending songs with a month/year selector. Ships with a sample chart-style dataset and is built as a fully static site.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Cloudflare Pages

Deployment is automated with GitHub Actions ([`.github/workflows/deploy-cloudflare.yml`](.github/workflows/deploy-cloudflare.yml)). The public URL is a neutral `https://<project>.pages.dev` subdomain that does not expose your GitHub identity.

One-time setup:

1. Create a free [Cloudflare account](https://dash.cloudflare.com/sign-up) (any email).
2. Create an API token at **My Profile → API Tokens** using the **"Edit Cloudflare Workers"** template, or a custom token with **Account → Cloudflare Pages → Edit** permission.
3. Find your **Account ID** on the Cloudflare dashboard home (right sidebar / URL).
4. In this GitHub repo, go to **Settings → Secrets and variables → Actions** and add:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`

Then push to `main` (or run the workflow manually from the **Actions** tab). The workflow builds the static export and deploys it. The project name (and therefore the subdomain) is set by `CF_PROJECT_NAME` in the workflow.

## Stack

- Next.js 16 (App Router, static export)
- TypeScript
- Tailwind CSS
- Cloudflare Pages + GitHub Actions
