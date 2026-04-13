import Hls from "hls.js";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";

const reasons = [
  {
    headline: "Quality, Speed, and Cost — Together",
    body: "Most brands are forced to choose between cinematic quality, fast delivery, or budget. We deliver all three — by design, not compromise.",
  },
  {
    headline: "Filmmaker's Eye. AI Efficiency.",
    body: "Every frame is directed with intent. AI accelerates production, but creative decisions remain human — precise, controlled, and cinematic.",
  },
  {
    headline: "From Weeks to Days",
    body: "What used to take six weeks of production now takes 7–10 days. Your brand moves when the moment matters — not after it's gone.",
  },
  {
    headline: "Built for Attention and Action",
    body: "We don't just make films that look good. Every visual, cut, and sound is engineered to hold attention — and convert it.",
  },
];

export default function WhyUs() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const hlsUrl = "https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8";

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(hlsUrl);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = hlsUrl;
    }
  }, []);

  return (
    <section className="relative min-h-[600px] md:min-h-[800px] flex items-center justify-center overflow-hidden py-24 md:py-32 px-4 md:px-6">
      {/* Background Video */}
      <div className="bg-video-container">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="bg-video saturate-0 opacity-40"
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute top-0 left-0 right-0 h-[150px] md:h-[200px] bg-gradient-to-b from-black to-transparent" />
      <div
        className="absolute bottom-0 left-0 w-full h-[200px] md:h-[250px]"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, #000 100%)",
        }}
      />


      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 liquid-glass rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 max-w-7xl w-full"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.headline}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-4 md:space-y-6"
            >
              <h4 className="text-xl md:text-3xl font-heading italic text-white leading-tight">
                {reason.headline}
              </h4>

              <p className="text-white/70 font-body font-light text-sm md:text-base leading-relaxed">
                {reason.body}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>

  );
}