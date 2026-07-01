import AnimatedSection from '../AnimatedSection'
import Container from '../Container'
import Ticker from '../Ticker'
import garantiaBadge from '../../assets/images/garantia-60-dias.avif'

const BANNER_ITEMS = ['MÉTODO PERFEITO DE ALAVANCAGEM NOS LEILÕES', 'DO ZERO A ARREMATAÇÃO']

export default function Garantia() {
  return (
    <>
      <Ticker items={BANNER_ITEMS} label="Método perfeito de alavancagem nos leilões" />

      <section
        aria-labelledby="garantia-heading"
        className="bg-gradient-to-br from-[#1a1700] via-[#403b18] to-[#1a1700] py-16 sm:py-20 md:py-24"
      >
        <Container className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
          <AnimatedSection className="flex-shrink-0">
            <img
              src={garantiaBadge}
              alt="Selo de garantia de 60 dias de satisfação"
              loading="lazy"
              width={658}
              height={656}
              className="mx-auto h-auto w-64 sm:w-80 md:w-[350px]"
            />
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="max-w-xl text-center md:text-left">
            <h2 id="garantia-heading" className="font-sora text-3xl font-medium leading-tight text-white sm:text-4xl md:text-[65px] md:leading-[75px]">
              GARANTIA DE
              <br />
              SATISFAÇÃO <span className="text-brand-mint">100%</span>
            </h2>
            <p className="mt-6 font-sora text-base leading-relaxed text-white sm:text-lg md:text-[25px] md:leading-[35px]">
              Caso, dentro de um período de <u>sessenta dias consecutivos</u> a partir da data da compra, você
              perceba que o treinamento não proporcionará uma mudança significativa em sua vida, você pode me enviar
              um e-mail solicitando o reembolso e o valor será restituído integralmente.
            </p>
            <p className="mt-6 font-sora text-xl font-semibold uppercase text-white sm:text-2xl md:text-[35px]">
              Nosso compromisso com você!
            </p>
          </AnimatedSection>
        </Container>
      </section>
    </>
  )
}
