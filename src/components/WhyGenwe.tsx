import { motion } from "motion/react";

const data = [
  { label: "Production Time", traditional: "Weeks or months", genwe: "Delivered in days" },
  { label: "Cost", traditional: "Extremely high budgets", genwe: "Up to 80% lower" },
  { label: "Flexibility", traditional: "Hard to change concepts", genwe: "Fast iteration" },
  { label: "Creative Testing", traditional: "Limited", genwe: "Multiple variations" },
  { label: "Output", traditional: "1–2 ads", genwe: "Multiple ads" },
  { label: "Deployment", traditional: "Slow", genwe: "Rapid" },
];

export default function WhyGenWe() {
  return (
    <section className="relative py-40 px-6 md:px-12 max-w-6xl mx-auto overflow-hidden">

      {/* TOP TEXT */}
      <div className="text-center mb-20 space-y-6">
        <span className="text-white/30 text-[10px] tracking-[0.5em] uppercase">
          Why GenWe
        </span>

        <h2 className="text-5xl md:text-7xl font-heading italic leading-[0.95]">
          Faster. Smarter.
        </h2>
      </div>

      {/* TABLE */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="relative overflow-hidden liquid-glass rounded-[3rem] p-2 md:p-3"
      >

        {/* SOFT CINEMATIC LIGHT */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.04),transparent_50%)] pointer-events-none" />

        {/* GENWE LIGHT */}
        <div className="absolute top-0 right-0 w-1/3 h-full 
        bg-gradient-to-l from-green-500/10 via-green-500/5 to-transparent pointer-events-none" />

        {/* INNER */}
        <div className="relative z-10 overflow-hidden rounded-[2.5rem]">

          {/* HEADER */}
          <div className="grid grid-cols-3 px-10 py-6 text-[10px] tracking-[0.3em] uppercase text-white/30">
            <div></div>
            <div>Traditional</div>
            <div className="text-green-400">GenWe Films</div>
          </div>

          {/* ROWS */}
          {data.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}

              className="group grid grid-cols-3 gap-10 px-10 py-8 items-center
              transition-all duration-300"
            >

              {/* LABEL */}
              <div className="flex items-center gap-5">
                <span className="text-white/10 font-heading italic text-2xl">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="text-white/60 text-sm uppercase tracking-wide">
                  {row.label}
                </span>
              </div>

              {/* TRADITIONAL (FIXED) */}
              <div className="text-white/35 text-sm line-through opacity-80 
              group-hover:text-white/20 transition duration-300">
                {row.traditional}
              </div>

              {/* GENWE */}
              <div className="flex items-center gap-4">
                <span className="text-white/20">→</span>

                <span className="font-heading italic text-xl md:text-2xl text-white tracking-tight 
                group-hover:tracking-wide transition-all duration-300">
                  {row.genwe}
                </span>
              </div>

              {/* DIVIDER */}
              <div className="absolute bottom-0 left-10 right-10 h-px bg-white/5" />

            </motion.div>
          ))}

        </div>
      </motion.div>
    </section>
  );
}