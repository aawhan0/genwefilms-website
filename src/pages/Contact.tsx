import Navbar from "../components/Navbar";
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

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <Aurora
          colorStops={["#7cff67", "#B497CF", "#5227FF"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/20 via-black/50 to-[#0a0a0a]" />

      {/* CONTENT */}
      <main className="relative z-10">

        <Navbar />

        {/* HERO + FORM */}
        <section
          id="contact-form"
          className="pt-28 md:pt-26 pb-16 md:pb-24 flex items-start"
        >
          <ContactForm />
        </section>

        {/* 🔥 CLEAN STACKED INFO SECTION */}
        <section className="py-24 border-t border-white/5 bg-white/[0.01] relative">

          {/* subtle divider */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[160px] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="max-w-md mx-auto px-6 text-center space-y-12">

            {/* Presence */}
            <div className="space-y-2">
              <div className="text-white/30 text-[10px] tracking-[0.35em] uppercase">
                Presence
              </div>
              <div className="text-sm text-white/70 tracking-wide">
                Global
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <div className="text-white/30 text-[10px] tracking-[0.35em] uppercase">
                Direct
              </div>
              <div className="text-sm text-white/70 break-all hover:text-white transition">
                contact@genwefilms.com
              </div>
            </div>

            {/* Social */}
            <div className="space-y-2">
              <div className="text-white/30 text-[10px] tracking-[0.35em] uppercase">
                Updates
              </div>
              <div className="text-sm text-white/70 tracking-wide">
                @genwefilms_ai
              </div>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}