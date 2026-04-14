"use client"

import { motion } from "framer-motion"
import { Clock } from "lucide-react"

const articles = [
  {
    category: "Afiliados",
    title: "O segredo dos afiliados que vendem todos os dias",
    readTime: "5 min",
    color: "#22C55E",
    image: "/afiliados.jpg",
  },
  {
    category: "Business",
    title: "Como transformar um produto digital em um negócio lucrativo",
    readTime: "8 min",
    color: "#3B62F6",
    image: "/business.jpg",
  },
  {
    category: "Estratégia",
    title: "Tráfego pago ou orgânico: qual a melhor estratégia para vender mais?",
    readTime: "6 min",
    color: "#F59E0B",
    image: "/estrategia.png",
  },
]

export function Blog() {
  return (
    <section className="py-20 lg:py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <p className="text-[#888] text-xs uppercase tracking-[0.2em] mb-4">
            Recomendados
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Conteúdos para impulsionar suas vendas
          </h2>
        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl group"
            >
              {/* 🔥 NEON GLOW MAIS FORTE */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  boxShadow: `
                    0 0 0 1px ${article.color}90,
                    0 0 10px ${article.color}60,
                    0 0 25px ${article.color}40,
                    0 0 55px ${article.color}25
                  `,
                }}
              />

              {/* CARD */}
              <div className="relative bg-[#111] border border-[#222] rounded-2xl overflow-hidden transition-all duration-300 group-hover:-translate-y-1">

                {/* IMAGEM */}
                <div className="relative h-40 lg:h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.category}
                    className="w-full h-full object-cover"
                  />

                  {/* overlay escuro */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <span
                    className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-3"
                    style={{
                      backgroundColor: `${article.color}20`,
                      color: article.color,
                    }}
                  >
                    {article.category}
                  </span>

                  <h3 className="text-lg font-semibold text-white leading-snug mb-4">
                    {article.title}
                  </h3>

                  <div className="flex items-center gap-2 text-[#888] text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime} de leitura</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}