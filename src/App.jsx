import React from 'react'
import Hero from './sections/Hero'
import ShowcaseSection from './Sections/ShowcaseSection'
import NavBar from './components/NavBar'
import FeatureCard from './Sections/FeatureCard'

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <FeatureCard />
    </>
  )
}

export default App