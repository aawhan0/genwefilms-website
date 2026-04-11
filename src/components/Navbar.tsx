import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16 flex items-center justify-between">

      {/* 🔥 Glass background */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mx-4 lg:mx-8" />

      {/* Content */}
      <div className="relative w-full flex items-center justify-between py-3">

        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Genwe Films Logo" className="h-8 object-contain" />
          <span className="text-white font-heading italic text-xl tracking-tight hidden sm:block">
            Genwe Films
          </span>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center rounded-full px-1.5 py-1 max-w-fit backdrop-blur-xl bg-black/30 border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
          {["Home", "Services", "Work", "Process", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="px-4 py-2 text-sm font-medium text-white/80 font-body hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right: CTA */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black rounded-full px-5 py-2 text-sm font-semibold flex items-center gap-1.5"
        >
          Get Started
          <ArrowUpRight className="w-4 h-4" />
        </motion.button>

      </div>

    </nav>
  );
}