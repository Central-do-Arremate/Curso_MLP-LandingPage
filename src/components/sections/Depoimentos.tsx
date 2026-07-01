import { useRef, useState } from 'react'
import AnimatedSection from '../AnimatedSection'
import Container from '../Container'
import YouTubeFacade from '../YouTubeFacade'
import depoimentosBg from '../../assets/images/depoimentos-bg.avif'
import depoimentoRenzo from '../../assets/images/depoimento-renzo.avif'
import depoimentoEduardo from '../../assets/images/depoimento-eduardo.avif'

type Testimonial =
  | { name: string; kind: 'image'; src: string; alt: string }
  | { name: string; kind: 'video'; videoId: string }

const TESTIMONIALS: Testimonial[] = [
  { name: 'Renzo', kind: 'image', src: depoimentoRenzo, alt: 'Print de depoimento do aluno Renzo sobre o curso MLP' },
  { name: 'Zago', kind: 'video', videoId: 'koTJEIdnM3s' },
  { name: 'Matheus', kind: 'video', videoId: 'vtJ6p5TZEHs' },
  { name: 'Igor', kind: 'video', videoId: 'y3hRGjQuU3U' },
  { name: 'Eduardo', kind: 'image', src: depoimentoEduardo, alt: 'Print de depoimento do aluno Eduardo sobre o curso MLP' },
]

function ArrowIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      className={`h-5 w-5 ${direction === 'left' ? 'rotate-180' : ''}`}
      aria-hidden="true"
    >
      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Depoimentos() {
  const trackRef = useRef<HTMLUListElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const dragState = useRef({ active: false, startX: 0, startScrollLeft: 0, moved: 0 })

  const scrollByCard = (direction: 'left' | 'right') => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('li')
    const distance = card ? card.clientWidth + 24 : 300
    track.scrollBy({ left: direction === 'left' ? -distance : distance, behavior: 'smooth' })
  }

  const handlePointerDown = (e: React.PointerEvent<HTMLUListElement>) => {
    if (e.pointerType !== 'mouse') return
    const track = trackRef.current
    if (!track) return
    dragState.current = { active: true, startX: e.clientX, startScrollLeft: track.scrollLeft, moved: 0 }
    setIsDragging(true)
    track.setPointerCapture(e.pointerId)
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLUListElement>) => {
    if (!dragState.current.active) return
    const track = trackRef.current
    if (!track) return
    const delta = e.clientX - dragState.current.startX
    dragState.current.moved = Math.max(dragState.current.moved, Math.abs(delta))
    track.scrollLeft = dragState.current.startScrollLeft - delta
  }

  const handlePointerUp = (e: React.PointerEvent<HTMLUListElement>) => {
    if (e.pointerType !== 'mouse') return
    dragState.current.active = false
    setIsDragging(false)
    trackRef.current?.releasePointerCapture(e.pointerId)
  }

  const handleClickCapture = (e: React.MouseEvent<HTMLUListElement>) => {
    if (dragState.current.moved > 8) {
      e.preventDefault()
      e.stopPropagation()
    }
  }

  return (
    <section
      aria-labelledby="depoimentos-heading"
      className="relative overflow-hidden bg-brand-yellow py-16 sm:py-20 md:py-24"
    >
      <img src={depoimentosBg} alt="" aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full object-cover" />

      <Container className="relative">
        <AnimatedSection className="flex items-center justify-between gap-4">
          <h2
            id="depoimentos-heading"
            className="bg-gradient-to-r from-brand-dark to-[#3f3f3f] bg-clip-text font-sora text-2xl font-semibold uppercase tracking-[0.3em] text-transparent sm:text-4xl md:text-[50px]"
          >
            Depoimentos
          </h2>

          <div className="flex flex-shrink-0 gap-3">
            <button
              type="button"
              onClick={() => scrollByCard('left')}
              aria-label="Depoimento anterior"
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-brand-dark/40 text-brand-dark transition-colors hover:bg-brand-dark/10"
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard('right')}
              aria-label="Próximo depoimento"
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-brand-dark/40 text-brand-dark transition-colors hover:bg-brand-dark/10"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-10 md:mt-14">
          <ul
            ref={trackRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            onClickCapture={handleClickCapture}
            className={`-mx-4 flex select-none gap-6 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:cursor-grab lg:px-0 lg:active:cursor-grabbing [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${
              isDragging ? 'snap-none scroll-auto' : 'snap-x snap-mandatory scroll-smooth'
            }`}
          >
            {TESTIMONIALS.map((t) => (
              <li key={t.name} className="w-[220px] flex-shrink-0 snap-start sm:w-[240px] lg:w-[260px]">
                {t.kind === 'image' ? (
                  <div className="aspect-[9/16] overflow-hidden rounded-[20px] shadow-xl">
                    <img src={t.src} alt={t.alt} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                ) : (
                  <YouTubeFacade
                    videoId={t.videoId}
                    title={`Depoimento em vídeo de ${t.name} sobre o curso MLP`}
                    className="aspect-[9/16] w-full rounded-[20px] shadow-xl"
                  />
                )}
              </li>
            ))}
          </ul>
        </AnimatedSection>
      </Container>
    </section>
  )
}
