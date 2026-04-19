import { motion } from "motion/react";
import Navbar from "../components/Navbar";

import { projects } from "../data/projects";
import WorkCard from "../components/WorkCard";
import MuxPlayer from "@mux/mux-player-react";

export default function Work() {
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

      {/* Hero Section — Split Layout */}
      <section className="relative pt-32 pb-12 px-6 max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24 items-end">
          <div className="lg:col-span-7">
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
              className="text-6xl md:text-[8rem] font-heading italic leading-[0.8] tracking-tighter"
            >
              Selected <br /> artifacts.
            </motion.h1>
          </div>
          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-white/60 font-body text-lg md:text-xl leading-relaxed max-w-sm"
            >
              A curation of cinematic narratives designed to hold attention
              and provoke action in an era of endless noise.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid — Compact */}
      <section className="relative py-20 px-6 max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <WorkCard project={project} />
            </motion.div>
          ))}
        </div>
      </section>


    </main>
  );
}