"use client";
import * as slideStyles from "../../slides_styles.module.css";
import * as styles from "./quotes.module.css";
import { Quote, CirclePicker, SquareGrid } from "@/components/icons/icons";
import { SpinBlock } from "@/components/graphics/spin_block";
import Image from "next/image";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { text } from "@/animations/animations";
import { useEffect, useRef, useState } from "react";

export const Quotes = () => {
  // Track whether user has gone past  area
  const spunRef = useRef(false);
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
  });

  const rotation = useTransform(scrollYProgress, [0, 1], [-20, 25], {
    clamp: true,
  });
  const rotationSpringy = useSpring(rotation, {
    damping: 30,
    stiffness: 150,
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    // Stop future rotation when scrolling past
    if (v >= 0.75) {
      spunRef.current = true;
    }
  });

  //Timer to cycle through quotes
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const observerRef = useRef(null);
  const intervalRef = useRef(null);

  const startCycle = (entries) => {
    for (let entry of entries) {
      clearInterval(intervalRef.current);
      if (entry.isIntersecting) {
        intervalRef.current = setInterval(() => {
          setCurrentQuoteIndex((prev) => {
            if (prev + 1 > quotes.length - 1) {
              return 0;
            }
            return prev + 1;
          });
        }, 2500);
      }
    }
  };

  useEffect(() => {
    if (!window) return;

    if (observerRef.current) return;

    observerRef.current = new IntersectionObserver(startCycle, {
      threshold: 1,
    });

    observerRef.current.observe(scrollRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.unobserve(scrollRef.current);
      }
    };
  }, []);

  const content = {
    initial: { opacity: 0, x: 10 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      x: -10,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <AnimatePresence initial={true}>
      <motion.section
        ref={scrollRef}
        className={`${slideStyles.slide_wrapper} ${styles.wrapper}`}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          variants={text}
          className={styles.quote_content_wrapper}
        >
          <motion.p
            className={styles.quote_content_text}
            variants={content}
            initial="initial"
            animate="animate"
            key={quotes[currentQuoteIndex].content}
          >
            {quotes[currentQuoteIndex].content}
          </motion.p>
          <motion.p
            className={styles.quote_content_author}
            variants={content}
            initial="initial"
            animate="animate"
            key={quotes[currentQuoteIndex].author}
          >
            {quotes[currentQuoteIndex].author}
            <b>{quotes[currentQuoteIndex].occupation}</b>
          </motion.p>

          {/* TODO: Animate circles */}
          <div className={styles.top}>
            <div>
              <CirclePicker
                quotesLength={quotes.length}
                quoteIndex={currentQuoteIndex}
              />
            </div>
          </div>
        </motion.div>

        {/* Graphics wrapper */}
        <motion.div className={styles.graphics_wrapper}>
          {/* Images wrapper */}
          <div className={styles.spin_block_wrapper}>
            <div className={styles.quote_icon_wrapper}>
              <Quote />
            </div>
            <Image
              className={styles.image_container}
              src="/images/happy_student.png"
              height={300}
              width={300}
              alt=""
            />
            <motion.div
              initial={{
                rotate: 0,
              }}
              style={{
                rotate: rotationSpringy,
              }}
              className={styles.spin_block}
            >
              <SpinBlock />
            </motion.div>
          </div>

          <div className={styles.square_grid}>
            <SquareGrid height={155} width={155} />
          </div>
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
};

type Quote = {
  content: string;
  author: string;
  occupation: string;
};

const quotes: Quote[] = [
  {
    content: `Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis
    est velit in. Nibh in purus sit convallis phasellus ut. At vel erat
    ultricies commodo. Neque suspendisse a habitasse commodo.`,
    occupation: "Bigapp",
    author: "Marie Poirot,",
  },
  {
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo accusamus ut nihil repellat qui velit, exercitationem aut numquam, suscipit debitis alias! Aut illo velit animi dolore culpa nulla quas qui?`,
    occupation: "MedCo",
    author: "Jeff Dean,",
  },
  {
    content: `Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis ultricies.`,
    occupation: "LargeCo",
    author: "Dean Smith,",
  },
  {
    content: `Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis
    est velit in.`,
    occupation: "Acme Inc",
    author: "Paul Lightfoot,",
  },
  {
    content: `Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis
    est velit in. Nibh in purus sit convallis phasellus ut. At vel erat
    ultricies commodo. Neque suspendisse a habitasse commodo.`,
    occupation: "Bigapp",
    author: "Amy Clements,",
  },
];
