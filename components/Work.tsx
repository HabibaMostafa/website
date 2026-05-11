'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    title: 'Copilot Notebooks',
    description:
      'An AI-powered notebook in Microsoft 365 that connects your files, meetings, and chats so you can ask questions and get insights grounded in your own work.',
    link: 'https://support.microsoft.com/en-us/topic/get-started-with-microsoft-365-copilot-notebooks-0775e693-11c6-4d80-8aba-fcc81a737a06',
    image: '/projects/copilot-notebooks.jpeg',
  },
  {
    title: 'Microsoft Loop',
    description:
      'A real-time collaboration app where teams organize ideas and tasks on flexible pages that stay synced across Microsoft 365.',
    link: 'https://loop.cloud.microsoft/learn',
    image: '/projects/loop-app.avif',
    zoom: true,
  },
  {
    title: 'Code-Blooded',
    description:
      'An AI-driven mobile app for personalized technical interview prep, helping software engineers practice smarter and perform with confidence.',
    link: 'https://www.figma.com/proto/IBHTgj0SfYLEUCcWmYJJDJ/code-blooded?scaling=scale-down&page-id=0%3A1&node-id=25-491&t=q6ZWD2XFGQtoBlnQ-1',
    image: '/projects/Codeblooded.png',
  },
  {
    title: 'Activ',
    description:
      'A mobile platform that turns social activism into action by surfacing real-time petitions, donations, and initiatives users can support with minimal friction.',
    link: 'https://www.figma.com/proto/awjRp1kbPosdmlZZysDpYC/Duke-Ideate-2020--Activ--Final-?node-id=1-2&scaling=scale-down&t=o5uueVpdHufPG6IP-1',
    image: '/projects/Activ.png',
  },
  // {
  //   title: 'FRT System',
  //   description:
  //     'An end-to-end operational system built for First Response Teams, streamlining mission-critical workflows including call logging, patient care reporting (PCR), and shift scheduling.',
  //   link: 'https://www.figma.com/proto/MOxgZCw36bquiw9Yp7u1wf/FRT-Prototype?node-id=3-270&scaling=scale-down&t=t1Rh9d1qnwLffmWP-1',
  //   image: '/projects/FRT.png',
  // },
  // {
  //   title: 'Orchestration Manager',
  //   description:
  //     'A centralized logging and visualization dashboard that simplifies monitoring and troubleshooting by transforming complex orchestration logs into actionable, real-time insights.',
  //   link: '#',
  //   image: '/projects/DCS.png',
  // },
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
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className={`absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${'zoom' in project && project.zoom ? 'scale-150' : ''}`}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-rose-600 opacity-80" />
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="font-serif text-2xl font-bold mb-3 text-light-text dark:text-dark-text group-hover:text-light-accent dark:group-hover:text-dark-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary leading-relaxed font-[family-name:var(--font-nunito)]">
          {project.description}
        </p>

      </div>
    </motion.a>
  )
}

export default function Work() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="work" className="py-20 md:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-lg md:text-xl text-light-text-secondary dark:text-dark-text-secondary font-[family-name:var(--font-nunito)]">
            Checkout my work
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
