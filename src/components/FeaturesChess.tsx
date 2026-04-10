import { motion } from "motion/react";

export default function FeaturesChess() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto space-y-40">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center gap-6 mb-20">
        <span className="liquid-glass rounded-full px-5 py-1.5 text-xs font-medium text-white uppercase tracking-widest">
          Services
        </span>
        <h2 className="text-5xl md:text-7xl font-heading italic text-white tracking-tight">
          Every format. Every vision.
        </h2>
      </div>

      {/* Row 1 */}
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h3 className="text-4xl md:text-5xl font-heading italic text-white leading-tight">
            Films that earn attention. <br /> Not just air time.
          </h3>
          <p className="text-white/60 font-body font-light text-lg leading-relaxed">
            From product advertisement films to conceptual brand narratives — we produce visual stories that cut through noise and convert audiences into customers.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Product Ad Film", "Brand Film", "Brand Showreel"].map((pill) => (
              <span key={pill} className="liquid-glass rounded-full px-4 py-1.5 text-xs font-body text-white/70">
                {pill}
              </span>
            ))}
          </div>
          <button className="liquid-glass-strong rounded-full px-8 py-3.5 text-white font-medium">
            See Our Work
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="liquid-glass rounded-2xl overflow-hidden aspect-video relative group"
        >
          <img
            src="https://picsum.photos/seed/film1/1200/800"
            alt="Feature 1"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
      </div>

      {/* Row 2 */}
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="liquid-glass rounded-2xl overflow-hidden aspect-video relative group md:order-1 order-2"
        >
          <img
            src="https://picsum.photos/seed/film2/1200/800"
            alt="Feature 2"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8 md:order-2 order-1"
        >
          <h3 className="text-4xl md:text-5xl font-heading italic text-white leading-tight">
            The future of film is here.
          </h3>
          <p className="text-white/60 font-body font-light text-lg leading-relaxed">
            CGI advertisement films and AI VFX that push the boundary of what's possible — without pushing your timeline. Premium visual production, built for the modern brand.
          </p>
          <div className="flex flex-wrap gap-3">
            {["CGI Ad Film", "AI VFX", "UGC Ad"].map((pill) => (
              <span key={pill} className="liquid-glass rounded-full px-4 py-1.5 text-xs font-body text-white/70">
                {pill}
              </span>
            ))}
          </div>
          <button className="liquid-glass-strong rounded-full px-8 py-3.5 text-white font-medium">
            Explore Capabilities
          </button>
        </motion.div>
      </div>
    </section>
  );
}
