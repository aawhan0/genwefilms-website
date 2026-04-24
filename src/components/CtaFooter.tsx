import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function CtaFooter() {
  return (
    <section className="relative px-4 md:px-6 pt-12 md:pt-20 pb-10">
      <div className="max-w-5xl mx-auto">

        {/* CTA Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}

          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            e.currentTarget.style.setProperty("--x", `${x}px`);
            e.currentTarget.style.setProperty("--y", `${y}px`);
          }}

          className="relative group overflow-hidden liquid-glass rounded-[2rem] md:rounded-[3rem] p-10 md:p-20 text-center flex flex-col items-center gap-6 md:gap-8"
        >

          {/* 🔥 Glow Layer */}
          <div
            className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition duration-500"
            style={{
              background:
                "radial-gradient(700px circle at var(--x) var(--y), rgba(255,255,255,0.08), transparent 75%)",
            }}
          />

          {/* Content */}
          <div className="relative z-20 flex flex-col items-center gap-6 md:gap-8">

            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading italic text-white leading-[0.9] tracking-tight">
              Let’s create something unforgettable.
            </h2>

            <p className="text-white/50 font-body font-light text-base md:text-lg max-w-xl leading-relaxed">
              AI-powered brand films designed to capture attention and scale storytelling.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
              <Link
                to="/connect#contact-form"
                className="w-full sm:w-auto bg-white text-black rounded-full px-8 md:px-10 py-3 md:py-4 font-medium text-sm md:text-base hover:bg-white/90 transition-colors flex items-center justify-center gap-2 group"
              >
                Start your project
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <a
                href="mailto:contact@genwefilms.com"
                className="w-full sm:w-auto border border-white/20 rounded-full px-8 md:px-10 py-3 md:py-4 text-white/70 font-medium text-sm md:text-base hover:text-white hover:border-white/40 transition-all flex items-center justify-center"
              >
                contact@genwefilms.com
              </a>
            </div>

          </div>
        </motion.div>

        {/* Footer Bar */}
        <div className="mt-10 md:mt-14 pt-6 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-4">

          <div className="text-white/30 text-[10px] md:text-xs font-body tracking-wider uppercase text-center md:text-left">
            © 2026 Genwe Films. All rights reserved.
          </div>

          <div className="flex items-center gap-6 md:gap-8">

            <Link
              to="/privacy-policy"
              className="text-white/30 text-[10px] md:text-xs font-body tracking-wider uppercase hover:text-white/60 transition-colors"
            >
              Privacy
            </Link>

            <Link
              to="/terms"
              className="text-white/30 text-[10px] md:text-xs font-body tracking-wider uppercase hover:text-white/60 transition-colors"
            >
              Terms
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
}