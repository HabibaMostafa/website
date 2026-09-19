'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useTheme } from './ThemeProvider'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navigation() {
  const { theme, toggleTheme } = useTheme()
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-transparent"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="relative flex items-center justify-center h-16 md:h-20">
          {/* Navigation Links */}
          <ul className="flex items-center gap-2">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <motion.a
                  href={href}
                  className={`relative px-4 py-2 rounded-full text-light-text-secondary dark:text-dark-text-secondary transition-colors block font-medium tracking-wide font-[family-name:var(--font-nunito)]`}
                  onHoverStart={() => setHovered(label)}
                  onHoverEnd={() => setHovered(null)}
                  animate={{ color: hovered === label ? 'var(--color-accent)' : undefined }}
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  {hovered === label && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-light-accent/10 dark:bg-dark-accent/10"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </motion.a>
              </li>
            ))}
          </ul>

          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className="absolute right-0 p-2 rounded-lg hover:bg-light-accent/10 dark:hover:bg-dark-accent/10 transition-colors text-light-text dark:text-dark-text"
            aria-label="Toggle theme"
            whileHover={{ rotate: 20, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            {theme === 'light' ? (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}
