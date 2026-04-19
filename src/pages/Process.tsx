import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import CtaFooter from "../components/CtaFooter";
import MuxPlayer from "@mux/mux-player-react";
import { Lightbulb, Camera, Scissors, Film } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Strategy",
    description:
      "We align your business goals with creative opportunities, identifying the core narrative that will resonate most with your target audience.",
    icon: <Film className="w-5 h-5" />,
  },
  {
    number: "02",
    title: "Concept",
    description:
      "Creative directors and writers translate strategy into visual metaphors and scripts that capture the imagination.",
    icon: <Lightbulb className="w-5 h-5" />,
  },
  {
    number: "03",
    title: "Production",
    description:
      "Using AI-driven workflows, we create cinematic-grade visuals faster and more efficiently.",
    icon: <Camera className="w-5 h-5" />,
  },
  {
    number: "04",
    title: "Post-Production",
    description:
      "Editing, color grading, and sound design enhanced through AI-powered precision.",
    highlight: true,
    icon: <Scissors className="w-5 h-5" />,
  },
  {
    number: "05",
    title: "Delivery",
    description:
      "Multi-format exports optimized for every platform — from 4K cinema to vertical social assets.",
  },
];

export default function Process() {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-white selection:text-black">
      <Navbar />

      {/* Background */}
      <div className="bg-video-container pointer-events-none fixed inset-0 z-0">
        <MuxPlayer
          playbackId="9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          streamType="on-demand"
          className="bg-video opacity-40 saturate-0"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* LEFT */}
          <div className="lg:col-span-5 space-y-20 lg:sticky lg:top-32 lg:h-fit">
            <div className="space-y-8">
              <span className="text-white/40 text-[10px] tracking-[0.4em] uppercase font-body font-medium">
                Methodology
              </span>

              <h1 className="text-5xl md:text-7xl font-heading italic leading-[0.85] tracking-tighter">
                Cinematic <br /> precision <br /> at speed.
              </h1>

              <p className="text-white/60 font-body text-lg md:text-xl leading-relaxed max-w-md pt-4">
                AI-powered workflows eliminate traditional bottlenecks. Premium results delivered faster.
              </p>
            </div>

            {/* Turnaround */}
            <div className="liquid-glass border border-white/10 rounded-3xl p-10 max-w-sm mt-12">
              <span className="text-white/30 text-[10px] uppercase tracking-[0.25em] mb-4 block">
                Turnaround
              </span>
              <div className="text-4xl md:text-6xl font-heading italic mb-3">
                7 to 10 days
              </div>
              <p className="text-white/40 text-xs md:text-sm font-body leading-relaxed">
                Average production cycle from concept to delivery.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-7">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5 rounded-3xl overflow-hidden border border-white/5">

              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}

                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    e.currentTarget.style.setProperty("--x", `${x}px`);
                    e.currentTarget.style.setProperty("--y", `${y}px`);
                  }}

                  className={`relative bg-black/60 backdrop-blur-md p-8 md:p-10 flex flex-col gap-6 
                  group cursor-pointer
                  hover:bg-white/[0.05]
                  hover:scale-[1.055]
                  transition-all duration-500 ease-out
                  will-change-transform
                  ${i === steps.length - 1 && steps.length % 2 !== 0 ? 'sm:col-span-2' : ''}`}
                >

                  {/* Cursor Glow */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
                    style={{
                      background:
                        "radial-gradient(250px circle at var(--x) var(--y), rgba(255,255,255,0.08), transparent 40%)",
                    }}
                  />

                  {/* Top */}
                  <div className="flex items-center justify-between relative z-10">
                    <span className="text-white/10 font-heading italic text-4xl group-hover:text-white/20 transition">
                      {step.number}
                    </span>

                    {step.icon && (
                      <div className="text-white/20 group-hover:text-white transition">
                        {step.icon}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="space-y-3 relative z-10">
                    <h3 className="text-2xl md:text-3xl font-heading italic text-white tracking-tight">
                      {step.title}
                    </h3>

                    <p className="text-white/40 font-body text-sm leading-relaxed group-hover:text-white/60 transition-all duration-300">
                      {step.description}
                    </p>
                  </div>

                  {/* Highlight */}
                  {step.highlight && (
                    <div className="mt-auto pt-4 relative z-10">
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