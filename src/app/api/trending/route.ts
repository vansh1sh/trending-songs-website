import { NextResponse } from "next/server";

export interface TrendingTrack {
  rank: number;
  name: string;
  artist: string;
  playCount?: string;
  url?: string;
}

// Fallback data when Last.fm API key is not set (real chart-style data)
const FALLBACK_TRACKS: TrendingTrack[] = [
  { rank: 1, name: "Blinding Lights", artist: "The Weeknd" },
  { rank: 2, name: "Shape of You", artist: "Ed Sheeran" },
  { rank: 3, name: "Someone Like You", artist: "Adele" },
  { rank: 4, name: "Levitating", artist: "Dua Lipa" },
  { rank: 5, name: "Bad Guy", artist: "Billie Eilish" },
  { rank: 6, name: "Watermelon Sugar", artist: "Harry Styles" },
  { rank: 7, name: "drivers license", artist: "Olivia Rodrigo" },
  { rank: 8, name: "Flowers", artist: "Miley Cyrus" },
  { rank: 9, name: "Anti-Hero", artist: "Taylor Swift" },
  { rank: 10, name: "As It Was", artist: "Harry Styles" },
  { rank: 11, name: "Starboy", artist: "The Weeknd" },
  { rank: 12, name: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars" },
  { rank: 13, name: "Shake It Off", artist: "Taylor Swift" },
  { rank: 14, name: "Perfect", artist: "Ed Sheeran" },
  { rank: 15, name: "Circles", artist: "Post Malone" },
  { rank: 16, name: "Don't Start Now", artist: "Dua Lipa" },
  { rank: 17, name: "Rockstar", artist: "Post Malone" },
  { rank: 18, name: "Sunflower", artist: "Post Malone & Swae Lee" },
  { rank: 19, name: "Lovely", artist: "Billie Eilish & Khalid" },
  { rank: 20, name: "Good 4 U", artist: "Olivia Rodrigo" },
];

function getMonthKey(year: number, month: number): string {
  return `${year}-${String(month).padStart(2, "0")}`;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const year = parseInt(searchParams.get("year") ?? String(new Date().getFullYear()), 10);
  const month = parseInt(searchParams.get("month") ?? String(new Date().getMonth() + 1), 10);

  const apiKey = process.env.LASTFM_API_KEY;
  if (apiKey) {
    try {
      const res = await fetch(
        `https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${apiKey}&format=json&limit=50`,
        { next: { revalidate: 3600 } }
      );
      const data = await res.json();
      if (data?.tracks?.track) {
        const tracks: TrendingTrack[] = data.tracks.track.map((t: { name: string; artist: { name: string }; playcount?: string; url?: string }, i: number) => ({
          rank: i + 1,
          name: t.name,
          artist: t.artist?.name ?? "Unknown",
          playCount: t.playcount,
          url: t.url,
        }));
        return NextResponse.json({ year, month, monthKey: getMonthKey(year, month), tracks });
      }
    } catch (e) {
      console.warn("Last.fm API error, using fallback:", e);
    }
  }

  return NextResponse.json({
    year,
    month,
    monthKey: getMonthKey(year, month),
    tracks: FALLBACK_TRACKS,
  });
}
