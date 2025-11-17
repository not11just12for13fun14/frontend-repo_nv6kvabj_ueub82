import React from 'react'

const Footer = () => {
  return (
    <footer className="py-10 border-t border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🐻</span>
          <span className="text-sm text-gray-700 dark:text-gray-300">© {new Date().getFullYear()} Bear Menu</span>
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">Built with love for people who love to eat well.</div>
      </div>
    </footer>
  )
}

export default Footer
