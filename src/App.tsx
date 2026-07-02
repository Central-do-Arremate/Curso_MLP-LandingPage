import { lazy, Suspense } from 'react'
import Hero from './components/sections/Hero'
import Footer from './components/Footer'
import CampaignWall from './components/CampaignWall'
import { CAMPAIGN_DISABLED } from './config/campaign'

const Metodo = lazy(() => import('./components/sections/Metodo'))
const Modulos = lazy(() => import('./components/sections/Modulos'))
const Depoimentos = lazy(() => import('./components/sections/Depoimentos'))
const OfertaBonus = lazy(() => import('./components/sections/OfertaBonus'))
const Garantia = lazy(() => import('./components/sections/Garantia'))
const SobreLeo = lazy(() => import('./components/sections/SobreLeo'))
const Faq = lazy(() => import('./components/sections/Faq'))

function SectionFallback({ bg }: { bg: string }) {
  return <div className={`h-[60vh] w-full ${bg}`} aria-hidden="true" />
}

export default function App() {
  if (CAMPAIGN_DISABLED) {
    return <CampaignWall />
  }

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-brand-dark"
      >
        Pular para o conteúdo principal
      </a>

      <Hero />

      <main id="main-content">
        <Suspense fallback={<SectionFallback bg="bg-[#161616]" />}>
          <Metodo />
        </Suspense>

        <Suspense fallback={<SectionFallback bg="bg-[#161616]" />}>
          <Modulos />
        </Suspense>

        <Suspense fallback={<SectionFallback bg="bg-brand-yellow" />}>
          <Depoimentos />
        </Suspense>

        <Suspense fallback={<SectionFallback bg="bg-black" />}>
          <OfertaBonus />
        </Suspense>

        <Suspense fallback={<SectionFallback bg="bg-[#1a1700]" />}>
          <Garantia />
        </Suspense>

        <Suspense fallback={<SectionFallback bg="bg-[#111005]" />}>
          <SobreLeo />
        </Suspense>

        <Suspense fallback={<SectionFallback bg="bg-brand-yellow" />}>
          <Faq />
        </Suspense>
      </main>

      <Footer />
    </>
  )
}
