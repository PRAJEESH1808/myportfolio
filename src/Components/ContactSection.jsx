import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser'; // 1. Import EmailJS

const ContactSection = () => {
  const form = useRef(); // 2. Create a reference to the form
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // For success/error messages

  // 3. Handle Email Submission
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,   // Service ID from .env
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,  // Template ID from .env
      form.current, 
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY    // Public Key from .env
    )
    .then((result) => {
        setStatus("success");
        setLoading(false);
        e.target.reset(); // Clear form
    }, (error) => {
        console.log(error.text);
        setStatus("error");
        setLoading(false);
    });
  };

  const letterAni = {
    initial: { y: 40, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const containerAni = {
    animate: { transition: { staggerChildren: 0.05 } },
  };

  const title = "Get In Touch";

  return (
    <section id="contact" className="bg-[#1a0b2e] text-white py-24 px-6 md:px-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        
        <div className="space-y-8">
          <div>
            <motion.h2 
              variants={containerAni}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-6xl font-extrabold mb-4 flex overflow-hidden"
            >
              {title.split("").map((char, index) => (
                <motion.span key={index} variants={letterAni} className={char === "T" || char === "o" || char === "u" || char === "c" || char === "h" ? "text-cyan-400" : ""}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="h-1.5 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)]"
            ></motion.div>
          </div>
          
          <p className="text-gray-300 text-lg leading-relaxed max-w-md">
            Ready to start your next digital chapter? Let's collaborate to create something visually stunning and highly functional.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-center gap-5 group cursor-pointer">
              <div className="w-14 h-14 flex items-center justify-center border border-cyan-400 rounded-xl bg-[#240e3d] text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)] group-hover:bg-cyan-400 group-hover:text-[#1a0b2e] transition-all duration-500">
                <span className="text-2xl font-bold">@</span>
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Email Me</p>
                <p className="text-xl font-medium group-hover:text-cyan-400 transition-colors">prajeeshpranav76@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-5 group cursor-pointer">
              <div className="w-14 h-14 flex items-center justify-center border border-cyan-400 rounded-xl bg-[#240e3d] text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)] group-hover:bg-cyan-400 group-hover:text-[#1a0b2e] transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Location</p>
                <p className="text-xl font-medium group-hover:text-cyan-400 transition-colors">Coimbatore, Tamilnadu</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- FORM SECTION --- */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-[#240e3d] p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl relative"
        >
          {/* 4. Add 'ref' and 'onSubmit' to the form */}
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
            <input 
              type="text" 
              name="user_name" // 5. Ensure 'name' matches your EmailJS template
              placeholder="Name"
              required
              className="w-full bg-[#1a0b2e] border border-cyan-400/20 rounded-xl px-5 py-4 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all"
            />
            <input 
              type="email" 
              name="user_email" // 5. Ensure 'name' matches your EmailJS template
              placeholder="Email"
              required
              className="w-full bg-[#1a0b2e] border border-cyan-400/20 rounded-xl px-5 py-4 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all"
            />
            <textarea 
              rows="4"
              name="message" // 5. Ensure 'name' matches your EmailJS template
              placeholder="Message"
              required
              className="w-full bg-[#1a0b2e] border border-cyan-400/20 rounded-xl px-5 py-4 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all"
            ></textarea>
            
            <button 
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold rounded-xl hover:bg-cyan-400 hover:text-[#1a0b2e] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] transition-all duration-300 uppercase tracking-widest active:scale-95 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Hire Me Now!"}
            </button>

            {/* Status Messages */}
            {status === "success" && (
              <p className="text-green-400 text-center text-sm font-medium">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-center text-sm font-medium">Failed to send. Please try again.</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;