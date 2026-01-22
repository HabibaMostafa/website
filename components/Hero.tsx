'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const keywords = [
  'Builder',
  'Problem Solver',
  'User-Centric Engineer',
  'Product-Minded Technologist',
  'Systems Thinker',
  'Community-Driven Creator',
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
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-light-accent/5 via-transparent to-light-accent/10 dark:from-dark-accent/10 dark:via-transparent dark:to-dark-accent/5" />
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-light-accent/20 dark:bg-dark-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm Habiba.
              <br />
              <span className="inline-flex flex-col lg:flex-row items-center lg:items-baseline gap-3 lg:gap-4">
                <span>I am a</span>
                <span className="relative inline-block h-[1.2em] min-w-[280px] lg:min-w-[400px]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentIndex}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                      className="absolute inset-0 bg-gradient-to-r from-light-accent to-light-accent-hover dark:from-dark-accent dark:to-dark-accent-hover bg-clip-text text-transparent"
                    >
                      {keywords[currentIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-light-text-secondary dark:text-dark-text-secondary mb-12 max-w-3xl leading-relaxed">
              I build thoughtful, scalable products at the intersection of engineering, design, and human impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
