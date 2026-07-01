export interface TrendingTrack {
  rank: number;
  name: string;
  artist: string;
  playCount?: string;
  url?: string;
}

// Chart-style sample data used for the static site build.
export const FALLBACK_TRACKS: TrendingTrack[] = [
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
