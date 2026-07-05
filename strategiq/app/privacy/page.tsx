import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Strategiq Solutions Studio collects, uses, and protects your information.',
  robots: 'noindex',
}

function LegalLayout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-ink/90 backdrop-blur-sm border-b border-white/[0.06]" role="banner">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center">
          <Link href="/" className="text-white text-sm font-semibold tracking-[0.15em] uppercase" aria-label="Back to Strategiq Solutions Studio home">strategiq</Link>
        </div>
      </header>
      <main id="main-content" className="pt-24 pb-24 px-6 md:px-10 max-w-2xl mx-auto">
        <h1 className="text-white text-3xl md:text-4xl font-bold uppercase tracking-tight mb-12">{title}</h1>
        <div className="space-y-8 text-white/60 text-sm leading-relaxed">{children}</div>
      </main>
      <footer className="border-t border-white/[0.06] py-8 px-6 text-center" role="contentinfo">
        <p className="text-white/30 text-xs">© {new Date().getFullYear()} Strategiq Solutions Studio</p>
      </footer>
    </>
  )
}

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy">
      <p className="text-white/40 text-xs uppercase tracking-widest">Last updated: June 2026 — Legal review pending</p>

      <section aria-labelledby="who">
        <h2 id="who" className="text-white text-sm font-bold uppercase tracking-[0.12em] mb-3">Who we are</h2>
        <p>Strategiq Solutions Studio is a strategic research studio based in Regina, Saskatchewan, Canada. Contact: <a href="mailto:krystal.strategiq@gmail.com" className="text-signal hover:underline">krystal.strategiq@gmail.com</a></p>
      </section>

      <section aria-labelledby="collect">
        <h2 id="collect" className="text-white text-sm font-bold uppercase tracking-[0.12em] mb-3">What we collect</h2>
        <p>We collect information you provide directly: your name, email address, business name, and social media handle when you request an audit or purchase a package. We also collect your IP address, browser type, and pages visited for security and analytics purposes.</p>
      </section>

      <section aria-labelledby="use">
        <h2 id="use" className="text-white text-sm font-bold uppercase tracking-[0.12em] mb-3">How we use it</h2>
        <p>We use your information to: deliver the services you requested; send transactional emails related to your purchase or audit; comply with legal obligations.</p>
        <p>We do not sell your personal information. We do not share it with third parties except those necessary to deliver our services (email delivery provider, payment processor).</p>
      </section>

      <section aria-labelledby="casl">
        <h2 id="casl" className="text-white text-sm font-bold uppercase tracking-[0.12em] mb-3">Marketing communications (CASL)</h2>
        <p>We will only send marketing emails with your explicit consent. You may withdraw consent at any time by replying &quot;unsubscribe&quot; to any email. Unsubscribe requests are processed within 10 business days at no cost to you.</p>
      </section>

      <section aria-labelledby="retention">
        <h2 id="retention" className="text-white text-sm font-bold uppercase tracking-[0.12em] mb-3">Retention &amp; deletion</h2>
        <p>We retain your information for as long as necessary to deliver services and meet legal obligations. To request deletion of your data, email us at <a href="mailto:krystal.strategiq@gmail.com" className="text-signal hover:underline">krystal.strategiq@gmail.com</a>.</p>
      </section>

      <section aria-labelledby="rights">
        <h2 id="rights" className="text-white text-sm font-bold uppercase tracking-[0.12em] mb-3">Your rights</h2>
        <p>Under PIPEDA, you have the right to access, correct, or request deletion of your personal information. Contact us to exercise these rights.</p>
      </section>

      <p className="border border-white/10 p-4 text-white/35 text-xs">This privacy policy is a working draft pending legal review. Final version will be published before public launch.</p>
    </LegalLayout>
  )
}
