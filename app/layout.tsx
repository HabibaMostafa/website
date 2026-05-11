import type { Metadata } from 'next'
import { Inter, Playfair_Display, Nunito } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import AuroraBackground from '@/components/AuroraBackground'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  style: ['normal', 'italic'],
})
const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
})

export const metadata: Metadata = {
  title: 'Habiba | Software Engineer & Builder',
  description: 'Portfolio of Habiba - Software Engineer, Builder, and Product-Minded Technologist building thoughtful, scalable products at the intersection of engineering, design, and human impact.',
  keywords: ['Software Engineer', 'Product Manager', 'UX Designer', 'React', 'TypeScript', 'AI'],
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${playfair.variable} ${nunito.variable}`}>
        <ThemeProvider>
          <AuroraBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
