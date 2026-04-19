import { Film, Megaphone, Scissors, Sparkles, Camera, Video } from "lucide-react";
import { motion } from "motion/react";

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
    <section className="relative px-4 md:px-6 pb-8 md:pb-12">
      <div className="max-w-4xl mx-auto">

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-10 md:mb-14"
        >
          <span className="text-white/20 text-[10px] md:text-xs tracking-[0.4em] uppercase font-body font-medium">
            What We Do
          </span>
        </motion.div>

        {/* Icon grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="flex flex-col items-center gap-3 group"
            >
              <div className="liquid-glass rounded-2xl w-14 h-14 md:w-16 md:h-16 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/5 transition-all duration-400">
                <service.icon className="w-5 h-5 md:w-6 md:h-6 text-white/60 group-hover:text-white/90 transition-colors duration-400" />
              </div>
              <span className="text-white/50 text-[10px] md:text-xs font-body tracking-wider uppercase group-hover:text-white/70 transition-colors duration-400">
                {service.label}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
