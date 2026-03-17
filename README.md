# Top Trending Songs by Month

A simple Next.js app that shows top trending songs with a month/year selector. Uses Last.fm chart data when `LASTFM_API_KEY` is set; otherwise shows sample data.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Vercel

1. Push this repo to GitHub and import the project in [Vercel](https://vercel.com).
2. (Optional) Add env var `LASTFM_API_KEY` in Vercel for live Last.fm chart data. Get a free key at [last.fm/api](https://www.last.fm/api/account/create).

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
