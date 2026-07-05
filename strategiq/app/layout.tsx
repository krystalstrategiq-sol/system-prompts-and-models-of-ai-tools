import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://strategiqsolutions.ca'
const isPreview = process.env.VERCEL_ENV === 'preview'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Strategiq Solutions Studio | Strategic By Nature™',
    template: '%s | Strategiq Solutions Studio',
  },
  description:
    'Strategiq turns scattered information into researched, prioritized direction for founders. Get a free social media audit or see the $297 Funding & Opportunities Package.',
  keywords: [
    'strategic intelligence studio',
    'founder strategy',
    'social media audit',
    'funding opportunities',
    'business research',
    'Canadian entrepreneur',
    'Saskatchewan business',
    'small business strategy',
    'founder direction',
    'strategic audit',
  ],
  authors: [{ name: 'Strategiq Solutions Studio' }],
  creator: 'Strategiq Solutions Studio',
  publisher: 'Strategiq Solutions Studio',
  robots: isPreview ? 'noindex, nofollow' : 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: siteUrl,
    siteName: 'Strategiq Solutions Studio',
    title: 'Strategiq Solutions Studio — Strategic By Nature™',
    description:
      'The internet gives you millions of answers. Your business only needs the right one.',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Strategiq Solutions Studio — Strategic By Nature™',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strategiq Solutions Studio — Strategic By Nature™',
    description:
      'The internet gives you millions of answers. Your business only needs the right one.',
    images: [`${siteUrl}/og-image.png`],
  },
  alternates: {
    canonical: siteUrl,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#07070F',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={inter.variable}>
      <body className="bg-ink antialiased">
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
