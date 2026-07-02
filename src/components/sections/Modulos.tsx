import { useRef, useState } from 'react'
import AnimatedSection from '../AnimatedSection'
import Container from '../Container'
import metodoBg from '../../assets/images/metodo-bg.avif'
import module01 from '../../assets/images/module-01.avif'
import module02 from '../../assets/images/module-02.avif'
import module03 from '../../assets/images/module-03.avif'
import module04 from '../../assets/images/module-04.avif'
import module05 from '../../assets/images/module-05.avif'

const MODULES = [
  {
    image: module01,
    alt: 'O passo a passo completo para entrar nesse mercado sem perder dinheiro',
  },
  {
    image: module02,
    alt: 'A matemática por trás dos leilões que te dá lucro nas vendas',
  },
  {
    image: module03,
    alt: 'Técnicas para dominar a avaliação em qualquer tipo de recuperação',
  },
  {
    image: module04,
    alt: 'O guia seguro para não perder dinheiro com leilões falsos da internet',
  },
  {
    image: module05,
    alt: 'Como encontrar boas oportunidades em qualquer tipo de leilão',
  },
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

export default function Modulos() {
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
    <section aria-labelledby="modulos-heading" className="relative overflow-hidden bg-[#161616] py-16 sm:py-20 md:py-24">
      <img draggable={false} src={metodoBg} alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60" loading="lazy" />

      <Container className="relative">
        <AnimatedSection>
          <h2
            id="modulos-heading"
            className="text-center font-sora text-2xl font-bold text-gradient-gold sm:text-4xl md:text-5xl lg:text-[60px]"
          >
            Olha o que te espera do lado de dentro:
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-10 md:mt-14">
          <ul
            ref={trackRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            onClickCapture={handleClickCapture}
            className={`-mx-4 flex select-none gap-6 overflow-x-auto px-[7.5%] pb-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-0 lg:pb-0 lg:snap-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${
              isDragging ? 'snap-none scroll-auto' : 'snap-x snap-mandatory scroll-smooth'
            }`}
          >
            {MODULES.map((mod, i) => (
              <li key={i} className="w-[85%] flex-shrink-0 snap-center sm:w-[240px] sm:snap-start lg:w-auto">
                <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <img
                      draggable={false}
                    src={mod.image}
                    alt={mod.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-center gap-3 lg:hidden">
            <button
              type="button"
              onClick={() => scrollByCard('left')}
              aria-label="Módulo anterior"
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/40 text-white transition-colors hover:bg-white/10"
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard('right')}
              aria-label="Próximo módulo"
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/40 text-white transition-colors hover:bg-white/10"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mt-10 md:mt-14">
          <p className="mx-auto max-w-4xl  text-center font-sora text-lg font-medium text-white [text-shadow:0_4px_4px_rgba(0,0,0,0.25)] sm:text-2xl md:text-[35px]">
            São <strong className="font-bold">+ de 100 arrematações</strong> que geraram{' '}
            <strong className="font-bold">+ de R$3.000.000</strong>{' '}
            (milhões) aplicando esse passo a passo.
          </p>
        </AnimatedSection>
      </Container>
    </section>
  )
}
