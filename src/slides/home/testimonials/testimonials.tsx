import * as styles from "./testimonials.module.css";
import * as slideStyles from "../../slides_styles.module.css";

import { TestimonialCarousel } from "@/components/carousels/testimonial_carousel";

export const Testimonials = () => {
  return (
    <section className={`${slideStyles.slide_wrapper} ${styles.wrapper}`}>
      <div className={styles.top_container}>
        <h3
          className={styles.header}
        >
          What everyone says
        </h3>
      </div>
      <TestimonialCarousel />
    </section>
  );
};
