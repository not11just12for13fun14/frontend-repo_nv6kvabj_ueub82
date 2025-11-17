import React from 'react'
import { motion } from 'framer-motion'
import GlassCard from './GlassCard'

const Step = ({ step, title, text, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
  >
    <GlassCard className="group">
      <div className="text-sm font-semibold text-gray-900/80 dark:text-white/80">Step {step}</div>
      <h3 className="mt-1 font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="text-sm mt-2 text-gray-700/90 dark:text-gray-300/80">{text}</p>
    </GlassCard>
  </motion.div>
)

const HowItWorks = () => {
  return (
    <section id="how" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">How it works</h2>
          <p className="mt-2 text-gray-700/90 dark:text-gray-300/80">From craving to table in three deliberate steps.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Step step={1} title="Set your vibe & budget" text="Tell us who’s eating, what you’re feeling, and how much you want to spend." />
          <Step step={2} title="Explore curated picks" text="See real menus and all-in prices with options that actually fit your goals." delay={0.1} />
          <Step step={3} title="Book & split effortlessly" text="Reserve, pay, and split in one flow. No mental math, no surprises." delay={0.2} />
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
