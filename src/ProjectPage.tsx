import { useNavigate, useParams, useLocation } from "react-router-dom";
import { projects } from "./data/projects";
import MuxPlayer from "@mux/mux-player-react";
import Navbar from "./components/Navbar";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center text-white">
        Project not found
      </div>
    );
  }

  const from = location.state?.from;

  let backPath = "/";
  let backLabel = "Home";

  if (from === "ai-studio") {
    backPath = "/ai-studio";
    backLabel = "AI Studio";
  }

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      {/* MAIN LAYOUT */}
      <div className="flex flex-col lg:flex-row min-h-screen pt-20">

        {/* 🎬 LEFT — VIDEO */}
        <div className="lg:w-[55%] flex items-center justify-center px-8 lg:px-16">

          <div className="w-full max-w-4xl rounded-2xl overflow-hidden bg-zinc-900/20 shadow-2xl">
            {project.playbackId ? (
              <MuxPlayer
                playbackId={project.playbackId}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto"
              />
            ) : (
              <div className="h-[400px] flex items-center justify-center text-white/40">
                Video coming soon
              </div>
            )}
          </div>

        </div>

        {/* 🎯 RIGHT — CONTENT */}
        <div className="lg:w-[45%] flex items-center justify-center px-8 lg:px-20">

          <div className="w-full max-w-lg space-y-10">

            {/* 🔙 BACK */}
            <motion.button
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => navigate(backPath)}
              className="flex items-center gap-2 text-white/40 hover:text-white transition text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to {backLabel}
            </motion.button>

            {/* 🔥 SERVICE LABEL */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white/30 text-[11px] tracking-[0.45em] uppercase"
            >
              {project.category === "ai-studio"
                ? project.title
                : project.type}
            </motion.div>

            {/* 🔥 BRAND */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-7xl font-heading italic leading-[0.9]"
            >
              {project.brand || project.title}
            </motion.h1>

            {/* DIVIDER */}
            <div className="w-16 h-px bg-white/20" />

            {/* 🔥 DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white/60 text-base leading-relaxed font-light"
            >
              {project.description}
            </motion.p>

          </div>
        </div>
      </div>
    </div>
  );
}