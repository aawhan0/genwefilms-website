import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "../components/Navbar";

import { projects } from "../data/projects";
import WorkCard from "../components/WorkCard";
import MuxPlayer from "@mux/mux-player-react";

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = useMemo(() => {
    const types = new Set(projects.map((p) => p.type));
    return ["All", ...Array.from(types)];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => p.type === activeFilter);
  }, [activeFilter]);

  return (
    <main className="bg-black min-h-screen text-white selection:bg-white selection:text-black">
      <Navbar />

      {/* 🎬 Background Video — Fixed, Covers Full Viewport */}
      <div className="bg-video-container pointer-events-none" style={{ position: 'fixed', zIndex: 0 }}>
        <MuxPlayer
          playbackId="5EyRKtnKOnVwW5CfuDYs00IaL02FXkGfR0294jFdp578KE"
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
      <section className="relative pt-32 pb-20 px-6 max-w-[1400px] mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Header, Text, and Sorting Bar (Sticky on Desktop) */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 flex flex-col">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-white/40 text-[10px] tracking-[0.4em] uppercase mb-6 block font-medium"
            >
              Portfolio
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-[7rem] lg:text-[6rem] xl:text-[7rem] font-heading italic leading-[0.85] tracking-tighter"
            >
              Selected <br /> artifacts.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-white/60 font-body text-base md:text-lg leading-relaxed mt-8 mb-10 max-w-sm"
            >
              A curation of cinematic narratives designed to hold attention
              and provoke action in an era of endless noise.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-2 md:gap-3"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`text-[10px] md:text-xs uppercase tracking-wider px-4 py-2 rounded-full transition-colors border ${
                    activeFilter === cat
                      ? "bg-white text-black border-white"
                      : "bg-transparent text-white/60 border-white/20 hover:border-white/40 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Right Side: Video Grid */}
          <div className="lg:col-span-8 mt-12 lg:mt-0">
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, i) => (
                  <motion.div
                    key={project.slug}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <WorkCard project={project} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </section>

    </main>
  );
}