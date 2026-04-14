import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Kirvano — A plataforma definitiva para a creator economy',
  description:
    'A Kirvano é a plataforma definitiva para criadores de conteúdo, infoprodutores e negócios digitais. Venda mais, com menos complicação.',
  keywords: 'kirvano, plataforma digital, infoprodutos, criadores, pagamentos, checkout',
  openGraph: {
    title: 'Kirvano — Venda mais, com menos complicação',
    description:
      'Tudo o que você precisa para transformar seu conhecimento em negócio digital, em um só lugar.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} bg-[#0A0A0A]`}>
      <body className="font-sans antialiased bg-[#0A0A0A] text-white">
        {children}
      </body>
    </html>
  )
}
