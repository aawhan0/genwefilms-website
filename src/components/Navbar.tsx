import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Work", path: "/work" },
    { name: "Process", path: "/process" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8 lg:px-16 flex items-center justify-between pointer-events-none">

        {/* Glass background */}
        <div className="absolute inset-0 bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-full mx-2 md:mx-4 lg:mx-8 pointer-events-auto" />

        <div className="relative w-full flex items-center justify-between py-2 md:py-3 px-4 md:px-6 pointer-events-auto">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Genwe Films Logo" className="h-6 md:h-8 object-contain" />
            <span className="text-white font-heading italic text-lg md:text-xl tracking-tight">
              Genwe
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm tracking-wide text-white/70 hover:text-white transition-colors duration-300 font-body"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-3">

            <Link to="/contact#contact-form">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/20 text-white rounded-full px-4 md:px-5 py-1.5 md:py-2 text-xs md:text-sm font-medium flex items-center gap-1.5 hover:bg-white hover:text-black transition-all duration-300"
              >
                Get in Touch
                <ArrowUpRight className="w-3 md:w-4 h-3 md:h-4" />
              </motion.button>
            </Link>

            {/* Mobile toggle */}
            <button
              className="md:hidden text-white p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </nav>

      {/* 🔥 MOBILE MENU (UPGRADED) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-x-4 top-24 z-40 md:hidden bg-black/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="group"
              >
                <Link
                  to={link.path}
                  className="flex items-center justify-between text-2xl font-heading italic text-white/80 hover:text-white transition-colors pb-4 border-b border-white/5 group-hover:border-white/20"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{link.name}</span>

                  {/* Arrow appears on hover */}
                  <span className="opacity-0 group-hover:opacity-100 transition duration-300 text-white/40">
                    →
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}