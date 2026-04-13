import Hls from "hls.js";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";

export default function StartSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const hlsUrl = "https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8";

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(hlsUrl);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = hlsUrl;
    }
  }, []);

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden py-20 md:py-24">

      {/* 🎥 Background Video */}
      <div className="bg-video-container">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="bg-video"
        />
      </div>

      {/* 🎨 Overlays (improved readability) */}
      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute top-0 left-0 right-0 h-[150px] md:h-[200px] bg-gradient-to-b from-black via-black/70 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[150px] md:h-[200px] bg-gradient-to-t from-black via-black/70 to-transparent" />

      {/* 📝 Content */}

      <div className="relative z-10 text-center max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center gap-6 md:gap-8"
        >

          {/* Tag */}
          <span className="liquid-glass rounded-full px-5 py-1.5 text-[10px] md:text-xs font-medium text-white uppercase tracking-widest">
            Our Process
          </span>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-heading italic text-white leading-tight tracking-tight">
            Your vision. <br /> Executed at speed.
          </h2>

          {/* Subheading */}
          <p className="text-white/80 font-body text-base md:text-xl leading-relaxed">
            Cinematic quality. AI efficiency. Real business impact.
          </p>

          {/* Supporting Text */}
          <p className="text-white/60 font-body font-light text-sm md:text-lg leading-relaxed max-w-2xl px-4 md:px-0">
            Traditional production is slow, expensive, and outdated. <br className="hidden md:block" /><br className="hidden md:block" />
            We deliver high-quality brand films in <span className="text-white font-medium">7 to 10 days</span> — combining creative direction with AI-powered production to give your brand an unfair advantage.
          </p>

          {/* CTA */}
          <button className="w-full sm:w-auto liquid-glass-strong rounded-full px-10 py-4 text-white font-medium hover:scale-105 transition-transform">
            Start Your Project
          </button>

        </motion.div>
      </div>
    </section>

  );
}