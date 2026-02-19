import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  Bus,
  Calculator,
  X,
  Server,
  Layout,
  Database,
  Share2,
} from "lucide-react";

const base = import.meta.env.BASE_URL;

const ProjectsSection = () => {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Order-it-Web",
      category: "fullstack",
      description:
        "A complete food ordering platform using Spring Boot and React.",
      tech: ["React JS", "Spring Boot", "MySQL", "Postman"],
      icon: <ShoppingCart className="text-cyan-400" size={24} />,
      journey: {
        intro:
          "A robust Full Stack application designed to streamline food ordering with a modern UI and secure backend.",

        frontend: {
          tech: "React JS",
          image: `${base}projectimage/oit1.png`,
          details:
            "Interactive UI with dynamic cart and real-time price updates.",
        },

        backend: {
          tech: "Spring Boot",
          image: `${base}projectimage/oit2.png`,
          details:
            "REST APIs with Spring Data JPA for authentication and order processing.",
        },

        middleware: {
          tech: "Postman",
          image: `${base}projectimage/oit4.png`,
          details: "API testing and validation.",
        },

        database: {
          tech: "MySQL",
          image: `${base}projectimage/oit3.png`,
          details: "Normalized relational database design.",
        },
      },
    },

    {
      title: "KSRTC Clone App",
      category: "fullstack",
      description:
        "Bus booking system with interactive seat selection and booking flow.",
      tech: ["React", "Spring Boot", "MySQL", "Tailwind"],
      icon: <Bus className="text-cyan-400" size={24} />,
      journey: {
        intro:
          "A comprehensive reservation system with real-time seat availability.",

        frontend: {
          tech: "React & Tailwind",
          image: `${base}bus/bus1.png`,
          details: "Custom grid-based seat selection UI.",
        },

        backend: {
          tech: "Spring Boot",
          image: `${base}bus/bus2.png`,
          details: "Fare calculation & booking logic.",
        },

        middleware: {
          tech: "Postman",
          image: `${base}bus/bus3.png`,
          details: "Booking flow testing.",
        },

        database: {
          tech: "MySQL",
          image: `${base}bus/bus4.png`,
          details: "Transaction-safe booking system.",
        },
      },
    },

    {
      title: "JS Calculator",
      category: "frontend",
      description: "Logic-based calculator using pure JavaScript.",
      tech: ["JavaScript", "HTML", "CSS"],
      icon: <Calculator className="text-cyan-400" size={24} />,
      journey: {
        intro: "DOM manipulation and event-driven programming project.",

        frontend: {
          tech: "Vanilla JS",
          image: `${base}calci/calci1.jpeg`,
          details:
            "Handles keyboard input, edge cases, and calculation history.",
        },
      },
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section className="min-h-screen bg-[#1a0b2e] py-20 px-6 text-white">
      <div className="max-w-7xl mx-auto">

        {/* FILTER */}
        <div className="flex justify-center gap-4 mb-12">
          {["all", "frontend", "fullstack"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-6 py-2 rounded-full text-sm font-bold capitalize border ${
                filter === tab
                  ? "bg-cyan-400 text-black border-cyan-400"
                  : "bg-white/5 text-gray-400 border-white/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* PROJECT CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
              className="bg-[#25163a]/50 p-8 rounded-3xl cursor-pointer"
            >
              {project.icon}
              <h3 className="text-2xl font-bold mt-4">{project.title}</h3>
              <p className="text-gray-400 text-sm mt-2">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 overflow-y-auto p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="fixed top-6 right-6 bg-cyan-400 p-3 rounded-full text-black"
            >
              <X />
            </button>

            <div className="max-w-5xl mx-auto space-y-20">

              {Object.entries(selectedProject.journey).map(
                ([key, value]) =>
                  key !== "intro" &&
                  value && (
                    <div
                      key={key}
                      className="flex flex-col md:flex-row gap-10 items-center"
                    >
                      <img
                        src={value.image}
                        className="rounded-2xl border"
                      />

                      <div>
                        <h3 className="text-3xl font-bold mb-4">
                          {key.toUpperCase()}
                        </h3>
                        <p className="text-gray-300">{value.details}</p>
                      </div>
                    </div>
                  )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
