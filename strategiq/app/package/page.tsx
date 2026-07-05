import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'strategiq Funding & Opportunities Package — $297 CAD',
  description:
    'Verified funding and growth opportunities matched to your business. Readiness assessment, documentation checklist, and a prioritized 30-day action plan. $297 CAD one-time.',
}

export default function PackagePage() {
  return (
    <>
      {/* Header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-ink/90 backdrop-blur-sm border-b border-white/[0.06]"
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-white text-sm font-semibold tracking-[0.15em] uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
            aria-label="Back to Strategiq Solutions Studio home"
          >
            strategiq
          </Link>
        </div>
      </header>

      <main id="main-content" className="pt-24 pb-24">

        {/* Hero */}
        <section
          aria-labelledby="package-hero-heading"
          className="px-6 md:px-10 lg:px-20 py-16 md:py-24 max-w-4xl"
        >
          <p className="text-signal text-[10px] tracking-[0.3em] uppercase font-semibold mb-6">
            $297 CAD — One-time
          </p>
          <h1
            id="package-hero-heading"
            className="text-white text-4xl md:text-6xl font-bold leading-tight uppercase tracking-tight mb-6"
          >
            strategiq Funding &amp; Opportunities Package
          </h1>
          <p className="text-white/70 text-xl md:text-2xl font-medium leading-snug mb-8">
            Verified opportunities. Clear requirements. A prioritized plan.
            No more guessing where the money is or whether a founder is ready for it.
          </p>
          <Link href="#get-started" className="btn-primary">
            Get Started — $297 CAD
          </Link>
        </section>

        <hr className="border-white/[0.06]" />

        {/* What you get */}
        <section
          aria-labelledby="deliverables-heading"
          className="px-6 md:px-10 lg:px-20 py-16 md:py-24 max-w-5xl"
        >
          <h2
            id="deliverables-heading"
            className="text-white text-sm font-bold uppercase tracking-[0.15em] mb-10"
          >
            What you receive
          </h2>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
            {[
              {
                n: '01',
                title: 'Business readiness snapshot',
                desc: 'A clear assessment of where your business stands today relative to the opportunities identified.',
              },
              {
                n: '02',
                title: 'Verified opportunities',
                desc: 'Funding and growth programs matched to your business — verified as current and open at time of research.',
              },
              {
                n: '03',
                title: 'Confirmed amounts & deadlines',
                desc: 'Program amounts, application deadlines, and key eligibility markers confirmed and cited.',
              },
              {
                n: '04',
                title: 'Documentation checklist',
                desc: 'Everything a founder will need to gather before applying, organized by priority.',
              },
              {
                n: '05',
                title: 'Readiness gaps identified',
                desc: 'Honest assessment of what is missing and what needs to be addressed before applying.',
              },
              {
                n: '06',
                title: 'Priority action order',
                desc: 'A sequenced list — which opportunity to pursue first and why, based on readiness and timeline.',
              },
              {
                n: '07',
                title: 'Draft-ready starter',
                desc: 'A draft-ready starter document for the strongest opportunity identified in your research.',
              },
              {
                n: '08',
                title: 'Dated source register',
                desc: 'Every source URL and retrieval date included. No fabricated programs. No expired listings.',
              },
              {
                n: '09',
                title: '30-day action plan',
                desc: 'A clear, week-by-week action plan for the first 30 days after receiving your package.',
              },
            ].map(({ n, title, desc }) => (
              <div key={n} className="flex gap-5">
                <span className="text-signal text-[10px] tracking-[0.2em] font-bold shrink-0 mt-1">
                  {n}
                </span>
                <div>
                  <p className="text-white text-sm font-bold uppercase tracking-wide mb-2">
                    {title}
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-white/[0.06]" />

        {/* Exclusions */}
        <section
          aria-labelledby="exclusions-heading"
          className="px-6 md:px-10 lg:px-20 py-16 md:py-20 max-w-4xl"
        >
          <h2
            id="exclusions-heading"
            className="text-white text-sm font-bold uppercase tracking-[0.15em] mb-8"
          >
            What this package does not include
          </h2>
          <ul className="grid md:grid-cols-2 gap-4 text-white/50 text-sm leading-relaxed" role="list">
            {[
              'We do not guarantee eligibility for any program.',
              'We do not guarantee approval or funding amounts.',
              'We do not submit applications on a founder\'s behalf.',
              'This is not legal, accounting, or tax advice.',
              'We do not fabricate or include expired opportunities.',
              'Research reflects publicly available information at time of delivery.',
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-white/25 shrink-0">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <hr className="border-white/[0.06]" />

        {/* Process */}
        <section
          aria-labelledby="process-heading"
          className="px-6 md:px-10 lg:px-20 py-16 md:py-24 max-w-4xl"
        >
          <h2
            id="process-heading"
            className="text-white text-sm font-bold uppercase tracking-[0.15em] mb-10"
          >
            How the process works
          </h2>
          <ol className="space-y-6" role="list">
            {[
              { step: '1', text: 'Complete your secure intake form after payment — you will receive a link.' },
              { step: '2', text: 'Strategiq conducts verified research matched to your business details and goals.' },
              { step: '3', text: 'A human reviewer checks every source, confirms program status, and prepares your package.' },
              { step: '4', text: 'You receive your complete package via a secure, time-limited delivery link.' },
            ].map(({ step, text }) => (
              <li key={step} className="flex gap-6">
                <span className="text-signal font-bold text-sm shrink-0 mt-0.5">{step}</span>
                <p className="text-white/60 text-sm leading-relaxed">{text}</p>
              </li>
            ))}
          </ol>
        </section>

        <hr className="border-white/[0.06]" />

        {/* CTA */}
        <section
          id="get-started"
          aria-labelledby="package-cta-heading"
          className="px-6 md:px-10 lg:px-20 py-16 md:py-24 max-w-2xl"
        >
          <h2
            id="package-cta-heading"
            className="text-white text-2xl md:text-4xl font-bold uppercase tracking-tight mb-4"
          >
            strategiq Funding &amp; Opportunities Package
          </h2>
          <p className="text-white/55 text-base mb-10">
            $297 CAD + applicable taxes. One-time payment. Delivery to your inbox.
          </p>

          {/* Stripe checkout — wired to /api/create-checkout-session by platform operator */}
          <a
            href="/api/create-checkout-session"
            className="btn-primary inline-flex mb-4"
            aria-label="Purchase the strategiq Funding and Opportunities Package for $297 CAD"
          >
            Get Started — $297 CAD
          </a>

          <p className="text-white/30 text-xs">
            All sales final.{' '}
            <Link href="/refund" className="underline hover:text-white/50 transition-colors">
              See full refund policy.
            </Link>
          </p>

          <div className="mt-10 border border-white/10 p-6">
            <p className="text-white/50 text-xs leading-relaxed">
              Not sure yet?{' '}
              <Link href="/audit" className="text-signal hover:text-signal/80 transition-colors">
                Start with the free social media audit.
              </Link>{' '}
              No cost. No account required.
            </p>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-8 px-6 text-center" role="contentinfo">
        <p className="text-white/30 text-xs">
          © {new Date().getFullYear()} Strategiq Solutions Studio ·{' '}
          <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacy</Link>
          {' · '}
          <Link href="/terms" className="hover:text-white/60 transition-colors">Terms</Link>
          {' · '}
          <Link href="/refund" className="hover:text-white/60 transition-colors">Refund Policy</Link>
        </p>
      </footer>
    </>
  )
}
