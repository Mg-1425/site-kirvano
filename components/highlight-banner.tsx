"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function HighlightBanner() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full bg-[#1A3AFF] py-6 lg:py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8">
          <div className="text-center lg:text-left">
            <p className="text-white font-bold text-lg lg:text-xl uppercase tracking-wide mb-1">
              Fatura mais de 50 mil por mês?
            </p>
            <p className="text-white/90 text-sm lg:text-base">
              A Kirvano tem benefícios exclusivos para quem está jogando grande.
            </p>
          </div>
          <a
            href="#contato"
            className="flex items-center gap-2 text-white font-semibold hover:underline transition-all group"
          >
            Entre em contato conosco!
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </motion.section>
  )
}
