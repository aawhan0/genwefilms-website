import { Play } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { featuredProjects } from "../data/projects";
import MuxPlayer from "@mux/mux-player-react";

function FeaturedCard({
  project,
  index,
}: {
  project: typeof featuredProjects[0];
  index: number;
}) {
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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="group cursor-pointer flex flex-col h-full"
      onClick={() => navigate(`/work/${project.slug}`)}
    >
      {/* Video */}
      <div className="relative overflow-hidden rounded-2xl w-full bg-zinc-900 aspect-video md:aspect-[21/9] lg:aspect-video lg:max-h-[65vh]">
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
          style={{ pointerEvents: "none", objectFit: "cover" }}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 z-0"
          poster={`https://image.mux.com/${project.playbackId}/thumbnail.jpg?time=1`}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
          <div className="liquid-glass-strong rounded-full w-20 h-20 flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500">
            <Play className="w-8 h-8 text-white fill-white ml-1" />
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="pt-6 md:pt-8 mt-auto">
        {/* Type + AI tag */}
        <div className="flex items-center gap-3 mb-2">
          <span className="text-white/50 text-[10px] md:text-xs tracking-[0.2em] uppercase font-body font-medium">
            {project.type}
          </span>

          <span className="text-[9px] md:text-[10px] uppercase tracking-wider text-white/40 border border-white/10 px-2 py-0.5 rounded-full">
            AI Film
          </span>
        </div>

        {/* Title */}
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading italic text-white leading-tight font-semibold">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-white/50 text-sm md:text-base max-w-xl font-body leading-relaxed">
          {project.description ||
            "A cinematic brand film crafted using AI-driven production and storytelling."}
        </p>
      </div>
    </motion.div>
  );
}

export default function FeaturedFilms() {
  return (
    <section
      id="featured-films"
      className="relative px-4 md:px-6 pt-4 pb-8 md:pb-12"
    >
      <div className="max-w-4xl mx-auto">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-10 md:mb-16"
        >
          <span className="text-white/20 text-[10px] md:text-xs tracking-[0.4em] uppercase font-body font-medium">
            Featured Work
          </span>
        </motion.div>

        {/* Only top 3 films */}
        <div className="flex flex-col gap-12 md:gap-24">
          {featuredProjects.slice(0, 3).map((project, i) => (
            <div key={project.slug} className="w-full">
              <FeaturedCard project={project} index={i} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}