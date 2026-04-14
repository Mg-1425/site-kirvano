import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { HighlightBanner } from "@/components/highlight-banner"
import { WhyKirvano } from "@/components/why-kirvano"
import { PaymentMethods } from "@/components/payment-methods"
import { Features } from "@/components/features"
import { Integrations } from "@/components/integrations"
import { Newsletter } from "@/components/newsletter"
import { Blog } from "@/components/blog"
import { About } from "@/components/about"
import { Timeline } from "@/components/timeline"
import { Values } from "@/components/values"
import { FAQ } from "@/components/faq"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <Hero />
      <HighlightBanner />
      <WhyKirvano />
      <PaymentMethods />
      <Features />
     {/* <Integrations /> */}
      <Newsletter />
      <Blog />
      <About />
      <Timeline />
      <Values />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
