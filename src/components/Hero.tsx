import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import MuxPlayer from "@mux/mux-player-react";
import BlurText from "./BlurText";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  const scrollToFilms = () => {
    const el = document.getElementById("featured-films");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">

      {/* 🎥 Background Video — Full-width showreel */}
      <div className="bg-video-container pointer-events-none">
        <MuxPlayer
          playbackId="IBuQ9k5NTE701f6lWm4k7WrGCWrn6iH7c902c2w374oPw"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          streamType="on-demand"
          poster={`https://image.mux.com/IBuQ9k5NTE701f6lWm4k7WrGCWrn6iH7c902c2w374oPw/thumbnail.jpg?time=0.1`}
          className="bg-video"
          metadataVideoTitle="Hero Background"
        />
      </div>

      {/* 🎬 Overlays — Cinematic depth */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_45%,rgba(0,0,0,0.6))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_60%)]" />
        <div
          className="absolute bottom-0 left-0 w-full h-[40%]"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, #000 100%)",
          }}
        />
      </div>

      {/* 🎯 Minimal Content — One strong line */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl px-6">
        <BlurText
          text="Films That Make Brands Unforgettable"
          className="
            text-5xl sm:text-6xl md:text-8xl lg:text-[7rem]
            font-heading italic
            text-white
            leading-[0.88]
            tracking-tight
            drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]
          "
        />
      </div>

      {/* 🤝 Partners — Subtle */}
      <div className="absolute bottom-24 md:bottom-28 left-0 right-0 z-10 px-6">
        <div className="flex flex-col items-center gap-5">
          <div className="text-white/30 text-[9px] md:text-[10px] tracking-[0.35em] uppercase font-body">
            Crafted for Brands like
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16 opacity-30">
            {["Mango", "Zepto", "boAt", "Mamaearth", "Nykaa"].map((brand) => (
              <span
                key={brand}
                className="text-lg md:text-2xl font-heading italic text-white tracking-tight"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ⬇️ View Work CTA — Scroll to films */}
      <motion.button
        onClick={scrollToFilms}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 z-10 flex flex-col items-center gap-1 group cursor-pointer"
      >
        <span className="text-white/50 text-[10px] md:text-xs tracking-[0.25em] uppercase font-body group-hover:text-white/80 transition-colors">
          View Work
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-white/40 group-hover:text-white/70 transition-colors" />
        </motion.div>
      </motion.button>

    </section>
  );
}