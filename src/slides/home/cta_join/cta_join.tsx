"use client";

import * as styles from "./cta_join.module.css";
import * as slideStyles from "../../slides_styles.module.css";
import { OrangeButton } from "@/components/buttons/default_buttons";
import { FloatingCollage } from "@/components/canvas/floating_collage";
import { useMemo } from "react";

export const CTAJoin = () => {
  const set1 = useMemo(() => {
    const imageSet = [];

    for (let i = 1; i < 15; i++) {
      imageSet.push(`/images/join_cta/image_${i}.png`);
    }

    return imageSet;
  }, []);

  return (
    <section className={`${slideStyles.slide_wrapper} ${styles.wrapper}`}>
      <div className={styles.graphics_container_top}>
        <FloatingCollage sceneItems={set1.slice(7)} />
      </div>
      <div className={styles.content_wrapper}>
        <h3 className={styles.header}>Join a world of learning</h3>
        <p className={styles.content}>
          Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Risus
          elit et fringilla habitant ut facilisi.
        </p>
        <OrangeButton text="Sign Up Now" />
      </div>
      <div className={styles.graphics_container_bottom}>
        <FloatingCollage sceneItems={set1.slice(0, 7)} />
      </div>
    </section>
  );
};
