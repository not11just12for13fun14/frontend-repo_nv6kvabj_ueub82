import React from 'react'
import Tilt from './Tilt'

// Frosted glass card with inner light seam and border accents
const GlassCard = ({ children, className = '' }) => {
  return (
    <Tilt scale={1.02} max={8}>
      <div className={`relative rounded-2xl border border-white/25 bg-white/50 dark:bg-white/5 backdrop-blur-2xl p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_10px_40px_-15px_rgba(251,191,36,0.35)] ${className}`}>
        <div aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
        <div aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl" style={{
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.22), rgba(255,255,255,0.04) 35%, rgba(255,255,255,0) 60%)'
        }} />
        {children}
      </div>
    </Tilt>
  )
}

export default GlassCard
