"use client"

import { motion } from "framer-motion"

export function About() {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Muito além de uma plataforma. A Kirvano é uma causa.
          </h2>
          <p className="text-lg lg:text-xl text-[#888] leading-relaxed">
            Acreditamos que todo conhecimento pode mudar vidas, começando pela sua.
          </p>
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16 lg:mb-20"
        >
          <div className="bg-[#111] border border-[#222] rounded-2xl p-8 lg:p-12">
            <p className="text-xl lg:text-2xl xl:text-3xl text-white italic leading-relaxed mb-6">
              {'"'}A Kirvano nasceu da nossa vontade de transformar a vida de quem ensina e empreende na internet. 
              Acreditamos que, por trás de cada venda, existe um sonho sendo realizado e a nossa missão é 
              facilitar esse caminho com tecnologia simples, humana e eficiente.{'"'}
            </p>
            <footer className="text-[#888]">
              <span className="text-[#3B62F6] font-semibold">— Lorram Félix</span>, Fundador da Kirvano
            </footer>
          </div>
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-[#888] text-base lg:text-lg leading-relaxed">
            A Kirvano nasceu com um propósito claro: tornar o mercado digital mais justo, mais humano e mais 
            acessível para quem quer viver de suas ideias. Não somos apenas um painel cheio de ferramentas. 
            Somos pessoas que acreditam em pessoas.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
