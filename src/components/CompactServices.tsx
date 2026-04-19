import { Film, Megaphone, Scissors, Sparkles, Camera, Video } from "lucide-react";
import { motion } from "motion/react";
import MuxPlayer from "@mux/mux-player-react";

const services = [
  { icon: Film, label: "Brand Films" },
  { icon: Megaphone, label: "Ads" },
  { icon: Sparkles, label: "CGI & VFX" },
  { icon: Scissors, label: "Editing" },
  { icon: Camera, label: "Product Shoots" },
  { icon: Video, label: "AI Tools" },
];

export default function CompactServices() {
  return (
    <section className="relative px-4 md:px-6 py-16 md:py-20 overflow-hidden">

      {/* 🔥 Cinematic Background (Mux Video) */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <MuxPlayer
          playbackId="9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          streamType="on-demand"
          className="w-full h-full object-cover opacity-30 saturate-0"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <span className="text-white/30 text-xs tracking-[0.4em] uppercase font-body font-medium">
            What We Do
          </span>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="flex flex-col items-center gap-3 group"
            >
              <div className="rounded-2xl w-14 h-14 md:w-16 md:h-16 flex items-center justify-center border border-white/10 bg-white/5 backdrop-blur-md group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
                <service.icon className="w-5 h-5 md:w-6 md:h-6 text-white/70 group-hover:text-white transition-colors duration-400" />
              </div>

              <span className="text-white/60 text-[10px] md:text-xs font-body tracking-wider uppercase group-hover:text-white/80 transition-colors duration-400">
                {service.label}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}