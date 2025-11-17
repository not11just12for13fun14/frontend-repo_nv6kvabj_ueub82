import React from 'react'
import { motion } from 'framer-motion'

const items = [
  { q: 'Where do you get the menus?', a: 'We source directly from restaurants and verified community updates, so what you see is actually what you get.' },
  { q: 'How do you calculate total price?', a: 'We factor in taxes, fees, and a default tip—customizable to your preference—so there are no surprises.' },
  { q: 'Is this for big groups only?', a: 'Nope. Whether it’s a solo bite, a date, or a squad night, we tailor the experience and the split.' },
]

const FAQ = () => {
  return (
    <section id="faq" className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">FAQ</h2>
        <div className="mt-6 space-y-4">
          {items.map((it, i) => (
            <motion.details key={it.q} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 * i }} viewport={{ once: true }} className="group rounded-2xl border border-white/20 bg-white/60 dark:bg-white/5 backdrop-blur-xl p-5">
              <summary className="cursor-pointer list-none font-semibold text-gray-900 dark:text-white">{it.q}</summary>
              <p className="mt-2 text-sm text-gray-700/90 dark:text-gray-300/80">{it.a}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
