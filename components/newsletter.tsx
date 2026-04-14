"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export function Newsletter() {
  const [email, setEmail] = useState("")

  return (
    <section id="newsletter" className="py-20 lg:py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT - CINEMATIC ENTRY */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-[#888] text-xs uppercase tracking-[0.2em] mb-4">
              Newsletter
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Soluções e novidades para escalar o seu negócio digital
            </h2>

            <p className="text-[#888] text-base lg:text-lg leading-relaxed mb-8">
              Receba conteúdos exclusivos sobre estratégias de vendas, marketing digital 
              e as últimas novidades da plataforma direto no seu email.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor email"
                className="flex-1 bg-[#111] border border-[#333] rounded-full px-6 py-4 text-white placeholder:text-[#555] focus:outline-none focus:border-[#3B62F6] transition-colors"
              />

              <motion.button
                type="submit"
                className="bg-[#3B62F6] hover:bg-[#2D53E8] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 24px rgba(59,98,246,0.5)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                Inscrever
              </motion.button>
            </form>
          </motion.div>

          {/* RIGHT - CINEMATIC CARD + ZOOM */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden h-[320px] lg:h-[380px] border border-[#2a2a2a]"
              style={{
                boxShadow: "0 0 40px rgba(59,98,246,0.25)",
              }}
              whileHover={{ y: -6 }}
            >
              {/* IMAGEM COM ZOOM CONTÍNUO */}
              <motion.img
                src="/newsletter.jpg"
                alt="Newsletter preview"
                className="absolute inset-0 w-full h-full object-cover"
                animate={{
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 12,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              />

              {/* glow azul sutil */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#3B62F6]/20 via-transparent to-transparent" />

              {/* conteúdo */}
              <div className="relative p-6 h-full flex flex-col justify-end">
                <span className="inline-block bg-[#3B62F6]/20 text-[#3B62F6] text-xs font-medium px-3 py-1 rounded-full mb-3 w-fit">
                  Novidades
                </span>

                <h3 className="text-lg lg:text-xl font-semibold text-white leading-snug">
                  Kirvano comemora marca de 1 milhão de infoprodutores cadastrados
                </h3>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}