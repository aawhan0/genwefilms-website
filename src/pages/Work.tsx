import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import CtaFooter from "../components/CtaFooter";
import { projects } from "../data/projects";
import WorkCard from "../components/WorkCard";

export default function Work() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white/40 text-[10px] md:text-xs tracking-[0.3em] uppercase mb-6 block"
            >
              Selected Work
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-6xl md:text-9xl font-heading italic leading-[0.8] tracking-tighter"
            >
              The artifacts <br /> of attention.
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/60 font-body text-lg md:text-xl max-w-sm leading-relaxed mb-4"
          >
            We don't just make films that look good. We build assets that hold attention and convert it into action.
          </motion.p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <WorkCard project={project} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-heading italic mb-10 leading-tight">
            Our work is measured by the silence of the audience — and the noise in the market.
          </h2>
          <p className="text-white/50 font-body font-light text-lg md:text-2xl leading-relaxed">
            In an era of endless scrolling, being seen is easy. Being remembered is cinematic. 
            We focus on the metrics that matter: retention, resonance, and ROI.
          </p>
        </div>
      </section>

      <CtaFooter />
    </main>
  );
}
