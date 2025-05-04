"use client";
import * as slideStyles from "../../slides_styles.module.css";
import * as styles from "./quotes.module.css";
import { Quote, CirclePicker, SquareGrid } from "@/components/icons/icons";
import { SpinBlock } from "@/components/graphics/spin_block";
import Image from "next/image";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { text } from "@/animations/animations";
import { useRef } from "react";

export const Quotes = () => {
  // Track whether user has gone past  area
  const spunRef = useRef(false);
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
  });

  const rotation = useTransform(scrollYProgress, [0, 1], [-20, 25], {clamp: true});
  const rotationSpringy = useSpring(rotation,{
    damping: 30,
    stiffness:150
  })

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    // Stop future rotation when scrolling past
    if (v >= 0.75) {
      spunRef.current = true;
    }
  });
  return (
    <motion.section
      ref={scrollRef}
      className={`${slideStyles.slide_wrapper} ${styles.wrapper}`}
    >
      {/* TODO: Replace with a carousel */}
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
        <motion.p className={styles.quote_content_text} variants={text}>
          Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis
          est velit in. Nibh in purus sit convallis phasellus ut. At vel erat
          ultricies commodo. Neque suspendisse a habitasse commodo.
        </motion.p>
        <motion.p className={styles.quote_content_author} variants={text}>
          Marie Poirot,
          <b>Bigapp</b>
        </motion.p>

        {/* TODO: Animate circles */}
        <div className={styles.top}>
          <div>
            <CirclePicker />
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
  );
};
