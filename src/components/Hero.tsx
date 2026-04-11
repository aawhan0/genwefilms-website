import { ArrowUpRight, Play } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import MuxPlayer from "@mux/mux-player-react";
import BlurText from "./BlurText";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section className="relative min-h-[1000px] flex flex-col items-center pt-[150px] px-6 overflow-hidden">

      {/* 🎥 Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">

          <MuxPlayer
            playbackId="IBuQ9k5NTE701f6lWm4k7WrGCWrn6iH7c902c2w374oPw"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            streamType="on-demand"
            poster={`https://image.mux.com/IBuQ9k5NTE701f6lWm4k7WrGCWrn6iH7c902c2w374oPw/thumbnail.jpg?time=0.1`}
            style={{ pointerEvents: "none" }}
            className="absolute -top-23.5 left-0 w-full h-[calc(100%+1rem)] object-cover"
          />

        </div>
        {/* 🎬 Overlays */}
        <div className="absolute inset-0">

        <div className="hero-vignette" />  

          {/* Base dim */}
          <div className="absolute inset-0" />

          {/* Soft vignette */}
          <div className="absolute inset-0 
            bg-[radial-gradient(circle,transparent_45%,rgba(0,0,0,0.5))]" 
          />

          {/* Center glow */}
          <div className="absolute inset-0 
            bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]" 
          />

          {/* Bottom fade */}
          <div
            className="absolute -top-[150px] left-0 w-full h-[calc(100%+150px)] object-cover"
            style={{
              background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, #000 100%)",
            }}
          />
        </div>

      {/* 🎯 Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="liquid-glass rounded-full px-1 py-1 flex items-center gap-3 mb-10 backdrop-blur-md bg-white/5 border border-white/10"
        >
          <div className="bg-white text-black rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
            New
          </div>
          <span className="text-white/80 text-xs font-body pr-3">
            Now Accepting New Clients
          </span>
        </motion.div>

        {/* Heading */}
        <BlurText
          text="Films That Make Brands Unforgettable"
          className="
            text-6xl md:text-7xl lg:text-[6.5rem] 
            font-heading italic 
            text-white/95 
            leading-[0.85] 
            tracking-tight 
            mb-8
            drop-shadow-[0_4px_20px_rgba(0,0,0,0.35)]
          "
        />

        {/* Subtext */}
        <motion.p
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="
            text-white/70 
            font-body 
            font-light 
            text-lg md:text-xl 
            max-w-2xl 
            mb-12 
            leading-relaxed
          "
        >
          We don't just produce films. We craft cinematic experiences that move audiences and define brands.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <button className="liquid-glass-strong rounded-full px-8 py-4 text-white font-medium flex items-center gap-2 group backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition">
            Create Your Film
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <button className="liquid-glass-strong rounded-full px-8 py-4 text-white font-medium flex items-center gap-2 group backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition">
            {/* <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm"> */}
              <Play className="w-5 h-5 fill-white" />
            {/* </div> */}
            View Our Work
          </button>
        </motion.div>
      </div>

      {/* 🤝 Partners */}
      <div className="mt-auto w-full max-w-7xl pb-16 pt-32 relative z-10">
        <div className="flex flex-col items-center gap-10">

          <div className="text-white/40 text-xs tracking-[0.3em] uppercase">
            Crafted for brands like
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {["Mango", "Zepto", "boAt", "Mamaearth", "Nykaa"].map((brand) => (
              <span
                key={brand}
                className="text-3xl md:text-4xl font-heading italic text-white tracking-tight"
              >
                {brand}
              </span>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}