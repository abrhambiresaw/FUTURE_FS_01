import React from "react";
import Hero from "./Sections/Hero";
import ShowcaseSection from "./Sections/ShowcaseSection";
import NavBar from "./components/NavBar";
import FeatureCard from "./Sections/FeatureCard";
import Experience from "./Sections/Experience";
import TechStack from "./Sections/TechStack";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <FeatureCard />
      <Experience />
      <TechStack />
    </>
  );
}

export default App;
