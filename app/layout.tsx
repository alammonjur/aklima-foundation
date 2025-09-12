import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aklima Progressive Foundation',
  description: 'Empowering communities through progressive social initiatives and sustainable development programs.',
  keywords: 'foundation, social impact, community development, progressive, aklima',
  authors: [{ name: 'Aklima Progressive Foundation' }],
  openGraph: {
    title: 'Aklima Progressive Foundation',
    description: 'Empowering communities through progressive social initiatives and sustainable development programs.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aklima Progressive Foundation',
    description: 'Empowering communities through progressive social initiatives and sustainable development programs.',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0ea5e9',
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
