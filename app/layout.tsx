import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aklima Progressive Foundation - Advancing Opportunity with Dignity',
  description: 'Aklima Progressive Foundation partners with communities in Magrahat, West Bengal to expand access to education, healthcare, assistive mobility, and resilient infrastructure. Founded by Tazneem Alam and Dr. Monjur Alam.',
  keywords: 'foundation, social impact, community development, progressive, aklima, West Bengal, Magrahat, education, healthcare, nonprofit, charity',
  authors: [{ name: 'Aklima Progressive Foundation' }],
  openGraph: {
    title: 'Aklima Progressive Foundation - Advancing Opportunity with Dignity',
    description: 'Partnering with communities in West Bengal to expand access to education, healthcare, and social services.',
    type: 'website',
    locale: 'en_US',
    url: 'https://aklimafoundation.org',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aklima Progressive Foundation',
    description: 'Advancing opportunity with dignity in West Bengal communities.',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#059669',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="smooth-scroll">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
