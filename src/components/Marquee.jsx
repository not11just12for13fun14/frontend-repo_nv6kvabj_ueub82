import React from 'react'
import { motion } from 'framer-motion'

const Row = ({ reverse = false, children }) => {
  return (
    <div className="relative flex overflow-hidden py-3">
      <motion.div
        className="flex gap-8 min-w-max"
        initial={{ x: reverse ? 0 : -200 }}
        animate={{ x: reverse ? -200 : 0 }}
        transition={{ repeat: Infinity, repeatType: 'loop', duration: 25, ease: 'linear' }}
      >
        {children}
      </motion.div>
      <motion.div
        className="flex gap-8 min-w-max absolute left-full top-0"
        initial={{ x: reverse ? 0 : -200 }}
        animate={{ x: reverse ? -200 : 0 }}
        transition={{ repeat: Infinity, repeatType: 'loop', duration: 25, ease: 'linear' }}
      >
        {children}
      </motion.div>
    </div>
  )
}

const Marquee = () => {
  const chips = ['Michelin-led', 'Group‑friendly', 'Hidden gems', 'Vibe‑checked', 'Budget clear', 'Chef collabs', 'Limited drops', 'Premium service']
  return (
    <div className="mt-14 rounded-3xl border border-white/20 bg-white/40 dark:bg-white/5 backdrop-blur-2xl p-3">
      <Row>
        {chips.map((c) => (
          <span key={c} className="px-3 py-1 rounded-full text-xs font-medium bg-white/70 dark:bg-white/10 border border-white/20 text-gray-900 dark:text-white">
            {c}
          </span>
        ))}
      </Row>
      <Row reverse>
        {chips.map((c, i) => (
          <span key={`${c}-${i}`} className="px-3 py-1 rounded-full text-xs font-medium bg-white/70 dark:bg-white/10 border border-white/20 text-gray-900 dark:text-white">
            {c}
          </span>
        ))}
      </Row>
    </div>
  )
}

export default Marquee
