import { motion } from "motion/react";
import { useState } from "react";
import { supabase } from "../lib/supabase";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [projectType, setProjectType] = useState("Ad Film");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const projectTypes = ["Ad Film", "Brand Film", "Social Content", "AI Video"];

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const email = form.get("email") as string;

    if (!validateEmail(email)) {
      alert("Enter a valid email");
      return;
    }

    setLoading(true);

    const data = {
      name: form.get("name"),
      email,
      project_type: projectType,
      timeline: form.get("timeline"),
      message: form.get("message"),
    };

    try {
      // ✅ 1. Save to Supabase
      const { error: dbError } = await supabase
        .from("contacts")
        .insert([data]);

      if (dbError) {
        console.error("SUPABASE ERROR:", dbError);
        alert("Database error: " + dbError.message);
        return;
      }

      // ✅ 2. Send email to YOU (lead notification)
      await emailjs.send(
        "service_genwefilms",
        "template_dntgyac", // your contact template
        data,
        "MR0_OcrtTuEDf6y2b"
      );

      // ✅ 3. Send auto-reply to USER
      await emailjs.send(
        "service_genwefilms",
        "template_4k2tabe", // your auto reply template
        data,
        "MR0_OcrtTuEDf6y2b"
      );

      setSubmitted(true);
      e.target.reset();

    } catch (err: any) {
      console.error("FULL ERROR:", err);
      alert(err?.text || err?.message || "Something went wrong");
    }

    setLoading(false);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="liquid-glass rounded-3xl p-12 text-center max-w-2xl mx-auto border border-white/5 w-full"
      >
        <h2 className="text-4xl font-heading italic text-white mb-4">
          Got it.
        </h2>
        <p className="text-white/60 font-body text-xl">
          We'll reach out shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <div
      id="contact-form"
      className="w-full max-w-6xl mx-auto px-4 md:px-6 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center"
    >
      {/* Left Side */}
      <div className="lg:w-5/12 flex flex-col justify-center text-left">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-white/40 text-[10px] md:text-xs tracking-[0.4em] uppercase mb-6"
        >
          Contact Us
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white mb-6 leading-[0.9]"
        >
          Let's Build Something <br className="hidden lg:block" /> Unforgettable.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/50 font-body text-base md:text-lg"
        >
          Tell us about your project — we'll get back within 24 hours. No pressure — just a conversation.
        </motion.p>
      </div>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        onSubmit={handleSubmit}
        className="lg:w-7/12 liquid-glass rounded-[2rem] border border-white/5 p-8 md:p-12 space-y-6 md:space-y-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          <div className="flex flex-col gap-3">
            <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 ml-4">
              Name
            </label>
            <input
              name="name"
              required
              type="text"
              placeholder="e.g. Julian Anderson"
              className="bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white font-body focus:outline-none focus:border-white/30 transition-colors w-full"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 ml-4">
              Email
            </label>
            <input
              name="email"
              required
              type="email"
              placeholder="e.g. julian@brand.com"
              className="bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white font-body focus:outline-none focus:border-white/30 transition-colors w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          <div className="flex flex-col gap-3">
            <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 ml-4">
              Project Type
            </label>

            <div className="relative">
              <div
                className="bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white font-body cursor-pointer flex justify-between items-center"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span>{projectType}</span>
                <span className="text-white/40 text-xs">
                  {dropdownOpen ? "↑" : "↓"}
                </span>
              </div>

              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-full bg-[#111111] border border-white/10 rounded-2xl z-50">
                  {projectTypes.map((type) => (
                    <div
                      key={type}
                      className="px-6 py-4 text-white hover:bg-white/5 cursor-pointer"
                      onClick={() => {
                        setProjectType(type);
                        setDropdownOpen(false);
                      }}
                    >
                      {type}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 ml-4">
              Timeline
            </label>
            <input
              name="timeline"
              type="text"
              placeholder="e.g. Next 3 weeks"
              className="bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white font-body focus:outline-none focus:border-white/30 transition-colors w-full"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 ml-4">
            Project Brief
          </label>
          <textarea
            name="message"
            rows={4}
            placeholder="Tell us a bit about your vision..."
            className="bg-white/5 border border-white/10 rounded-[2rem] px-6 py-6 text-white font-body resize-none"
          />
        </div>

        <div className="text-left pt-4">
          <button
            type="submit"
            className="liquid-glass-strong rounded-full px-10 py-4 text-white font-medium hover:scale-105 transition-transform w-full sm:w-auto"
          >
            {loading ? "Sending..." : "Start Your Project"}
          </button>

          <p className="mt-6 text-white/30 text-[10px] uppercase tracking-wider">
            Fast turnaround. Cinematic quality. Built to perform.
          </p>
        </div>
      </motion.form>
    </div>
  );
}