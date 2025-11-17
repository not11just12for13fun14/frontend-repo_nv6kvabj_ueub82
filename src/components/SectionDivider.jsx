import React from 'react'
import { motion } from 'framer-motion'

// Glossy curved divider with subtle parallax grid
const SectionDivider = () => {
  return (
    <div aria-hidden className="relative mt-10">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative h-16"
      >
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1440 160" preserveAspectRatio="none">
          <defs>
            <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="rgba(255,255,255,0.35)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
            </linearGradient>
          </defs>
          <path d="M0,80 C240,140 480,20 720,80 C960,140 1200,40 1440,90 L1440,0 L0,0 Z" fill="url(#g)" />
        </svg>
        <div className="absolute inset-0 opacity-[0.06] dark:opacity-[0.08]" style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0,0,0,.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,.6) 1px, transparent 1px)'
        }} />
      </motion.div>
    </div>
  )
}

export default SectionDivider
