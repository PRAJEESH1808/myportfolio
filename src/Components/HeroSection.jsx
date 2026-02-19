import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Code, Globe } from 'lucide-react';
import myImage from "../assets/portfolio_img_prajeeesh.png";

const PortfolioHero = () => {
  // --- Scroll Spy Logic ---
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionIds = ['home', 'about', 'projects', 'certifications', 'skills', 'contact'];
    
    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '0px',
      threshold: 0.6,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div id="home" className="min-h-screen bg-[#1a0b2e] text-white font-sans selection:bg-cyan-400 selection:text-black overflow-x-hidden">
      
      {/* 1. NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a0b2e]/80 backdrop-blur-md border-b border-white/5">
        <div className="flex justify-between items-center px-8 md:px-12 py-6 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold tracking-tighter"
          >
            Prajeesh P<span className="text-cyan-400">.</span>
          </motion.div>
          <div className="hidden md:flex space-x-8 font-medium">
            {['Home', 'About', 'Projects', 'Certifications', 'Skills', 'Contact'].map((item) => {
              const sectionId = item.toLowerCase();
              return (
                <a 
                  key={item} 
                  href={`#${sectionId}`} 
                  className={`transition-colors duration-300 ${
                    activeSection === sectionId ? 'text-cyan-400 font-bold underline underline-offset-8 decoration-2' : 'hover:text-cyan-400'
                  }`}
                >
                  {item}
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      {/* 2. MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-8 md:px-12 pt-32 pb-12 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side: Animated Text Content */}
        <motion.div 
          className="md:w-1/2 z-10"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            Hi! I'm Prajeesh P
          </motion.h1>
          
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
            And I'm <span className="text-cyan-400 italic">Full Stack Java Developer</span>
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-8 leading-relaxed max-w-lg">
            I am a fresher interested in Java Full Stack Development. I have knowledge of Java, Spring Boot, React, MySQL, and REST APIs. I enjoy learning new technologies and building web applications. 
          </motion.p>

          <motion.div variants={fadeInUp} className="flex space-x-12 mb-10 text-sm">
            <div className="border-l-2 border-cyan-400 pl-4">
              <p className="font-bold mb-1 uppercase tracking-widest text-[10px] text-cyan-400">Email</p>
              <p className="text-gray-300">prajeeshpranav76@gmail.com</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex space-x-4 mb-12">
            <a href={`${import.meta.env.BASE_URL}/prajeesh_resume_new.pdf`} download="Prajeesh_resume_new.pdf">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-cyan-400 text-black px-8 py-3 rounded-md font-bold shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition duration-300"
              >
                Download CV
              </motion.button>
            </a>

            {/* UPDATED: Link to Contact ID */}
            <a href="#contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-md font-bold hover:bg-cyan-400 hover:text-black transition duration-300"
              >
                Hire Me Now!
              </motion.button>
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={fadeInUp} className="flex space-x-4">
            {[
              { Icon: Linkedin, href: "https://www.linkedin.com/in/prajeesh-p-663372250/" },
              { Icon: Github, href: "https://github.com/PRAJEESH1808" },
              { Icon: Code, href: "https://leetcode.com/u/XQOAy758UC/" },
              { Icon: Globe, href: "#" }
            ].map((social, index) => (
              <motion.a 
                whileHover={{ y: -5, backgroundColor: '#22d3ee', color: '#000' }}
                key={index} 
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border-2 border-cyan-400 rounded-md text-cyan-400 transition-all duration-300 shadow-[0_0_10px_rgba(34,211,238,0.2)]"
              >
                <social.Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side: Image with Glow Effect */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center items-center mt-20 md:mt-0 relative"
        >
          <div className="absolute w-[300px] h-[400px] bg-cyan-400 rounded-full blur-[100px] opacity-20 animate-pulse"></div>
          
          <motion.div 
            animate={{ 
              borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 60% 30% 70% 40%", "40% 60% 70% 30% / 40% 50% 60% 50%"] 
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute w-[320px] h-[420px] bg-cyan-400 opacity-80 shadow-[0_0_50px_rgba(34,211,238,0.3)]"
          ></motion.div>

          <img 
            src={myImage} 
            alt="Prajeesh P" 
            className="relative z-10 w-auto h-[500px] object-contain drop-shadow-2xl transform scale-110 -translate-x-6 translate-y-8 mt-10"
            style={{
              maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
            }}
          />
        </motion.div>
      </main>
    </div>
  );
};

export default PortfolioHero;