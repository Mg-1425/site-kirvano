"use client"

import { motion } from "framer-motion"
import { TrendingUp } from "lucide-react"

// 🔹 Ícone 1 (substitui Sparkles)
function IconCustom1({ className = "" }) {
  return (
    <svg
      className={`w-6 h-6 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14 17h6m-3 3v-6M4.857 4h4.286c.473 0 .857.384.857.857v4.286a.857.857 0 0 1-.857.857H4.857A.857.857 0 0 1 4 9.143V4.857C4 4.384 4.384 4 4.857 4Zm10 0h4.286c.473 0 .857.384.857.857v4.286a.857.857 0 0 1-.857.857h-4.286A.857.857 0 0 1 14 9.143V4.857c0-.473.384-.857.857-.857Zm-10 10h4.286c.473 0 .857.384.857.857v4.286a.857.857 0 0 1-.857.857H4.857A.857.857 0 0 1 4 19.143v-4.286c0-.473.384-.857.857-.857Z"
      />
    </svg>
  )
}

// 🔹 Ícone 2 (substitui Zap)
function IconCustom2({ className = "" }) {
  return (
    <svg
      className={`w-6 h-6 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2"
      />
    </svg>
  )
}

const features = [
  {
    icon: IconCustom1,
    title: "Facilidade ao cadastrar produtos",
    description:
      "Cadastre seus produtos em poucos minutos com nossa interface intuitiva e comece a vender rapidamente.",
  },
  {
    icon: TrendingUp,
    title: "Conversão alta",
    description:
      "Checkout otimizado para maximizar suas vendas e reduzir abandono de carrinho.",
  },
  {
    icon: IconCustom2,
    title: "Saque rápido",
    description:
      "Receba seu dinheiro em até 24 horas direto na sua conta bancária.",
  },
]

export function WhyKirvano() {
  return (
    <section className="py-20 lg:py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[#888] text-xs uppercase tracking-[0.2em] mb-4">
              Por que a Kirvano é a sua melhor escolha?
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Porque aqui você encontra mais do que uma plataforma
            </h2>

            <p className="text-2xl sm:text-3xl font-bold text-[#3B62F6] mb-6">
              Você encontra um parceiro
            </p>

            <p className="text-[#888] text-base lg:text-lg leading-relaxed mb-8">
              Na Kirvano, entendemos que cada venda representa um sonho. Por isso,
              construímos uma plataforma que vai além de ferramentas oferecemos
              suporte, tecnologia e soluções pensadas para o seu crescimento.
            </p>

            <motion.a
              href="#cadastro"
              className="inline-block bg-[#3B62F6] hover:bg-[#2D53E8] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 24px rgba(59,98,246,0.5)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Cadastre-se agora
            </motion.a>
          </motion.div>

          {/* Right Column */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 lg:gap-6"
              >
                <div className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 bg-[#111] border border-[#222] rounded-xl flex items-center justify-center">
                  <feature.icon className="text-[#3B62F6]" />
                </div>

                <div>
                  <h3 className="text-lg lg:text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#888] text-sm lg:text-base leading-relaxed">
                    {feature.description}
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