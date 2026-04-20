import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import CtaFooter from "../components/CtaFooter";
import MuxPlayer from "@mux/mux-player-react";
import { Box, Film, Sparkles, Camera, Users, Video } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "AI Product Ads",
    description: "High-impact product films built for performance.",
    icon: <Box className="w-5 h-5" />,
    link: "/ai-studio/product-ads",
  },
  {
    number: "02",
    title: "Brand Storytelling",
    description: "Cinematic narratives that shape brand identity.",
    icon: <Film className="w-5 h-5" />,
    link: "/ai-studio/brand-storytelling",
  },
  {
    number: "03",
    title: "Concept Films",
    description: "Bold, scroll-stopping visuals built to stand out.",
    icon: <Sparkles className="w-5 h-5" />,
    link: "/ai-studio/concept-films",
  },
  {
    number: "04",
    title: "AI Short Films",
    description: "Story-led creative pieces powered by AI worlds.",
    icon: <Camera className="w-5 h-5" />,
    link: "/ai-studio/short-films",
  },
  {
    number: "05",
    title: "AI Influencer",
    description: "Digital personalities for next-gen brand storytelling.",
    icon: <Users className="w-5 h-5" />,
  },
  {
    number: "06",
    title: "UGC Content",
    description: "Authentic, high-converting content for social platforms.",
    icon: <Video className="w-5 h-5" />,
  },
];

export default function AIStudio() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />

      {/* 🔥 Background Video */}
      <div className="bg-video-container pointer-events-none">
        <MuxPlayer
          playbackId="9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A"
          autoPlay
          muted
          loop
          playsInline
          className="bg-video opacity-40 saturate-0 scale-105"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* 🔥 Content */}
      <div className="relative z-10 pt-24 pb-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* LEFT */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10 lg:sticky lg:top-24">

            <div className="space-y-6">
              <span className="text-white/40 text-[10px] tracking-[0.4em] uppercase font-body">
                AI Studio
              </span>

              <h1 className="text-5xl md:text-6xl font-heading italic leading-[0.9] tracking-tight">
                Built by <br /> filmmakers. <br /> Accelerated by AI.
              </h1>

              <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-md">
                We create cinematic brand films. AI helps us move faster, not replace the craft.
              </p>
            </div>

            {/* Turnaround Card */}
            <div className="border border-white/10 rounded-2xl px-8 py-7 max-w-xs">
              <span className="text-white/30 text-[9px] uppercase tracking-[0.3em] mb-3 block">
                Turnaround
              </span>

              <div className="text-3xl md:text-4xl font-heading italic mb-2">
                7 to 10 days
              </div>

              <p className="text-white/40 text-xs">
                From concept to delivery.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-7 flex items-start">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5 rounded-3xl overflow-hidden border border-white/5">

              {services.map((service, i) => {
                const isClickable = !!service.link;

                const Card = (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}

                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      e.currentTarget.style.setProperty("--x", `${x}px`);
                      e.currentTarget.style.setProperty("--y", `${y}px`);
                    }}

                    className={`relative bg-black/60 backdrop-blur-md p-6 md:p-8 flex flex-col gap-4 
                    group ${isClickable ? "cursor-pointer hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]" : "cursor-default"}
                    hover:bg-white/[0.06]
                    transition-all duration-500 ease-out`}
                  >

                    {/* 🔥 Glow Layer */}
                    <div
                      className="pointer-events-none absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition duration-300"
                      style={{
                        background:
                          "radial-gradient(400px circle at var(--x) var(--y), rgba(255,255,255,0.05), transparent 70%)",
                      }}
                    />

                    {/* Content */}
                    <div className="relative z-10 transition-opacity duration-300 group-hover:opacity-20 space-y-3">

                      <div className="flex items-center justify-between">
                        <span className="text-white/10 font-heading italic text-3xl">
                          {service.number}
                        </span>

                        <div className="text-white/20 group-hover:text-white transition">
                          {service.icon}
                        </div>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-heading italic">
                        {service.title}
                      </h3>

                      <p className="text-white/50 text-sm">
                        {service.description}
                      </p>
                    </div>

                    {/* 🔥 Marquee */}
                    {isClickable && (
                      <div className="absolute inset-0 flex items-center overflow-hidden opacity-0 group-hover:opacity-100 transition duration-500 z-10">

                        <div className="marquee">
                          <div className="marquee-inner">
                            {Array.from({ length: 60 }).map((_, i) => (
                              <span key={i}>VIEW SAMPLES</span>
                            ))}
                          </div>
                        </div>

                      </div>
                    )}

                  </motion.div>
                );

                return isClickable ? (
                  <Link to={service.link} key={service.title}>
                    {Card}
                  </Link>
                ) : (
                  <div key={service.title}>{Card}</div>
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