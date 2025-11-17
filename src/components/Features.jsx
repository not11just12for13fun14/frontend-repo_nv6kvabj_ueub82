import React from 'react'
import { motion } from 'framer-motion'
import { Percent, MapPin, Users, Receipt } from 'lucide-react'
import GlassCard from './GlassCard'

const Feature = ({ icon: Icon, title, desc, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
  >
    <GlassCard className="group hover:shadow-[0_20px_60px_-20px_rgba(251,191,36,0.35)] transition-shadow">
      <div className="flex items-center gap-2 text-gray-900 dark:text-white">
        <Icon className="h-5 w-5 text-amber-600 transition-transform group-hover:scale-110" />
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-sm mt-2 text-gray-700/90 dark:text-gray-300/80">{desc}</p>
    </GlassCard>
  </motion.div>
)

const Features = () => {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Why Bear Menu</h2>
          <p className="mt-2 text-gray-700/90 dark:text-gray-300/80">Practical innovation that makes dining out feel luxurious and stress-free.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Feature icon={Receipt} title="Real menus" desc="Live menus, verified by our network—no dead links, no PDF scavenger hunts." />
          <Feature icon={Percent} title="Total price upfront" desc="We calculate the full cost: taxes, fees, and tip included." delay={0.1} />
          <Feature icon={Users} title="Perfect for groups" desc="Smart splits and curated experiences for any size and vibe." delay={0.2} />
          <Feature icon={MapPin} title="Context-aware" desc="Neighborhood, vibe, dietary tags, and time-sensitive specials." delay={0.3} />
        </div>
      </div>
    </section>
  )
}

export default Features
