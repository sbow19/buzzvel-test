"use client";

import { TestimonialCard } from "@/components/cards/testimonial_card";
import * as styles from "./testimonial_carousel.module.css";
import { NavButtonLeft, NavButtonRight } from "@/components/buttons/nav_button";

import { motion, useAnimation, useMotionValue } from "motion/react";
import { useEffect, useRef, useState } from "react";
import useResize from "@/hooks/useResize";

/* TODO: implement server-side fetching of testimonial content here */
export const TestimonialCarousel = () => {
  const [containerWidth, setContainerWidth] = useState(393);
  const screenWidth = useResize();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window || !containerRef.current) return;

    // Get client width of carousel
    const width = containerRef.current.clientWidth;
    setContainerWidth(width);

    const resizeContainer = () => {
      setContainerWidth(width);
    };

    window.addEventListener("resize", resizeContainer);

    return () => {
      if (!window || !containerRef.current) return;

      window.removeEventListener("resize", resizeContainer);
    };
  }, []);

  // Carousel automatically moves until dragged
  const controls = useAnimation();
  const x = useMotionValue(0);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const stopAutoScroll = () => {
    setHasUserInteracted(true);
    controls.stop();
  };

  const activateCarousel = (newContainerWidth, newScreenWidth ) => {
    clearInterval(interval.current);

    interval.current = setInterval(() => {
      const currentX = x.get();
      // Translate by width of testimonial card until larger than container width
      // clamp to max scroll
      const newX = Math.max(currentX - 309, -newContainerWidth + newScreenWidth / 2);
      controls.start({
        x: newX,
        transition: {
          duration: 0.75,
          ease: "easeIn",
          type: "spring",
          damping: 30,
        },
      });
    }, 3000);
  };

  const interval = useRef(null);
  const observerRef = useRef(null)
  useEffect(() => {
    // Remove observer
    if(observerRef.current){
      observerRef.current.unobserve(containerRef.current)
    }


    if (hasUserInteracted || !containerRef.current) return;

    const options = {
      threshold: 0.5,
    };
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry)=>{
        if(entry.isIntersecting){
          activateCarousel(containerWidth, screenWidth);
        } else {
          clearInterval(interval.current)
        }
      })
    }, options);

    observerRef.current.observe(containerRef.current)

    return () => clearInterval(interval.current);
  }, [hasUserInteracted, containerWidth, screenWidth]);

  // Button controls
  const handleClick = (direction: number) => {
    clearInterval(interval.current)
    setHasUserInteracted(true);
    controls.stop();

    const currentX = x.get();
    let newX;
    if (direction < 0) {
      newX = Math.max(currentX - 309, -containerWidth + screenWidth / 2);
    } else {
      newX = Math.max(currentX + 309, 0);
    }
    controls.start({ x: newX, transition: { duration: 0.5, ease: "easeOut" } });
  };

  return (
    <>
      <div className={styles.button_wrapper}>
        <NavButtonLeft
          onClick={() => {
            handleClick(1);
          }}
        />
        <NavButtonRight
          onClick={() => {
            handleClick(-1);
          }}
        />
      </div>

      <motion.div
        className={styles.carousel_container}
        drag="x"
        dragMomentum={true}
        ref={containerRef}
        dragConstraints={{
          right: 0,
          left: -containerWidth + screenWidth / 2,
        }}
        style={{
          x,
        }}
        animate={controls}
        onDragStart={stopAutoScroll}
      >
        <TestimonialCard testimonial={test1} />
        <TestimonialCard testimonial={test2} />
        <TestimonialCard testimonial={test2} />
        <TestimonialCard testimonial={test2} />
      </motion.div>
    </>
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
