import { BarChart3, Palette, Shield, Zap } from "lucide-react";
import { motion } from "motion/react";
import MuxPlayer from "@mux/mux-player-react";

const features = [
  {
    icon: Zap,
    title: "Product Advertisement Film",
    body: "Your product, shot like a brand ten times your size. Photorealistic visuals, cinematic direction, and sound design that turns 30 seconds into a moment.",
  },
  {
    icon: Palette,
    title: "Conceptual Brand Film",
    body: "Not about what you sell — about what people feel. Emotion-led storytelling that stays long after the film ends.",
  },
  {
    icon: BarChart3,
    title: "CGI Advertisement Film",
    body: "Impossible camera angles. Perfect lighting. Visual control that physical production simply cannot match.",
  },
  {
    icon: Shield,
    title: "Product Photoshoot & UGC",
    body: "Studio-quality product visuals and scroll-stopping content. Built to convert across Instagram, Meta, and YouTube.",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="relative py-36 px-6 overflow-hidden">

      {/* 🎥 Background Video (MUX) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <MuxPlayer
          playbackId="MTtHmG8ANNT1tCa3W5qzCBppEk01TicXxl93Vqfwk3bs"
          autoPlay
          muted
          loop
          playsInline
          streamType="on-demand"
          preload="metadata"
          className="absolute w-full h-full object-cover mux-bg"
        />

        {/* 🎨 Overlay (IMPORTANT for readability) */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="video-vignette" />

        {/* Gradients */}
        <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* 📝 Content */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6 mb-20">
          <span className="liquid-glass rounded-full px-5 py-1.5 text-xs font-medium text-white uppercase tracking-widest">
            What We Create
          </span>

          <h2 className="text-5xl md:text-7xl font-heading italic text-white tracking-tight">
            Three worlds. One studio.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="liquid-glass rounded-3xl p-8 flex flex-col gap-6 group hover:bg-white/5 transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="liquid-glass-strong rounded-full w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-2xl font-heading italic text-white">
                {feature.title}
              </h3>

              <p className="text-white/70 font-body font-light text-sm leading-relaxed">
                {feature.body}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}