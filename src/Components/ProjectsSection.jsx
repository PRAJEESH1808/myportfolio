import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, ExternalLink, ShoppingCart, Bus, Calculator, X, 
  Server, Layout, Database, Share2 
} from 'lucide-react';

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Order-it-Web",
      category: "fullstack",
      categoryLabel: "Full Stack Development",
      description: "A complete food ordering platform using Spring Boot and React.",
      tech: ["React JS", "Spring Boot", "MySQL", "Postman"],
      icon: <ShoppingCart className="text-cyan-400" size={24} />,
      github: "https://github.com/PRAJEESH1808",
      journey: {
        intro: "A robust Full Stack application designed to streamline food ordering with a modern UI and secure backend.",
        mainImage: "/projectimage/oit1.png", 
        frontend: { 
            tech: "React JS", 
            image: "/projectimage/oit1.png",
            details: "For the frontend, I focused on creating a highly interactive user experience. Using React's functional components and hooks like useState and useEffect, I managed the application state efficiently. I implemented a dynamic shopping cart system where users can add items and see real-time price updates, all wrapped in a responsive design."
        },
        backend: { 
            tech: "Java Spring Boot", 
            image: "/projectimage/oit2.png", 
            details: "The backend was architected using Java Spring Boot to ensure high performance and scalability. I developed a suite of RESTful endpoints to handle everything from user authentication to complex order processing logic using Spring Data JPA."
        },
        middleware: { 
            tech: "Postman", 
            image: "/projectimage/oit4.png", 
            details: "API integrity was maintained through rigorous testing in Postman. I created comprehensive test suites for every endpoint to validate JSON payloads, status codes, and error handling logic, significantly reducing debugging time."
        },
        database: { 
            tech: "MySQL", 
            image: "/projectimage/oit3.png", 
            details: "I designed a normalized relational database schema in MySQL to store user profiles, product catalogs, and order history. Using XAMPP, I managed the local server environment and optimized queries for fast retrieval."
        }
      }
    },
    {
      title: "KSRTC Clone App",
      category: "fullstack",
      categoryLabel: "Full Stack Development",
      description: "A functional clone of the bus booking system featuring interactive seat selection.",
      tech: ["Java", "React", "MySQL", "Tailwind CSS"],
      icon: <Bus className="text-cyan-400" size={24} />,
      github: "https://github.com/PRAJEESH1808",
      journey: {
        intro: "A comprehensive bus reservation system focused on seat availability and real-time booking flow.",
        mainImage: "/projectimage/ksrtc-main.png",
        frontend: { 
            tech: "React & Tailwind", 
            image: "/bus/bus1.png", 
            details: "The user interface mirrors the complex requirements of a travel booking site. The seat selection tool uses a custom grid system that tracks state in real-time, allowing users to select or deselect seats with instant visual feedback."
        },
        backend: { 
            tech: "Spring Boot", 
            image: "/bus/bus2.png", 
            details: "The core booking engine handles complex business rules regarding seat availability and ticket pricing. I implemented a robust service layer that calculates fares dynamically based on the distance and bus type."
        },
        middleware: { 
            tech: "Postman", 
            image: "/bus/bus3.png", 
            details: "I utilized Postman to simulate various booking scenarios, including 'Seat Already Booked' errors and concurrent reservation attempts, refining the API's response codes and error handling."
        },
        database: { 
            tech: "MySQL", 
            image: "/bus/bus4.png", 
            details: "The database management involved creating high-integrity tables for Routes and Buses. I used MySQL transactions to ensure reliable commits, preventing overbooking and maintaining a synced inventory."
        }
      }
    },
    {
      title: "JS Calculator",
      category: "frontend",
      categoryLabel: "Frontend Project",
      description: "A logic-based calculator built to master DOM manipulation and browser events.",
      tech: ["JavaScript", "HTML5", "CSS3"],
      icon: <Calculator className="text-cyan-400" size={24} />,
      github: "https://github.com/PRAJEESH1808",
      journey: {
        intro: "A pure JavaScript project focused on mathematical logic and event-driven programming.",
        mainImage: "/projectimage/calc-main.png",
        frontend: { 
            tech: "Vanilla JS / CSS3", 
            image: "/calci/calci1.jpeg", 
            details: "This project was a deep dive into the fundamentals of the Document Object Model (DOM). I wrote clean, modular JavaScript to handle button clicks, keyboard inputs, and mathematical operations. The logic includes edge-case handling for division by zero and multi-step calculations, ensuring a smooth user interface. I also utilized LocalStorage to persist calculation history across sessions."
        },
        // For frontend only, we set others to null
        backend: null,
        middleware: null,
        database: null
      }
    }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="min-h-screen bg-[#1a0b2e] py-20 px-8 md:px-24 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-cyan-400 font-medium tracking-widest mb-2 uppercase text-sm">Portfolio</p>
          <h2 className="text-5xl font-bold mb-8 italic">Featured <span className="text-cyan-400">Projects</span></h2>
          
          <div className="flex justify-center gap-4 mb-12">
            {['all', 'frontend', 'fullstack'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-6 py-2 rounded-full text-sm font-bold capitalize transition-all duration-300 border ${
                  filter === tab ? "bg-cyan-400 text-black border-cyan-400" : "bg-white/5 text-gray-400 border-white/10 hover:border-cyan-400/50"
                }`}
              >
                {tab === 'fullstack' ? 'Full Stack / Backend' : tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div 
              layout key={project.title} 
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -10 }}
              className="bg-[#25163a]/50 border border-white/5 rounded-3xl p-8 hover:border-cyan-400/40 cursor-pointer transition-all flex flex-col h-full group"
            >
              <div className="p-4 bg-[#1a0b2e] rounded-2xl w-fit mb-6 border border-white/5 group-hover:border-cyan-400/50 transition-colors">{project.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-6 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => <span key={t} className="text-[10px] font-bold bg-cyan-400/10 px-3 py-1 rounded text-cyan-400 border border-cyan-400/20">{t}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#1a0b2e]/98 backdrop-blur-2xl z-[100] overflow-y-auto"
          >
            <div className="max-w-6xl mx-auto px-6 py-20 relative">
              <button onClick={() => setSelectedProject(null)} className="fixed top-8 right-8 p-3 bg-cyan-400 rounded-full text-black z-[102] hover:scale-110 transition-transform shadow-lg"><X size={24}/></button>
              
              <div className="text-center mb-16">
                <h2 className="text-6xl font-black mb-4 tracking-tighter">{selectedProject.title}</h2>
                <div className="h-1.5 w-32 bg-cyan-400 mx-auto rounded-full mb-8 shadow-[0_0_20px_rgba(34,211,238,0.5)]"></div>
                <p className="text-gray-300 text-xl max-w-3xl mx-auto font-light leading-relaxed">{selectedProject.journey.intro}</p>
              </div>

              <div className="space-y-48">
                
                {/* 1. Frontend - Always Rendered */}
                {selectedProject.journey.frontend && (
                  <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2 space-y-6">
                      <div className="flex items-center gap-5">
                        <div className="p-4 bg-cyan-400/10 rounded-2xl border border-cyan-400/20"><Layout className="text-cyan-400" size={36}/></div>
                        <div>
                          <h3 className="text-4xl font-bold italic text-white">Frontend</h3>
                          <p className="text-cyan-400 font-bold uppercase tracking-widest text-sm mt-1">{selectedProject.journey.frontend.tech}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 text-lg leading-relaxed font-light">
                          {selectedProject.journey.frontend.details}
                      </p>
                    </div>
                    <div className="w-full md:w-1/2">
                      <img src={selectedProject.journey.frontend.image} className="rounded-3xl border border-white/10 shadow-2xl" alt="Frontend" />
                    </div>
                  </div>
                )}

                {/* 2. Backend - Conditional */}
                {selectedProject.journey.backend && (
                  <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2 md:order-2 space-y-6">
                      <div className="flex items-center gap-5">
                        <div className="p-4 bg-cyan-400/10 rounded-2xl border border-cyan-400/20"><Server className="text-cyan-400" size={36}/></div>
                        <div>
                          <h3 className="text-4xl font-bold italic text-white">Backend</h3>
                          <p className="text-cyan-400 font-bold uppercase tracking-widest text-sm mt-1">{selectedProject.journey.backend.tech}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 text-lg leading-relaxed font-light">
                          {selectedProject.journey.backend.details}
                      </p>
                    </div>
                    <div className="w-full md:w-1/2 md:order-1">
                      <img src={selectedProject.journey.backend.image} className="rounded-3xl border border-white/10 shadow-2xl" alt="Backend" />
                    </div>
                  </div>
                )}

                {/* 3. Middleware - Conditional */}
                {selectedProject.journey.middleware && (
                  <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2 space-y-6">
                      <div className="flex items-center gap-5">
                        <div className="p-4 bg-cyan-400/10 rounded-2xl border border-cyan-400/20"><Share2 className="text-cyan-400" size={36}/></div>
                        <div>
                          <h3 className="text-4xl font-bold italic text-white">Workflow</h3>
                          <p className="text-cyan-400 font-bold uppercase tracking-widest text-sm mt-1">{selectedProject.journey.middleware.tech}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 text-lg leading-relaxed font-light">
                          {selectedProject.journey.middleware.details}
                      </p>
                    </div>
                    <div className="w-full md:w-1/2">
                      <img src={selectedProject.journey.middleware.image} className="rounded-3xl border border-white/10 shadow-2xl" alt="Middleware" />
                    </div>
                  </div>
                )}

                {/* 4. Database - Conditional */}
                {selectedProject.journey.database && (
                  <div className="flex flex-col md:flex-row items-center gap-16 pb-20">
                    <div className="w-full md:w-1/2 md:order-2 space-y-6">
                      <div className="flex items-center gap-5">
                        <div className="p-4 bg-cyan-400/10 rounded-2xl border border-cyan-400/20"><Database className="text-cyan-400" size={36}/></div>
                        <div>
                          <h3 className="text-4xl font-bold italic text-white">Database</h3>
                          <p className="text-cyan-400 font-bold uppercase tracking-widest text-sm mt-1">{selectedProject.journey.database.tech}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 text-lg leading-relaxed font-light">
                          {selectedProject.journey.database.details}
                      </p>
                    </div>
                    <div className="w-full md:w-1/2 md:order-1">
                      <img src={selectedProject.journey.database.image} className="rounded-3xl border border-white/10 shadow-2xl" alt="Database" />
                    </div>
                  </div>
                )}

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;