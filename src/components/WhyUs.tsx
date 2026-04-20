import Hls from "hls.js";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";

const comparison = [
  {
    label: "Production Cost",
    traditional: "Extremely high budgets",
    genwe: "Up to 80% lower cost",
  },
  {
    label: "Production Time",
    traditional: "Weeks or months",
    genwe: "Delivered in days",
  },
  {
    label: "Experimentation",
    traditional: "Limited due to cost",
    genwe: "Multiple ads can be tested",
  },
  {
    label: "Flexibility",
    traditional: "Difficult to change concepts",
    genwe: "Fast iteration & revisions",
  },
  {
    label: "Content Output",
    traditional: "1–2 ads per campaign",
    genwe: "Multiple ads per campaign",
  },
  {
    label: "Marketing Speed",
    traditional: "Slow campaign launches",
    genwe: "Rapid campaign deployment",
  },
];

export default function WhyUs() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const hlsUrl =
      "https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8";

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(hlsUrl);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = hlsUrl;
    }
  }, []);

  return (
    <section className="relative py-28 md:py-36 px-4 md:px-6 overflow-hidden">

      {/* Background Video */}
      <div className="bg-video-container pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="bg-video saturate-0 opacity-40 scale-105"
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-heading italic text-white mb-4">
            A better way to produce brand films
          </h2>

          <p className="text-white/50 max-w-xl mx-auto text-sm md:text-base">
            We combine filmmaking craft with AI efficiency.
          </p>
        </motion.div>

        {/* Table */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/10">

          {/* Header Row */}
          <div className="hidden md:block" />
          <div className="text-center text-white/40 text-xs uppercase tracking-wider py-4">
            Traditional
          </div>
          <div className="text-center text-green-400 text-xs uppercase tracking-wider py-4">
            GenWe
          </div>

          {/* Rows */}
          {comparison.map((item, i) => (
            <>
              {/* Label */}
              <div className="bg-black/40 px-4 py-5 text-white/40 text-sm">
                {item.label}
              </div>

              {/* Traditional */}
              <div className="bg-black/30 px-4 py-5 text-white/50 text-sm">
                {item.traditional}
              </div>

              {/* GenWe (highlight) */}
              <div className="bg-[#0f1a12] px-4 py-5 text-white text-sm relative">
                <span className="relative z-10">{item.genwe}</span>

                {/* Glow */}
                <div className="absolute inset-0 bg-green-400/10 blur-xl opacity-40" />
              </div>
            </>
          ))}

        </div>
      </div>
    </section>
  );
}