import React, { useEffect, useRef } from 'react'

// Follows cursor with a soft, blended radial glow
const CursorGlow = () => {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onMove = (e) => {
      const x = e.clientX
      const y = e.clientY
      el.style.transform = `translate3d(${x - 150}px, ${y - 150}px, 0)`
    }

    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[-1] h-[300px] w-[300px] rounded-full blur-3xl opacity-50 mix-blend-soft-light"
      style={{
        background: 'radial-gradient(circle at center, oklch(0.92_0.14_85) 0%, oklch(0.86_0.17_75) 40%, transparent 70%)'
      }}
    />
  )
}

export default CursorGlow
