import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Experiences from './components/Experiences'
import CTA from './components/CTA'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import BackgroundFX from './components/BackgroundFX'
import Marquee from './components/Marquee'
import CursorGlow from './components/CursorGlow'
import ScrollStage from './components/ScrollStage'
import SectionDivider from './components/SectionDivider'

function App() {
  return (
    <div className="min-h-screen bg-[oklch(0.99_0.01_95)] dark:bg-[oklch(0.15_0.02_95)] text-[oklch(0.15_0.02_95)] dark:text-[oklch(0.985_0_0)] relative">
      <BackgroundFX />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <SectionDivider />
        <ScrollStage>
          <Features />
        </ScrollStage>
        <SectionDivider />
        <ScrollStage>
          <HowItWorks />
        </ScrollStage>
        <SectionDivider />
        <ScrollStage>
          <Experiences />
        </ScrollStage>
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
