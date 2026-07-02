import AnimatedSection from '../AnimatedSection'
import Container from '../Container'
import chevronDown from '../../assets/images/chevron-down.svg'

export default function Metodo() {
  return (
    <section aria-labelledby="metodo-heading" className="bg-[#161616] py-16 sm:py-20 md:py-24">
      <Container className="flex flex-col items-center">
        <AnimatedSection className="max-w-4xl text-center">
          <h2 id="metodo-heading" className="font-sora text-3xl font-semibold text-white sm:text-4xl md:text-5xl lg:text-[57px]">
            Como o nosso <span className="text-gradient-gold font-bold underline">MÉTODO</span> funciona:
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-8 max-w-5xl md:mt-14">
          <p className="text-center font-sora text-lg font-medium leading-relaxed text-white sm:text-2xl md:text-[35px] md:leading-[52px]">
            Com as aulas do <strong className="font-bold text-brand-yellow">MLP</strong>, você vai sair{' '}
            <strong className="font-bold text-brand-yellow">do ZERO à ARREMATAÇÃO</strong> com toda a capacidade de
            identificar e arrematar carros com o mais <u>alto potencial de lucro</u>!
          </p>
          <p className="mt-10 text-center font-sora text-lg font-medium leading-relaxed text-white sm:text-2xl md:text-[35px] md:leading-[52px]">
            Você aprende de forma <strong className="font-bold">prática e detalhada</strong> tudo o que precisa para{' '}
            <u>dominar o mercado de leilões automotivos</u>. Desde entender os{' '}
            <strong className="font-bold text-brand-yellow">diferentes tipos de leilões</strong> e saber quais são{' '}
            <strong className="font-bold text-brand-yellow">os mais confiáveis</strong>, até avaliar{' '}
            <strong className="font-bold text-brand-yellow">veículos com alto potencial de lucro</strong>, mesmo sem
            nunca ter tido qualquer experiência.
          </p>
          <p className="mt-10 text-center font-sora text-lg font-medium leading-relaxed text-white sm:text-2xl md:text-[35px] md:leading-[52px]">
            Você estará pronto para <u>transformar leilões</u> em uma <strong className="font-bold">fonte segura e lucrativa</strong> de
            renda!
          </p>
        </AnimatedSection>

        <img draggable={false} src={chevronDown} alt="" aria-hidden="true" className="mt-10 h-10 w-10 animate-bounce opacity-80" />
      </Container>
    </section>
  )
}
