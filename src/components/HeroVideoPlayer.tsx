import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { loadYouTubeIframeApi, type YouTubePlayer } from '../lib/youtube'

interface HeroVideoPlayerProps {
  videoId: string
  poster: string
  posterAlt: string
}

function PlayIcon({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} translate-x-0.5`} aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
      <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
    </svg>
  )
}

function ReplayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-9 w-9" aria-hidden="true">
      <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" />
    </svg>
  )
}

function FullscreenIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5" aria-hidden="true">
      <path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M8 21H5a2 2 0 0 1-2-2v-3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function HeroVideoPlayer({ videoId, poster, posterAlt }: HeroVideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mountRef = useRef<HTMLDivElement>(null)
  const playerRef = useRef<YouTubePlayer | null>(null)
  const pollRef = useRef<number | null>(null)
  const seekbarRef = useRef<HTMLDivElement>(null)

  const [hasStarted, setHasStarted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isEnded, setIsEnded] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isSeeking, setIsSeeking] = useState(false)

  useEffect(() => {
    return () => {
      if (pollRef.current) window.clearInterval(pollRef.current)
      playerRef.current?.destroy()
    }
  }, [])

  useEffect(() => {
    const handleFsChange = () => setIsFullscreen(!!document.fullscreenElement)
    document.addEventListener('fullscreenchange', handleFsChange)
    return () => document.removeEventListener('fullscreenchange', handleFsChange)
  }, [])

  const startPolling = useCallback(() => {
    if (pollRef.current) return
    pollRef.current = window.setInterval(() => {
      const player = playerRef.current
      if (!player) return
      const duration = player.getDuration()
      if (duration > 0) setProgress(player.getCurrentTime() / duration)
    }, 250)
  }, [])

  const stopPolling = useCallback(() => {
    if (pollRef.current) {
      window.clearInterval(pollRef.current)
      pollRef.current = null
    }
  }, [])

  const initPlayer = useCallback(async () => {
    if (!mountRef.current) return
    const YT = await loadYouTubeIframeApi()
    playerRef.current = new YT.Player(mountRef.current, {
      videoId,
      playerVars: {
        controls: 0,
        modestbranding: 1,
        rel: 0,
        iv_load_policy: 3,
        fs: 0,
        disablekb: 1,
        playsinline: 1,
      },
      events: {
        onReady: (e) => {
          e.target.playVideo()
        },
        onStateChange: (e) => {
          if (e.data === 1) {
            setIsPlaying(true)
            setIsEnded(false)
            startPolling()
          } else if (e.data === 2) {
            setIsPlaying(false)
            stopPolling()
          } else if (e.data === 0) {
            setIsPlaying(false)
            setIsEnded(true)
            setProgress(1)
            stopPolling()
          }
        },
      },
    })
  }, [videoId, startPolling, stopPolling])

  useEffect(() => {
    if (hasStarted) void initPlayer()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasStarted])

  const handleStart = useCallback(() => {
    setHasStarted(true)
  }, [])

  const handleOverlayClick = useCallback(() => {
    const player = playerRef.current
    if (!player) return
    if (isEnded) {
      player.seekTo(0, true)
      player.playVideo()
      return
    }
    if (isPlaying) {
      player.pauseVideo()
    } else {
      player.playVideo()
    }
  }, [isPlaying, isEnded])

  const handleToggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen?.()
    } else {
      document.exitFullscreen?.()
    }
  }, [])

  const seekTo = useCallback((clientX: number) => {
    const bar = seekbarRef.current
    const player = playerRef.current
    if (!bar || !player) return
    const duration = player.getDuration()
    if (!duration) return
    const { left, width } = bar.getBoundingClientRect()
    const ratio = Math.max(0, Math.min(1, (clientX - left) / width))
    setProgress(ratio)
    player.seekTo(ratio * duration, true)
  }, [])

  const handleSeekbarPointerDown = useCallback(
    (e: React.PointerEvent) => {
      e.stopPropagation()
      e.currentTarget.setPointerCapture(e.pointerId)
      setIsSeeking(true)
      seekTo(e.clientX)
    },
    [seekTo],
  )

  const handleSeekbarPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isSeeking) return
      seekTo(e.clientX)
    },
    [isSeeking, seekTo],
  )

  const handleSeekbarPointerUp = useCallback(
    (e: React.PointerEvent) => {
      if (!isSeeking) return
      e.currentTarget.releasePointerCapture(e.pointerId)
      setIsSeeking(false)
    },
    [isSeeking],
  )

  if (!hasStarted) {
    return (
      <motion.button
        type="button"
        onClick={handleStart}
        aria-label="Assistir vídeo de apresentação do método"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.015 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="relative mt-8 block w-full max-w-4xl overflow-hidden rounded-[24px] border-[3px] border-brand-yellow-light shadow-2xl sm:rounded-[35px] md:mt-10"
      >
        <img
          src={poster}
          alt={posterAlt}
          width={1332}
          height={749}
          {...{ fetchpriority: 'high' }}
          className="h-auto w-full object-cover"
        />
      </motion.button>
    )
  }

  return (
    <div
      ref={containerRef}
      className={`group relative mt-8 aspect-video w-full max-w-4xl overflow-hidden rounded-[24px] border-[3px] border-brand-yellow-light bg-black shadow-2xl sm:rounded-[35px] md:mt-10 ${
        isFullscreen ? 'fixed inset-0 z-[100] mt-0 max-w-none rounded-none border-none' : ''
      }`}
    >
      <div ref={mountRef} className="pointer-events-none h-full w-full" />

      <button
        type="button"
        onClick={handleOverlayClick}
        aria-label={isPlaying ? 'Pausar vídeo' : 'Reproduzir vídeo'}
        className={`absolute inset-0 z-20 flex items-center justify-center transition-colors duration-300 ${
          isPlaying ? 'bg-transparent hover:bg-black/20' : 'bg-black/70'
        }`}
      >
        <span
          className={`flex h-16 w-16 items-center justify-center rounded-full border-2 border-brand-yellow bg-black/60 backdrop-blur-sm transition-all duration-300 sm:h-20 sm:w-20 ${
            isPlaying ? 'scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100' : 'scale-100 opacity-100'
          }`}
        >
          {isEnded ? <ReplayIcon /> : isPlaying ? <PauseIcon /> : <PlayIcon />}
        </span>
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          handleToggleFullscreen()
        }}
        aria-label={isFullscreen ? 'Sair da tela cheia' : 'Tela cheia'}
        className="absolute right-4 top-4 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-brand-yellow-light/50 bg-black/40 text-brand-yellow opacity-0 backdrop-blur-md transition-all hover:scale-110 hover:bg-brand-yellow hover:text-brand-dark group-hover:opacity-100"
      >
        <FullscreenIcon />
      </button>

      <div
        ref={seekbarRef}
        role="slider"
        aria-label="Progresso do vídeo"
        aria-valuenow={Math.round(progress * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
        onPointerDown={handleSeekbarPointerDown}
        onPointerMove={handleSeekbarPointerMove}
        onPointerUp={handleSeekbarPointerUp}
        onPointerCancel={handleSeekbarPointerUp}
        className="absolute inset-x-0 bottom-0 z-30 flex h-8 cursor-pointer select-none items-end"
      >
        <div className="group/track relative h-1.5 w-full bg-white/20">
          <div
            className="absolute left-0 top-0 h-full bg-brand-yellow shadow-[0_0_8px_rgba(233,212,65,0.6)]"
            style={{ width: `${progress * 100}%` }}
          />
          <div
            className={`absolute top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-2 border-white bg-brand-yellow opacity-0 shadow-[0_0_10px_rgba(0,0,0,0.8)] transition-opacity group-hover/track:opacity-100 ${
              isSeeking ? 'opacity-100' : ''
            }`}
            style={{ left: `calc(${progress * 100}% - 7px)` }}
          />
        </div>
      </div>
    </div>
  )
}
