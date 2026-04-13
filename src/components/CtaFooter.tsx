import Hls from "hls.js";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";

export default function CtaFooter() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const hlsUrl = "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8";

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(hlsUrl);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = hlsUrl;
    }
  }, []);

  return (
    <section className="relative min-h-[700px] md:min-h-[900px] flex flex-col items-center justify-center overflow-hidden pt-24 md:pt-40 pb-12 px-6">
      {/* Background Video */}
      <div className="bg-video-container">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="bg-video opacity-50"
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute top-0 left-0 right-0 h-[200px] md:h-[300px] bg-gradient-to-b from-black to-transparent" />


      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl flex flex-col items-center gap-8 md:gap-12 mb-20 md:mb-40">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-heading italic text-white leading-[0.9] md:leading-[0.85] tracking-tighter"
        >
          Your next great <br className="hidden sm:block" /> film starts here.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/70 font-body font-light text-lg md:text-2xl max-w-2xl leading-relaxed px-4"
        >
          Tell us what you're building. We'll show you what's possible. <br className="hidden md:block" />
          No pressure — just a conversation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full px-6 sm:px-0"
        >
          <button className="w-full sm:w-auto liquid-glass-strong rounded-full px-8 md:px-10 py-3 md:py-4 text-white font-medium text-base md:text-lg hover:scale-105 transition-transform">
            Let's Create Something
          </button>
          <button className="w-full sm:w-auto bg-white text-black rounded-full px-8 md:px-10 py-3 md:py-4 font-medium text-base md:text-lg hover:bg-white/90 transition-colors">
            View Our Work
          </button>
        </motion.div>
      </div>

      {/* Footer Bar */}
      <div className="relative z-10 w-full max-w-7xl mt-auto pt-8 md:pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
        <div className="text-white/40 text-[10px] md:text-xs font-body tracking-wider uppercase text-center md:text-left">
          © 2026 Genwe Films. All rights reserved.
        </div>
        <div className="flex items-center gap-6 md:gap-8">
          {["Privacy", "Terms", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-white/40 text-[10px] md:text-xs font-body tracking-wider uppercase hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </section>

  );
}
