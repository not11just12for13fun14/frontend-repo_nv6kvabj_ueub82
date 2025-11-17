import React, { useRef } from 'react'

// Pointer-driven 3D tilt wrapper with graceful reset
const Tilt = ({
  max = 12,
  scale = 1.0,
  glare = true,
  children,
  className = ''
}) => {
  const ref = useRef(null)
  const glareRef = useRef(null)

  const onPointerMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rx = (py - 0.5) * -2 * max
    const ry = (px - 0.5) * 2 * max

    el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${scale})`
    if (glare && glareRef.current) {
      const angle = Math.atan2(e.clientY - (rect.top + rect.height / 2), e.clientX - (rect.left + rect.width / 2))
      glareRef.current.style.background = `conic-gradient(from ${angle}rad, rgba(255,255,255,0.35), transparent 60%)`
      glareRef.current.style.opacity = '1'
    }
  }

  const onPointerLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`
    if (glareRef.current) glareRef.current.style.opacity = '0'
  }

  return (
    <div className={`relative will-change-transform ${className}`} onPointerMove={onPointerMove} onPointerLeave={onPointerLeave}>
      <div ref={ref} className="transition-transform duration-300 ease-out">
        {children}
      </div>
      {glare && (
        <div ref={glareRef} aria-hidden className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 mix-blend-soft-light" />
      )}
    </div>
  )
}

export default Tilt
