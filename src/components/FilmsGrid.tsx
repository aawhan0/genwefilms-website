import { Play } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gridProjects, Project } from "../data/projects";
import MuxPlayer from "@mux/mux-player-react";

function FilmGridCard({ project, index }: { project: Project; index: number }) {
  const navigate = useNavigate();
  const videoRef = useRef<any>(null);
  const cardRef = useRef<HTMLDivElement>(null);

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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
      className="relative group cursor-pointer overflow-hidden rounded-xl"
      onClick={() => navigate(`/work/${project.slug}`)}
    >
      <div className="relative aspect-video overflow-hidden bg-white/5">
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
          style={{ pointerEvents: "none", width: '100%', height: '100%' }}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          poster={`https://image.mux.com/${project.playbackId}/thumbnail.jpg?time=1`}
        />

        {/* Overlay — darker for better text legibility */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500 z-10" />

        {/* Play icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 z-20">
          <div className="liquid-glass-strong rounded-full w-12 h-12 flex items-center justify-center scale-50 group-hover:scale-100 transition-transform duration-500">
            <Play className="w-5 h-5 text-white fill-white ml-0.5" />
          </div>
        </div>

        {/* Title — bottom overlay, consistent with Featured section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 z-30">
          <span className="text-white/40 text-[9px] tracking-[0.15em] uppercase font-body block mb-1 font-medium">
            {project.type}
          </span>
          <h4 className="text-base md:text-xl font-heading italic text-white leading-tight font-semibold">
            {project.title}
          </h4>
        </div>
      </div>
    </motion.div>
  );
}

export default function FilmsGrid() {
  return (
    <section className="relative px-4 md:px-6 pb-20 md:pb-32">
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8 md:mb-12"
        >
          <span className="text-white/20 text-[10px] md:text-xs tracking-[0.4em] uppercase font-body font-medium">
            All Films
          </span>
        </motion.div>

        {/* Grid — 2 on mobile, 3 on larger screens for perfect 3x2 balance */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8 justify-center">
          {gridProjects.map((project, i) => (
            <FilmGridCard key={project.slug} project={project} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
