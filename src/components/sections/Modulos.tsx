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

export default function Modulos() {
  return (
    <section aria-labelledby="modulos-heading" className="relative overflow-hidden bg-[#161616] py-16 sm:py-20 md:py-24">
      <img src={metodoBg} alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60" loading="lazy" />

      <Container className="relative">
        <AnimatedSection>
          <h2
            id="modulos-heading"
            className="text-center font-sora text-2xl font-bold text-gradient-gold sm:text-4xl md:text-5xl lg:text-[60px]"
          >
            Olha o que te espera do lado de dentro:
          </h2>
        </AnimatedSection>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-14 lg:grid-cols-5">
          {MODULES.map((mod, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl">
                <img
                  src={mod.image}
                  alt={mod.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2} className="mt-10 md:mt-14">
          <p className="mx-auto max-w-4xl text-center font-sora text-lg font-medium text-white [text-shadow:0_4px_4px_rgba(0,0,0,0.25)] sm:text-2xl md:text-[35px]">
            São <strong className="font-bold">+ de 100 arrematações</strong> que geraram{' '}
            <strong className="font-bold">+ de R$3.000.000</strong> (milhões) aplicando esse passo a passo.
          </p>
        </AnimatedSection>
      </Container>
    </section>
  )
}
