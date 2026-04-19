import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import CtaFooter from "../components/CtaFooter";
import Hls from "hls.js";
import { Link } from "react-router-dom";
import { Camera, Sparkles, Box, Share2 } from "lucide-react";
import { useEffect, useRef } from "react";

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
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const hlsUrl = "https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8";

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(hlsUrl);
      hls.attachMedia(video);
      return () => hls.destroy();
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = hlsUrl;
    }
  }, []);

  return (
    <main className="bg-black min-h-screen text-white relative">
      <Navbar />

      {/* 🎥 Background Video (same as WhyUs) */}
      <div className="bg-video-container pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="bg-video saturate-0 opacity-50"
        />
      </div>

      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-black to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-black to-transparent" />

      {/* Compact Hero Section */}
      <section className="relative pt-32 pb-12 px-6 max-w-6xl mx-auto z-10">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-white/40 text-[10px] tracking-[0.3em] uppercase mb-4 block"
        >
          Our Expertise
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-heading italic leading-none tracking-tighter mb-4"
        >
          Modern Production.
        </motion.h1>
      </section>

      {/* Compact Services Section */}
      <section className="relative pb-20 px-6 max-w-6xl mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-black/60 backdrop-blur-md p-8 md:p-10 flex flex-col gap-4 group hover:bg-white/[0.02] transition-colors duration-500"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/10 font-heading italic text-3xl md:text-4xl">
                  0{i + 1}
                </span>
                <service.icon className="w-4 h-4 text-white/20 group-hover:text-white transition-colors" />
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-heading italic text-white leading-tight">
                  {service.title}
                </h2>
                <p className="text-white/40 font-body text-xs md:text-sm leading-relaxed max-w-xs group-hover:text-white/60 transition-colors">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* 🤝 Why Us Section (Integrated into Services Flow) */}
      <section className="relative py-32 px-6 max-w-7xl mx-auto z-10 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Side: Persuasion */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32 lg:h-fit">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-white/40 text-[10px] tracking-[0.4em] uppercase font-body font-medium"
            >
              The Advantage
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-heading italic leading-[0.85] tracking-tighter"
            >
              Why <br /> Genwe Films?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 font-body text-lg md:text-xl leading-relaxed max-w-md pt-4"
            >
              Traditional agencies are slow. Standard production is expensive. 
              We've built a new model that prioritizes your speed without sacrificing 
              an ounce of cinematic quality.
            </motion.p>
          </div>

          {/* Right Side: Reasons (Compact Cards) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { 
                  title: "Quality + Speed", 
                  desc: "Cinematic grade visuals delivered in days, not weeks. No compromises." 
                },
                { 
                  title: "AI + Human Eye", 
                  desc: "Advanced generative workflows directed by world-class cinematic intent." 
                },
                { 
                  title: "ROI Focused", 
                  desc: "Every cut and frame is engineered to hold attention and convert viewers." 
                },
                { 
                  title: "Scalable Content", 
                  desc: "One production, multi-format assets for every platform your brand lives on." 
                }
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="liquid-glass border border-white/5 rounded-2xl p-8 group hover:border-white/20 transition-all duration-500"
                >
                  <h3 className="text-xl md:text-2xl font-heading italic text-white mb-3 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/40 font-body text-xs md:text-sm leading-relaxed group-hover:text-white/60 transition-colors">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <CtaFooter />
    </main>
  );
}

