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
            Built by filmmakers. <br /> Accelerated by AI.
          </h1>

          <p className="text-white/50 text-sm max-w-xl mx-auto">
            We create cinematic brand films. AI helps us move faster, not replace the craft.
          </p>
        </div>

        {/* SERVICES */}
        <div className="space-y-24">

          {aiProjects.map((project, index) => {
            const isLast = index === aiProjects.length - 1;

            // 🔥 LAST CARD (SPECIAL FULL-WIDTH DESIGN)
            if (isLast) {
              return (
                <div
                  key={project.slug}
                  className="w-full rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-10 md:p-16 text-center relative overflow-hidden"
                >
                  {/* Glow */}
                  <div className="absolute inset-0 opacity-20 blur-3xl bg-gradient-to-r from-indigo-500/10 via-transparent to-purple-500/10" />

                  <div className="relative z-10 space-y-6 max-w-2xl mx-auto">

                    <span className="text-white/30 text-xs tracking-[0.4em] uppercase">
                      AI Influencer & UGC
                    </span>

                    <h2 className="text-4xl md:text-5xl font-heading italic text-white">
                      In Progress
                    </h2>

                    <p className="text-white/50 text-sm leading-relaxed">
                      AI-driven influencer content and scalable UGC designed for modern brands.
                    </p>

                  </div>
                </div>
              );
            }

            // ✅ NORMAL SERVICES
            return (
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
                  <span className="text-white/30 text-xs tracking-[0.3em] uppercase">
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
            );
          })}

        </div>
      </div>

      <CtaFooter />
    </main>
  );
}