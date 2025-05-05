"use client";

import * as styles from "./cta_join.module.css";
import * as slideStyles from "../../slides_styles.module.css";
import { OrangeButton } from "@/components/buttons/default_buttons";
import { FloatingCollage } from "@/components/canvas/floating_collage";
import { useMemo } from "react";

export const CTAJoin = () => {

  // Thumbnail image sources
  const set1 = useMemo(() => {
    const imageSet: SourceItem[] = [];
    for (let i = 1; i < 15; i++) {
      const newItem: SourceItem = {
        src:`/images/join_cta/image_${i}.png`,
        type: "image"
      }
      imageSet.push(newItem);
    }

    return imageSet;
  }, []);

  // SVG image sources
  const set2 = useMemo(()=>{
    const imageSet: SourceItem[] = [];
    for (let i = 1; i < 12; i++) {
      const newItem: SourceItem = {
        src:`/images/join_cta/svg/image_${i}.png`,
        type: "image"
      }
      imageSet.push(newItem);
    }

    return imageSet;

  }, [])



  return (
    <section className={`${slideStyles.slide_wrapper} ${styles.wrapper}`}>
      <div className={styles.graphics_container_top} id="graphics_container_t">
        <FloatingCollage sceneItems={
          [
            ...set1.slice(7),
            ...set2.slice(0, 6)
          ]} />
      </div>
      <div className={styles.content_wrapper}>
        <h3 className={styles.header}>Join a world of learning</h3>
        <p className={styles.content}>
          Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Risus
          elit et fringilla habitant ut facilisi.
        </p>
        <OrangeButton text="Sign Up Now" />
      </div>
      <div className={styles.graphics_container_bottom} id="graphics_container_b">
        <FloatingCollage sceneItems={[
          ...set1.slice(0, 7),
          ...set2.slice(6)
        ]
          } />
      </div>
    </section>
  );
};
