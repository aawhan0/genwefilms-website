import { Lightbulb, Clapperboard, Rocket } from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    icon: Lightbulb,
    label: "Concept",
    sub: "Strategy & creative direction",
  },
  {
    icon: Clapperboard,
    label: "Production",
    sub: "Shoot, CGI & AI-powered editing",
  },
  {
    icon: Rocket,
    label: "Delivery",
    sub: "Final film in 7–10 days",
  },
];

export default function MinimalProcess() {
  return (
    <section className="relative px-4 md:px-6 py-16 md:py-20 overflow-hidden">

      {/* 🔥 Subtle background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-white/[0.02] to-black" />

      <div className="max-w-5xl mx-auto">

        {/* 🔥 NEW: Problem framing */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-white/20 text-[10px] md:text-xs tracking-[0.4em] uppercase font-body font-medium">
            The Problem
          </span>

          <h3 className="mt-4 text-2xl md:text-4xl font-heading italic text-white leading-tight">
            Traditional production is slow, expensive, and outdated.
          </h3>

          <p className="mt-3 text-white/50 text-sm md:text-base max-w-xl mx-auto">
            Long timelines, high costs, and inefficient workflows make it hard for brands to scale content.
          </p>
        </motion.div>

        {/* 🔥 Solution label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <span className="text-white/20 text-[10px] md:text-xs tracking-[0.4em] uppercase font-body font-medium">
            Our Approach
          </span>
        </motion.div>

        {/* 🔥 Process steps (improved) */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">

          {/* Connecting line */}
          <div className="hidden md:block absolute top-10 left-0 w-full h-px bg-white/10" />

          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="flex flex-col items-center text-center gap-4 group relative"
            >
              {/* Icon */}
              <div className="relative z-10">
                <div className="rounded-full w-16 h-16 flex items-center justify-center bg-white/5 border border-white/10 backdrop-blur-md group-hover:scale-110 transition-all duration-500">
                  <step.icon className="w-6 h-6 text-white/80" />
                </div>
                <span className="absolute -top-2 -right-2 text-[10px] text-white/30 font-body tracking-wider">
                  0{i + 1}
                </span>
              </div>

              {/* Label */}
              <h4 className="text-xl md:text-2xl font-heading italic text-white">
                {step.label}
              </h4>

              {/* Sub */}
              <p className="text-white/50 font-body font-light text-sm leading-relaxed max-w-xs">
                {step.sub}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}