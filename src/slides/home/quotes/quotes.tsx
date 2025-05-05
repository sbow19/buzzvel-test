"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* Custom components */
import { text } from "@/animations/animations";
import * as slideStyles from "../../slides_styles.module.css";
import * as styles from "./quotes.module.css";
import { Quote, SquareGrid } from "@/components/icons/icons";
import { CirclePicker } from "@/components/icons/circle_picker";
import { SpinBlock } from "@/components/graphics/spin_block";

export const Quotes = () => {
  // Track scroll progression of section
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
  });

  // Apply rotation transform mapped onto scroll progression
  const rotation = useTransform(scrollYProgress, [0, 1], [-20, 25], {
    clamp: true,
  });
  const rotationSpringy = useSpring(rotation, {
    damping: 30,
    stiffness: 150,
  });

  //Timer to cycle through quotes
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  // Trigger cycle through quotes when slide enters viewport
  const observerRef = useRef(null);

  // Track cycle execution callback
  const intervalRef = useRef(null);

  // Callback to start quote slideshow cycle
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
        }, 2000);
      }
    }
  };

  useEffect(() => {
    if (!window) return;

    if (observerRef.current) return;

    observerRef.current = new IntersectionObserver(startCycle, {
      threshold: 0.5,
    });

    observerRef.current.observe(scrollRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.unobserve(scrollRef.current);
      }
    };
  }, []);

  // Custom animation values for quote components 
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

          {/* Circle picker changes highlight and width depending on  quote index*/}
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
              height={640}
              width={504}
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
