import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Code, GraduationCap } from 'lucide-react'; // Changed Twitter to Code

// Replace these with your actual image paths
import reactImg from "../assets/f1.png";
import javaImg from "../assets/b1.png";
import mysqlImg from "../assets/db1.jpg";
import gitImg from "../assets/api1.png";
import myProfileImg from "../assets/portfolio_img_prajeeesh.png";

const AboutSection = () => {
  const techStack = [
    { title: "Frontend", img: reactImg, desc: "React & Tailwind" },
    { title: "Spring Boot", img: javaImg, desc: "Java & Backend" },
    { title: "Database", img: mysqlImg, desc: "MySQL Logic" },
    { title: "Tools", img: gitImg, desc: "Git & GitHub" },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut"
      } 
    }
  };

  return (
    <section id="about" className="min-h-screen bg-[#1a0b2e] py-20 px-8 md:px-24 text-white overflow-hidden">
      
      <motion.div 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} 
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16"
      >
        
        {/* Left Side: Image with Floating Badges */}
        <div className="w-full md:w-1/2 relative flex justify-center items-center">
          <div className="absolute w-[320px] h-[450px] border-4 border-cyan-400 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] shadow-[0_0_50px_rgba(34,211,238,0.3)] animate-pulse"></div>
          
          <img 
            src={myProfileImg} 
            alt="Prajeesh" 
            className="relative z-10 h-[500px] object-contain drop-shadow-2xl translate-y-4"
          />

          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-10 right-0 z-20 bg-[#25163a]/90 border border-cyan-400/50 p-4 rounded-full text-center min-w-[120px]"
          >
            <p className="text-xl font-bold text-cyan-400 italic">Iam</p>
            <p className="text-[10px] uppercase font-bold text-gray-300">Quick Learner</p>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute bottom-20 left-0 z-20 bg-[#25163a]/90 border border-cyan-400/50 p-4 rounded-full text-center min-w-[120px]"
          >
            <p className="text-xl font-bold text-cyan-400 italic">New</p>
            <p className="text-[10px] uppercase font-bold text-gray-300">Full Stack Projects</p>
          </motion.div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2">
          <p className="text-cyan-400 font-medium tracking-widest mb-2">LET ME INTRODUCE MYSELF</p>
          <h2 className="text-5xl font-bold mb-4">About Me</h2>
          
          <p className="text-gray-400 mb-6 leading-relaxed text-lg">
            I just finished my studies and I am really excited to start my career as a <br/>
            <span className="text-white font-medium ml-1">Full Stack Java Developer</span>. 
            <br /><br />
            I enjoy the logical side of coding, like using <span className="text-cyan-400">Spring Boot</span> to build strong backend systems. I also love using <span className="text-cyan-400">React</span> to create clean and simple designs that people find easy to use.
          </p>

          {/* Education Card Block */}
          <div className="mb-10 bg-[#25163a]/50 border border-cyan-400/20 p-5 rounded-2xl shadow-xl flex items-center gap-5">
            <div className="p-3 bg-cyan-400/10 rounded-xl">
              <GraduationCap className="text-cyan-400" size={32} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">B.Tech Artificial Intelligence and Data Science</h4>
              <p className="text-gray-400 text-sm">V.S.B College of Engineering Technical Campus, Coimbatore</p>
              <div className="mt-2 flex items-center gap-4">
                 <span className="text-cyan-400 font-bold text-sm">CGPA: 8.53 / 10</span>
                 <span className="text-gray-600">|</span>
                 <span className="text-gray-400 text-xs italic">2025 Passout</span>
              </div>
            </div>
          </div>

          {/* View Resume Button Logic */}
          <a 
            href={`${import.meta.env.BASE_URL}/prajeesh_resume_new.pdf`}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mb-12"
          >
            <button className="bg-cyan-400 text-black px-8 py-3 rounded-md font-bold hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition duration-300">
              View My Resume
            </button>
          </a>

          {/* Tech Stack Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {techStack.map((tech, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative bg-[#25163a] border border-cyan-400/20 rounded-2xl overflow-hidden aspect-square flex items-center justify-center transition-all group cursor-pointer"
              >
                <div className="w-full h-full p-2">
                  <img 
                    src={tech.img} 
                    alt={tech.title} 
                    className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Stats & Socials */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-gray-200">Connect With Me</h4>
            <div className="flex flex-wrap gap-4 items-center">
              <a 
                href="https://www.linkedin.com/in/prajeesh-p-663372250/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25163a] border border-cyan-400/20 px-6 py-2 rounded-full hover:border-cyan-400 transition-colors"
              >
                <Linkedin className="text-cyan-400" size={18} />
                <span className="text-sm font-medium">LinkedIn Profile</span>
              </a>
              <div className="flex gap-3">
                <a 
                  href="https://github.com/PRAJEESH1808" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-[#25163a] border border-cyan-400/20 rounded-full hover:bg-cyan-400 hover:text-black transition-all"
                >
                  <Github size={18} />
                </a>
                {/* LeetCode Icon instead of Twitter */}
                <a 
                  href="https://leetcode.com/u/XQOAy758UC/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-[#25163a] border border-cyan-400/20 rounded-full hover:bg-cyan-400 hover:text-black transition-all"
                >
                  <Code size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;