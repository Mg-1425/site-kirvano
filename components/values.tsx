"use client"

import { motion } from "framer-motion"
import { Users, Target, Eye, Lightbulb, RefreshCw } from "lucide-react"

const values = [
  {
    icon: Users,
    title: "Cliente no centro",
    description: "Todas as nossas decisões são tomadas pensando no sucesso dos nossos clientes.",
  },
  {
    icon: Target,
    title: "Comprometimento",
    description: "Assumimos responsabilidade e entregamos resultados com excelência.",
  },
  {
    icon: Eye,
    title: "Transparência",
    description: "Comunicação clara e honesta em todas as nossas relações.",
  },
  {
    icon: Lightbulb,
    title: "Inovação",
    description: "Buscamos constantemente novas formas de melhorar a experiência.",
  },
  {
    icon: RefreshCw,
    title: "Adaptabilidade",
    description: "Evoluímos junto com o mercado e as necessidades dos nossos usuários.",
  },
]

export function Values() {
  return (
    <section className="py-20 lg:py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Nossos valores
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">

          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{
                y: -6,
                borderColor: "#3B62F6",
                boxShadow: "0 0 18px rgba(59,98,246,0.35)",
              }}
              className="bg-[#111] border border-[#222] rounded-xl p-6 cursor-pointer transition-all duration-100 ease-out"
            >
              <div className="w-12 h-12 bg-[#0A0A0A] border border-[#222] rounded-xl flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-[#3B62F6]" />
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">
                {value.title}
              </h3>

              <p className="text-[#888] text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}