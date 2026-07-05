import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Refund Policy',
  description: 'Refund policy for Strategiq Solutions Studio.',
  robots: 'noindex',
}

export default function RefundPage() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-ink/90 backdrop-blur-sm border-b border-white/[0.06]" role="banner">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center">
          <Link href="/" className="text-white text-sm font-semibold tracking-[0.15em] uppercase" aria-label="Back to Strategiq Solutions Studio home">strategiq</Link>
        </div>
      </header>
      <main id="main-content" className="pt-24 pb-24 px-6 md:px-10 max-w-2xl mx-auto">
        <h1 className="text-white text-3xl md:text-4xl font-bold uppercase tracking-tight mb-12">Refund Policy</h1>
        <div className="space-y-8 text-white/60 text-sm leading-relaxed">
          <p className="text-white/40 text-xs uppercase tracking-widest">Last updated: June 2026 — Legal review pending. Final language requires founder approval.</p>

          <section aria-labelledby="all-sales">
            <h2 id="all-sales" className="text-white text-sm font-bold uppercase tracking-[0.12em] mb-3">All sales final</h2>
            <p>All purchases from Strategiq Solutions Studio are final. Because our packages are research-based digital deliverables prepared specifically for each client, we do not offer refunds once a package has been delivered or once the intake process has begun.</p>
          </section>

          <section aria-labelledby="exceptions">
            <h2 id="exceptions" className="text-white text-sm font-bold uppercase tracking-[0.12em] mb-3">Exceptions</h2>
            <p>If a package is not delivered within the communicated timeframe due to an error on our part, we will work with you to resolve the issue. Contact us at <a href="mailto:krystal.strategiq@gmail.com" className="text-signal hover:underline">krystal.strategiq@gmail.com</a>.</p>
          </section>

          <section aria-labelledby="scope">
            <h2 id="scope" className="text-white text-sm font-bold uppercase tracking-[0.12em] mb-3">Scope of services</h2>
            <p>A refund is not warranted because a funding opportunity identified in your package is not awarded, because eligibility requirements have changed since delivery, or because the strategic direction provided was not the direction chosen. Research and analysis are delivered in good faith based on verified, publicly available information.</p>
          </section>

          <p className="border border-white/10 p-4 text-white/35 text-xs">This refund policy is a working draft and requires founder approval of final language before public launch. It does not constitute a legal commitment in its current form.</p>
        </div>
      </main>
      <footer className="border-t border-white/[0.06] py-8 px-6 text-center" role="contentinfo">
        <p className="text-white/30 text-xs">© {new Date().getFullYear()} Strategiq Solutions Studio</p>
      </footer>
    </>
  )
}
