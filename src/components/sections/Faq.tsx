import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import AnimatedSection from '../AnimatedSection'
import Container from '../Container'
import iconWhatsapp from '../../assets/images/icon-whatsapp.svg'
import { WHATSAPP_URL } from '../../config/links'

const FAQ_ITEMS = [
  {
    question: 'Quais as formas de pagamento?',
    answer: ['Cartão de crédito, Pix e PayPal.'],
  },
  {
    question: 'As aulas são todas online?',
    answer: [
      'Sim! Todas as aulas são 100% online e foram gravadas com total dedicação para te entregar exatamente o que você precisa, de forma objetiva e clara. O conteúdo foi estruturado para que você aprenda de maneira prática e eficiente, sem enrolação.',
      'Além disso, você terá o suporte da minha equipe, onde poderá tirar dúvidas e receber ajuda sempre que precisar. Estamos aqui para garantir que você tenha o melhor aprendizado e conquiste resultados reais no mercado de leilões!',
    ],
  },
  {
    question: 'Preciso ter muito dinheiro para entrar?',
    answer: [
      'Dentro do curso, tem uma aula completa onde ensino diferentes formas e estratégias para ganhar dinheiro no leilão com investimentos variáveis. Você aprenderá como lucrar com revenda, repasse, avaliação para compradores e muito mais. Ou seja, independentemente do seu capital inicial, existem caminhos para você entrar no mercado de forma segura e estratégica! 🚀',
    ],
  },
  {
    question: 'Por quanto tempo tenho acesso ao curso?',
    answer: [
      'O acesso ao MLP é vitalício, enquanto a plataforma da Hotmart continuar ativa, você poderá acessar e assistir as aulas quando e onde quiser.',
    ],
  },
  {
    question: 'Quando recebo meu acesso?',
    answer: [
      'Imediatamente após a confirmação do pagamento. Você receberá um e-mail com as informações de acesso a plataforma. Para pagamentos em boleto a confirmação pode levar até 72 horas.',
    ],
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section
      aria-labelledby="faq-heading"
      className="bg-gradient-to-br from-[#dac00a] via-[#ebd643] to-[#b9a202] py-16 sm:py-20 md:py-24"
    >
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <AnimatedSection>
          <span className="inline-block rounded-full border border-white bg-brand-yellow/50 px-6 py-2 font-sora text-sm font-medium text-brand-dark">
            FAQ
          </span>
          <h2 id="faq-heading" className="mt-4 font-sora text-4xl font-bold text-brand-dark sm:text-5xl md:text-[64px]">
            Dúvidas
            <br />
            Frequentes
          </h2>

          <div className="mt-10 max-w-md rounded-2xl border border-white/60 bg-brand-yellow/40 p-5">
            <p className="font-sora text-sm leading-relaxed text-black">
              Agora, caso alguma dúvida não tenha sido respondida{' '}
              <u>você ainda pode falar com nossa equipe</u> pelo <strong>WhatsApp apertando no botão abaixo:</strong>
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center justify-center gap-3 rounded-2xl border-2 border-white bg-brand-yellow py-4 font-sora text-lg font-bold text-brand-dark transition-transform hover:scale-[1.02]"
            >
              DÚVIDAS? CLIQUE AQUI!
              <img src={iconWhatsapp} alt="" aria-hidden="true" className="h-6 w-6" />
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex flex-col gap-4">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openIndex === i
              return (
                <div key={item.question} className="rounded-[35px] border-2 border-white bg-brand-yellow">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8 sm:py-6"
                  >
                    <span className="font-sora text-lg font-bold text-brand-dark sm:text-2xl">
                      {i + 1}. {item.question}
                    </span>
                    <span aria-hidden="true" className="font-sora text-2xl font-bold text-[#938000] sm:text-3xl">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${i}`}
                        role="region"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-3 px-6 pb-6 sm:px-8">
                          {item.answer.map((paragraph, pi) => (
                            <p key={pi} className="font-sora text-base text-brand-dark sm:text-xl">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  )
}
