import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aklima Foundation Admin',
  description: 'Content management system for Aklima Progressive Foundation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
