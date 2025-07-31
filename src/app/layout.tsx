// src/app/layout.tsx

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer' // ⬅️ Footer 추가

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Your App Title',
  description: 'Your App Description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer /> {/* ⬅️ 여기에 추가 */}
      </body>
    </html>
  )
}
