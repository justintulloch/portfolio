"use client"

import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { useState, useEffect, useCallback } from "react"

import { MusicVisualizerIcon } from "./music-visualizer-icon"

import { cn } from "@/lib/utils "

export interface Track {
  id: string
  title: string
  artist: string
  album?: string
  year?: number
  artwork: string
  url?: string
  isPlaying?: boolean
  playedAt?: Date
}

interface NowPlayingProps {
  tracks: Track[] | Track | null
  href?: string
  className?: string
  showTimestamp?: boolean
  showControls?: boolean
  size?: "sm" | "md" | "lg"
  loading?: boolean
  autoPlay?: boolean
  interval?: number
}

const sizeConfig = {
  sm: {
    container: "h-12",
    image: "h-12 w-12",
    title: "text-sm",
    artist: "text-xs",
    timestamp: "text-xs",
  },
  md: {
    container: "h-16",
    image: "h-16 w-16",
    title: "text-base",
    artist: "text-sm",
    timestamp: "text-xs",
  },
  lg: {
    container: "h-20",
    image: "h-20 w-20",
    title: "text-lg",
    artist: "text-base",
    timestamp: "text-sm",
  },
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.8,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.8,
  }),
}

const slideTransition = {
  x: { type: "spring", stiffness: 300, damping: 30 },
  opacity: { duration: 0.2 },
  scale: { duration: 0.2 },
}

export function NowPlaying({
  tracks,
  href,
  className,
  showTimestamp = true,
  showControls = true,
  size = "lg",
  loading = false,
  autoPlay = true,
  interval = 4000,
}: NowPlayingProps) {
  const config = sizeConfig[size]

  // Normalize tracks to always be an array
  const trackArray = Array.isArray(tracks) ? tracks : tracks ? [tracks] : []

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [direction, setDirection] = useState(0)

  const currentTrack = trackArray[currentIndex] || null

  const nextTrack = useCallback(() => {
    if (trackArray.length <= 1) return
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % trackArray.length)
  }, [trackArray.length])

  const prevTrack = useCallback(() => {
    if (trackArray.length <= 1) return
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + trackArray.length) % trackArray.length)
  }, [trackArray.length])

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  // Auto-advance tracks
  useEffect(() => {
    if (!isPlaying || trackArray.length <= 1) return

    const timer = setInterval(nextTrack, interval)
    return () => clearInterval(timer)
  }, [isPlaying, interval, nextTrack, trackArray.length])

  const getRelativeTime = (date: Date) => {
    const now = new Date()
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60))

    if (diffInMinutes < 1) return "Just now"
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`

    const diffInHours = Math.floor(diffInMinutes / 60)
    if (diffInHours < 24) return `${diffInHours}h ago`

    const diffInDays = Math.floor(diffInHours / 24)
    return `${diffInDays}d ago`
  }

  const content = (
    <div className={cn("flex items-center gap-4 w-full min-w-0", className)}>
      {/* Album Artwork */}
      <div
        className={cn(
          "relative aspect-square flex-none overflow-hidden rounded bg-zinc-100 dark:bg-zinc-800",
          config.image,
        )}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          {currentTrack?.artwork && (
            <motion.img
              key={currentTrack.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={slideTransition}
              alt={`${currentTrack.title} by ${currentTrack.artist}`}
              src={currentTrack.artwork}
              className="w-full h-full object-cover absolute inset-0"
            />
          )}
        </AnimatePresence>

        {loading && <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-700 animate-pulse" />}
      </div>

      {/* Track Info */}
      <div className="flex min-w-0 flex-col justify-center flex-1">
        {/* Status */}
        <div className="flex items-center text-xs font-semibold uppercase leading-tight tracking-widest text-rose-500 dark:text-rose-400 mb-1">
          <MusicVisualizerIcon className="mr-2 -ml-px flex-none" animate={currentTrack?.isPlaying ?? false} />
          {showTimestamp && currentTrack?.playedAt ? (
            <time className="truncate" dateTime={new Date(currentTrack.playedAt).toISOString()}>
              {getRelativeTime(new Date(currentTrack.playedAt))}
            </time>
          ) : (
            <span className="truncate">{currentTrack?.isPlaying ? "Currently playing" : "Last played"}</span>
          )}

          {trackArray.length > 1 && (
            <span className="ml-2 text-zinc-400">
              {currentIndex + 1}/{trackArray.length}
            </span>
          )}
        </div>

        {/* Track Title */}
        <div className="flex items-center mb-1 overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.span
              key={currentTrack?.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={slideTransition}
              className={cn("truncate font-semibold text-zinc-900 dark:text-zinc-100 block", config.title)}
              title={currentTrack?.title}
            >
              {loading ? (
                <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded animate-pulse w-32" />
              ) : (
                currentTrack?.title || "Unknown Track"
              )}
            </motion.span>
          </AnimatePresence>

          {currentTrack?.year && (
            <time
              className="ml-2 inline-block flex-none translate-y-px rounded bg-zinc-100 dark:bg-zinc-800 px-2 py-1 text-xs font-medium leading-none text-zinc-500 dark:text-zinc-400"
              dateTime={String(new Date(currentTrack.year, 0))}
            >
              {currentTrack.year}
            </time>
          )}
        </div>

        {/* Artist */}
        <div className="overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.p
              key={currentTrack?.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={slideTransition}
              className={cn("truncate text-zinc-500 dark:text-zinc-400", config.artist)}
              title={currentTrack?.artist}
            >
              {loading ? (
                <div className="h-3 bg-zinc-200 dark:bg-zinc-700 rounded animate-pulse w-24" />
              ) : (
                currentTrack?.artist || "Unknown Artist"
              )}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )

  if (href && currentTrack) {
    return (
      <Link
        href={href}
        className={cn(
          "group block w-full rounded-lg p-2 transition-all duration-200",
          "hover:bg-zinc-50 dark:hover:bg-zinc-800/50",
          "focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:bg-zinc-50 dark:focus:bg-zinc-800/50",
          config.container,
        )}
      >
        {content}
      </Link>
    )
  }

  return <div className={cn("w-full", config.container)}>{content}</div>
}
