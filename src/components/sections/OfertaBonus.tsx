import AnimatedSection from '../AnimatedSection'
import Container from '../Container'
import CtaButton from '../CtaButton'
import { CHECKOUT_URL } from '../../config/links'
import oferbaBgPattern from '../../assets/images/oferta-bg-pattern.avif'
import iconCheck from '../../assets/images/icon-check.avif'
import iconGift from '../../assets/images/icon-gift.avif'
import badgeCompraSegura from '../../assets/images/badge-compra-segura.avif'
import mockupEntregaveis from '../../assets/images/mockup-entregaveis.avif'
import payMastercard from '../../assets/images/pay-mastercard.svg'
import payPix from '../../assets/images/pay-pix.svg'
import payAmex from '../../assets/images/pay-amex.svg'
import payPaypal from '../../assets/images/pay-paypal.svg'
import payVisa from '../../assets/images/pay-visa.svg'

const BONUS_VALUE_ITEMS = [
  'Aula de Marketing Automotivo (R$2.700,00)',
  'Grupo de Repasse por 01 ANO (R$390,00)',
  'Aula Especial com Caio Paoli, maior referência em Leilões Judiciais (R$700,00)',
  'Ebook Leilão Lucrativo: O Mapa do Leilão (R$99,90)',
]

const OFFER_COURSE_ITEMS = [
  '+ de 30 aulas do ZERO À ARREMATAÇÃO',
  'Lista dos 10 melhores leilões (segurança)',
  'Como NÃO CAIR em leilões FAKES',
  'Acesso vitalício a Comunidade MLP',
  'Ebook Leilão Lucrativo: O Mapa do Leilão (R$99,90)',
]

const OFFER_BONUS_INCLUDED = [
  'Aula de Marketing Automotivo (R$2.700,00)',
  'Grupo de Repasse por 01 ANO (R$390,00)',
  'Aula Especial com Caio Paoli, maior referência em Leilões Judiciais (R$700,00)',
]

const PAYMENT_METHODS = [
  { src: payPix, alt: 'Pix' },
  { src: payMastercard, alt: 'Mastercard' },
  { src: payVisa, alt: 'Visa' },
  { src: payAmex, alt: 'American Express' },
  { src: payPaypal, alt: 'PayPal' },
]

export default function OfertaBonus() {
  return (
    <section id="oferta" aria-labelledby="oferta-heading" className="relative overflow-hidden bg-black py-16 sm:py-20 md:py-24">
      <img draggable={false} src={oferbaBgPattern} alt="" aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40" loading="lazy" />

      <Container className="relative">
        <AnimatedSection className="flex justify-center">
          <span
            id="oferta-heading"
            className="rounded-[25px] border-[3px] border-brand-yellow-light bg-brand-yellow/50 px-6 py-4 text-center font-sora text-xl font-bold text-white sm:px-10 sm:text-2xl md:text-[35px]"
          >
            Você irá ganhar BÔNUS exclusivos! 🎁
          </span>
        </AnimatedSection>

        <div className="mt-10 grid grid-cols-1 items-start gap-6 md:mt-14 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col gap-6">
            <AnimatedSection delay={0.1}>
              <div className="flex flex-col rounded-[35px] bg-[#9d2121]/55 p-6 sm:p-8">
                <h3 className="rounded-2xl bg-[#d61515] py-4 text-center font-sora text-xl font-bold text-white sm:text-2xl md:text-[35px]">
                  VALOR DOS BÔNUS
                </h3>
                <ul className="mt-8 flex flex-col gap-5">
                  {BONUS_VALUE_ITEMS.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <img draggable={false} src={iconCheck} alt="" aria-hidden="true" className="mt-0.5 h-7 w-7 flex-shrink-0 sm:h-8 sm:w-8" />
                      <span className="font-sora text-base font-semibold text-white sm:text-xl md:text-[27px] md:leading-[32px]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 rounded-2xl border border-white/40 py-4 text-center font-sora text-xl font-bold text-white sm:text-2xl md:text-[35px]">
                  Valor: <span className="line-through">R$3.890,00</span>
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15} className="hidden justify-center sm:flex">
              <img
                draggable={false}
                src={mockupEntregaveis}
                alt="Mockup dos materiais entregáveis do curso: ebook, notebook, tablet e celular com o conteúdo do MLP"
                loading="lazy"
                className="h-auto w-full max-w-md -rotate-2 sm:max-w-lg lg:max-w-full"
              />
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.2}>
            <div className="flex h-full flex-col rounded-[35px] bg-[#028246]/55 p-6 sm:p-8">
              <h3 className="rounded-2xl bg-brand-green py-4 text-center font-sora sm:text-2xl">
                <span className="block text-xl font-bold text-white md:text-[35px]">OPORTUNIDADE EXCLUSIVA</span>
                <span className="block text-base font-semibold text-white md:text-2xl">(COMPRANDO AGORA)</span>
              </h3>

              <ul className="mt-8 flex flex-col gap-5">
                {OFFER_COURSE_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <img draggable={false} src={iconCheck} alt="" aria-hidden="true" className="mt-0.5 h-7 w-7 flex-shrink-0 sm:h-8 sm:w-8" />
                    <span className="font-sora text-base font-semibold text-white sm:text-xl md:text-[27px] md:leading-[32px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <ul className="mt-5 flex flex-col gap-5 border-t border-white/20 pt-5">
                {OFFER_BONUS_INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <img draggable={false} src={iconGift} alt="" aria-hidden="true" className="mt-0.5 h-7 w-7 flex-shrink-0 sm:h-8 sm:w-8" />
                    <span className="font-sora text-base font-semibold text-white/70 line-through sm:text-xl md:text-[27px] md:leading-[32px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <hr className="mt-8 border-brand-mint" />

              <p className="mt-8 text-center font-sora text-xl font-bold text-white sm:text-2xl md:text-[35px]">
                Tenha <span className="text-brand-mint">tudo isso</span> por APENAS:
              </p>
              <p className="mt-2 text-center font-sora font-bold text-white">
                <span className="text-3xl sm:text-4xl md:text-[65px]">12X</span>{' '}
                <span className="text-4xl sm:text-5xl md:text-[105px]">R$33,09</span>
              </p>
              <p className="mt-1 text-center font-sora text-lg font-medium text-white sm:text-xl md:text-[30px]">
                ou R$397,00 à vista
              </p>

              <img draggable={false} src={badgeCompraSegura} alt="Selo de compra 100% segura" loading="lazy" className="mx-auto mt-6 h-auto w-full max-w-[320px]" />
            </div>
          </AnimatedSection>
        </div>

        <div className="mx-auto mt-12 max-w-2xl md:mt-16">
          <CtaButton href={CHECKOUT_URL}>QUERO APROVEITAR A OFERTA</CtaButton>

          <ul className="mt-6 flex w-full flex-nowrap items-center justify-center gap-3 opacity-70 sm:gap-4">
            {PAYMENT_METHODS.map((p) => (
              <li key={p.alt} className="h-4 w-11 flex-shrink-0 xs:h-5 xs:w-12 sm:h-10 sm:w-28">
                <img draggable={false} src={p.src} alt={p.alt} loading="lazy" className="h-full w-full object-contain" />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
