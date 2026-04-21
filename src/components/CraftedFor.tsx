"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect } from "react";
import FlowingMenu from "./FlowingMenu";

import adani from "../assets/logos/adani.png";
import amazon from "../assets/logos/amazon.png";
import itc from "../assets/logos/itc.png";
import kia from "../assets/logos/kia.png";
import sabyasachi from "../assets/logos/sabyasachi.png";

const items = [
  { link: "#", text: "Adani Group", image: adani },
  { link: "#", text: "Sabyasachi", image: sabyasachi },
  { link: "#", text: "Amazon", image: amazon },
  { link: "#", text: "ITC", image: itc },
  { link: "#", text: "Kia", image: kia }
];

export default function CraftedFor() {
  // 🎯 motion values
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const scale = useMotionValue(1);

  // smooth interpolation (THIS is what makes it feel premium)
  const smoothRotateX = useSpring(rotateX, { stiffness: 100, damping: 20 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 100, damping: 20 });
  const smoothScale = useSpring(scale, { stiffness: 120, damping: 15 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;

      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;

      rotateX.set(-y * 6); // subtle tilt
      rotateY.set(x * 6);
      scale.set(1.05);
    };

    const handleMouseLeave = () => {
      rotateX.set(0);
      rotateY.set(0);
      scale.set(1);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="relative bg-black overflow-hidden">

      {/* ✨ INTRO TEXT */}
      <div className="pt-24 pb-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white/40 uppercase tracking-[0.5em] text-xs md:text-sm font-light"
        >
          Crafted for brands like
        </motion.p>
      </div>

      {/* 🔥 FLOWING BRANDS */}
      <div className="h-[60vh] border-y border-white/10">
        <FlowingMenu
          items={items}
          speed={28}
          textColor="#9ca3af"
          marqueeTextColor="#000"
          borderColor="#1f1f1f"
        />
      </div>

      {/* 🎬 FADE TRANSITION */}
      <div className="h-32 bg-gradient-to-b from-transparent via-black/80 to-black" />

      {/* 💎 STORY SECTION */}
      <div className="flex flex-col items-center justify-center min-h-[40vh] -mt-10 px-6 text-center relative">

        {/* subtle glow */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
        </div>

        <div className="relative z-10 flex flex-col items-center">

          {/* ✨ TEXT */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white/40 uppercase tracking-[0.5em] text-xs md:text-sm font-light mb-2"
          >
            And for the ones building next.
          </motion.p>

          {/* 💥 INTERACTIVE YOU */}
          <motion.h1
            style={{
              rotateX: smoothRotateX,
              rotateY: smoothRotateY,
              scale: smoothScale,
              transformPerspective: 800,
            }}
            className="mt-2 text-white font-heading italic text-[4.5rem] md:text-[8rem] leading-[0.9] tracking-tight will-change-transform"
          >
            You<span className="opacity-70">.</span>
          </motion.h1>

        </div>
      </div>
    </section>
  );
}