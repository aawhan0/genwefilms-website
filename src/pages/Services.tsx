import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import CtaFooter from "../components/CtaFooter";

const services = [
  {
    title: "Cinematic Ad Films",
    hook: "Broadcasting your brand to the top 1%.",
    description: "High-end commercials designed for maximum visual impact. We fuse traditional filmmaking techniques with modern AI precision to create ads that demand attention.",
  },
  {
    title: "AI-Powered Brand Films",
    hook: "The future of storytelling, delivered in days.",
    description: "Scale your creative vision without the logistics nightmare. We use advanced generative AI to produce photorealistic worlds and concepts that were previously impossible.",
  },
  {
    title: "Product Visuals & CGI",
    hook: "Hyper-realism that defies gravity.",
    description: "Digital doubles and 3D product stories. Perfect lighting, impossible camera angles, and absolute control over every pixel of your product.",
  },
  {
    title: "High-Impact Social Content",
    hook: "Stop the scroll. Start the obsession.",
    description: "Cinematic vertical video designed specifically for high conversion on Meta, TikTok, and YouTube. Built to trend, not just to post.",
  },
];

export default function Services() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6 max-w-7xl mx-auto text-center">
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
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col gap-6"
            >
              <div className="h-px w-full bg-white/10" />
              <h2 className="text-3xl md:text-5xl font-heading italic">{service.title}</h2>
              <p className="text-white font-medium text-lg md:text-xl italic font-heading">
                {service.hook}
              </p>
              <p className="text-white/60 font-body text-base md:text-lg leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 text-center border-t border-white/5">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-heading italic mb-12"
        >
          Ready to define your brand's visual identity?
        </motion.h2>
        <button className="liquid-glass-strong rounded-full px-10 py-4 text-white font-medium text-lg hover:scale-105 transition-transform">
          Start a Conversation
        </button>
      </section>

      <CtaFooter />
    </main>
  );
}
