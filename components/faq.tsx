"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "Existe alguma cobrança para criar uma conta na Kirvano?",
    answer: "Não! Criar uma conta na Kirvano é 100% gratuito. Você só paga uma pequena taxa quando realiza uma venda, sem mensalidades ou taxas escondidas.",
  },
  {
    question: "Vendi um produto físico, posso usar a Kirvano?",
    answer: "A Kirvano é focada em produtos digitais e infoprodutos. Para produtos físicos, recomendamos plataformas especializadas em e-commerce tradicional.",
  },
  {
    question: "Para quem é a Kirvano?",
    answer: "A Kirvano é ideal para criadores de conteúdo, infoprodutores, professores online, coaches, consultores e qualquer pessoa que queira monetizar seu conhecimento através de produtos digitais.",
  },
  {
    question: "Quais produtos posso vender pela Kirvano?",
    answer: "Você pode vender cursos online, e-books, mentorias, consultorias, assinaturas, comunidades, templates, planilhas e qualquer outro tipo de produto digital.",
  },
  {
    question: "Qual a taxa para vendas realizadas?",
    answer: "Nossa taxa é competitiva e transparente. Cobramos uma pequena porcentagem por venda aprovada, sem surpresas. Consulte nossa página de preços para valores atualizados.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 lg:py-32 bg-[#0A0A0A]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Perguntas frequentes
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-[#111] border border-[#222] rounded-xl p-5 lg:p-6 text-left transition-colors hover:border-[#3B62F6]"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-base lg:text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-[#3B62F6]" />
                  </motion.div>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="text-[#888] text-sm lg:text-base leading-relaxed mt-4 pt-4 border-t border-[#222]">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
