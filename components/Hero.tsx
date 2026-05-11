'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const keywords = [
  'builder',
  'problem solver',
  'user-centric engineer',
  'product-minded technologist',
  'systems thinker',
  'community-driven creator',
]

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % keywords.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="about" className="relative min-h-[70vh] flex items-center justify-center">

      <div className="container mx-auto px-6 lg:px-8 pt-60 pb-20">
        <div className="max-w-4xl mx-auto text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-light-text dark:text-dark-text">
              Hi, I'm Habiba.
              <br />
              <span className="block mt-2">
                <span>I am a </span>
                <span className="relative inline">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentIndex}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                      className="bg-gradient-to-r from-light-accent to-light-accent-hover dark:from-dark-accent dark:to-dark-accent-hover bg-clip-text text-transparent"
                    >
                      {keywords[currentIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </span>
            </h1>

            <p className="text-sm md:text-base text-light-text-secondary dark:text-dark-text-secondary mb-12 max-w-3xl leading-relaxed font-[family-name:var(--font-nunito)]">
              Creating beautifully curated experiences<br />at the intersection of engineering, design, and human impact.
            </p>

            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#work"
                className="px-8 py-4 bg-light-accent dark:bg-dark-accent text-white rounded-lg font-medium hover:bg-light-accent-hover dark:hover:bg-dark-accent-hover transition-all duration-200 hover:scale-105 active:scale-95"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-light-accent dark:border-dark-accent text-light-accent dark:text-dark-accent rounded-lg font-medium hover:bg-light-accent/10 dark:hover:bg-dark-accent/10 transition-all duration-200"
              >
                Let's Build Something Meaningful
              </a>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
