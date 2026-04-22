import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import CtaFooter from "../components/CtaFooter";
import MuxPlayer from "@mux/mux-player-react";
import {
  Box,
  Film,
  Sparkles,
  Camera,
  Users,
  Video,
  ArrowLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Product AI Ads",
    slug: "product-ai-ads",
    icon: <Box className="w-5 h-5" />,
  },
  {
    number: "02",
    title: "CGI Ads",
    slug: "cgi-ads",
    icon: <Film className="w-5 h-5" />,
  },
  {
    number: "03",
    title: "AI Brand Ads",
    slug: "ai-brand-ads",
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    number: "04",
    title: "AI Films",
    slug: "ai-films",
    icon: <Camera className="w-5 h-5" />,
  },
  {
    number: "05",
    title: "Product CGI Ads",
    slug: "product-cgi-ads",
    icon: <Users className="w-5 h-5" />,
  },
  {
    number: "06",
    title: "AI Influencer & UGC",
    icon: <Video className="w-5 h-5" />,
  },
];

export default function AIStudio() {
  const [hovered, setHovered] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />

      {/* Background */}
      <div className="bg-video-container pointer-events-none">
        <MuxPlayer
          playbackId="9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A"
          autoPlay
          muted
          loop
          className="bg-video opacity-40 saturate-0 scale-105"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 pt-24 pb-10 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* LEFT */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10 lg:sticky lg:top-24">

            <div className="space-y-6">

              {/* Back */}
              <button
                onClick={() => navigate("/")}
                className="inline-flex items-center gap-2 text-white/20 hover:text-white/60 text-[11px] tracking-wide transition"
              >
                <ArrowLeft className="w-3 h-3" />
                Back to Home
              </button>

              <span className="block text-white/40 text-[10px] tracking-[0.4em] uppercase">
                AI Studio
              </span>

              <h1 className="text-4xl md:text-5xl font-heading italic leading-[0.95]">
                Built by <br /> filmmakers. <br /> Accelerated by AI.
              </h1>

              <p className="text-white/40 text-[11px] tracking-[0.25em] uppercase leading-relaxed max-w-md">
                We create cinematic brand films. AI helps us move faster, not replace the craft.
              </p>
            </div>

            {/* Turnaround */}
            <div className="border border-white/10 rounded-2xl px-6 py-6 max-w-xs">
              <span className="text-white/30 text-[9px] uppercase tracking-[0.3em] block mb-2">
                Turnaround
              </span>

              <div className="text-2xl font-heading italic mb-1">
                7 to 10 days
              </div>

              <p className="text-white/40 text-xs">
                From concept to delivery.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-7 h-[calc(100vh-140px)]">
            <div
              className="
              grid 
              grid-cols-1 sm:grid-cols-2 
              h-full
              gap-px 
              bg-white/5 
              rounded-3xl 
              overflow-hidden 
              border border-white/5
            "
            >
              {services.map((service, i) => {
                const isClickable = i !== 5;
                const isActive = hovered === i;
                const isDimmed = hovered !== null && hovered !== i;

                return (
                  <motion.div
                    key={service.title}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}

                    // {/* ✅ FIXED NAVIGATION */}
                    onClick={() => {
                      if (isClickable) {
                        navigate(`/ai-studio/${service.slug}`, {
                          state: { from: "ai-studio" },
                        });
                      }
                    }}

                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;

                      e.currentTarget.style.setProperty("--x", `${x}px`);
                      e.currentTarget.style.setProperty("--y", `${y}px`);

                      const rotateX = ((y / rect.height) - 0.5) * 8;
                      const rotateY = ((x / rect.width) - 0.5) * -8;

                      e.currentTarget.style.transform = `
                        perspective(800px)
                        rotateX(${rotateX}deg)
                        rotateY(${rotateY}deg)
                        scale(${isActive ? 1.04 : 1})
                      `;
                    }}

                    style={{ transformStyle: "preserve-3d" }}
                    className={`
                      relative bg-black/60 backdrop-blur-md 
                      p-6 flex flex-col justify-between 
                      h-full min-h-[140px]
                      group transition-all duration-500 ease-out
                      ${isDimmed ? "opacity-50 scale-[0.98]" : ""}
                      ${isClickable ? "cursor-pointer" : "cursor-default"}
                    `}
                  >

                    {/* Glow */}
                    <div
                      className="pointer-events-none absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition duration-300"
                      style={{
                        background:
                          "radial-gradient(400px circle at var(--x) var(--y), rgba(255,255,255,0.08), transparent 70%)",
                      }}
                    />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col justify-between h-full group-hover:opacity-20 transition-opacity duration-300">

                      <div className="flex items-center justify-between">
                        <span className="text-white/10 font-heading italic text-2xl">
                          {service.number}
                        </span>

                        <div className="text-white/20 group-hover:text-white transition">
                          {service.icon}
                        </div>
                      </div>

                      <div className="flex-grow" />

                      <h3 className="text-2xl md:text-3xl font-heading italic leading-tight">
                        {service.title}
                      </h3>
                    </div>

                    {/* Hover marquee */}
                    {isClickable && (
                      <div className="absolute inset-0 flex items-center overflow-hidden opacity-0 group-hover:opacity-100 transition duration-500 z-10">
                        <div className="marquee">
                          <div className="marquee-inner">
                            {Array.from({ length: 50 }).map((_, i) => (
                              <span key={i}>VIEW SAMPLES</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      <CtaFooter />
    </main>
  );
}