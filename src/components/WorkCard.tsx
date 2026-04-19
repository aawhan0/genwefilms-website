import { Play } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Project } from "../data/projects";
import MuxPlayer from "@mux/mux-player-react";

interface WorkCardProps {
  project: Project;
}

export default function WorkCard({ project }: WorkCardProps) {
  const navigate = useNavigate();
  const videoRef = useRef<any>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // 🎯 SCROLL-BASED AUTOPLAY
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
      className="group cursor-pointer flex flex-col h-full"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onClick={() => navigate(`/work/${project.slug}`)}
    >
      {/* 🎥 VIDEO CONTAINER */}
      <div className="relative aspect-video overflow-hidden rounded-2xl bg-zinc-900">
        <MuxPlayer
          ref={videoRef}
          playbackId={project.playbackId}
          muted
          loop
          playsInline
          preload="metadata"
          streamType="on-demand"
          autoPlay={false}
          {...({ controls: false } as any)}
          style={{ pointerEvents: "none" }}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          poster={`https://image.mux.com/${project.playbackId}/thumbnail.jpg?time=1`}
        />

        {/* 🎨 Overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />

        {/* ▶️ PLAY BUTTON */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
          <div className="liquid-glass-strong rounded-full w-14 h-14 flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500">
            <Play className="w-5 h-5 text-white fill-white ml-0.5" />
          </div>
        </div>
      </div>

      {/* 📝 TEXT BELOW */}
      <div className="pt-6 md:pt-8 flex flex-col flex-grow">
        <h3 className="text-white font-heading italic text-xl md:text-2xl mb-2 md:mb-3">
          {project.title}
        </h3>

        <p className="text-white/70 font-body font-light text-sm leading-relaxed mb-4 md:mb-6 line-clamp-2 md:line-clamp-none">
          {project.description}
        </p>

        <div className="mt-auto">
          <span className="liquid-glass rounded-full px-4 py-1.5 text-[10px] font-body text-white/60 uppercase tracking-widest inline-block">
            {project.type}
          </span>
        </div>
      </div>

    </motion.div>
  );
}