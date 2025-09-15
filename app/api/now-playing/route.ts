import type { Track } from '@/app/_components/track-animation ';
import { NextResponse } from 'next/server';

// Mock track data with realistic information
const MOCK_TRACKS: readonly Track[] = [
  {
    id: "1",
    title: "Aria Math",
    artist: "Daniel Rosenfeld",
    album: "C418",
    year: 2013,
    artwork: "/assets/aria-math.jpg",
    isPlaying: false,
    playedAt: new Date(),
    url: "https://open.spotify.com/track/4K0odcECsBvgzv9Lr9z4kd",
  },
  {
    id: "2",
    title: "Bauklotze",
    artist: "Mika Kobayas",
    album: "Aot SoundTrack",
    year: 2013,
    artwork: "/assets/bauklotze.jpg",
    isPlaying: false,
    playedAt: new Date(),
    url: "https://open.spotify.com/track/6oh6pyBUaJWZbhQKsq0iAm",
  },
  {
    id: "3",
    title: "IDGAF",
    artist: "Drake ft. Yeat",
    album: "For All The Dogs",
    year: 2023,
    artwork: "/assets/idgaf.jpg",
    isPlaying: false,
    playedAt: new Date(),
    url: "https://open.spotify.com/track/idgaf",
  },
  {
    id: "4",
    title: "Yebba's Heartbreak",
    artist: "Drake",
    album: "Certified Lover Boy",
    year: 2021,
    artwork: "/assets/heartbreak.jpg",
    isPlaying: false,
    playedAt: new Date(),
    url: "https://open.spotify.com/track/1PDP7mLiAMwhfmgIwzhOm2",
  },
  {
    id: "5",
    title: "Like Him (feat. Lola Young)",
    artist: "Tyler",
    album: "Chromakopia",
    year: 2024,
    artwork: "/assets/like-him.jpg",
    isPlaying: false,
    playedAt: new Date(),
    url: "https://open.spotify.com/track/6jbYpRPTEFl1HFKHk1IC0m?si=3c92cbb215ef4e1c",
  },
  {
    id: "6",
    title: "Messy",
    artist: "Lola Young",
    album: "Single",
    year: 2024,
    artwork: "/assets/messy.jpg",
    isPlaying: false,
    playedAt: new Date(),
    url: "https://open.spotify.com/track/3SKH53SPQbEnZR4cJPVaz2",
  },
  {
    id: "7",
    title: "Unlike Me",
    artist: "Kate Havnevik",
    album: "Melankton",
    year: 2006,
    artwork: "/assets/unlike-me.jpg",
    isPlaying: false,
    playedAt: new Date(),
    url: "https://open.spotify.com/track/2SynIirzfjbQE8fCAYlfRS?si=fa9283d27a7b49dc",
  },
  {
    id: "8",
    title: "Bleed All over Me",
    artist: "Willow Smith (Cover)",
    album: "Wicked Wisdom",
    year: 2006,
    artwork: "/assets/wicked-wisdom.jpg",
    isPlaying: false,
    playedAt: new Date(),
    url: "https://open.spotify.com/track/3TbgporSCMgrJArl1n21hA",
  },
] as const;

// Constants for better maintainability
const TRACK_ROTATION_INTERVAL_MS = 5 * 60 * 1000; // 5 minutes

/**
 * Creates a copy of the track with updated timing and playing status
 */
function createTrackWithTimestamp(track: Track, playedAt: Date, isPlaying: boolean): Track {
  return {
    ...track,
    playedAt,
    isPlaying,
  };
}

/**
 * Calculates which track should be currently playing based on time
 */
function getCurrentTrackIndex(currentTime: number): number {
  return Math.floor(currentTime / TRACK_ROTATION_INTERVAL_MS) % MOCK_TRACKS.length;
}

/**
 * API Route: GET /api/now-playing
 * Returns the currently "playing" track based on a time-based rotation
 */
export async function GET(): Promise<NextResponse> {
  try {
    const baseTime = Date.now();
    
    // Determine which track should be "playing" now
    const currentTrackIndex = getCurrentTrackIndex(baseTime);
    const baseTrack = MOCK_TRACKS[currentTrackIndex];
    
    if (!baseTrack) {
      throw new Error('Invalid track index calculated');
    }
    
    // Create the currently playing track with proper timestamp
    const currentTrack = createTrackWithTimestamp(
      baseTrack,
      new Date(baseTime),
      true
    );

    return NextResponse.json(
      { 
        track: currentTrack,
        // Optional: include metadata for debugging
        metadata: {
          rotationInterval: TRACK_ROTATION_INTERVAL_MS,
          totalTracks: MOCK_TRACKS.length,
          currentIndex: currentTrackIndex,
        }
      },
      { 
        status: 200,
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
        }
      }
    );
    
  } catch (error) {
    console.error('Error in now-playing API:', error);
    
    // Return a more detailed error response
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    
    return NextResponse.json(
      { 
        error: 'Failed to fetch now playing data',
        details: process.env.NODE_ENV === 'development' ? errorMessage : undefined,
      },
      { status: 500 }
    );
  }
}

/**
 * Optional: Add a POST endpoint to manually set the current track (for testing)
 */
export async function POST(request: Request): Promise<NextResponse> {
  try {
    const { trackId } = await request.json();
    
    const track = MOCK_TRACKS.find(t => t.id === trackId);
    if (!track) {
      return NextResponse.json(
        { error: 'Track not found' },
        { status: 404 }
      );
    }
    
    const playingTrack = createTrackWithTimestamp(
      track,
      new Date(),
      true
    );
    
    return NextResponse.json({ track: playingTrack });
    
  } catch (error) {
    console.error('Error in POST now-playing API:', error);
    return NextResponse.json(
      { error: 'Failed to set current track' },
      { status: 500 }
    );
  }
}