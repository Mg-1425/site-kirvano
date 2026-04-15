"use client"

import { motion } from "framer-motion"
import { KirvanoLogo } from "./kirvano-logo"

const footerLinks = {
  institucional: [
    { label: "Sobre nós", href: "#sobre" },
    { label: "Canal de Distribuição", href: "#" },
    { label: "Programa de Afiliados", href: "#" },
    { label: "Política de Privacidade", href: "#" },
    { label: "Política de Cookies", href: "#" },
  ],
  termos: [
    { label: "Termos do Produtor", href: "#" },
    { label: "Termos do Afiliado", href: "#" },
    { label: "Termos do Comprador", href: "#" },
    { label: "Política de Privacidade", href: "#" },
    { label: "Política de Cookies", href: "#" },
  ],
  aprenda: [
    { label: "Blog da Kirvano", href: "#" },
  ],
}

const socialLinks = [
  { name: "Instagram", href: "#" },
  { name: "Facebook", href: "#" },
  { name: "YouTube", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "TikTok", href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-black border-t border-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo & Tagline */}
          <div className="lg:col-span-1">
            <KirvanoLogo className="h-6 mb-4" />
            <p className="text-[#888] text-sm leading-relaxed">
              A plataforma definitiva para a creator economy
            </p>
          </div>

          {/* Institucional */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Institucional
            </h4>
            <ul className="space-y-3">
              {footerLinks.institucional.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#888] text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Termos */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Termos e Condições
            </h4>
            <ul className="space-y-3">
              {footerLinks.termos.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#888] text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Aprenda */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Aprenda com a Kirvano
            </h4>
            <ul className="space-y-3">
              {footerLinks.aprenda.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#888] text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* App Badges */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Baixe nosso App
            </h4>
            <div className="space-y-3">
              <a
                href="#"
                className="block bg-[#111] border border-[#222] rounded-lg px-4 py-3 text-center hover:border-[#3B62F6] transition-colors"
              >
                <span className="text-white text-sm font-medium">Google Play</span>
              </a>
              <a
                href="#"
                className="block bg-[#111] border border-[#222] rounded-lg px-4 py-3 text-center hover:border-[#3B62F6] transition-colors"
              >
                <span className="text-white text-sm font-medium">App Store</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#222] mt-12 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-[#888] text-sm hover:text-[#3B62F6] transition-colors"
                  aria-label={social.name}
                >
                  {social.name}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center lg:text-right">
              <p className="text-[#555] text-sm">
                © 2026 Kirvano. Todos os direitos reservados.
              </p>
              <p className="text-[#555] text-xs mt-1">
                Kirvano Pagamentos LTDA · CNPJ: 48.582.146/0001-19
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
