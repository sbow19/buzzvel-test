'use client'
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import * as styles from "./icons.module.css";

// Cycle  through with a timer.
const ACTIVE_WIDTH = 32;
const INACTIVE_WIDTH = 8;
const SPACING = 6;
export const CirclePicker = ({ quotesLength, quoteIndex }) => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(quoteIndex);

  useEffect(() => {
    setCurrentQuoteIndex(quoteIndex);
  }, [quoteIndex]);

  // Compute x position dynamically per rect based on prior widths
  const getXPos = (index) => {
    let x = 0;
    for (let i = 0; i < index; i++) {
      x += (i === currentQuoteIndex ? ACTIVE_WIDTH : INACTIVE_WIDTH) + SPACING;
    }
    return x;
  };

  return (
    <svg
      width="96"
      height="8"
      viewBox="0 0 96 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {Array.from({ length: quotesLength }).map((_, i) => {
        const isActive = i === currentQuoteIndex;
        const width = isActive ? ACTIVE_WIDTH : INACTIVE_WIDTH;
        const x = getXPos(i);

        return (
          <motion.rect
            key={i}
            height="8"
            rx="4"
            animate={{
              x,
              width,
              fill: isActive ? "#0f172a" : "#FFFFFF",
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </svg>
  );
};