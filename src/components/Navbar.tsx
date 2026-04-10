import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16 py-3 flex items-center justify-between">
      
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Genwe Films Logo" className="h-8 object-contain" />
        <span className="text-white font-heading italic text-xl tracking-tight hidden sm:block">
          Genwe Films
        </span>
      </div>

      {/* Center: Navigation Links */}
      <div className="hidden md:flex items-center liquid-glass rounded-full px-1.5 py-1 max-w-fit">
        {["Home", "Services", "Work", "Process", "Contact"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="px-4 py-2 text-sm font-medium text-foreground/90 font-body hover:text-white transition-colors"
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

    </nav>
  );
}