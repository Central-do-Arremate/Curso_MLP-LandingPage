import { ArrowUpRight, SearchX } from 'lucide-react'
import { CENTRAL_DO_ARREMATE_URL, LEILOIA_URL } from '../config/campaign'

const LINKS = [
  {
    href: CENTRAL_DO_ARREMATE_URL,
    label: 'Central do Arremate',
    description: 'Conheça nossos cursos e conteúdos sobre leilões.',
  },
  {
    href: LEILOIA_URL,
    label: 'LeiloIA',
    description: 'O copiloto de leilão que te ajuda a lucrar mais.',
  },
]

export default function CampaignWall() {
  return (
    <div className="relative grid min-h-screen place-items-center overflow-hidden bg-brand-black px-6 py-12">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-brand-yellow/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 left-1/3 h-72 w-72 rounded-full bg-brand-green/10 blur-[120px]" />

      <div className="relative z-[1] flex w-full max-w-lg flex-col items-center text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-brand-yellow-light bg-brand-yellow/10">
          <SearchX className="h-8 w-8 text-brand-yellow" aria-hidden="true" />
        </span>

        <h1 className="mt-6 font-sora text-3xl font-bold text-white sm:text-4xl">
          Campanha <span className="text-brand-yellow">não encontrada</span>
        </h1>

        <p className="mt-4 max-w-md font-sora text-base leading-relaxed text-white/70">
          Essa página não está mais disponível. Mas você pode continuar aprendendo com a gente por aqui:
        </p>

        <div className="mt-8 flex w-full flex-col gap-4">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group flex items-center justify-between gap-4 rounded-2xl border-2 border-white/10 bg-white/5 p-5 text-left transition-colors hover:border-brand-yellow-light hover:bg-white/10"
            >
              <span>
                <span className="block font-sora text-lg font-bold text-white">{link.label}</span>
                <span className="mt-1 block font-sora text-sm text-white/60">{link.description}</span>
              </span>
              <ArrowUpRight
                className="h-6 w-6 flex-shrink-0 text-brand-yellow transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
