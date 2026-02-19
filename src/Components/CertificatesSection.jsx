import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, CheckCircle2, X, Eye } from 'lucide-react';

const CertificatesSection = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  // Updated with clean paths (Use forward slashes / and no spaces in filenames)
  const certifications = [
    {
      title: "Hands On React JS From Beginner to Expert",
      issuer: "Udemy",
      date: "2026",
      skills: ["React Hooks", "Redux Toolkit", "Single Page Apps"],
      pdfPath:`${import.meta.env.BASE_URL}cert/Udemy Reactjs certificate.pdf`,
      icon: <CheckCircle2 className="text-cyan-400" />
    },
    {
      title: "Java Tutorials for Complete Beginners",
      issuer: "Udemy",
      date: "2026",
      skills: ["Java Collections", "OOPs Concepts", "Exception Handling"],
      pdfPath: `${import.meta.env.BASE_URL}cert/Udemy java course.pdf`,
      icon: <CheckCircle2 className="text-cyan-400" />
    },
    {
      title: "ALL IN ONE! Java + Spring Boot, Spring MVC and Hibernate",
      issuer: "Udemy",
      date: "2026",
      skills: ["RESTful APIs", "Spring Data JPA", "Spring Security"],
      pdfPath: `${import.meta.env.BASE_URL}cert/Udemy Springboot certificate new.pdf`,
      icon: <CheckCircle2 className="text-cyan-400" />
    },
    {
      title: "Complete SQL Crash Course: From Zero To Hero",
      issuer: "Udemy",
      date: "2024",
      skills: ["Complex Joins", "Database Design", "CRUD Operations"],
      pdfPath: `${import.meta.env.BASE_URL}cert/Udemy Sql Course.pdf`,
      icon: <CheckCircle2 className="text-cyan-400" />
    }
  ];

  return (
    <section id="certifications" className="min-h-screen bg-[#1a0b2e] py-20 px-8 md:px-24 text-white overflow-hidden">
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="mb-16">
          <p className="text-cyan-400 font-medium tracking-widest mb-2 uppercase text-sm">Professional Learning</p>
          <h2 className="text-5xl font-bold mb-4">Udemy Certifications</h2>
          <div className="h-1 w-20 bg-cyan-400 rounded-full"></div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02, x: 10 }}
              onClick={() => setSelectedCert(cert)}
              className="group bg-[#25163a]/40 border border-cyan-400/10 p-6 rounded-2xl flex items-center gap-6 hover:bg-[#2d1b46] hover:border-cyan-400/40 transition-all cursor-pointer"
            >
              <div className="hidden sm:flex p-4 bg-[#1a0b2e] rounded-xl border border-white/5 group-hover:border-cyan-400/30 transition-all">
                <Award className="text-cyan-400" size={32} />
              </div>

              <div className="flex-grow">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-1">
                    {cert.title}
                  </h3>
                  <span className="text-[10px] font-bold text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-md ml-2">
                    UDEMY
                  </span>
                </div>
                
                <p className="text-gray-400 text-sm mb-4 italic">Successfully completed in {cert.date}</p>
                
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, index) => (
                    <span key={index} className="text-[10px] bg-white/5 border border-white/10 px-3 py-1 rounded-full text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-gray-600 group-hover:text-cyan-400 transition-colors flex flex-col items-center gap-1">
                <Eye size={20} />
                <span className="text-[8px] font-bold">VIEW</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* PDF LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl h-[90vh] bg-[#1a0b2e] rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-5 bg-[#1a0b2e] border-b border-white/10 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <div className="p-2 bg-cyan-400/10 rounded-lg">
                        <Award className="text-cyan-400" size={20} />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white leading-none">{selectedCert.title}</h3>
                        <p className="text-xs text-gray-400 mt-1">Verified Certificate • {selectedCert.issuer}</p>
                    </div>
                </div>
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="p-2 hover:bg-white/10 rounded-full transition-all text-gray-400 hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>

              {/* PDF Viewer Content */}
              <div className="flex-grow bg-[#2d2d2d] relative">
                {/* Using <object> is the most professional way to handle PDFs in React */}
                <object
                  data={`${selectedCert.pdfPath}#toolbar=0&view=FitH`}
                  type="application/pdf"
                  className="w-full h-full"
                >
                  <div className="flex flex-col items-center justify-center h-full text-center p-10">
                    <p className="mb-4 text-gray-300">Your browser cannot preview this PDF directly.</p>
                    <a 
                      href={selectedCert.pdfPath} 
                      target="_blank" 
                      rel="noreferrer"
                      className="px-6 py-2 bg-cyan-400 text-black font-bold rounded-full hover:bg-white transition-colors"
                    >
                      Download to View
                    </a>
                  </div>
                </object>
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-[#1a0b2e] border-t border-white/5 flex justify-center">
                <a 
                  href={selectedCert.pdfPath} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyan-400 text-xs font-bold hover:text-white transition-colors flex items-center gap-2"
                >
                  OPEN IN NEW TAB <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificatesSection;