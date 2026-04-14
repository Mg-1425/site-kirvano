"use client"

import { motion } from "framer-motion"
import { Lock, Check, Headphones } from "lucide-react"

const trustItems = [
  { icon: Lock, text: "SSL 256-bit" },
  { icon: Check, text: "LGPD" },
  { icon: Headphones, text: "Suporte 24/7" },
]

export function FinalCTA() {
  return (
    <section id="cadastro" className="py-20 lg:py-32 bg-[#0A0A0A]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Pronto para transformar seu conhecimento em negócio?
          </h2>
          <p className="text-lg lg:text-xl text-[#888] mb-10">
            Cadastre-se gratuitamente. Sem cartão de crédito, sem burocracia.
          </p>

          <motion.a
            href="#"
            className="inline-block bg-[#3B62F6] hover:bg-[#2D53E8] text-white font-semibold text-lg px-10 py-5 rounded-full transition-all duration-200"
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 32px rgba(59,98,246,0.5)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            Criar minha conta grátis
          </motion.a>

          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8 mt-10">
            {trustItems.map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-2 text-[#888]"
              >
                <item.icon className="w-4 h-4 text-[#22C55E]" />
                <span className="text-sm">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
