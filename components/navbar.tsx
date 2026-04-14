"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { KirvanoLogo } from "./kirvano-logo"

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#suporte", label: "Suporte" },
  { href: "#newsletter", label: "Newsletter" },
  { href: "#sobre", label: "Sobre nós" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // 🔥 CLIQUE NO LOGO -> VOLTA PRO TOPO
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#222]"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <a
              href="#inicio"
              onClick={scrollToTop}
              className="flex-shrink-0 cursor-pointer"
            >
              <KirvanoLogo />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#888] hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="#login"
                className="text-sm text-white hover:text-[#888] transition-colors duration-200"
              >
                Login
              </a>
              <a
                href="#cadastro"
                className="bg-[#3B62F6] hover:bg-[#2D53E8] text-white text-sm font-medium px-6 py-2 rounded-full transition-all duration-200 hover:shadow-[0_0_24px_rgba(59,98,246,0.5)]"
              >
                Cadastre-se
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#222] lg:hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-[#888] hover:text-white transition-colors duration-200 py-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-[#222] space-y-3">
                <a
                  href="#login"
                  className="block text-white hover:text-[#888] transition-colors duration-200 py-2"
                >
                  Login
                </a>
                <a
                  href="#cadastro"
                  className="block bg-[#3B62F6] hover:bg-[#2D53E8] text-white text-center font-medium px-6 py-3 rounded-full transition-all duration-200"
                >
                  Cadastre-se
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}