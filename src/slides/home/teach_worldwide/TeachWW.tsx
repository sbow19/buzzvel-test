"use client";

import * as styles from "./TeachWW.module.css";
import * as slideStyles from "../../slides_styles.module.css";
import { StrokedText } from "@/components/graphics/stroked_text";
import { OrangeButton } from "@/components/buttons/default_buttons";
import { DemoButton } from "@/components/buttons/default_buttons";
import { CompanyIcons } from "@/components/icons/icons";

// Graphics components
import { BlobOne, BlobTwo } from "@/components/graphics/blob";
import { SpeechBubbles } from "@/components/graphics/speech_bubbles";
import { IntroGroup } from "@/components/icons/icons";
import Image from "next/image";
import useResize from "@/hooks/useResize";
import { useMemo } from "react";

import { motion } from "framer-motion";
import { text } from "@/animations/animations";

export const TeachWW = () => {
  const screenWidth = useResize();

  // Dynamic blob sizing
  const blobSize = useMemo(() => {
    const blob = {
      x: 0,
      y: 0,
    };
    if (screenWidth >= 960) {
      blob.x = 270;
      blob.y = 340;
    } else if (screenWidth >= 500) {
      blob.x = 230;
      blob.y = 290;
    } else {
      blob.x = 159;
      blob.y = 196;
    }
    return blob;
  }, [screenWidth]);

  // Dyanmic speech bubble sizing
  const speechSize = useMemo(() => {
    let scale = 1;
    if (screenWidth >= 960) {
      scale = 1.4;
    } else if (screenWidth >= 500) {
      scale = 1;
    } else {
      scale = 0.7;
    }
    return scale;
  }, [screenWidth]);


  const blobs = {
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        delay: 1,
      },
    },
  };

  return (
    <motion.section
      variants={text}
      className={`${slideStyles.slide_wrapper} ${styles.wrapper}`}
      initial="hidden"
      whileInView="visible"
    >
      {/* Introduction */}
      <motion.div className={styles.intro_wrapper}>
        <h2 className={styles.intro_header}>
          <StrokedText
            text="Teach"
            strokeX={screenWidth >= 960 ? 1 : 0.55}
            strokeY={1.1}
            strokeYOffset={22}
          />
          students worldwide
        </h2>

        <motion.p className={styles.intro_text} variants={text}>
          <motion.span variants={text}>
            Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa
            tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque
            turpis ultricies.
          </motion.span>
        </motion.p>

        <motion.div className={styles.button_wrapper} variants={text}>
          <OrangeButton text="Sign up now" />
          <DemoButton text="View Demo" />
        </motion.div>

        <motion.div variants={text} className={styles.creds_wrapper}>
          <h3>Trusted by leading companies</h3>
          <div className={styles.icon_container}>
            <CompanyIcons />
          </div>
        </motion.div>
      </motion.div>

      {/* Graphics */}
      <motion.div
        className={styles.graphics_wrapper}
        initial="hidden"
        animate="visible"
        variants={blobs}
      >
        <motion.div className={styles.group_two} variants={blobs}>
          <BlobTwo width={blobSize.x} height={blobSize.y} />
          <Image
            src="/images/student_phone.png"
            width={500}
            height={500}

            // Identified as LCP, so loading eagerly
            loading="eager"
            alt=""
            className={styles.student}
          />
        </motion.div>
        <motion.div className={styles.group_one} variants={blobs}>
          <BlobOne width={blobSize.x} height={blobSize.y} />
          <Image
            src="/images/teacher_laptop.png"
            width={500}
            height={500}
            alt=""
            className={styles.teacher}
          />
        </motion.div>

        <div className={styles.group_three}>
          <IntroGroup />
        </div>
        <motion.div className={styles.group_four}  variants={blobs}>
          <SpeechBubbles stretchX={speechSize} stretchY={speechSize} />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
