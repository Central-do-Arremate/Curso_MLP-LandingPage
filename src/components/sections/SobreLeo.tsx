import AnimatedSection from '../AnimatedSection'
import Container from '../Container'
import sobreLeoPhoto from '../../assets/images/sobre-leo.avif'

export default function SobreLeo() {
  return (
    <section aria-labelledby="sobre-leo-heading" className="border-y-[3px] border-brand-yellow-light bg-[#111005] py-16 sm:py-20 md:py-24">
      <Container className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
        <AnimatedSection className="flex-shrink-0">
          <img
              draggable={false}
            src={sobreLeoPhoto}
            alt="Leonardo Ribeiro, especialista em leilão automotivo, sorrindo em seu escritório"
            loading="lazy"
            width={455}
            height={651}
            className="mx-auto h-auto w-64 rounded-[24px] sm:w-80 md:w-[400px]"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.15} className="max-w-2xl text-center md:text-left">
          <h2 id="sobre-leo-heading" className="font-sora text-3xl font-semibold text-white sm:text-4xl md:text-[50px]">
            Prazer, sou <span className="text-brand-yellow">Leo Ribeiro</span>
          </h2>
          <p className="mt-6 font-sora text-base leading-relaxed text-white/90 sm:text-lg md:text-xl md:leading-[32px]">
            Me chamo Leonardo Ribeiro, sou cristão, formado em Marketing Administrativo e especialista no mercado de
            leilão automotivo e em avaliação automotiva.
          </p>
          <p className="mt-4 font-sora text-base leading-relaxed text-white/90 sm:text-lg md:text-xl md:leading-[32px]">
            Há mais de 5 anos, dedico minha vida ao mercado de leilões de carros, transformando oportunidades em
            lucro. Ao longo dessa jornada, já realizei mais de 100 arremates próprios e faturei mais de 3 milhões de
            reais, sempre buscando estratégias inteligentes para maximizar os ganhos nesse mercado.
          </p>
          <p className="mt-4 font-sora text-base leading-relaxed text-white/90 sm:text-lg md:text-xl md:leading-[32px]">
            Agora, minha missão é te ensinar o caminho para lucrar com carros de leilão, seja como renda extra ou
            como um negócio lucrativo de verdade.
          </p>
          <p className="mt-4 font-sora text-base leading-relaxed text-white/90 sm:text-lg md:text-xl md:leading-[32px]">
            Se você quer aprender com quem vive isso todos os dias e descobrir como transformar leilões em uma fonte
            de renda previsível, está no lugar certo!
          </p>
        </AnimatedSection>
      </Container>
    </section>
  )
}
