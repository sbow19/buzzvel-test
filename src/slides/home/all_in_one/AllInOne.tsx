"use client";

import * as styles from "./AllInOne.module.css";
import * as slideStyles from "../../slides_styles.module.css";
import { StrokedText } from "@/components/graphics/stroked_text";
import { CheckMark } from "@/components/icons/icons";
import { CTAButton } from "@/components/buttons/default_buttons";
import { Spots } from "@/components/graphics/spots";
import { VideoContainer } from "@/components/media/video_container";
import { BlobOne } from "@/components/graphics/blob";
import { LessonCard } from "@/components/cards/lesson_card";
import { appStyles } from "@/components/styles/prog_styles";
import useResize from "@/hooks/useResize";

import { text, cards } from "@/animations/animations";
import { motion } from "motion/react";

export const AllInOne = () => {
  const screenWidth = useResize();
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={text}
      viewport={{
        amount: 0.2,
        once: true
      }}
      className={`${slideStyles.slide_wrapper} ${styles.wrapper}`}
    >
      {/* Checklist section */}
      <motion.div className={styles.checklist_wrapper} variants={text}>
        <h3 className={styles.header}>
          <span
            style={{
              marginRight: 8,
            }}
          >
            An
          </span>
          <StrokedText
            text="all-in-one"
            strokeX={screenWidth >= 960 ? 1.3 : 0.55}
            strokeY={screenWidth >= 960 ? 1 : 0.7}
            strokeYOffset={screenWidth >= 960 ? 20 : 15}
            strokeXOffset={0}
          />
          app that makes it easier
        </h3>
        {screenWidth >= 960 ? (
          <></>
        ) : (
          <p className={styles.content}>
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
            suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
            amet, dui sit suspendisse.
          </p>
        )}

        <ul className={styles.checklist}>
          <motion.li className={styles.list_wrapper} variants={text}>
            <CheckMark height={24} width={24} />
            <p className={styles.list_text}>
              Est et in pharetra magna adipiscing ornare aliquam.
            </p>
          </motion.li>
          <motion.li className={styles.list_wrapper} variants={text}>
            <CheckMark height={24} width={24} />
            <p className={styles.list_text}>
              Tellus arcu sed consequat ac velit ut eu blandit.
            </p>
          </motion.li>
          <motion.li className={styles.list_wrapper} variants={text}>
            <CheckMark height={24} width={24} />
            <p className={styles.list_text}>
              Ullamcorper ornare in et egestas dolor orci.
            </p>
          </motion.li>
        </ul>
        <div className={styles.button_wrapper}>
          <CTAButton text="Find more about the app" />
          <div className={styles.spots_container}>
            <Spots />
          </div>
        </div>
      </motion.div>

      {/* Courses offered and video */}
      <div className={styles.graphics_wrapper}>
        <div className={styles.blob_wrapper}>
          <BlobOne height={400} width={336} />
        </div>
        <VideoContainer></VideoContainer>
        <motion.aside 
        initial="hidden"
        whileInView="visible"
        variants={cards}
        className={styles.lessons_wrapper}>
          <LessonCard
            bannerText="Featured"
            headerText="The map of mathematics"
            contentText="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
            bannerBackgroundColor={appStyles.LessonCardBanner.purple.background}
            bannerTextColor={appStyles.LessonCardBanner.purple.text}
            onClick={() => {}}
          />
          <LessonCard
            bannerText="Popular"
            headerText="Design for how people think"
            contentText="Aliquam ut euismod condimentum elementum ultricies volutpat sit non. "
            bannerBackgroundColor={appStyles.LessonCardBanner.blue.background}
            bannerTextColor={appStyles.LessonCardBanner.blue.text}
            onClick={() => {}}
          />
          {screenWidth >= 960 ? (
            <LessonCard
              bannerText="New"
              headerText="International & Commercial Law"
              contentText="Molestie integer eu arcu, mauris bibendum rhoncus imperdiet dui."
              bannerBackgroundColor={
                appStyles.LessonCardBanner.green.background
              }
              bannerTextColor={appStyles.LessonCardBanner.green.text}
              onClick={() => {}}
            />
          ) : (
            <></>
          )}
        </motion.aside>
      </div>
    </motion.section>
  );
};
