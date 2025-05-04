"use client";

import * as styles from "./testimonials.module.css";
import * as slideStyles from "../../slides_styles.module.css";
import { TestimonialCard } from "@/components/cards/testimonial_card";
import useResize from "@/hooks/useResize";
import { NavButtonLeft, NavButtonRight } from "@/components/buttons/nav_button";
import {motion} from "motion/react"


export const Testimonials = () => {
  const screenWidth = useResize();
  return (
    <section className={`${slideStyles.slide_wrapper} ${styles.wrapper}`}>
      <div className={styles.top_container}>
        <motion.h3 
        initial={{
          opacity:0
        }}
        whileInView={{
          opacity:1
        }}
        viewport={{
          amount:0.5,
          once: true
        }}
        transition={{
          delay:0.5
        }}
        className={styles.header}>What everyone says</motion.h3>
        {screenWidth >= 960 ? (
          <div className={styles.button_wrapper}>
            <NavButtonLeft />
            <NavButtonRight />
          </div>
        ) : (
          <></>
        )}
      </div>
      {/*TODO: swipe based and arrow based carousel */}
      <div className={styles.carousel_container}>
        <TestimonialCard testimonial={test1} />
        <TestimonialCard testimonial={test2} />
        <TestimonialCard testimonial={test2} />
        <TestimonialCard testimonial={test2} />
      </div>
    </section>
  );
};

const test1: Testimonial = {
  testimonialName: "Ralph Edwards",
  testimonialOccupation: "Math Teacher",
  testimonialText:
    "Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi, nec tortor. Vestibulum, ultrices ultricies neque, hac ultricies dolor.",
  profileImageSrc: "/images/profiles/ralph.png",
};

const test2: Testimonial = {
  testimonialName: "Hellen John",
  testimonialOccupation: "sychology Student",
  testimonialText:
    "Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.",
  profileImageSrc: "/images/profiles/hellen_john.png",
};
