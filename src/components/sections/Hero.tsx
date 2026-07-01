import { motion } from 'framer-motion'
import Container from '../Container'
import CtaButton from '../CtaButton'
import Ticker from '../Ticker'
import HeroVideoPlayer from '../HeroVideoPlayer'
import heroBg from '../../assets/images/hero-bg.avif'
import heroThumbnail from '../../assets/images/hero-thumbnail.avif'
import hotmartBadge from '../../assets/images/hotmart-badge.avif'

const TICKER_ITEMS = ['RENDA EXTRA', 'PASSO A PASSO', 'DO ZERO A ARREMATAÇÃO', '+30 AULAS']
const HERO_VIDEO_ID = '_N5bE61y6Gg'

export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-brand-black pb-0 pt-10 sm:pt-14 md:pt-16">
      <img
        src={heroBg}
        alt=""
        {...{ fetchpriority: 'high' }}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-90"
      />

      <Container className="relative flex flex-col items-center">
        <motion.img
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          src={hotmartBadge}
          alt="Selo de compra garantida Hotmart"
          width={90}
          height={90}
          className="mb-4 h-[70px] w-[70px] sm:h-[90px] sm:w-[90px]"
        />

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center font-sora text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl lg:text-[60px] lg:leading-[70px]"
        >
          Aprenda como <span className="text-brand-yellow">dobrar o seu patrimônio</span> transformando carros em{' '}
          <span className="text-brand-yellow">renda extra!</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 max-w-3xl text-center font-sora text-lg font-semibold text-white sm:text-xl md:text-2xl lg:text-[30px]"
        >
          Nesse vídeo eu mostro como eu faturei mais de 3 milhões de reais com o mercado de leilão automotivo.
        </motion.p>

        <HeroVideoPlayer
          videoId={HERO_VIDEO_ID}
          poster={heroThumbnail}
          posterAlt="Leo Ribeiro explicando o método de leilões perfeito em vídeo de apresentação"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 max-w-3xl text-center font-sora text-base leading-relaxed text-white [text-shadow:0_4px_4px_rgba(0,0,0,0.25)] sm:text-xl md:mt-10 md:text-2xl lg:text-[30px]"
        >
          Com esse método eu te ensino como <u className="font-bold">comprar carros</u> por até{' '}
          <u className="font-bold text-brand-yellow">metade do preço</u> e{' '}
          <u className="font-semibold text-brand-yellow">lucrar +40%</u> na revenda de automóveis, mesmo sem
          experiência no mercado!
        </motion.p>

        <div className="mt-8 w-full max-w-2xl md:mt-10">
          <CtaButton href="#oferta">QUERO LUCRAR COM LEILÕES</CtaButton>
        </div>

        <p className="mb-10 mt-6 text-center font-sora text-sm text-white [text-shadow:0_4px_4px_rgba(0,0,0,0.25)] sm:text-lg md:mb-14 md:text-2xl">
          Receba seu <strong>acesso imediatamente</strong>, após a confirmação do pagamento.
        </p>
      </Container>

      <Ticker items={TICKER_ITEMS} label="Destaques do curso" />
    </header>
  )
}
