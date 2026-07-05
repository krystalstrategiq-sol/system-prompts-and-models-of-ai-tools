import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Strategiq Solutions Studio | Strategic By Nature™',
  description:
    'Strategiq turns scattered information into researched, prioritized direction for founders. Get a free social media audit or see the $297 Funding & Opportunities Package.',
  openGraph: {
    title: 'Strategiq Solutions Studio — Strategic By Nature™',
    description:
      'The internet gives you millions of answers. Your business only needs the right one.',
  },
}

/* ─── Header ────────────────────────────────────────────── */

function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-ink/90 backdrop-blur-sm border-b border-white/[0.06]"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-white text-sm font-semibold tracking-[0.15em] uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
          aria-label="Strategiq Solutions Studio — home"
        >
          strategiq
        </Link>
        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-8 list-none m-0 p-0">
            <li className="hidden md:block">
              <Link
                href="/package"
                className="text-white/60 text-xs font-medium tracking-[0.12em] uppercase hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
              >
                Packages
              </Link>
            </li>
            <li>
              <Link
                href="/audit"
                className="btn-primary text-xs px-5 py-2.5 min-h-0"
                style={{ minHeight: '40px' }}
              >
                Free Audit
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

/* ─── Footer ────────────────────────────────────────────── */

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer
      className="border-t border-white/[0.06] py-12 px-6 md:px-10"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="text-white text-sm font-semibold tracking-[0.15em] uppercase mb-1">
              strategiq
            </p>
            <p className="text-white/40 text-xs tracking-wider uppercase">
              Solutions Studio · Strategic by Nature™
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-8 gap-y-3 list-none m-0 p-0">
              {[
                { href: '/privacy', label: 'Privacy' },
                { href: '/terms', label: 'Terms' },
                { href: '/refund', label: 'Refund Policy' },
                { href: '/accessibility', label: 'Accessibility' },
                { href: '/contact', label: 'Contact' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/40 text-xs tracking-wide uppercase hover:text-white/70 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 pt-8 border-t border-white/[0.05] flex flex-col md:flex-row md:items-start gap-4">
          <p className="text-white/25 text-xs leading-relaxed max-w-xl">
            Strategiq does not guarantee funding eligibility, approval, or specific outcomes.
            Research is evidence-based and source-cited. This is not legal, accounting, or tax advice.
            All sales are final per our refund policy.
          </p>
          <p className="text-white/25 text-xs md:ml-auto shrink-0">
            © {year} Strategiq Solutions Studio
          </p>
        </div>
      </div>
    </footer>
  )
}

/* ─── Page ──────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      <Header />

      <main id="main-content">

        {/* ── 1. HERO — PRESSURE → EDIT → DIRECTION ─────────── */}
        <section
          aria-labelledby="hero-headline"
          className="relative min-h-[100dvh] bg-ink doc-lines overflow-hidden flex flex-col justify-center"
        >
          {/* PRESSURE — noise layer */}
          <div aria-hidden="true" className="hero-noise absolute inset-0 pointer-events-none" />

          {/* EDIT — signal sweep */}
          <div aria-hidden="true" className="hero-signal" />

          {/* DIRECTION — content */}
          <div className="relative z-10 px-6 md:px-10 lg:px-20 pt-28 pb-16 max-w-5xl">

            <p
              className="emerge emerge-1 text-signal text-[10px] md:text-xs tracking-[0.35em] uppercase font-semibold mb-7"
              aria-label="Strategic by Nature"
            >
              Strategic by Nature™
            </p>

            <h1
              id="hero-headline"
              className="emerge emerge-2 text-white text-4xl md:text-6xl lg:text-[5rem] font-bold leading-[1.04] tracking-tight uppercase mb-8"
            >
              The internet gives you<br className="hidden sm:block" />{' '}
              millions of answers.{' '}
              <br className="hidden lg:block" />
              Your business only needs{' '}
              <span className="text-white">the right one.</span>
            </h1>

            <p className="emerge emerge-3 text-white/65 text-base md:text-lg leading-relaxed max-w-2xl mb-10">
              Built for a founder carrying pressure, decisions, research, content,
              funding questions, and scattered opportunities — and needing the next
              move worth acting on.
            </p>

            <div
              className="emerge emerge-4 flex flex-col sm:flex-row gap-4 mb-12"
              role="group"
              aria-label="Primary actions"
            >
              <Link href="/audit" className="btn-primary">
                Get the Free Social Media Audit
              </Link>
              <Link href="/package" className="btn-secondary">
                See the $297 Funding &amp; Opportunities Package
              </Link>
            </div>

            <p className="emerge emerge-5 text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-white/30">
              EVIDENCE-FIRST · NO FLUFF · PRACTICAL STRATEGY · CLEAR NEXT STEPS
            </p>
          </div>
        </section>

        {/* ── 2. A FOUNDER'S PRESSURE ────────────────────────── */}
        <section
          aria-labelledby="pressure-heading"
          className="bg-ink px-6 md:px-10 lg:px-20 py-24 md:py-32 border-t border-white/[0.06]"
        >
          <div className="max-w-3xl">
            <p className="text-signal text-[10px] tracking-[0.3em] uppercase font-semibold mb-8">
              For a founder
            </p>

            <h2
              id="pressure-heading"
              className="text-white text-3xl md:text-5xl font-bold leading-tight uppercase tracking-tight mb-12"
            >
              Every founder reaches the same wall.
            </h2>

            <div className="space-y-7 text-white/65 text-base md:text-lg leading-relaxed">
              <p>
                Not a lack of ambition. Not a lack of ideas.
              </p>
              <p>
                A wall made entirely of information — articles, opinions, frameworks,
                advice, funding programs, competitor noise, content pressure, and scattered
                opportunities — with no clear signal about which direction is actually
                worth moving in.
              </p>
              <p>
                A founder carries the strategy meeting and the content calendar. The
                pricing decision and the hiring question. The grant application and the
                brand refresh. All at once. All without a clear operator in the seat
                beside them.
              </p>
              <p>
                Most tools give a founder more information. More lists. More frameworks.
                More options. More to read, absorb, and somehow turn into a next move.
              </p>
              <p className="text-white font-medium">
                Strategiq is built to do the opposite.
              </p>
              <p>
                Strategiq edits the noise into direction. Research-backed, evidence-first,
                prioritized next steps — built around your specific business, your actual
                constraints, and the move worth acting on first.
              </p>
            </div>
          </div>
        </section>

        {/* ── 3. THE STRATEGIQ METHOD ────────────────────────── */}
        <section
          aria-labelledby="method-heading"
          className="bg-[#050509] px-6 md:px-10 lg:px-20 py-24 md:py-32 border-t border-white/[0.06]"
        >
          <div className="max-w-7xl">
            <p className="text-signal text-[10px] tracking-[0.3em] uppercase font-semibold mb-8">
              How it works
            </p>

            <h2
              id="method-heading"
              className="text-white text-3xl md:text-4xl font-bold leading-tight uppercase tracking-tight mb-16"
            >
              We turn complexity into clear, practical direction.
            </h2>

            <div className="grid md:grid-cols-3 gap-12 md:gap-16">

              <article className="method-step">
                <h3 className="text-signal text-[10px] tracking-[0.3em] uppercase font-bold mb-4">
                  01 — Research
                </h3>
                <p className="text-white text-xl font-bold uppercase mb-4">
                  We go to the sources.
                </p>
                <p className="text-white/55 text-sm leading-relaxed">
                  Not summaries of summaries. Not AI-generated guesses. Verified,
                  current, source-cited information matched to your specific business
                  situation, category, and constraints.
                </p>
              </article>

              <article className="method-step">
                <h3 className="text-signal text-[10px] tracking-[0.3em] uppercase font-bold mb-4">
                  02 — Intelligence
                </h3>
                <p className="text-white text-xl font-bold uppercase mb-4">
                  We filter the noise.
                </p>
                <p className="text-white/55 text-sm leading-relaxed">
                  Not everything that applies to your category applies to you. Strategiq
                  identifies what is actually relevant, why it matters, and what the
                  evidence says about your next best move.
                </p>
              </article>

              <article className="method-step">
                <h3 className="text-signal text-[10px] tracking-[0.3em] uppercase font-bold mb-4">
                  03 — Direction
                </h3>
                <p className="text-white text-xl font-bold uppercase mb-4">
                  We deliver a prioritized next move.
                </p>
                <p className="text-white/55 text-sm leading-relaxed">
                  Not fifty options. One clear path. The researched, evidence-backed
                  action most worth taking first — with the documentation and context
                  to act on it confidently.
                </p>
              </article>

            </div>
          </div>
        </section>

        {/* ── 4. FREE AUDIT ENTRY ────────────────────────────── */}
        <section
          aria-labelledby="audit-entry-heading"
          className="bg-ink px-6 md:px-10 lg:px-20 py-24 md:py-32 border-t border-white/[0.06]"
        >
          <div className="max-w-3xl">
            <p className="text-signal text-[10px] tracking-[0.3em] uppercase font-semibold mb-8">
              Start here
            </p>

            <h2
              id="audit-entry-heading"
              className="text-white text-3xl md:text-5xl font-bold leading-tight uppercase tracking-tight mb-8"
            >
              Start with what is already public.
            </h2>

            <p className="text-white/65 text-base md:text-lg leading-relaxed mb-6">
              No password. No account access. No publishing access.
            </p>

            <p className="text-white/55 text-base leading-relaxed mb-12">
              Strategiq reviews what a potential customer can already see — your public
              profile, your offer clarity, your first impression — and turns it into clear,
              prioritized direction for the corrections worth making first.
            </p>

            <div className="border border-white/10 p-8 md:p-10 mb-8">
              <h3 className="text-white text-sm font-bold uppercase tracking-[0.15em] mb-6">
                What the Free Social Media Audit covers
              </h3>
              <ul className="space-y-4 text-white/60 text-sm leading-relaxed" role="list">
                <li className="flex gap-4">
                  <span className="text-signal font-bold shrink-0">→</span>
                  <span>
                    <strong className="text-white">Positioning check</strong> — Does your profile
                    immediately communicate what you do and who you serve?
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-signal font-bold shrink-0">→</span>
                  <span>
                    <strong className="text-white">Customer path</strong> — Can a visitor find
                    your offer, understand it, and take action within three clicks?
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-signal font-bold shrink-0">→</span>
                  <span>
                    <strong className="text-white">Priority corrections</strong> — The three most
                    impactful changes a founder can make this week.
                  </span>
                </li>
              </ul>
            </div>

            <Link href="/audit" className="btn-primary">
              Request the Free Social Media Audit
            </Link>
          </div>
        </section>

        {/* ── 5. PACKAGES ────────────────────────────────────── */}
        <section
          aria-labelledby="packages-heading"
          className="bg-[#050509] px-6 md:px-10 lg:px-20 py-24 md:py-32 border-t border-white/[0.06]"
        >
          <div className="max-w-7xl">
            <p className="text-signal text-[10px] tracking-[0.3em] uppercase font-semibold mb-8">
              What Strategiq offers
            </p>

            <h2
              id="packages-heading"
              className="text-white text-3xl md:text-4xl font-bold leading-tight uppercase tracking-tight mb-16"
            >
              Get clarity. See opportunities. Know what to do next.
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              {/* Free Audit card */}
              <article
                aria-labelledby="audit-card-heading"
                className="border border-white/10 p-8 md:p-10 flex flex-col"
              >
                <div className="mb-auto">
                  <p className="text-signal text-[10px] tracking-[0.3em] uppercase font-semibold mb-5">
                    Free — No cost
                  </p>
                  <h3
                    id="audit-card-heading"
                    className="text-white text-xl font-bold uppercase tracking-tight mb-5"
                  >
                    Free Social Media Audit
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed mb-8">
                    See what your public social presence communicates, what is working,
                    what may be creating friction, and what to improve first.
                  </p>
                  <ul className="space-y-3 text-white/50 text-sm" role="list">
                    {[
                      'Public profile review',
                      'Offer clarity check',
                      'Customer path assessment',
                      '3 prioritized corrections',
                      'Delivered by email',
                    ].map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="text-signal shrink-0">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 pt-8 border-t border-white/[0.06]">
                  <Link href="/audit" className="btn-primary w-full text-center">
                    Request Free Audit
                  </Link>
                </div>
              </article>

              {/* $297 Package card */}
              <article
                aria-labelledby="package-card-heading"
                className="border border-signal/40 p-8 md:p-10 flex flex-col"
              >
                <div className="mb-auto">
                  <p className="text-signal text-[10px] tracking-[0.3em] uppercase font-semibold mb-5">
                    $297 CAD — One-time
                  </p>
                  <h3
                    id="package-card-heading"
                    className="text-white text-xl font-bold uppercase tracking-tight mb-5"
                  >
                    strategiq Funding &amp; Opportunities Package
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed mb-8">
                    Verified opportunities. Clear requirements. A prioritized plan.
                    No more guessing where the money is or whether a founder is ready for it.
                  </p>
                  <ul className="space-y-3 text-white/50 text-sm" role="list">
                    {[
                      'Business readiness snapshot',
                      'Verified funding & growth opportunities matched to your business',
                      'Confirmed program amounts and deadlines',
                      'Documentation requirements checklist',
                      'Priority action order',
                      'Draft-ready starter for your strongest opportunity',
                      'Dated source register',
                      '30-day action plan',
                    ].map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="text-signal shrink-0">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 pt-8 border-t border-white/[0.06]">
                  <Link href="/package" className="btn-primary w-full text-center">
                    Get Started — $297 CAD
                  </Link>
                  <p className="text-white/30 text-xs mt-3 text-center">
                    All sales final. See full terms.
                  </p>
                </div>
              </article>

            </div>
          </div>
        </section>

        {/* ── 6. CREDIBILITY STRIP ───────────────────────────── */}
        <section
          aria-label="Trust indicators"
          className="bg-ink border-t border-white/[0.06] px-6 md:px-10 lg:px-20 py-16"
        >
          <div className="max-w-7xl flex flex-col md:flex-row md:items-center gap-12 md:gap-20">

            <div className="md:w-1/2">
              <p className="text-[9px] tracking-[0.35em] uppercase text-white/30 mb-4">
                EVIDENCE-FIRST · NO FLUFF · PRACTICAL STRATEGY · CLEAR NEXT STEPS
              </p>
              <h2 className="sr-only">What Strategiq stands for</h2>
              <p className="text-white text-base md:text-lg leading-relaxed">
                Strategiq operates with a strict evidence-first standard. Every research
                output is source-cited with URLs and retrieval dates. No fabricated
                opportunities. No expired programs. No false claims.
              </p>
            </div>

            <div className="md:w-1/2 grid grid-cols-2 gap-8">
              {[
                { label: 'Approach', value: 'Research-backed' },
                { label: 'Output', value: 'Source-cited' },
                { label: 'Model', value: 'Human-reviewed' },
                { label: 'Standard', value: 'Evidence-first' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-white/30 text-[10px] tracking-[0.2em] uppercase mb-1">
                    {label}
                  </p>
                  <p className="text-white text-sm font-semibold uppercase tracking-wide">
                    {value}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── 7. MARKET SEPARATION ───────────────────────────── */}
        <section
          aria-labelledby="separation-heading"
          className="bg-[#050509] px-6 md:px-10 lg:px-20 py-24 md:py-32 border-t border-white/[0.06]"
        >
          <div className="max-w-7xl">
            <h2
              id="separation-heading"
              className="sr-only"
            >
              What Strategiq is not
            </h2>

            <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
              <div>
                <p className="text-signal text-[10px] tracking-[0.3em] uppercase font-semibold mb-6">
                  This is different
                </p>
                <p className="text-white text-2xl md:text-3xl font-bold leading-tight uppercase tracking-tight mb-8">
                  Strategiq is not a coach. Not a grant writer. Not a social media manager.
                  Not a generic consultant.
                </p>
                <p className="text-white/60 text-base leading-relaxed">
                  Strategiq is a human-led strategic intelligence studio that turns
                  scattered information into researched, prioritized direction — built
                  specifically for a founder who is ready to move but needs to know
                  which move is worth taking first.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    label: 'Not a coach',
                    desc: 'Strategiq does not sell frameworks, mindset sessions, or generic business advice. Every output is specific, researched, and sourced.',
                  },
                  {
                    label: 'Not an AI agency',
                    desc: 'Every output is human-reviewed. Sources are verified. No hallucinated programs, fabricated claims, or AI-generated guesses presented as facts.',
                  },
                  {
                    label: 'Not a grant writer',
                    desc: 'Strategiq does not submit applications. It produces the research, readiness assessment, and prioritized direction that makes a founder ready to act.',
                  },
                  {
                    label: 'Not a consultant',
                    desc: 'No long engagements. No retainers. No vague strategy decks. Clear, actionable, evidence-backed direction delivered as a practical package.',
                  },
                ].map(({ label, desc }) => (
                  <div
                    key={label}
                    className="border-l-2 border-signal/40 pl-6"
                  >
                    <p className="text-white text-sm font-bold uppercase tracking-wide mb-2">
                      {label}
                    </p>
                    <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 8. FINAL CTA ───────────────────────────────────── */}
        <section
          aria-labelledby="final-cta-heading"
          className="bg-ink px-6 md:px-10 lg:px-20 py-24 md:py-32 border-t border-white/[0.06]"
        >
          <div className="max-w-3xl">
            <p className="text-signal text-[10px] tracking-[0.3em] uppercase font-semibold mb-8">
              Ready to start
            </p>
            <h2
              id="final-cta-heading"
              className="text-white text-3xl md:text-5xl font-bold leading-tight uppercase tracking-tight mb-6"
            >
              Edit the noise. Find the direction.
            </h2>
            <p className="text-white/55 text-base md:text-lg leading-relaxed mb-12">
              Start with the free audit. See what a potential customer already sees.
              Get the three most impactful corrections worth making first.
              No account. No password. No friction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/audit" className="btn-primary">
                Get the Free Social Media Audit
              </Link>
              <Link href="/package" className="btn-secondary">
                View the $297 Package
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
