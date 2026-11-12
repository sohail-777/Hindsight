import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Pricing from './components/Pricing.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { scrollToSection } from './utils.js'

export default function App() {
  // Choosing a plan scrolls to the demo form and pre-selects that plan.
  const [selectedPlan, setSelectedPlan] = useState('team')

  const choosePlan = (planId) => {
    setSelectedPlan(planId)
    scrollToSection('contact')
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing onChoosePlan={choosePlan} />
        <Contact selectedPlan={selectedPlan} onPlanChange={setSelectedPlan} />
      </main>
      <Footer />
    </>
  )
}
