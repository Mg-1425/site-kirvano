"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { TrendingUp, ShoppingCart, CheckCircle } from "lucide-react"

function AnimatedNumber({
  target,
  prefix = "",
  suffix = "",
}: {
  target: number
  prefix?: string
  suffix?: string
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [target])

  return (
    <span>
      {prefix}
      {count.toLocaleString("pt-BR")}
      {suffix}
    </span>
  )
}

export function Hero() {
  const headlineWords1 = ["Venda", "mais,", "com", "menos", "complicação"]
  const headlineWords2 = ["Tudo", "o", "que", "você", "precisa,", "em", "um", "só", "lugar"]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#0A0A0A]">

      {/* BACKGROUND GLOW */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">

        {/* HEADLINE */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-extrabold text-white leading-[1.1] mb-4">
          {headlineWords1.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              className="inline-block mr-3"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* SUBHEADLINE */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white/90 mb-8">
          {headlineWords2.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.05 }}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </h2>

        {/* CTA BUTTON (NEON + ENERGIA VIVA) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="relative inline-block mb-16"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* OUTER GLOW ANIMADO */}
          <div className="absolute -inset-3 rounded-full bg-[conic-gradient(from_180deg,#3B82F6,#60A5FA,#22C55E,#3B82F6)] blur-2xl opacity-70 animate-spin-slow" />

          {/* PULSO INTERNO */}
          <div className="absolute -inset-2 rounded-full bg-[#3B82F6] opacity-40 blur-xl animate-pulse" />

          <motion.a
            href="#cadastro"
            onClick={scrollToTop}
            className="relative inline-block px-10 py-4 rounded-full font-semibold text-lg text-white bg-gradient-to-r from-[#3B82F6] to-[#2563EB] border border-white/10 overflow-hidden"
            whileHover={{
              boxShadow: "0 0 60px rgba(59,130,246,0.8)",
            }}
          >
            {/* brilho interno */}
            <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_60%)]" />

            <span className="relative z-10">
              Cadastre-se gratuitamente
            </span>
          </motion.a>
        </motion.div>

        {/* DASHBOARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="max-w-3xl mx-auto bg-[#111] border border-[#222] rounded-2xl p-6 lg:p-8"
        >

          <div className="grid grid-cols-3 gap-6 mb-8">

            <div>
              <TrendingUp className="mx-auto text-[#22C55E] mb-2" />
              <p className="text-white font-bold">
                <AnimatedNumber target={47832} prefix="R$ " />
              </p>
            </div>

            <div>
              <ShoppingCart className="mx-auto text-[#3B82F6] mb-2" />
              <p className="text-white font-bold">
                <AnimatedNumber target={312} />
              </p>
            </div>

            <div>
              <CheckCircle className="mx-auto text-[#22C55E] mb-2" />
              <p className="text-white font-bold">
                <AnimatedNumber target={98} suffix="%" />
              </p>
            </div>

          </div>

          {/* CHART */}
          <div className="h-40 relative">
            <svg className="w-full h-full" viewBox="0 0 400 100">

              <defs>
                <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                </linearGradient>
              </defs>

              <motion.path
                d="M0,80 Q50,70 100,60 T200,40 T300,30 T400,20"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.5, duration: 1.6 }}
              />

              <motion.path
                d="M0,80 Q50,70 100,60 T200,40 T300,30 T400,20 V100 H0 Z"
                fill="url(#chartGradient)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              />

            </svg>
          </div>

        </motion.div>

      </div>
    </section>
  )
}