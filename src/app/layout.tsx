import './globals.css'
import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'

const poppins = Space_Grotesk({
  weight: [
    "300", "400", "500", "600", "700"
  ], subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'SkillSift',
  description: 'A skills-based job search engine',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${poppins.className}` + " overflow-hidden"}>{children}</body>
    </html>
  )
}
