import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Pins children and reveals with a vertical clip mask as you scroll
const ScrollStage = ({ children, className = '' }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const clip = useTransform(scrollYProgress, [0, 1], ['inset(40% 0% 40% 0%)', 'inset(0% 0% 0% 0%)'])
  const y = useTransform(scrollYProgress, [0, 1], [40, 0])
  const o = useTransform(scrollYProgress, [0, 1], [0.2, 1])

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={{ clipPath: clip, y, opacity: o }}>
        {children}
      </motion.div>
    </div>
  )
}

export default ScrollStage
