import { useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import WorkCard from "../components/WorkCard";
import CtaFooter from "../components/CtaFooter";
import MuxPlayer from "@mux/mux-player-react";
import { ArrowLeft } from "lucide-react";

import { projects } from "../data/projects";

const serviceContent = {
  "product-ads": {
    title: "AI Product Ads",
    description:
      "High-impact product films crafted for performance and rapid iteration.",
    playbackId: "5EyRKtnKOnVwW5CfuDYs00IaL02FXkGfR0294jFdp578KE",
  },
  "brand-storytelling": {
    title: "Brand Storytelling",
    description:
      "Cinematic narratives that build identity and long-term recall.",
    playbackId: "5EyRKtnKOnVwW5CfuDYs00IaL02FXkGfR0294jFdp578KE",
  },
  "concept-films": {
    title: "Concept Films",
    description:
      "Bold visual storytelling designed to capture attention instantly.",
    playbackId: "5EyRKtnKOnVwW5CfuDYs00IaL02FXkGfR0294jFdp578KE",
  },
  "short-films": {
    title: "AI Short Films",
    description:
      "Story-driven creative pieces powered by new visual worlds.",
    playbackId: "5EyRKtnKOnVwW5CfuDYs00IaL02FXkGfR0294jFdp578KE",
  },
};

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const content = slug
    ? serviceContent[slug as keyof typeof serviceContent]
    : null;

  const filteredProjects = useMemo(() => {
    if (!content) return [];
    return projects.filter((p) => p.type === content.title);
  }, [slug, content]);

  if (!content) return null;

  return (
    <main className="bg-black min-h-screen text-white selection:bg-white selection:text-black">
      <Navbar />

      {/* 🎬 Background Video */}
      <div className="bg-video-container pointer-events-none fixed inset-0 z-0">
        <MuxPlayer
          playbackId={content.playbackId}
          autoPlay
          muted
          loop
          playsInline
          className="bg-video opacity-40 saturate-0 scale-105"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* 🎯 CONTENT */}
      <section className="relative pt-32 pb-20 px-6 max-w-[1400px] mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* LEFT — CONTEXT */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 flex flex-col">

            {/* 🔙 BACK BUTTON */}
            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => navigate("/ai-studio")}
              className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-xs uppercase tracking-wider mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back
            </motion.button>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-white/40 text-[10px] tracking-[0.4em] uppercase mb-6 block"
            >
              AI Studio
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-[7rem] font-heading italic leading-[0.85] tracking-tight"
            >
              {content.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-white/60 text-base md:text-lg leading-relaxed mt-8 mb-10 max-w-sm"
            >
              {content.description}
            </motion.p>

            {/* 🔥 Subtle AI note */}
            <p className="text-white/30 text-xs max-w-xs leading-relaxed">
              Sample films are AI-assisted, blending cinematic direction with accelerated production workflows.
            </p>

          </div>

          {/* RIGHT — FILMS GRID */}
          <div className="lg:col-span-8 mt-12 lg:mt-0">

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
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

      <CtaFooter />
    </main>
  );
}