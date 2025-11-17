import React, { useRef } from 'react'

// Simple magnetic wrapper: children move subtly towards cursor
const Magnetic = ({ strength = 0.2, radius = 120, children, className = '' }) => {
  const ref = useRef(null)

  const onMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const mx = e.clientX - rect.left
    const my = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    const dx = mx - cx
    const dy = my - cy
    const dist = Math.hypot(dx, dy)
    if (dist < radius) {
      el.style.transform = `translate(${(dx) * strength}px, ${(dy) * strength}px)`
    }
  }

  const onMouseLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate(0, 0)'
  }

  return (
    <div ref={ref} className={className} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
      {children}
    </div>
  )
}

export default Magnetic
