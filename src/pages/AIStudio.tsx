import Navbar from "../components/Navbar";
import CtaFooter from "../components/CtaFooter";
import MuxPlayer from "@mux/mux-player-react";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
import LiquidChrome from "../components/LiquidChrome";

export default function AIStudio() {
  const navigate = useNavigate();

  const aiProjects = projects.filter(
    (p) => p.category === "ai-studio"
  );

  return (
    <main className="relative bg-black min-h-screen text-white overflow-hidden">
      <Navbar />

      {/* 🔥 SUBTLE BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <LiquidChrome
          className="w-full h-full opacity-[0.18]"
          baseColor={[0.08, 0.1, 0.12]}
          speed={0.06}
          amplitude={0.18}
          frequencyX={2.7}
          frequencyY={1.9}
          interactive={false}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 pt-28 pb-20 px-6 max-w-6xl mx-auto space-y-24">

        {/* HEADER */}
        <div className="space-y-6 text-center">
          <span className="text-white/40 text-xs tracking-[0.4em] uppercase">
            AI Studio
          </span>

          <h1 className="text-4xl md:text-5xl font-heading italic">
            Conceptual AI Advertisements
          </h1>

          <p className="text-white/50 text-sm max-w-xl mx-auto">
            Built by filmmakers. Accelerated by AI.
          </p>
        </div>

        {/* SERVICES */}
        <div className="space-y-24">

          {aiProjects.map((project) => (
            <div
              key={project.slug}
              className="flex flex-col md:flex-row gap-12 items-center"
            >

              {/* 🎬 VIDEO (LEFT) */}
              <div className="w-full md:w-1/2">
                <div className="rounded-xl overflow-hidden bg-zinc-900 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                  <MuxPlayer
                    playbackId={project.playbackId}
                    muted
                    autoPlay
                    loop
                    playsInline
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* 📝 TEXT (RIGHT) */}
              <div className="w-full md:w-1/2 space-y-4">
                <span className="text-white/60 text-xs tracking-[0.3em] uppercase font-medium mb-3 block">
                  {project.title}
                </span>

                <h2 className="text-3xl md:text-4xl font-heading italic text-white">
                  {project.brand}
                </h2>

                <p className="text-white/60 text-sm leading-relaxed">
                  {project.description}
                </p>

                <button
                  onClick={() =>
                    navigate(`/ai-studio/${project.slug}`, {
                      state: { from: "ai-studio" },
                    })
                  }
                  className="text-white/40 text-xs underline hover:text-white transition"
                >
                  View full film
                </button>
              </div>

            </div>
          ))}

        </div>
      </div>

      <CtaFooter />
    </main>
  );
}