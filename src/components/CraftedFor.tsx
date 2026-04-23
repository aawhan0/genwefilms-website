"use client";

import { motion } from "motion/react";
import FlowingMenu from "./FlowingMenu";

import adani from "../assets/logos/adani.png";
import amazon from "../assets/logos/amazon.png";
import itc from "../assets/logos/itc.png";
import kia from "../assets/logos/kia.png";
import sabyasachi from "../assets/logos/sabyasachi.png";

const items = [
  { text: "Adani Group", image: adani },
  { text: "Sabyasachi", image: sabyasachi },
  { text: "Amazon", image: amazon },
  { text: "ITC", image: itc },
  { text: "Kia", image: kia }
];

export default function CraftedFor() {
  return (
    <section className="relative bg-black overflow-hidden">

      {/* INTRO */}
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

      {/* FLOWING BRANDS */}
      <div className="h-[60vh] border-y border-white/10">
        <FlowingMenu
          items={items}
          speed={28}
          textColor="#9ca3af"
          marqueeTextColor="#000"
          borderColor="#1f1f1f"
        />
      </div>

      {/* SMOOTH TRANSITION */}
      <div className="h-16 -mt-6 bg-gradient-to-b from-transparent via-black/60 to-black pointer-events-none" />

      {/* FINAL LINE AS LAST ITEM */}
      <div className="border-t border-white/10 py-10 flex justify-center">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white/70 uppercase tracking-[0.08em] text-[4vh] font-semibold"
        >
          AND YOURS
        </motion.p>
      </div>

    </section>
  );
}