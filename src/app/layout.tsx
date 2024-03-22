import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SessionProvider from './SessionProvider'
// import { AuthContextProvider } from './services/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Invite Me',
  description: 'Digitalization Wedding',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <SessionProvider>
            {children}
          </SessionProvider>
        </body>
    </html>
  )
}
