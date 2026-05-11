'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const links = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/habiba-mostafa/',
  },
  {
    label: 'Github',
    href: 'https://github.com/habibamostafa',
  },
  {
    label: 'Email',
    href: 'mailto:habibavmostafa@gmail.com',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-xs"
        >
          <h2 className="text-base font-bold mb-8 text-light-text dark:text-dark-text">
            Contact
          </h2>
          <ul className="space-y-5">
            {links.map((link, i) => (
              <motion.li
                key={link.label}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <a
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="text-base text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text dark:hover:text-dark-text transition-colors duration-200"
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
