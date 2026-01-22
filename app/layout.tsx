import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Habiba | Software Engineer & Builder',
  description: 'Portfolio of Habiba - Software Engineer, Builder, and Product-Minded Technologist building thoughtful, scalable products at the intersection of engineering, design, and human impact.',
  keywords: ['Software Engineer', 'Product Manager', 'UX Designer', 'React', 'TypeScript', 'AI'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
