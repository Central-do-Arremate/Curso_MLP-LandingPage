import Container from './Container'

export default function Footer() {
  return (
    <footer className="bg-[#111005] py-12 sm:py-16">
      <Container className="flex flex-col items-center gap-6 text-center">
        <p className="max-w-3xl font-sora text-sm text-white/80">
          LR EDUCAÇÃO DIGITAL LTDA - CNPJ: 52.235.980/0001-05
          <br />
          Atendimento via WhatsApp em dias úteis de 09h às 21h. Atendimento diário por e-mail:{' '}
          <a href="mailto:suporte@lreducacao.com.br" className="underline hover:text-brand-yellow">
            suporte@lreducacao.com.br
          </a>
        </p>
        <p className="max-w-4xl font-sora text-xs leading-relaxed text-white/50">
          A empresa LR EDUCAÇÃO DIGITAL LTDA, CNPJ 52.235.980/0001-05, não tem nenhuma relação institucional com o
          Facebook, Instagram, WhatsApp ou Facebook Messenger. Ao abordar questões financeiras, de qualquer um dos
          nossos produtos, sites, vídeos, palestras, programas ou outros conteúdos, fazemos todos os esforços para
          garantir que estes representem fielmente nossos cursos e sua capacidade de crescer o seu negócio e
          melhorar sua vida.
        </p>
      </Container>
    </footer>
  )
}
