'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    title: 'Code-Blooded',
    description:
      'An AI-driven mobile app that delivers personalized, adaptive interview preparation for software engineers, helping candidates practice smarter and perform with confidence in technical interviews.',
    link: 'https://www.figma.com/proto/IBHTgj0SfYLEUCcWmYJJDJ/code-blooded?scaling=scale-down&page-id=0%3A1&node-id=25-491&t=q6ZWD2XFGQtoBlnQ-1',
    gradient: 'from-purple-500 to-purple-700',
  },
  {
    title: 'Activ',
    description:
      'A mobile platform that transforms social activism into action by surfacing automated, real-time opportunities—such as petitions, donation campaigns, and initiatives—users can support with minimal friction.',
    link: 'https://www.figma.com/proto/awjRp1kbPosdmlZZysDpYC/Duke-Ideate-2020--Activ--Final-?node-id=1-2&scaling=scale-down&t=o5uueVpdHufPG6IP-1',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    title: 'FRT System',
    description:
      'An end-to-end operational system built for First Response Teams, streamlining mission-critical workflows including call logging, patient care reporting (PCR), and shift scheduling.',
    link: 'https://www.figma.com/proto/MOxgZCw36bquiw9Yp7u1wf/FRT-Prototype?node-id=3-270&scaling=scale-down&t=t1Rh9d1qnwLffmWP-1',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Orchestration Manager',
    description:
      'A centralized logging and visualization dashboard that simplifies monitoring and troubleshooting by transforming complex orchestration logs into actionable, real-time insights.',
    link: '#',
    gradient: 'from-emerald-500 to-teal-500',
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.a
      ref={ref}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-light-surface dark:bg-dark-surface rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
    >
      {/* Project Image Placeholder */}
      <div className="relative h-64 overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-90 transition-opacity duration-300`}
        />
        <motion.div
          className="absolute inset-0 bg-black/20"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 group-hover:text-light-accent dark:group-hover:text-dark-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
          {project.description}
        </p>

        {/* Hover Arrow */}
        <motion.div
          className="mt-4 flex items-center gap-2 text-light-accent dark:text-dark-accent"
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
        >
          <span className="text-sm font-medium">View Project</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.div>
      </div>
    </motion.a>
  )
}

export default function Work() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="work" className="py-20 md:py-32 bg-light-bg dark:bg-dark-bg">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-lg md:text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
            A few things I've built while exploring problems worth solving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
