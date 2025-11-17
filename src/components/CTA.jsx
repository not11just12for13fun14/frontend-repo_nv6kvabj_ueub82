import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const CTA = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="cta" className="py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white"
        >
          Be first to taste the future
        </motion.h3>
        <p className="mt-2 text-gray-700/90 dark:text-gray-300/80">Join the waitlist for early access and exclusive drops.</p>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-6 mx-auto max-w-md rounded-2xl border border-white/20 bg-white/60 dark:bg-white/5 backdrop-blur-xl p-2 flex gap-2"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@domain.com"
            className="flex-1 bg-transparent placeholder-gray-500/70 focus:outline-none text-sm px-3 py-2 text-gray-900 dark:text-white"
          />
          <button className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white bg-gray-900 hover:bg-black transition-colors">
            {submitted ? 'Thanks!' : <>Join <ArrowRight className="h-4 w-4" /></>}
          </button>
        </motion.form>
      </div>
    </section>
  )
}

export default CTA
