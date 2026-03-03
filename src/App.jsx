import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Project";
import WorkGrid from "./sections/WorkGrid";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { Particles } from "./components/Particles";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      {/* Global particle effect — fixed behind all content */}
      <Particles
        className="fixed inset-0 z-0 pointer-events-none"
        quantity={200}
        ease={80}
        color={"#ffffff"}
        staticity={40}
        size={0.4}
        refresh
      />
      <Navbar />
      <Hero />
      <About />
      <WorkGrid />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

