import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, ShieldCheck, Crown } from 'lucide-react'
import Magnetic from './Magnetic'
import Tilt from './Tilt'
import Spline from '@splinetool/react-spline'

const gradientText = 'bg-clip-text text-transparent bg-[conic-gradient(from_220deg_at_50%_50%,oklch(0.9_0.14_85)_0%,oklch(0.98_0.04_95)_30%,oklch(0.86_0.17_75)_60%,oklch(0.92_0.07_95)_100%)]'

const Hero = () => {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      {/* Layered glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_-10%,rgba(253,230,138,0.28),transparent_60%)]" />
      </div>

      {/* 3D Spline backdrop */}
      <div className="absolute inset-x-0 top-10 -z-10 h-[420px] md:h-[520px] opacity-70">
        <div className="absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_35%,black,transparent)]">
          <Spline scene="https://prod.spline.design/6nJx2X3mK8OQwH2Y/scene.splinecode" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/30 dark:bg-white/10 px-3 py-1 backdrop-blur-xl shadow-[0_0_1px_rgba(255,255,255,0.6)_inset]">
            <Sparkles className="h-4 w-4 text-amber-600" />
            <span className="text-xs font-medium text-gray-800/80 dark:text-white/80">Premium menus. Real prices. Tailored experiences.</span>
          </div>

          <h1 className={`mt-6 text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05] ${gradientText}`}>
            The Yelp of tomorrow, built for the way you actually eat
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-gray-700/90 dark:text-gray-200/80">
            Bear Menu reveals real menus with crystal‑clear pricing and curates bespoke group & budget experiences—so every meal feels effortless and elevated.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Magnetic>
              <a href="#cta" className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white bg-gray-900 hover:bg-black transition-colors shadow-xl shadow-amber-500/10">
                Get early access <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Magnetic>
            <Magnetic strength={0.15}>
              <a href="#how" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold bg-white/60 dark:bg-white/10 border border-white/20 backdrop-blur-xl hover:bg-white/70 dark:hover:bg-white/15 transition">
                See how it works
              </a>
            </Magnetic>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
            {[
              { title: 'Verified menus', text: 'No more guessing—see what’s actually available.', icon: ShieldCheck },
              { title: 'Premium curation', text: 'Handpicked experiences for any vibe or group size.', icon: Crown },
              { title: 'True price transparency', text: 'Know the total before you book—taxes, tips, and fees included.', icon: null },
            ].map((card, idx) => (
              <motion.div key={card.title} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * (idx + 1) }} className="rounded-2xl border border-white/20 bg-white/60 dark:bg-white/10 backdrop-blur-xl p-5">
                <div className="flex items-center gap-2 text-gray-900 dark:text-white">
                  {card.icon ? <card.icon className="h-4 w-4 text-amber-600" /> : <span className="inline-flex h-4 w-4 items-center justify-center rounded bg-amber-500/20 ring-1 ring-amber-500/40">💸</span>}
                  <span className="text-sm font-semibold">{card.title}</span>
                </div>
                <p className="text-xs mt-1 text-gray-600 dark:text-gray-300/80">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Glass panel preview with 3D tilt & texture */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <Tilt scale={1.01} max={10}>
            <div className="relative rounded-3xl border border-white/20 bg-white/40 dark:bg-white/5 backdrop-blur-2xl p-4 shadow-[0_10px_60px_-15px_rgba(251,191,36,0.35)] overflow-hidden">
              <div aria-hidden className="pointer-events-none absolute inset-0 rounded-[inherit]" style={{
                background:
                  'linear-gradient(180deg, rgba(255,255,255,0.22), rgba(255,255,255,0.08) 35%, rgba(255,255,255,0) 60%)'
              }} />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
                {[
                  { title: 'Chef’s Tasting', price: '$85 pp', tag: 'Group of 4–6' },
                  { title: 'Date Night Prix Fixe', price: '$120 for 2', tag: 'All-in, tip included' },
                  { title: 'Budget Bites', price: '$15 pp', tag: 'Under $20 total' },
                ].map((card, idx) => (
                  <div key={card.title} className="relative">
                    <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(120%_80%_at_0%_0%,rgba(251,191,36,0.12),transparent_40%)]" />
                    <div className="rounded-2xl border border-white/20 bg-white/60 dark:bg-white/10 backdrop-blur-xl p-5 relative">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900 dark:text-white">{card.title}</h3>
                        <span className="text-sm text-gray-700 dark:text-gray-200/80">{card.price}</span>
                      </div>
                      <p className="text-xs mt-1 text-gray-600 dark:text-gray-300/80">{card.tag}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* film grain */}
              <div className="pointer-events-none absolute inset-0 opacity-[.06] mix-blend-soft-light" style={{
                backgroundImage:
                  'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'160\' height=\'160\' viewBox=\'0 0 160 160\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'160\' height=\'160\' filter=\'url(%23n)\' opacity=\'0.3\'/%3E%3C/svg%3E")'
              }} />
            </div>
          </Tilt>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
