import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import CtaFooter from "../components/CtaFooter";
import MuxPlayer from "@mux/mux-player-react";
import BlurText from "../components/BlurText";
import { ArrowUpRight, Lightbulb, Camera, Scissors, Film } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Strategy",
    description: "We align your business goals with creative opportunities, identifying the core narrative that will resonate most with your target audience.",
    icon: <Film className="w-5 h-5" />,
    colSpan: "col-span-1"
  },
  {
    number: "02",
    title: "Concept",
    description: "Creative directors and writers translate strategy into visual metaphors and scripts that capture the imagination.",
    icon: <Lightbulb className="w-5 h-5" />,
    colSpan: "col-span-1"
  },
  {
    number: "03",
    title: "Production",
    description: "Our elite crew hits the set. Using high-speed workflows, we capture cinematic-grade footage with precision and intentionality.",
    icon: <Camera className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2070&auto=format&fit=crop",
    colSpan: "md:col-span-2"
  },
  {
    number: "04",
    title: "Post-Production",
    description: "Editing, color grading, and sound design. This is where the raw captures are sculpted into a masterpiece.",
    highlight: true,
    icon: <Scissors className="w-5 h-5" />,
    colSpan: "col-span-1"
  },
  {
    number: "05",
    title: "Delivery",
    description: "Multi-format exports optimized for every digital platform — from 4K cinema to vertical social assets.",
    colSpan: "md:col-span-3"
  }
];

export default function Process() {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-white selection:text-black">
      <Navbar />

      {/* 🎬 Background Video — Fixed, Covers Full Viewport */}
      <div className="bg-video-container pointer-events-none" style={{ position: 'fixed', zIndex: 0 }}>
        <MuxPlayer
          playbackId="9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          streamType="on-demand"
          className="bg-video opacity-50 saturate-0"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* Main Content Layout */}
      <div className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Side: Branding & Stats (Sticky-ready) */}
          <div className="lg:col-span-5 space-y-20 lg:sticky lg:top-32 lg:h-fit">
            <div className="space-y-8">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-white/40 text-[10px] tracking-[0.4em] uppercase font-body font-medium"
              >
                Methodology
              </motion.span>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-heading italic leading-[0.85] tracking-tighter"
              >
                Cinematic <br /> precision <br /> at speed.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white/60 font-body text-lg md:text-xl leading-relaxed max-w-md pt-4"
              >
                We've engineered a workflow that bypasses traditional bottlenecks. 
                Premium results delivered in a fraction of the time.
              </motion.p>
            </div>

            {/* Turnaround Highlight */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="liquid-glass border border-white/10 rounded-3xl p-10 max-w-sm mt-12"
            >
              <span className="text-white/30 text-[10px] uppercase tracking-[0.25em] mb-4 block">Turnaround</span>
              <div className="text-4xl md:text-6xl font-heading italic mb-3">7 to 10 days</div>
              <p className="text-white/40 text-xs md:text-sm font-body leading-relaxed">
                Average primary production cycle from concept to final delivery.
              </p>
            </motion.div>
          </div>

          {/* Right Side: The 5 steps in a compact grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5 rounded-3xl overflow-hidden border border-white/5">
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`bg-black/60 backdrop-blur-md p-8 md:p-10 flex flex-col gap-6 group hover:bg-white/[0.02] transition-colors duration-500 ${i === steps.length - 1 && steps.length % 2 !== 0 ? 'sm:col-span-2' : ''}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white/10 font-heading italic text-4xl group-hover:text-white/20 transition-colors">
                      {step.number}
                    </span>
                    <div className="text-white/20 group-hover:text-white transition-colors">
                      {step.icon}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl md:text-3xl font-heading italic text-white tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-white/40 font-body text-sm leading-relaxed group-hover:text-white/60 transition-colors">
                      {step.description}
                    </p>
                  </div>

                  {step.highlight && (
                    <div className="mt-auto pt-4">
                      <span className="text-[9px] uppercase tracking-widest text-white/30 font-medium px-3 py-1 rounded-full border border-white/10">
                        Critical Phase
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>

      <CtaFooter />
    </main>
  );
}


