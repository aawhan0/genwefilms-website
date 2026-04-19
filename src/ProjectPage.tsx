import { useNavigate, useParams } from "react-router-dom";
import { projects } from "./data/projects";
import MuxPlayer from "@mux/mux-player-react";
import Navbar from "./components/Navbar";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

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
    <div className="bg-black min-h-screen text-white selection:bg-white selection:text-black">
      <Navbar />

      {/* Split Layout — fills the viewport */}
      <div className="flex flex-col lg:flex-row min-h-screen pt-20">

        {/* LEFT — Video Player */}
        <div className="lg:w-[58%] lg:sticky lg:top-0 lg:h-screen flex items-center bg-black">
          <div className="w-full h-full flex items-center justify-center p-4 lg:p-6">
            <div className="liquid-glass rounded-2xl overflow-hidden w-full shadow-2xl bg-zinc-900/20 flex items-center justify-center" style={{ maxHeight: 'calc(100vh - 80px)' }}>
              <MuxPlayer
                playbackId={project.playbackId}
                controls
                playsInline
                streamType="on-demand"
                preload="auto"
                autoPlay
                poster={`https://image.mux.com/${project.playbackId}/thumbnail.jpg?time=1`}
                style={{ width: '100%', maxHeight: 'calc(100vh - 120px)' }}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* RIGHT — Project Info */}
        <div className="lg:w-[42%] flex flex-col justify-center px-8 lg:px-12 py-12 lg:py-24 space-y-10">

          {/* Back button */}
          <motion.button
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm font-body group w-fit"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Work
          </motion.button>

          {/* Type label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase font-body font-medium">
              {project.type}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white tracking-tighter leading-[0.85]"
          >
            {project.title}
          </motion.h1>

          {/* Divider */}
          <div className="w-12 h-px bg-white/20" />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white/60 font-body text-lg leading-relaxed"
          >
            {project.description}
          </motion.p>

        </div>
      </div>
    </div>
  );
}
