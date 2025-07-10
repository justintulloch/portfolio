
import type { Track } from '@/app/_components/track-animation ';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const baseTime = Date.now();
    const intervalMs = 5 * 60 * 1000; // 5 minutes in ms

    const mockTracks: Track[] = [
      {
        id: "1",
        title: "Red Button",
        artist: "Drake",
        album: "For All The Dogs",
        year: 2024,
        artwork: "/placeholder.svg?height=300&width=300",
        isPlaying: false,
        playedAt: new Date(baseTime),
        url: "https://open.spotify.com/track/red-button",
      },
      {
        id: "2",
        title: "Virginia Beach",
        artist: "Drake",
        album: "For All The Dogs",
        year: 2024,
        artwork: "/placeholder.svg?height=300&width=300",
        isPlaying: false,
        playedAt: new Date(baseTime - intervalMs),
        url: "https://open.spotify.com/track/virginia-beach",
      },
      {
        id: "3",
        title: "IDGAF",
        artist: "Drake ft. Yeat",
        album: "For All The Dogs",
        year: 2024,
        artwork: "/placeholder.svg?height=300&width=300",
        isPlaying: false,
        playedAt: new Date(baseTime - 2 * intervalMs),
        url: "https://open.spotify.com/track/idgaf",
      },
      {
        id: "4",
        title: "Slime You Out",
        artist: "Drake ft. SZA",
        album: "For All The Dogs",
        year: 2024,
        artwork: "/placeholder.svg?height=300&width=300",
        isPlaying: false,
        playedAt: new Date(baseTime - 3 * intervalMs),
        url: "https://open.spotify.com/track/slime-you-out",
      },
      {
        id: "5",
        title: "8AM in Charlotte",
        artist: "Drake",
        album: "For All The Dogs",
        year: 2024,
        artwork: "/placeholder.svg?height=300&width=300",
        isPlaying: false,
        playedAt: new Date(baseTime - 4 * intervalMs),
        url: "https://open.spotify.com/track/8am-in-charlotte",
      },
    ];

    // Choose a track based on how many 5-minute intervals have passed
    const index = Math.floor(baseTime / intervalMs) % mockTracks.length;
    const selectedTrack = mockTracks[index];
    selectedTrack.isPlaying = true;

    return NextResponse.json({ track: selectedTrack });
  } catch (error) {
    console.error("Error in now-playing API:", error);
    return NextResponse.json(
      { error: "Failed to fetch now playing data" },
      { status: 500 }
    );
  }
}
