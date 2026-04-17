import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import CtaFooter from "../components/CtaFooter";
import ContactForm from "../components/ContactForm";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Aurora from "../components/Aurora";

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
    <div className="relative min-h-screen text-white overflow-hidden">

      {/* ✅ TRUE BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <Aurora
          colorStops={["#7cff67", "#B497CF", "#5227FF"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* ✅ DARK OVERLAY WITH GRADIENT (for readability and blending into the section below) */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/20 via-black/50 to-[#0a0a0a]" />

      {/* ✅ CONTENT */}
      <main className="relative z-10">

        <Navbar />

        {/* Centered Form Section */}
        <section id="contact-form" className="pt-32 pb-20 md:pt-40 md:pb-32 flex items-center min-h-[90vh]">
          <ContactForm />
        </section>

        {/* Info Section */}
        <section className="py-24 border-t border-white/5 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-12 md:gap-32">
              <div className="flex flex-col gap-2 italic">
                <span className="text-white/40 text-xs uppercase tracking-widest not-italic">Presence</span>
                <span className="text-xl md:text-2xl font-heading">Global</span>
              </div>
              <div className="flex flex-col gap-2 italic">
                <span className="text-white/40 text-xs uppercase tracking-widest not-italic">Direct</span>
                <span className="text-xl md:text-2xl font-heading">Contact@Genwefilms.com</span>
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
    </div>
  );
}