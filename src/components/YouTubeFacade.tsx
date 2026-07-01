import { useState } from 'react'

interface YouTubeFacadeProps {
  videoId: string
  title: string
  className?: string
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-9 w-9 translate-x-0.5 text-brand-dark" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

export default function YouTubeFacade({ videoId, title, className = '' }: YouTubeFacadeProps) {
  const [isActive, setIsActive] = useState(false)

  if (isActive) {
    return (
      <iframe
        className={className}
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
        title={title}
        allow="autoplay; encrypted-media; picture-in-picture; clipboard-write"
        allowFullScreen
      />
    )
  }

  return (
    <button
      type="button"
      onClick={() => setIsActive(true)}
      aria-label={`Reproduzir vídeo: ${title}`}
      className={`group relative overflow-hidden bg-brand-black ${className}`}
    >
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/40">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-yellow shadow-lg">
          <PlayIcon />
        </span>
      </span>
    </button>
  )
}
