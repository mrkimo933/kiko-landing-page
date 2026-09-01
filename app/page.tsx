import { Navbar } from '@/components/kiko/navbar'
import { Hero } from '@/components/kiko/hero'
import { TrustStrip } from '@/components/kiko/trust-strip'
import { Features } from '@/components/kiko/features'
import { HowItWorks } from '@/components/kiko/how-it-works'
import { Pricing } from '@/components/kiko/pricing'
import { Faq } from '@/components/kiko/faq'
import { Cta } from '@/components/kiko/cta'
import { Footer } from '@/components/kiko/footer'

export default function Page() {
  return (
    <main className="overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <Hero />
      <TrustStrip />
      <Features />
      <HowItWorks />
      <Pricing />
      <Faq />
      <Cta />
      <Footer />
    </main>
  )
}
