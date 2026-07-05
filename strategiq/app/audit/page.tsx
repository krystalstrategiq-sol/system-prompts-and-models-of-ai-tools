'use client'

import Link from 'next/link'
import { useState, FormEvent } from 'react'

/* ─── Types ─────────────────────────────────────────────── */

interface FormState {
  name: string
  businessName: string
  email: string
  instagram: string
  website: string
  challenge: string
  unclear: string
  useful: string
  consent: boolean
}

interface FormErrors {
  name?: string
  businessName?: string
  email?: string
  instagram?: string
  consent?: string
}

const initial: FormState = {
  name: '',
  businessName: '',
  email: '',
  instagram: '',
  website: '',
  challenge: '',
  unclear: '',
  useful: '',
  consent: false,
}

/* ─── Page ──────────────────────────────────────────────── */

export default function AuditPage() {
  const [form, setForm] = useState<FormState>(initial)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<FormErrors>({})

  function validate(): boolean {
    const e: FormErrors = {}
    if (!form.name.trim()) e.name = 'Name is required.'
    if (!form.businessName.trim()) e.businessName = 'Business name is required.'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'A valid email address is required.'
    if (!form.instagram.trim()) e.instagram = 'An Instagram or social handle is required.'
    if (!form.consent) e.consent = 'Consent is required to proceed.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setStatus('submitting')
    try {
      const res = await fetch('/api/audit-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  function update(field: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-ink/90 backdrop-blur-sm border-b border-white/[0.06]" role="banner">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <Link href="/" className="text-white text-sm font-semibold tracking-[0.15em] uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal" aria-label="Back to Strategiq Solutions Studio home">
            strategiq
          </Link>
        </div>
      </header>

      <main id="main-content" className="pt-24 pb-24 px-6 md:px-10 lg:px-20 max-w-3xl mx-auto">

        {/* Hero */}
        <div className="mb-16">
          <p className="text-signal text-[10px] tracking-[0.3em] uppercase font-semibold mb-6">
            Free — No cost
          </p>
          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight uppercase tracking-tight mb-6">
            Free Social Media Audit
          </h1>
          <p className="text-white text-2xl md:text-3xl font-bold leading-snug uppercase tracking-tight mb-8 text-white/80">
            Can a stranger understand your business in 10 seconds?
          </p>
          <p className="text-white/60 text-base leading-relaxed max-w-xl mb-4">
            Get an outside review of what your public profile communicates, what
            is unclear, and what should be corrected first.
          </p>

          {/* Privacy / access statement */}
          <div className="border border-white/10 px-6 py-5 mt-8">
            <p className="text-white/70 text-sm leading-relaxed">
              <strong className="text-white">No password required.</strong>{' '}
              <strong className="text-white">No account access required.</strong>{' '}
              <strong className="text-white">No publishing access required.</strong>{' '}
              Strategiq reviews only what a potential customer can already see.
            </p>
          </div>
        </div>

        {/* What you get */}
        <section aria-labelledby="what-you-get" className="mb-16">
          <h2 id="what-you-get" className="text-white text-sm font-bold uppercase tracking-[0.15em] mb-6">
            What you get
          </h2>
          <ul className="space-y-4 text-white/60 text-sm leading-relaxed" role="list">
            {[
              {
                title: 'Positioning check',
                desc: 'Does your profile immediately communicate what you do and who you serve?',
              },
              {
                title: 'Customer path',
                desc: 'Can a visitor find your offer, understand it, and take action within 3 clicks?',
              },
              {
                title: 'Priority corrections',
                desc: 'The 3 most impactful changes a founder can make this week.',
              },
            ].map(({ title, desc }) => (
              <li key={title} className="flex gap-4">
                <span className="text-signal font-bold shrink-0 mt-0.5">→</span>
                <span>
                  <strong className="text-white">{title}</strong> — {desc}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Form or success */}
        {status === 'success' ? (
          <div className="border border-signal/40 p-8 md:p-12" role="status" aria-live="polite">
            <p className="text-signal text-[10px] tracking-[0.3em] uppercase font-semibold mb-4">
              Request received
            </p>
            <h2 className="text-white text-2xl font-bold uppercase mb-4">
              Your audit request is in.
            </h2>
            <p className="text-white/60 text-sm leading-relaxed mb-2">
              We will review {form.instagram} and send your audit to{' '}
              <strong className="text-white">{form.email}</strong>.
            </p>
            <p className="text-white/40 text-sm">
              No action needed right now.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate aria-label="Free Social Media Audit request">

            <fieldset className="border-0 p-0 m-0">
              <legend className="text-white text-sm font-bold uppercase tracking-[0.15em] mb-8">
                Your details
              </legend>

              <div className="grid md:grid-cols-2 gap-6 mb-6">

                <div>
                  <label htmlFor="name" className="field-label">
                    Full Name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="field"
                    value={form.name}
                    onChange={update('name')}
                    autoComplete="name"
                    aria-required="true"
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" role="alert" className="text-red-400 text-xs mt-2">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="business-name" className="field-label">
                    Business Name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="business-name"
                    type="text"
                    className="field"
                    value={form.businessName}
                    onChange={update('businessName')}
                    autoComplete="organization"
                    aria-required="true"
                    aria-describedby={errors.businessName ? 'business-name-error' : undefined}
                  />
                  {errors.businessName && (
                    <p id="business-name-error" role="alert" className="text-red-400 text-xs mt-2">
                      {errors.businessName}
                    </p>
                  )}
                </div>

              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">

                <div>
                  <label htmlFor="email" className="field-label">
                    Email Address <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="field"
                    value={form.email}
                    onChange={update('email')}
                    autoComplete="email"
                    aria-required="true"
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" role="alert" className="text-red-400 text-xs mt-2">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="instagram" className="field-label">
                    Instagram Handle <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="instagram"
                    type="text"
                    className="field"
                    placeholder="@yourbusiness"
                    value={form.instagram}
                    onChange={update('instagram')}
                    aria-required="true"
                    aria-describedby={errors.instagram ? 'instagram-error' : undefined}
                  />
                  {errors.instagram && (
                    <p id="instagram-error" role="alert" className="text-red-400 text-xs mt-2">
                      {errors.instagram}
                    </p>
                  )}
                </div>

              </div>

              <div className="mb-6">
                <label htmlFor="website" className="field-label">
                  Website URL{' '}
                  <span className="text-white/30 normal-case tracking-normal font-normal">
                    (optional)
                  </span>
                </label>
                <input
                  id="website"
                  type="url"
                  className="field"
                  placeholder="https://yourbusiness.com"
                  value={form.website}
                  onChange={update('website')}
                  autoComplete="url"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="challenge" className="field-label">
                  What is your primary business challenge right now?
                </label>
                <textarea
                  id="challenge"
                  className="field"
                  rows={3}
                  value={form.challenge}
                  onChange={update('challenge')}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="unclear" className="field-label">
                  What feels most unclear right now?
                </label>
                <textarea
                  id="unclear"
                  className="field"
                  rows={3}
                  value={form.unclear}
                  onChange={update('unclear')}
                />
              </div>

              <div className="mb-10">
                <label htmlFor="useful" className="field-label">
                  What would make this audit most useful for you?
                </label>
                <textarea
                  id="useful"
                  className="field"
                  rows={3}
                  value={form.useful}
                  onChange={update('useful')}
                />
              </div>

            </fieldset>

            {/* Consent */}
            <fieldset className="border border-white/10 p-6 mb-8">
              <legend className="text-white text-xs font-bold uppercase tracking-[0.15em] px-2">
                Consent &amp; Privacy
              </legend>

              <div className="mt-4">
                <label className="flex gap-4 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 shrink-0 accent-signal"
                    checked={form.consent}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, consent: e.target.checked }))
                    }
                    aria-required="true"
                    aria-describedby={errors.consent ? 'consent-error consent-notice' : 'consent-notice'}
                  />
                  <span className="text-white/60 text-sm leading-relaxed">
                    I authorize Strategiq Solutions Studio to review my public business
                    information and contact me with my audit results.
                  </span>
                </label>
                {errors.consent && (
                  <p id="consent-error" role="alert" className="text-red-400 text-xs mt-3">
                    {errors.consent}
                  </p>
                )}
              </div>

              <div id="consent-notice" className="mt-6 pt-5 border-t border-white/[0.06]">
                <p className="text-white/35 text-xs leading-relaxed">
                  <strong className="text-white/50">What is collected:</strong> Your name, email, business name,
                  and public social handle.{' '}
                  <strong className="text-white/50">Why:</strong> To prepare your audit and deliver results.{' '}
                  <strong className="text-white/50">Recipients:</strong> Strategiq Solutions Studio only.{' '}
                  <strong className="text-white/50">Required:</strong> Name, email, and handle are required for
                  audit delivery. Other fields are optional.{' '}
                  <strong className="text-white/50">Withdraw:</strong> Reply to any email from us to withdraw
                  consent and request deletion.
                </p>
              </div>
            </fieldset>

            {status === 'error' && (
              <p role="alert" className="text-red-400 text-sm mb-6">
                Something went wrong. Please try again or email us at{' '}
                <a href="mailto:krystal.strategiq@gmail.com" className="underline text-white/60">
                  krystal.strategiq@gmail.com
                </a>
                .
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              aria-busy={status === 'submitting'}
            >
              {status === 'submitting' ? 'Sending…' : 'Request My Free Audit'}
            </button>

            <p className="text-white/30 text-xs mt-4 text-center">
              No password. No account access. No publishing access required.
            </p>

          </form>
        )}

      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-8 px-6 text-center" role="contentinfo">
        <p className="text-white/30 text-xs">
          © {new Date().getFullYear()} Strategiq Solutions Studio ·{' '}
          <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacy</Link>
          {' · '}
          <Link href="/terms" className="hover:text-white/60 transition-colors">Terms</Link>
        </p>
      </footer>
    </>
  )
}
