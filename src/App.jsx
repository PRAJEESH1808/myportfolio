import { useState } from 'react'
import "./index.css";

import HeroSection from './Components/HeroSection'
import ProjectsSection from './Components/ProjectsSection';
import CertificatesSection from './Components/CertificatesSection';
import ContactSection from './Components/ContactSection';
import AboutSection from './Components/AboutSection';
import SkillsSection from './Components/SkillsSection';

function App() {

  return (
    <>
      <HeroSection/>
      <AboutSection/>
      <ProjectsSection/>
      <CertificatesSection/>
      <SkillsSection/>
      <ContactSection/>
      </>
  )
}

export default App
