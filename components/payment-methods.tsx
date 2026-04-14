"use client"

import { motion } from "framer-motion"
import { QrCode, CreditCard, Wallet, FileText } from "lucide-react"

const paymentMethods = [
  {
    icon: QrCode,
    title: "Pix",
    description: "Pagamento instantâneo com a forma mais usada pelos brasileiros",
  },
  {
    icon: CreditCard,
    title: "Cartão",
    description: "Crédito e débito com as principais bandeiras do mercado",
  },
  {
    icon: Wallet,
    title: "E-Wallets",
    description: "Integração com as principais carteiras digitais",
  },
  {
    icon: FileText,
    title: "Boleto",
    description: "Boleto bancário com compensação automática",
  },
]

export function PaymentMethods() {
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
            Métodos de Pagamento
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Aceite pagamentos de todas as formas
          </h2>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12 lg:mb-16">
          {paymentMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}

              whileHover={{
                y: -6,
                transition: { duration: 0.12, ease: "easeOut" },
              }}

              className="relative group bg-[#161616] border border-[#222] rounded-xl p-6 lg:p-8 text-center cursor-pointer transition-all duration-150"
            >
              {/* 🔵 NEON AZUL NO HOVER */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none"
                style={{
                  boxShadow: `
                    0 0 0 1px #3B62F6,
                    0 0 10px rgba(59, 98, 246, 0.6),
                    0 0 25px rgba(59, 98, 246, 0.35)
                  `,
                }}
              />

              {/* CONTENT */}
              <div className="relative z-10">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-[#111] border border-[#222] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <method.icon className="w-6 h-6 lg:w-8 lg:h-8 text-[#3B62F6]" />
                </div>

                <h3 className="text-lg lg:text-xl font-semibold text-white mb-2">
                  {method.title}
                </h3>

                <p className="text-[#888] text-xs lg:text-sm leading-relaxed">
                  {method.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FOOTER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Facilidade de Saques
          </h3>

          <p className="text-[#888] text-base lg:text-lg leading-relaxed">
            Com a Kirvano, você tem total controle sobre seu dinheiro. Faça saques a qualquer momento,
            com processamento rápido e taxas transparentes. Seu faturamento disponível em até 24 horas
            após a confirmação da venda.
          </p>
        </motion.div>

      </div>
    </section>
  )
}