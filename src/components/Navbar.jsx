import React, { useState, useEffect } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-xl bg-white/60 dark:bg-black/40 border-b border-black/5 dark:border-white/10' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-amber-300 to-amber-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] ring-1 ring-amber-700/20 flex items-center justify-center">
            <span className="text-xl">🐻</span>
          </div>
          <span className="font-semibold tracking-tight text-[17px] text-gray-900 dark:text-white">Bear Menu</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">Features</a>
          <a href="#how" className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">How it works</a>
          <a href="#experiences" className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">Experiences</a>
          <a href="#faq" className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">FAQ</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#cta" className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-white/90 transition-colors shadow-sm">
            <Sparkles size={16} /> Get early access
          </a>
        </div>

        <button aria-label="Toggle menu" className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-black/5 dark:hover:bg-white/10" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-4 pb-4">
          <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur-xl p-4 space-y-2">
            <a href="#features" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10">Features</a>
            <a href="#how" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg_white/10">How it works</a>
            <a href="#experiences" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10">Experiences</a>
            <a href="#faq" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10">FAQ</a>
            <a href="#cta" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg bg-gray-900 text-white text-center dark:bg-white dark:text-black">Get early access</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
