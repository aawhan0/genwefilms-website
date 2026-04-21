import { motion } from "motion/react";
import DarkVeil from "./DarkVeil";

const data = [
  {
    label: "Production Time",
    traditional: "Weeks to months",
    genwe: "Delivered within a week",
  },
  {
    label: "Cost",
    traditional: "Same budget = 1 film",
    genwe: "Same budget = up to 12 films",
  },
  {
    label: "Flexibility",
    traditional: "Rigid once executed",
    genwe: "Fast iteration cycles",
  },
  {
    label: "Creative Testing",
    traditional: "Limited exploration",
    genwe: "Multiple variations",
  },
  {
    label: "Deployment",
    traditional: "Slow rollout",
    genwe: "Rapid deployment",
  },
];

export default function WhyGenWe() {
  return (
    <section className="relative w-full overflow-hidden">

      {/* 🌊 ENHANCED DARKVEIL (LESS STATIC) */}
      <motion.div
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        animate={{
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <DarkVeil
          speed={0.45}          // 🔥 increased from 0.2
          noiseIntensity={0.035} // 🔥 slightly richer
          warpAmount={0.45}      // 🔥 more flow
        />
      </motion.div>

      {/* 🧊 OVERLAY */}
      <div className="absolute inset-0 bg-black/70 z-[1]" />

      {/* CONTENT */}
      <div className="relative z-10 py-28 px-4 md:px-10 max-w-5xl mx-auto">

        {/* ✅ UPDATED HEADER */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white/40 uppercase tracking-[0.5em] text-xs md:text-sm font-light"
          >
            Why GenWe Films
          </motion.p>
        </div>

        {/* 🧱 TABLE (UNCHANGED) */}
        <div className="rounded-[2rem] bg-black/80 backdrop-blur-xl border border-white/10 overflow-hidden">

          <div className="hidden md:grid grid-cols-3 px-6 py-4 text-[10px] tracking-[0.4em] uppercase text-white/30">
            <div></div>
            <div>Traditional</div>
            <div className="text-green-400">GenWe Films</div>
          </div>

          {data.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              viewport={{ once: true }}
              className="border-t border-white/5 px-5 py-5"
            >

              {/* MOBILE */}
              <div className="md:hidden">

                <div className="flex items-center gap-2 text-white/60 text-[10px] tracking-[0.35em] uppercase mb-3">
                  <span className="w-1.5 h-1.5 bg-white/30 rounded-full" />
                  {row.label}
                </div>

                <div className="grid grid-cols-2 gap-4">

                  <div>
                    <div className="text-white/30 text-[9px] tracking-[0.3em] uppercase mb-1">
                      Traditional
                    </div>
                    <div className="text-white/50 text-sm leading-snug">
                      {row.traditional}
                    </div>
                  </div>

                  <div>
                    <div className="text-green-400 text-[9px] tracking-[0.3em] uppercase mb-1">
                      GenWe
                    </div>
                    <div className="text-white text-sm leading-snug">
                      {row.genwe}
                    </div>
                  </div>

                </div>
              </div>

              {/* DESKTOP */}
              <div className="hidden md:grid grid-cols-3 items-center gap-6">

                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-white/30 rounded-full" />
                  <span className="text-white/60 text-[11px] tracking-[0.3em] uppercase">
                    {row.label}
                  </span>
                </div>

                <div className="text-white/40 text-[12px] tracking-[0.2em] uppercase">
                  {row.traditional}
                </div>

                <div className="text-white text-[13px] tracking-[0.25em] uppercase">
                  → {row.genwe}
                </div>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}