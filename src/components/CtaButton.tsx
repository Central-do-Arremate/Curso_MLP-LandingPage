import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface CtaButtonProps {
  href: string
  children: ReactNode
  className?: string
}

export default function CtaButton({ href, children, className = '' }: CtaButtonProps) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`block w-full rounded-2xl sm:rounded-[30px] border-[3px] border-brand-green bg-gradient-to-r from-brand-green-dark to-brand-green px-6 py-5 text-center font-bold text-white shadow-lg shadow-brand-green/20 text-xl sm:text-2xl md:text-3xl ${className}`}
    >
      {children}
    </motion.a>
  )
}
