import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Strategiq Solutions Studio.',
}

export default function ContactPage() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-ink/90 backdrop-blur-sm border-b border-white/[0.06]" role="banner">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center">
          <Link href="/" className="text-white text-sm font-semibold tracking-[0.15em] uppercase" aria-label="Back to Strategiq Solutions Studio home">strategiq</Link>
        </div>
      </header>
      <main id="main-content" className="pt-24 pb-24 px-6 md:px-10 max-w-2xl mx-auto">
        <p className="text-signal text-[10px] tracking-[0.3em] uppercase font-semibold mb-6">Get in touch</p>
        <h1 className="text-white text-3xl md:text-4xl font-bold uppercase tracking-tight mb-8">Contact</h1>
        <p className="text-white/60 text-base leading-relaxed mb-10">
          Questions about the audit or package? Email us directly. We respond within 2 business days.
        </p>
        <a
          href="mailto:krystal.strategiq@gmail.com"
          className="btn-primary inline-flex"
          aria-label="Email Strategiq Solutions Studio"
        >
          krystal.strategiq@gmail.com
        </a>
        <div className="mt-12 pt-10 border-t border-white/[0.06]">
          <p className="text-white/40 text-sm">
            Not sure where to start?{' '}
            <Link href="/audit" className="text-signal hover:underline">
              Request the free social media audit.
            </Link>
          </p>
        </div>
      </main>
      <footer className="border-t border-white/[0.06] py-8 px-6 text-center" role="contentinfo">
        <p className="text-white/30 text-xs">© {new Date().getFullYear()} Strategiq Solutions Studio</p>
      </footer>
    </>
  )
}
