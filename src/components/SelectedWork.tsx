import { motion } from "motion/react";
import { projects } from "../data/projects";
import WorkCard from "./WorkCard";

export default function SelectedWork() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center gap-6 mb-20">
        <span className="liquid-glass rounded-full px-5 py-1.5 text-xs font-medium text-white uppercase tracking-widest">
          Selected Work
        </span>
        <h2 className="text-5xl md:text-7xl font-heading italic text-white tracking-tight">
          Stories we've told.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
  );
}
