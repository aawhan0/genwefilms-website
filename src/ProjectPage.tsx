import { useNavigate, useParams } from "react-router-dom";
import { projects } from "./data/projects";
import MuxPlayer from "@mux/mux-player-react";

export default function ProjectPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center text-white">
        Project not found
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen selection:bg-white selection:text-black px-6 py-24">
      <div className="max-w-4xl mx-auto">

        {/* Back Link */}
        <button
          onClick={() => navigate(-1)}
          className="text-white/50 font-body text-sm mb-12 flex items-center gap-2 hover:text-white transition-colors group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Back to Work
        </button>

        {/* 🎥 Full Video (MUX) */}
        <div className="liquid-glass rounded-3xl overflow-hidden mb-16 shadow-2xl">
          <MuxPlayer
            playbackId={project.playbackId}
            controls
            playsInline
            streamType="on-demand"
            preload="metadata"
            poster={`https://image.mux.com/${project.playbackId}/thumbnail.jpg?time=1`}
            className="w-full aspect-video object-cover"
          />
        </div>

        {/* Project Metadata */}
        <div className="space-y-8">
          <span className="liquid-glass rounded-full px-4 py-1.5 text-[10px] font-body text-white/60 uppercase tracking-widest inline-block">
            {project.type}
          </span>

          <h1 className="text-6xl md:text-8xl font-heading italic text-white tracking-tighter leading-[0.85]">
            {project.title}
          </h1>

          <p className="text-white/60 font-body font-light text-xl md:text-2xl leading-relaxed max-w-2xl">
            {project.description}
          </p>
        </div>

      </div>
    </div>
  );
}