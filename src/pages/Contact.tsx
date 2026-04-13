import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import CtaFooter from "../components/CtaFooter";
import ContactForm from "../components/ContactForm";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Contact() {

  const { hash } = useLocation();

  useEffect(() => {
    if (hash === "#contact-form") {
      const element = document.getElementById("contact-form");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-48 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-white/40 text-[10px] md:text-xs tracking-[0.4em] uppercase mb-8"
        >
          Contact Us
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-[10rem] font-heading italic leading-[0.75] tracking-tighter mb-12"
        >
          Let's talk <br /> about vision.
        </motion.h1>
      </section>

      {/* Form Section */}
      <section id="contact-form" className="pb-32">
        <ContactForm />
      </section>


      {/* Trust & Info Bar */}
      <section className="py-24 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-12 md:gap-32">
            <div className="flex flex-col gap-2 italic">
              <span className="text-white/40 text-xs uppercase tracking-widest not-italic">Presence</span>
              <span className="text-xl md:text-2xl font-heading">Global / Mumbai</span>
            </div>
            <div className="flex flex-col gap-2 italic">
              <span className="text-white/40 text-xs uppercase tracking-widest not-italic">Direct</span>
              <span className="text-xl md:text-2xl font-heading">hello@genwefilms.com</span>
            </div>
            <div className="flex flex-col gap-2 italic">
              <span className="text-white/40 text-xs uppercase tracking-widest not-italic">Updates</span>
              <span className="text-xl md:text-2xl font-heading">@genwefilms</span>
            </div>
          </div>
        </div>
      </section>

      <CtaFooter />
    </main>
  );
}

