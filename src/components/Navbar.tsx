import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = ["Home", "Services", "Work", "Process", "Contact"];

  return (
    <>
      <nav className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8 lg:px-16 flex items-center justify-between pointer-events-none">
        {/* 🔥 Glass background */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mx-2 md:mx-4 lg:mx-8 pointer-events-auto" />

        {/* Content */}
        <div className="relative w-full flex items-center justify-between py-2 md:py-3 px-4 md:px-6 pointer-events-auto">
          {/* Left: Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Genwe Films Logo" className="h-6 md:h-8 object-contain" />
            <span className="text-white font-heading italic text-lg md:text-xl tracking-tight">
              Genwe Films
            </span>
          </div>

          {/* Center: Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center rounded-full px-1.5 py-1 max-w-fit backdrop-blur-xl bg-black/30 border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="px-4 py-2 text-sm font-medium text-white/80 font-body hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right: CTA + Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black rounded-full px-4 md:px-5 py-1.5 md:py-2 text-xs md:text-sm font-semibold flex items-center gap-1.5"
            >
              <span className="hidden xs:block">Get Started</span>
              <span className="xs:hidden">Join</span>
              <ArrowUpRight className="w-3 md:w-4 h-3 md:h-4" />
            </motion.button>

            <button
              className="md:hidden text-white p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-24 z-40 md:hidden bg-black/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-2xl font-heading italic text-white/90 hover:text-white transition-colors border-b border-white/5 pb-4"
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}