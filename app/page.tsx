import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Work from '@/components/Work'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Work />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
