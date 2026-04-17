import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import CtaFooter from "../components/CtaFooter";
import MuxPlayer from "@mux/mux-player-react";
import { Link } from "react-router-dom";
import { Camera, Sparkles, Box, Share2 } from "lucide-react";

const services = [
  {
    title: "Cinematic Ad Films",
    hook: "Broadcasting your brand to the top 1%.",
    description: "High-end commercials designed for maximum visual impact. We fuse traditional filmmaking techniques with modern AI precision to create ads that demand attention.",
    icon: Camera,
  },
  {
    title: "AI-Powered Brand Films",
    hook: "The future of storytelling, delivered in days.",
    description: "Scale your creative vision without the logistics nightmare. We use advanced generative AI to produce photorealistic worlds and concepts that were previously impossible.",
    icon: Sparkles,
  },
  {
    title: "Product Visuals & CGI",
    hook: "Hyper-realism that defies gravity.",
    description: "Digital doubles and 3D product stories. Perfect lighting, impossible camera angles, and absolute control over every pixel of your product.",
    icon: Box,
  },
  {
    title: "High-Impact Social Content",
    hook: "Stop the scroll. Start the obsession.",
    description: "Cinematic vertical video designed specifically for high conversion on Meta, TikTok, and YouTube. Built to trend, not just to post.",
    icon: Share2,
  },
];

export default function Services() {
  return (
    <main className="bg-black min-h-screen text-white relative">
      <Navbar />

      {/* 🎥 Background Video */}
      <div className="bg-video-container pointer-events-none opacity-40">
        <MuxPlayer
          playbackId="vD0202Fp5O500y01I5E3zEAc7Zc5VvL00TshX00U98NnS89E"
          autoPlay
          muted
          loop
          playsInline
          streamType="on-demand"
          preload="metadata"
          className="bg-video"
        />
      </div>

      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-black to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-black to-transparent" />

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6 max-w-7xl mx-auto text-center z-10">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white/40 text-[10px] md:text-xs tracking-[0.3em] uppercase mb-6 block"
        >
          Our Expertise
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-5xl md:text-8xl font-heading italic leading-[0.9] tracking-tighter mb-8"
        >
          Specialized production <br className="hidden md:block" /> for the modern era.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/60 font-body text-lg md:text-2xl max-w-3xl mx-auto"
        >
          We don't do generic. We build cinematic assets that define, distinguish, and dominate.
        </motion.p>
      </section>

      {/* Services Grid */}
      <section className="relative py-24 px-6 max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="liquid-glass rounded-[2rem] p-8 md:p-12 border border-white/5 flex flex-col gap-6 hover:bg-white/5 transition-all duration-500 hover:scale-[1.01]"
            >
              <div className="liquid-glass-strong rounded-full w-14 h-14 flex items-center justify-center">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-5xl font-heading italic tracking-tight">{service.title}</h2>
              <div className="flex flex-col gap-4">
                <p className="text-white font-medium text-xl md:text-2xl italic font-heading leading-tight">
                  {service.hook}
                </p>
                <p className="text-white/50 font-body text-base md:text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 px-6 text-center border-t border-white/5 z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-heading italic mb-12"
        >
          Ready to define your brand's visual identity?
        </motion.h2>
        <Link to="/contact#contact-form" className="liquid-glass-strong rounded-full px-12 py-5 text-white font-medium text-lg hover:scale-105 transition-transform inline-block">
          Start a Conversation
        </Link>
      </section>

      <CtaFooter />
    </main>
  );
}
