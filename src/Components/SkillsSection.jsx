import React from 'react';
import { motion } from 'framer-motion';
// Added Package icon to replace the missing 'Box' icon
import { Layout, Server, Code2, Globe, Database, Cpu, Layers, Terminal, Package } from 'lucide-react';

const SkillsSection = () => {
  const frontendSkills = [
    { name: 'React.js', icon: <Code2 size={16} /> },
    { name: 'Tailwind CSS', icon: <Cpu size={16} /> },
    { name: 'HTML5', icon: <Globe size={16} /> },
    { name: 'JavaScript', icon: <Terminal size={16} /> },
  ];

  const backendSkills = [
    { name: 'Java', icon: <Package size={16} /> },
    { name: 'Spring Boot', icon: <Layers size={16} /> },
    { name: 'Rest API', icon: <Server size={16} /> },
    { name: 'MySQL', icon: <Database size={16} /> },
  ];

  return (
    <section id="skills" className="py-24 bg-[#1a0b2e] text-white font-sans">
      <div className="max-w-6xl mx-auto px-8 md:px-12">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Technical <span className="text-cyan-400">Expertise</span>
          </motion.h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full shadow-[0_0_15px_rgba(34,211,238,0.6)]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* FRONTEND BOX */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -10 }}
            className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-cyan-400/50 transition-all duration-500"
          >
            <div className="absolute -top-6 left-8 bg-cyan-400 text-black p-4 rounded-2xl shadow-lg">
              <Layout size={32} />
            </div>
            <h3 className="text-2xl font-bold mt-6 mb-8">Frontend Development</h3>
            <div className="grid grid-cols-2 gap-4">
              {frontendSkills.map((skill, idx) => (
                <div key={idx} className="flex items-center space-x-3 bg-white/5 p-4 rounded-xl border border-white/5 group-hover:border-cyan-400/20 transition-all">
                  <span className="text-cyan-400">{skill.icon}</span>
                  <span className="text-gray-200 font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* BACKEND BOX */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -10 }}
            className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-cyan-400/50 transition-all duration-500"
          >
            <div className="absolute -top-6 left-8 bg-cyan-400 text-black p-4 rounded-2xl shadow-lg">
              <Server size={32} />
            </div>
            <h3 className="text-2xl font-bold mt-6 mb-8">Backend Development</h3>
            <div className="grid grid-cols-2 gap-4">
              {backendSkills.map((skill, idx) => (
                <div key={idx} className="flex items-center space-x-3 bg-white/5 p-4 rounded-xl border border-white/5 group-hover:border-cyan-400/20 transition-all">
                  <span className="text-cyan-400">{skill.icon}</span>
                  <span className="text-gray-200 font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;