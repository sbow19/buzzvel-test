"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* Custom components */
import * as styles from "./meet_int.module.css";
import * as slideStyles from "../../slides_styles.module.css";
import { CTAButton } from "@/components/buttons/default_buttons";
import { Airplane } from "@/components/graphics/airplane";
import { text } from "@/animations/animations";
import useResize from "@/hooks/useResize";

export const MeetInt = () => {
  const screenWidth = useResize();
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={text}
      viewport={{
        amount: 0.2,
        once: true,
      }}
      className={`${slideStyles.slide_wrapper} ${styles.wrapper}`}
    >
      {/* Content */}
      <div className={styles.content_wrapper}>
        <motion.h3 className={styles.header} variants={text}>
          Meet international students & teachers
          <div className={styles.airplane_wrapper}>
            <Airplane
              height={screenWidth >= 960 ? 64 : 24}
              width={screenWidth >= 960 ? 64 : 24}
            />
          </div>
        </motion.h3>
        <motion.p className={styles.content} variants={text}>
          Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus
          risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi
          facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus
          aenean lorem faucibus integer.
        </motion.p>
        <CTAButton text="Explore teachers and students" />
      </div>

      {/* Graphics */}
      {/**
       * Each column is styled in a unique way and are target using the
       * :nth-child pseudo-selector. See styles module.
       */}
      <div className={styles.graphics_wrapper}>
        <div className={styles.column}>
          <Image
            src="/images/collage/collage_1.png"
            height={100}
            width={100}
            alt=""
            className={styles.flex_image}
          />
          <Image
            src="/images/collage/collage_2.png"
            height={100}
            width={100}
            alt=""
            className={styles.flex_image}
          />
        </div>
        <div className={styles.column}>
          <Image
            src="/images/collage/collage_3.png"
            height={100}
            width={100}
            alt=""
            className={styles.flex_image}
          />
          <Image
            src="/images/collage/collage_4.png"
            height={100}
            width={100}
            alt=""
            className={styles.flex_image}
          />
          <Image
            src="/images/collage/collage_5.png"
            height={100}
            width={100}
            alt=""
            className={styles.flex_image}
          />
        </div>
        <div className={styles.column}>
          <Image
            src="/images/collage/collage_7.png"
            height={100}
            width={100}
            alt=""
            className={styles.flex_image}
          />
          <Image
            src="/images/collage/collage_8.png"
            height={100}
            width={100}
            alt=""
            className={styles.flex_image}
          />
          <Image
            src="/images/collage/collage_9.png"
            height={100}
            width={100}
            alt=""
            className={styles.flex_image}
          />
        </div>
        <div className={styles.column}>
          <Image
            src="/images/collage/collage_10.png"
            height={100}
            width={100}
            alt=""
            className={styles.flex_image}
          />
          <Image
            src="/images/collage/collage_1.png"
            height={100}
            width={100}
            alt=""
            className={styles.flex_image}
          />
        </div>
      </div>
    </motion.section>
  );
};
