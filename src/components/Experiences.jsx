import React from 'react'
import { motion } from 'framer-motion'

const cards = [
  { title: 'Friendsgiving Feast', tag: 'Group of 8', price: '$45 pp', color: 'from-amber-300/30 to-amber-500/30' },
  { title: 'Late-Night Bites', tag: 'After-hours', price: '$12 pp', color: 'from-cyan-300/30 to-blue-500/30' },
  { title: 'Birthday Tasting', tag: 'Celebrate big', price: '$95 pp', color: 'from-fuchsia-300/30 to-rose-500/30' },
]

const Experiences = () => {
  return (
    <section id="experiences" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Signature experiences</h2>
          <p className="mt-2 text-gray-700/90 dark:text-gray-300/80">Thoughtfully designed nights out that just work.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-2xl border border-white/20 bg-white/40 dark:bg-white/5 backdrop-blur-2xl p-5`}
            >
              <div className={`absolute -top-20 -right-16 h-52 w-52 rounded-full bg-gradient-to-br ${c.color} blur-2xl`} />
              <div className="relative">
                <div className="text-xs font-medium text-gray-800/80 dark:text-gray-200/80">{c.tag}</div>
                <h3 className="mt-1 font-semibold text-gray-900 dark:text-white">{c.title}</h3>
                <p className="text-sm mt-1 text-gray-700/90 dark:text-gray-300/80">Starts at {c.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experiences
