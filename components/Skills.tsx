'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const skillCategories = [
  {
    title: 'Product & Strategy',
    skills: [
      'Feature discovery & scoping',
      'Metrics & adoption thinking',
      'MVP iteration',
      'Cross-functional collaboration',
    ],
  },
  {
    title: 'Engineering',
    skills: [
      'Frontend (React, TypeScript, modern web frameworks)',
      'Backend fundamentals',
      'Cloud & scalable systems',
      'API design',
    ],
  },
  {
    title: 'Design & UX',
    skills: [
      'UI/UX fundamentals',
      'Design systems thinking',
      'Accessibility-aware development',
      'Human-centered design',
    ],
  },
  {
    title: 'AI & Emerging Tech',
    skills: [
      'AI-powered features',
      'Conversational interfaces',
      'Automation & productivity tools',
      'Responsible AI mindset',
    ],
  },
  {
    title: 'Collaboration & Leadership',
    skills: [
      'Mentorship & community building',
      'Public speaking & representation',
      'Stakeholder alignment',
      'Cross-team communication',
    ],
  },
]

function SkillCategory({
  category,
  index,
}: {
  category: typeof skillCategories[0]
  index: number
}) {
  const [isExpanded, setIsExpanded] = useState(index === 0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border border-light-text-secondary/20 dark:border-dark-text-secondary/20 rounded-xl overflow-hidden bg-light-surface dark:bg-dark-surface"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-6 hover:bg-light-accent/5 dark:hover:bg-dark-accent/5 transition-colors"
      >
        <h3 className="text-base font-semibold text-left text-light-text dark:text-dark-text">{category.title}</h3>
        <motion.svg
          className="w-6 h-6 text-light-accent dark:text-dark-accent"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </motion.svg>
      </button>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0">
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    className="px-4 py-2 bg-light-accent/10 dark:bg-dark-accent/10 text-light-text dark:text-dark-text rounded-lg text-sm md:text-base border border-light-accent/20 dark:border-dark-accent/20 hover:border-light-accent dark:hover:border-dark-accent transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-6xl mx-auto"
        >
          <p className="text-lg md:text-xl text-light-text-secondary dark:text-dark-text-secondary font-[family-name:var(--font-nunito)]">
            Skills
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl space-y-4">
            {skillCategories.map((category, index) => (
              <SkillCategory key={category.title} category={category} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
