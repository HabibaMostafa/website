'use client'

import { useEffect, useState, useCallback } from 'react'

export default function AuroraBackground() {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([])

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }, [])

  const handleClick = useCallback((e: MouseEvent) => {
    const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY }
    setRipples(prev => [...prev, newRipple])

    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id))
    }, 1000)
  }, [])

  useEffect(() => {
    if (!mounted) return

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('click', handleClick)
    }
  }, [mounted, handleMouseMove, handleClick])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 -z-10">
      {/* Base background */}
      <div className="absolute inset-0 bg-[#fafafa] dark:bg-[#0a0a0a]" />

      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Orange/Peach blob */}
        <div
          className="absolute blur-[80px] opacity-50 dark:opacity-35"
          style={{
            width: '45vw',
            height: '45vh',
            top: '-10vh',
            left: '-10vw',
            background: 'radial-gradient(ellipse at center, rgba(255, 170, 100, 0.9) 0%, rgba(255, 150, 100, 0.5) 50%, transparent 75%)',
            borderRadius: '50%',
            animation: 'blobDrift1 30s ease-in-out infinite',
            willChange: 'transform',
          }}
        />

        {/* Blue/Teal blob */}
        <div
          className="absolute blur-[90px] opacity-45 dark:opacity-30"
          style={{
            width: '40vw',
            height: '40vh',
            top: '5vh',
            right: '-5vw',
            background: 'radial-gradient(ellipse at center, rgba(100, 200, 220, 0.9) 0%, rgba(80, 180, 200, 0.5) 50%, transparent 75%)',
            borderRadius: '50%',
            animation: 'blobDrift2 35s ease-in-out infinite',
            willChange: 'transform',
          }}
        />

        {/* Pink/Magenta blob */}
        <div
          className="absolute blur-[85px] opacity-50 dark:opacity-35"
          style={{
            width: '42vw',
            height: '42vh',
            top: '30vh',
            left: '15vw',
            background: 'radial-gradient(ellipse at center, rgba(230, 150, 200, 0.9) 0%, rgba(220, 120, 180, 0.5) 50%, transparent 75%)',
            borderRadius: '50%',
            animation: 'blobDrift3 32s ease-in-out infinite',
            willChange: 'transform',
          }}
        />

        {/* Green/Mint blob */}
        <div
          className="absolute blur-[75px] opacity-45 dark:opacity-30"
          style={{
            width: '38vw',
            height: '38vh',
            bottom: '0vh',
            right: '10vw',
            background: 'radial-gradient(ellipse at center, rgba(140, 220, 180, 0.9) 0%, rgba(120, 200, 160, 0.5) 50%, transparent 75%)',
            borderRadius: '50%',
            animation: 'blobDrift4 38s ease-in-out infinite',
            willChange: 'transform',
          }}
        />

        {/* Purple blob */}
        <div
          className="absolute blur-[85px] opacity-40 dark:opacity-25"
          style={{
            width: '35vw',
            height: '35vh',
            top: '55vh',
            left: '0vw',
            background: 'radial-gradient(ellipse at center, rgba(160, 140, 200, 0.9) 0%, rgba(140, 120, 180, 0.5) 50%, transparent 75%)',
            borderRadius: '50%',
            animation: 'blobDrift5 40s ease-in-out infinite',
            willChange: 'transform',
          }}
        />
      </div>

      {/* Mouse follower - subtle glow effect */}
      <div
        className="pointer-events-none fixed w-[500px] h-[500px] rounded-full"
        style={{
          left: mousePosition.x - 250,
          top: mousePosition.y - 250,
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.03) 40%, transparent 70%)',
          transition: 'left 0.1s ease-out, top 0.1s ease-out',
        }}
      />

      {/* Secondary mouse follower */}
      <div
        className="pointer-events-none fixed w-[350px] h-[350px] rounded-full"
        style={{
          left: mousePosition.x - 175,
          top: mousePosition.y - 175,
          background: 'radial-gradient(circle, rgba(160, 140, 200, 0.15) 0%, rgba(160, 140, 200, 0.05) 40%, transparent 70%)',
          transition: 'left 0.2s ease-out, top 0.2s ease-out',
        }}
      />

      {/* Click ripples */}
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="pointer-events-none fixed"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="w-4 h-4 rounded-full border border-light-accent/40 dark:border-dark-accent/40 animate-ripple-expand" />
        </div>
      ))}
    </div>
  )
}
