import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import CtaFooter from "../components/CtaFooter";
import MuxPlayer from "@mux/mux-player-react";
import BlurText from "../components/BlurText";
import { ArrowUpRight, Lightbulb, Camera, Scissors, Film } from "lucide-react";

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

      {/* 🎬 Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-[85vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
        
        {/* Background Video (Aggressive Fill) */}
        <div className="bg-video-container pointer-events-none">
          <MuxPlayer
            playbackId="9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            streamType="on-demand"
            className="bg-video opacity-40"
            metadataVideoTitle="Process Hero"
          />
        </div>

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-black to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.4))]" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white/40 text-[10px] md:text-sm tracking-[0.4em] uppercase mb-8 block font-medium"
          >
           Our Methodology
          </motion.span>
          
          <BlurText 
            text="Your vision."
            className="text-6xl md:text-[11rem] font-heading italic leading-[0.75] tracking-tighter text-white"
          />
          <BlurText 
            text="Executed at speed."
            className="text-6xl md:text-[11rem] font-heading italic leading-[0.75] tracking-tighter text-white mt-4"
          />

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 max-w-lg border-l border-white/20 pl-8"
          >
            <p className="text-white/60 font-body text-lg md:text-xl leading-relaxed">
              High-end cinematic production optimized for the modern pace. 
              Quality that defines brands, delivered in days, not months.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ⚡ Efficiency Spotlight */}
      <section className="py-12 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-baseline justify-between gap-12 border-b border-white/5 pb-16">
          <div className="max-w-xl">
            <span className="text-white/30 text-[10px] uppercase tracking-widest mb-6 block">The Workflow</span>
            <h2 className="text-4xl md:text-6xl font-heading italic leading-[0.9] tracking-tight">
              A seamless journey from <br /> <span className="text-white/40">script to screen</span>.
            </h2>
          </div>
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="liquid-glass border border-white/10 rounded-3xl p-8 md:p-10 max-w-xs transition-colors hover:border-white/20"
          >
            <span className="text-white/40 text-[10px] uppercase tracking-[0.25em] mb-4 block">Efficiency Guarantee</span>
            <div className="text-4xl md:text-5xl font-heading italic mb-2">7 to 10 days</div>
            <p className="text-white/40 text-sm font-body">Average turnaround for primary production.</p>
          </motion.div>
        </div>
      </section>

      {/* 🧱 The Grid with Background Visual */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Section Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-20 grayscale"
            alt="Process Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`
                  group relative
                  ${step.colSpan}
                  ${step.highlight ? 'bg-white text-black rounded-3xl' : 'liquid-glass rounded-3xl border border-white/5'}
                  p-8 md:p-12 overflow-hidden flex flex-col justify-between min-h-[350px] md:min-h-[450px]
                  transition-all duration-300
                `}
              >
                {/* Internal card flare/glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className={`${step.highlight ? 'text-black/20' : 'text-white/10'} text-6xl md:text-8xl font-heading italic leading-none mb-8 transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-2`}>
                    {step.number}
                  </div>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`${step.highlight ? 'bg-black/5' : 'bg-white/5'} p-3 rounded-full transition-transform duration-500 group-hover:rotate-12`}>
                      {step.icon}
                    </div>
                    <h3 className="text-3xl md:text-5xl font-heading italic leading-tight">
                      {step.title}
                    </h3>
                  </div>

                  <p className={`${step.highlight ? 'text-black/70' : 'text-white/50'} font-body text-lg md:text-xl leading-relaxed max-w-md`}>
                    {step.description}
                  </p>
                </div>

                {step.highlight && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-12 bg-black/5 rounded-full px-6 py-4 flex items-center justify-between group-hover:bg-black/10 transition-colors"
                  >
                    <span className="text-[10px] uppercase tracking-widest font-bold">Creative Phase</span>
                    <Scissors className="w-4 h-4" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaFooter />
    </main>
  );
}

