"use client";

import { motion } from "framer-motion";

/* Custom components */
import * as styles from "./features.module.css";
import * as slideStyles from "../../slides_styles.module.css";
import { CTAButton } from "@/components/buttons/default_buttons";
import { StrokedText } from "@/components/graphics/stroked_text";
import { BlobOne } from "@/components/graphics/blob";
import { LessonCard } from "@/components/cards/lesson_card";
import { appStyles } from "@/components/styles/prog_styles";
import { FeaturesImage } from "@/components/images/features_img";
import useResize from "@/hooks/useResize";
import { text, cardRows } from "@/animations/animations";

export const Features = () => {
  const screenWidth = useResize();
  return (
    <section className={`${slideStyles.slide_wrapper} ${styles.wrapper}`}>
      {/* Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={text}
        viewport={{
          amount: 0.2,
          once: true,
        }}
        className={styles.content_wrapper}
      >
        <motion.h3 variants={text} className={styles.header}>
          All the cool{" "}
          <StrokedText
            text="features"
            strokeX={screenWidth >= 960 ? 1.1 : 0.45}
            strokeY={0.7}
            strokeXOffset={0}
            strokeYOffset={15}
          />
        </motion.h3>
        <motion.p variants={text} className={styles.content}>
          Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac.
          In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque
          quisque feugiat cras ullamcorper. Ultrices in amet, ullamcorper non
          viverra a, neque orci.
        </motion.p>
        <CTAButton text="View all the features" />
      </motion.div>

      {/* Graphics */}
      <div className={styles.graphics_wrapper}>
        <div className={styles.blob_container}>
          <BlobOne
            height={480}
            width={550}
            blobFill={appStyles.orangeBlob.blobFill}
            spotFill={appStyles.orangeBlob.spotFill}
          />
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={cardRows}
          viewport={{
            amount: 0.1,
            once: true,
          }}
          className={styles.flex_rows_wrapper}
        >
          <motion.div variants={cardRows} className={styles.flex_row}>
            <LessonCard
              bannerText="Popular"
              headerText="Design for how people think"
              contentText="Aliquam ut euismod condimentum elementum ultricies volutpat sit non. "
              bannerBackgroundColor={appStyles.LessonCardBanner.blue.background}
              bannerTextColor={appStyles.LessonCardBanner.blue.text}
              onClick={() => {}}
            />
            <FeaturesImage src="/images/features/image_2.png" />
          </motion.div>
          <motion.div className={styles.flex_row} variants={cardRows}>
            <FeaturesImage src="/images/features/image_1.png" />
            <FeaturesImage src="/images/features/image_3.png" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
