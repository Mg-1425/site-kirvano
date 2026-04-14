"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const milestones = [
  {
    year: "2023",
    title: "Beta com 100 mil usuários",
    description: "Lançamos a versão beta da plataforma, alcançando 100 mil usuários cadastrados nos primeiros meses.",
  },
  {
    year: "2024",
    title: "Lançamento oficial com 500 mil cadastros",
    description: (
  <>
    A Kirvano foi lançada oficialmente, superando a marca de meio milhão
    <br />
    de produtores digitais.
  </>
)
  },
  {
    year: "2025",
    title: "Nova fase como subadquirente",
    description: "Iniciamos uma nova era com licença de subadquirente e expansão nacional, consolidando nossa posição no mercado.",
  },
]

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"])

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
            Nossa história
          </h2>
        </motion.div>

        <div ref={containerRef} className="relative max-w-2xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-px bg-[#222]">
            <motion.div
              className="w-full bg-[#3B62F6]"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Milestones */}
          <div className="space-y-12 lg:space-y-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative pl-12 lg:pl-0 ${
                  index % 2 === 0 ? "lg:pr-1/2 lg:text-right" : "lg:pl-1/2 lg:ml-auto"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-2.5 lg:left-1/2 lg:-translate-x-1/2 top-1 w-3 h-3 rounded-full bg-[#3B62F6] border-2 border-[#0A0A0A]" />

                <div className={`lg:max-w-xs ${index % 2 === 0 ? "lg:mr-12" : "lg:ml-12"}`}>
                  <span className="text-[#3B62F6] font-bold text-lg lg:text-xl">
                    {milestone.year}
                  </span>
                  <h3 className="text-xl lg:text-2xl font-semibold text-white mt-2 mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-[#888] text-sm lg:text-base leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
