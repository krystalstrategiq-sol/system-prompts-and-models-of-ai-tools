import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description: 'Accessibility statement for Strategiq Solutions Studio.',
}

export default function AccessibilityPage() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-ink/90 backdrop-blur-sm border-b border-white/[0.06]" role="banner">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center">
          <Link href="/" className="text-white text-sm font-semibold tracking-[0.15em] uppercase" aria-label="Back to Strategiq Solutions Studio home">strategiq</Link>
        </div>
      </header>
      <main id="main-content" className="pt-24 pb-24 px-6 md:px-10 max-w-2xl mx-auto">
        <h1 className="text-white text-3xl md:text-4xl font-bold uppercase tracking-tight mb-12">Accessibility Statement</h1>
        <div className="space-y-8 text-white/60 text-sm leading-relaxed">
          <section aria-labelledby="commitment">
            <h2 id="commitment" className="text-white text-sm font-bold uppercase tracking-[0.12em] mb-3">Our commitment</h2>
            <p>Strategiq Solutions Studio is committed to making its website accessible to all founders and visitors, including those with disabilities. We aim to meet WCAG 2.2 Level AA standards.</p>
          </section>

          <section aria-labelledby="features">
            <h2 id="features" className="text-white text-sm font-bold uppercase tracking-[0.12em] mb-3">Accessibility features</h2>
            <ul className="space-y-2 list-none">
              {[
                'Keyboard-navigable throughout',
                'Visible focus indicators on all interactive elements',
                'Logical heading hierarchy (H1 → H2 → H3)',
                'Semantic HTML landmarks (header, main, nav, footer)',
                'Skip to main content link',
                'Descriptive alt text on images',
                'Reduced motion support via prefers-reduced-motion',
                'High contrast text (minimum 4.5:1 ratio)',
                'ARIA labels on form fields and interactive elements',
                'Touch target minimum 44 × 44px on mobile',
              ].map((f) => (
                <li key={f} className="flex gap-3">
                  <span className="text-signal shrink-0">·</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="feedback">
            <h2 id="feedback" className="text-white text-sm font-bold uppercase tracking-[0.12em] mb-3">Feedback</h2>
            <p>If you experience an accessibility barrier on this site, please email <a href="mailto:krystal.strategiq@gmail.com" className="text-signal hover:underline">krystal.strategiq@gmail.com</a>. We will respond within 5 business days.</p>
          </section>
        </div>
      </main>
      <footer className="border-t border-white/[0.06] py-8 px-6 text-center" role="contentinfo">
        <p className="text-white/30 text-xs">© {new Date().getFullYear()} Strategiq Solutions Studio</p>
      </footer>
    </>
  )
}
