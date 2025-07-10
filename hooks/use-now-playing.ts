"use client"

import type { Track } from "@/app/_components/track-animation "
import { useState, useEffect } from "react"


interface UseNowPlayingOptions {
  refreshInterval?: number
  apiEndpoint?: string
}

export function useNowPlaying({
  refreshInterval = 1000 * 60 * 5, // 5 minutes
  apiEndpoint = "/api/now-playing",
}: UseNowPlayingOptions = {}) {
  const [track, setTrack] = useState<Track | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchNowPlaying = async () => {
    try {
      const response = await fetch(apiEndpoint)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      setTrack(data.track || null)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch")
      console.error("Error fetching now playing:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchNowPlaying()

    const interval = setInterval(fetchNowPlaying, refreshInterval)
    return () => clearInterval(interval)
  }, [refreshInterval, apiEndpoint])

  return { track, loading, error, refetch: fetchNowPlaying }
}
