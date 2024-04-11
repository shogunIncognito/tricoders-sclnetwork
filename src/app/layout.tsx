import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'
import SessionAuthProvider from '@/context/SessionProviderContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tri-Coders',
  description: 'Red social de desarrolladores para desarrolladores'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  return (
    <html lang='es' className='dark'>
      <body className={inter.className}>
        <SessionAuthProvider>
          {children}
          <Toaster richColors />
        </SessionAuthProvider>
      </body>
    </html>
  )
}
