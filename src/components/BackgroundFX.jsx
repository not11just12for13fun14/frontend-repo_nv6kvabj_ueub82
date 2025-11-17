import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const BackgroundFX = () => {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 600], [0, -60])
  const y2 = useTransform(scrollY, [0, 600], [0, 40])

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,oklch(0.97_0.03_95)_0%,transparent_50%)] dark:bg-[radial-gradient(120%_80%_at_50%_-10%,oklch(0.2_0.03_95)_0%,transparent_50%)]" />

      {/* Soft grid */}
      <div className="absolute inset-0 opacity-[0.06] dark:opacity-[0.08]" style={{
        backgroundImage:
          'linear-gradient(to right, rgba(0,0,0,.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,.6) 1px, transparent 1px)'
      }} />

      {/* Glow blobs */}
      <motion.div className="absolute -top-24 -left-24 h-[46rem] w-[46rem] rounded-full blur-3xl" style={{ y: y1, background: 'radial-gradient(closest-side, oklch(0.92_0.14_85) 0%, transparent 70%)' }} />
      <motion.div className="absolute -bottom-24 -right-20 h-[40rem] w-[40rem] rounded-full blur-3xl" style={{ y: y2, background: 'radial-gradient(closest-side, oklch(0.86_0.17_75) 0%, transparent 70%)' }} />

      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-[.07] mix-blend-soft-light" style={{
        backgroundImage:
          'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'160\' height=\'160\' viewBox=\'0 0 160 160\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'160\' height=\'160\' filter=\'url(%23n)\' opacity=\'0.3\'/%3E%3C/svg%3E")'
      }} />
    </div>
  )
}

export default BackgroundFX
