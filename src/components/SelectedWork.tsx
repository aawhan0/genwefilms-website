import { motion } from "motion/react";
import { projects } from "../data/projects";
import WorkCard from "./WorkCard";
import MuxPlayer from "@mux/mux-player-react";

export default function SelectedWork() {
  return (
    <section className="relative py-36 px-6 overflow-hidden">

      {/* 🎥 Background Video */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <MuxPlayer
          playbackId="Ij4XZbrO4dijnvqqlUQurDR5mqglkTRJo3mrK6QaJ7w"
          autoPlay
          muted
          loop
          playsInline
          streamType="on-demand"
          preload="metadata"
          className="absolute w-full h-full object-cover mux-bg"
        />

        {/* 🔥 STRONG overlay (important for this section) */}
        <div className="absolute inset-0 bg-black/35" />

        <div className="video-vignette" />

        {/* Gradients */}
        <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* 📝 Content */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6 mb-20">
          <span className="liquid-glass rounded-full px-5 py-1.5 text-xs font-medium text-white uppercase tracking-widest">
            Selected Work
          </span>

          <h2 className="text-5xl md:text-7xl font-heading italic text-white tracking-tight">
            Stories we've told.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <WorkCard project={project} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}