"use client"

import { motion } from "framer-motion"
import { Palette, RefreshCw, LayoutDashboard, Repeat } from "lucide-react"

const features = [
  {
    icon: Palette,
    title: "Checkout 100% editável",
    description:
      "Personalize cada detalhe do seu checkout para combinar com a identidade da sua marca e aumentar conversões.",
  },
  {
    icon: RefreshCw,
    title: "Retentativa inteligente",
    description:
      "Nossa tecnologia recupera vendas perdidas automaticamente, tentando novamente com diferentes estratégias.",
  },
  {
    icon: LayoutDashboard,
    title: "Gestão completa",
    description:
      "Dashboard intuitivo com todas as métricas que você precisa para tomar decisões estratégicas.",
  },
  {
    icon: Repeat,
    title: "SaaS e Modelos de Recorrência",
    description: "Crie assinaturas, planos mensais e modelos de recorrência com facilidade.",
  },
]

// 👇 AVATARES FICTÍCIOS
const avatars = [
  "https://i.pravatar.cc/150?img=12",
  "https://i.pravatar.cc/150?img=32",
  "https://i.pravatar.cc/150?img=45",
  "https://i.pravatar.cc/150?img=56",
  "https://i.pravatar.cc/150?img=68",
  "https://i.pravatar.cc/150?img=21",
  "https://i.pravatar.cc/150?img=14",
  "https://i.pravatar.cc/150?img=33",
]

export function Features() {
  return (
    <section className="py-20 lg:py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-[#888] text-xs uppercase tracking-[0.2em] mb-4">
                Para o seu negócio lucrar mais
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
                Menos vendas negadas, mais dinheiro no seu caixa
              </h2>
            </motion.div>

            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 lg:gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#111] border border-[#222] rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-[#3B62F6]" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-[#888] text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#cadastro"
              className="inline-block bg-[#3B62F6] hover:bg-[#2D53E8] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-[0_0_24px_rgba(59,98,246,0.5)]"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 24 }}
              viewport={{ once: true }}
            >
              Faça parte
            </motion.a>
          </div>

          {/* RIGHT - PREMIUM CAROUSEL */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative bg-[#111] border border-[#222] rounded-2xl p-8 lg:p-12 overflow-hidden">

              <p className="text-5xl lg:text-6xl font-bold text-[#3B62F6] mb-2">
                +2.2 Milhões
              </p>

              <p className="text-lg lg:text-xl text-white mb-8">
                De usuários confiam na nossa plataforma
              </p>

              {/* 🔥 CARROSSEL PREMIUM COM BLUR NAS BORDAS */}
              <div className="relative w-full overflow-hidden">

                {/* fade left */}
                <div className="absolute left-0 top-0 h-full w-16 z-10 bg-gradient-to-r from-[#111] to-transparent" />

                {/* fade right */}
                <div className="absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-[#111] to-transparent" />

                <motion.div
                  className="flex gap-3 w-max"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    repeat: Infinity,
                    duration: 18, // 👈 mais lento = mais premium
                    ease: "linear",
                  }}
                >
                  {[...avatars, ...avatars].map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt="User"
                      className="
                        w-12 h-12 rounded-full object-cover
                        border-2 border-[#111]
                        shadow-md
                      "
                    />
                  ))}
                </motion.div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}