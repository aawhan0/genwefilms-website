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
    <section className="relative px-4 md:px-6 py-8 md:py-12">
      <div className="max-w-4xl mx-auto">

        {/* Divider label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-14 md:mb-20"
        >
          <span className="text-white/20 text-[10px] md:text-xs tracking-[0.4em] uppercase font-body font-medium">
            How We Work
          </span>
        </motion.div>

        {/* 3-step process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="flex flex-col items-center text-center gap-4 group relative"
            >
              {/* Step number + icon */}
              <div className="relative">
                <div className="liquid-glass rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
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

              {/* Sub — very brief */}
              <p className="text-white/50 font-body font-light text-sm leading-relaxed">
                {step.sub}
              </p>

              {/* Connector line (hidden on last) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-white/8" />
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
