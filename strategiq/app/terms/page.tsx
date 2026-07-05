import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for Strategiq Solutions Studio.',
  robots: 'noindex',
}

export default function TermsPage() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-ink/90 backdrop-blur-sm border-b border-white/[0.06]" role="banner">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center">
          <Link href="/" className="text-white text-sm font-semibold tracking-[0.15em] uppercase" aria-label="Back to Strategiq Solutions Studio home">strategiq</Link>
        </div>
      </header>
      <main id="main-content" className="pt-24 pb-24 px-6 md:px-10 max-w-2xl mx-auto">
        <h1 className="text-white text-3xl md:text-4xl font-bold uppercase tracking-tight mb-12">Terms of Service</h1>
        <div className="space-y-8 text-white/60 text-sm leading-relaxed">
          <p className="text-white/40 text-xs uppercase tracking-widest">Last updated: June 2026 — Legal review pending</p>

          <section aria-labelledby="services">
            <h2 id="services" className="text-white text-sm font-bold uppercase tracking-[0.12em] mb-3">Services</h2>
            <p>Strategiq Solutions Studio provides strategic research, social media audits, and funding opportunity packages to small business owners and founders. Services are delivered electronically.</p>
          </section>

          <section aria-labelledby="no-guarantee">
            <h2 id="no-guarantee" className="text-white text-sm font-bold uppercase tracking-[0.12em] mb-3">No guarantees</h2>
            <p>Strategiq does not guarantee eligibility for any funding program, grant, or opportunity identified in a package. Strategiq does not guarantee approval, funding amounts, or business outcomes. Research reflects publicly available information at the time of delivery and may change without notice.</p>
            <p>This is not legal, accounting, or tax advice. For legal or financial matters, consult a qualified professional.</p>
          </section>

          <section aria-labelledby="delivery">
            <h2 id="delivery" className="text-white text-sm font-bold uppercase tracking-[0.12em] mb-3">Delivery</h2>
            <p>Packages are delivered electronically via a secure, time-limited link. Delivery timeframes are communicated at time of purchase. You are responsible for completing the intake form promptly to avoid delivery delays.</p>
          </section>

          <section aria-labelledby="payment-terms">
            <h2 id="payment-terms" className="text-white text-sm font-bold uppercase tracking-[0.12em] mb-3">Payment &amp; taxes</h2>
            <p>All prices are in Canadian dollars (CAD). Applicable GST (5%) and PST (6%) are charged to Saskatchewan residents. Payment is processed securely through Stripe. All sales are final.</p>
          </section>

          <section aria-labelledby="conduct">
            <h2 id="conduct" className="text-white text-sm font-bold uppercase tracking-[0.12em] mb-3">Acceptable use</h2>
            <p>You agree not to misuse Strategiq services, share report access links, reproduce or resell research deliverables, or provide false information in intake forms.</p>
          </section>

          <p className="border border-white/10 p-4 text-white/35 text-xs">These terms are a working draft pending legal review. Final version will be published before public launch.</p>
        </div>
      </main>
      <footer className="border-t border-white/[0.06] py-8 px-6 text-center" role="contentinfo">
        <p className="text-white/30 text-xs">© {new Date().getFullYear()} Strategiq Solutions Studio</p>
      </footer>
    </>
  )
}
