"use client";

import { useEffect, useState } from "react";
import type { TrendingTrack } from "./api/trending/route";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export default function Home() {
  const current = new Date();
  const [year, setYear] = useState(current.getFullYear());
  const [month, setMonth] = useState(current.getMonth() + 1);
  const [tracks, setTracks] = useState<TrendingTrack[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/trending?year=${year}&month=${month}`)
      .then((res) => res.json())
      .then((data) => {
        setTracks(data.tracks ?? []);
      })
      .finally(() => setLoading(false));
  }, [year, month]);

  const years = [current.getFullYear(), current.getFullYear() - 1];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 font-sans">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Top Trending Songs
        </h1>
        <p className="mt-1 text-slate-400">
          By month — select a month to view top tracks.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <label className="flex flex-col gap-1">
            <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Month</span>
            <select
              value={month}
              onChange={(e) => setMonth(Number(e.target.value))}
              className="rounded-lg border border-slate-600 bg-slate-800/80 px-4 py-2.5 text-slate-100 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
            >
              {MONTHS.map((m, i) => (
                <option key={m} value={i + 1}>
                  {m}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Year</span>
            <select
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
              className="rounded-lg border border-slate-600 bg-slate-800/80 px-4 py-2.5 text-slate-100 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
            >
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-10">
          {loading ? (
            <div className="flex items-center gap-2 text-slate-400">
              <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-slate-500 border-t-amber-500" />
              Loading…
            </div>
          ) : (
            <ul className="space-y-0">
              {tracks.map((track) => (
                <li
                  key={`${track.artist}-${track.name}-${track.rank}`}
                  className="flex items-center gap-4 border-b border-slate-700/60 py-4 first:pt-0"
                >
                  <span className="flex w-8 shrink-0 text-right text-sm font-semibold text-amber-400/90 tabular-nums">
                    {track.rank}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium text-white">{track.name}</p>
                    <p className="truncate text-sm text-slate-400">{track.artist}</p>
                  </div>
                  {track.playCount && (
                    <span className="shrink-0 text-xs text-slate-500">
                      {Number(track.playCount).toLocaleString()} plays
                    </span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>

        <p className="mt-8 text-center text-xs text-slate-500">
          Data from Last.fm chart. Add{" "}
          <code className="rounded bg-slate-800 px-1 py-0.5">LASTFM_API_KEY</code> in Vercel for
          live chart data.
        </p>
      </div>
    </div>
  );
}
