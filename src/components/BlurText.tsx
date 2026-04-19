import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function BlurText({ text, className = "", delay = 0 }: BlurTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // 🔥 Split by lines first, then words
  const lines = text.split("\n");

  return (
    <div ref={ref} className={className}>
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} className="block">
          {line.split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
              animate={isInView ? { filter: "blur(0px)", opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: delay + (lineIndex * 0.2 + i * 0.08),
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="inline-block mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))}
        </div>
      ))}
    </div>
  );
}