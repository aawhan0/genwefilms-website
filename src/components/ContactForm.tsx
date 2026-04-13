import { motion } from "motion/react";
import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="liquid-glass rounded-3xl p-12 text-center max-w-2xl mx-auto border border-white/5"
      >
        <h2 className="text-4xl font-heading italic text-white mb-4">Got it.</h2>
        <p className="text-white/60 font-body text-xl">We'll reach out shortly.</p>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto px-6">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-heading italic text-white mb-6"
        >
          Let's Build Something Unforgettable.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/50 font-body text-lg md:text-xl"
        >
          Tell us about your project — we'll get back within 24 hours.
        </motion.p>
      </div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        onSubmit={handleSubmit}
        className="space-y-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-3">
            <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 ml-4">Name</label>
            <input
              required
              type="text"
              placeholder="e.g. Julian Anderson"
              className="bg-white/5 border border-white/10 rounded-full px-8 py-4 text-white font-body focus:outline-none focus:border-white/30 transition-colors w-full"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 ml-4">Email</label>
            <input
              required
              type="email"
              placeholder="e.g. julian@brand.com"
              className="bg-white/5 border border-white/10 rounded-full px-8 py-4 text-white font-body focus:outline-none focus:border-white/30 transition-colors w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-3">
            <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 ml-4">Project Type</label>
            <div className="relative">
              <select className="appearance-none bg-white/5 border border-white/10 rounded-full px-8 py-4 text-white font-body focus:outline-none focus:border-white/30 transition-colors w-full cursor-pointer">
                <option value="ad-film" className="bg-black">Ad Film</option>
                <option value="brand-film" className="bg-black">Brand Film</option>
                <option value="social" className="bg-black">Social Content</option>
                <option value="ai-video" className="bg-black">AI Video</option>
              </select>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                ↓
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 ml-4">Timeline</label>
            <input
              type="text"
              placeholder="e.g. Next 3 weeks"
              className="bg-white/5 border border-white/10 rounded-full px-8 py-4 text-white font-body focus:outline-none focus:border-white/30 transition-colors w-full"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 ml-4">Project Brief</label>
          <textarea
            placeholder="Tell us a bit about your vision..."
            rows={4}
            className="bg-white/5 border border-white/10 rounded-[2rem] px-8 py-6 text-white font-body focus:outline-none focus:border-white/30 transition-colors w-full resize-none"
          />
        </div>

        <div className="text-center pt-8">
          <button
            type="submit"
            className="liquid-glass-strong rounded-full px-12 py-5 text-white font-medium text-lg hover:scale-105 transition-transform w-full md:w-auto"
          >
            Start Your Project
          </button>
          
          <p className="mt-8 text-white/30 text-xs font-body tracking-wider">
            Fast turnaround. Cinematic quality. Built to perform.
          </p>
        </div>
      </motion.form>
    </div>
  );
}
