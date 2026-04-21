import { Play } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { featuredProjects } from "../data/projects";
import MuxPlayer from "@mux/mux-player-react";
import LiquidChrome from "./LiquidChrome";

function getBrandStyles(title: string) {
  switch (title) {
    case "Vedica":
      return {
        glow: "from-blue-400/40 via-cyan-300/10 to-transparent",
        border: "border-blue-400/30",
      };

    case "Royal Enfield":
      return {
        glow: "from-orange-500/50 via-red-500/10 to-transparent",
        border: "border-orange-400/30",
      };

    case "Tanishq":
      return {
        glow: "from-yellow-400/50 via-amber-200/10 to-transparent",
        border: "border-yellow-300/30",
      };

    default:
      return {
        glow: "from-white/10 to-transparent",
        border: "border-white/10",
      };
  }
}

function FeaturedCard({ project, index }: any) {
  const navigate = useNavigate();
  const videoRef = useRef<any>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const styles = getBrandStyles(project.title);

  useEffect(() => {
    const video = videoRef.current;
    const card = cardRef.current;
    if (!video || !card) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.muted = true;
          video.play?.().catch(() => {});
        } else {
          video.pause?.();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: index * 0.15 }}
      className="group cursor-pointer flex flex-col"
      onClick={() => navigate(`/work/${project.slug}`)}
    >
      {/* 🎥 VIDEO CARD */}
      <div className="relative rounded-[1.5rem] overflow-hidden aspect-video bg-zinc-900">

        {/* 🔥 BASE BORDER */}
        <div
          className={`absolute inset-0 rounded-[1.5rem] border ${styles.border} opacity-60 group-hover:opacity-100 transition`}
        />

        {/* ✨ ANIMATED BORDER GLOW */}
        <div className="absolute inset-0 rounded-[1.5rem] pointer-events-none opacity-0 group-hover:opacity-100 transition duration-700">
          <div
            className={`absolute inset-[-1px] rounded-[1.5rem] bg-gradient-to-r ${styles.glow} animate-pulse`}
          />
        </div>

        {/* 🔥 BRAND GLOW */}
        <div
          className={`absolute inset-0 opacity-40 group-hover:opacity-100 transition duration-700 bg-gradient-to-r ${styles.glow}`}
        />

        {/* 🎬 VIDEO */}
        <MuxPlayer
          ref={videoRef}
          playbackId={project.playbackId}
          muted
          loop
          playsInline
          autoPlay={false}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition" />

        {/* ▶ PLAY BUTTON */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
          <div className="liquid-glass-strong rounded-full w-20 h-20 flex items-center justify-center">
            <Play className="w-8 h-8 text-white fill-white" />
          </div>
        </div>
      </div>

      {/* 🧠 TEXT */}
      <div className="pt-6 space-y-2">

        {/* 🎬 TITLE */}
        <h3 className="text-3xl md:text-4xl font-heading italic text-white leading-tight">
          {project.title}
        </h3>

        {/* ✨ LABEL */}
        <div className="text-[10px] md:text-xs tracking-[0.45em] uppercase text-white/40 font-medium">
          Made by Humans with AI
        </div>

      </div>
    </motion.div>
  );
}

export default function FeaturedFilms() {
  return (
    <section className="relative overflow-hidden px-6 py-24">

      {/* 🔥 LIQUID CHROME BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <LiquidChrome
          baseColor={[0.06, 0.06, 0.08]}
          speed={0.18}
          amplitude={0.25}
          frequencyX={2.2}
          frequencyY={1.6}
          interactive={true}
          className="w-full h-full opacity-30"
        />
      </div>

      {/* 🎬 CINEMATIC FADE */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black via-black/60 to-black pointer-events-none" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto">

        {/* 🎯 HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-white/20 text-[10px] md:text-xs tracking-[0.45em] uppercase">
            AI Conceptual Films
          </span>
        </motion.div>

        {/* 🎬 CARDS */}
        <div className="flex flex-col gap-20">
          {featuredProjects.slice(0, 3).map((p, i) => (
            <FeaturedCard key={p.slug} project={p} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}