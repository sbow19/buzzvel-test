import * as styles from "./lesson_card.module.css";
import { LessonButton } from "../buttons/default_buttons";
import { BannerBadge } from "../banner_badge/banner_badge";
import { motion } from "motion/react";

export const LessonCard = ({
  headerText,
  contentText,
  bannerText,
  bannerTextColor,
  bannerBackgroundColor,
  onClick,
  variants
}) => {
  return (
    <motion.article 

        initial="hidden"
        whileInView="visible"
        variants={variants}


    className={styles.lesson_card_wrapper}
    >
      {/* Banner */}
      <BannerBadge
        bannerBackgroundColor={bannerBackgroundColor}
        bannerText={bannerText}
        bannerTextColor={bannerTextColor}
      />
      <h3 className={styles.header_text}>{headerText}</h3>

      <span className={styles.content_text}>{contentText}</span>

      <LessonButton onClick={onClick} text="Take Lesson" />
    </motion.article>
  );
};
