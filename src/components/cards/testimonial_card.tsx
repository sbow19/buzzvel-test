import * as styles from "./testimonial_card.module.css";
import Image from "next/image";

export const TestimonialCard: React.FC<TestimonialProps> = ({
  testimonial,
}) => {
  return (
    <article className={styles.testimonial_wrapper}>
      {/* Content */}
      <p className={styles.testimonial_content}>
        {testimonial.testimonialText}
      </p>

      {/* Profile */}
      <div className={styles.testimonial_profile_wrapper}>
        {/* Profile image container */}
        <div className={styles.testimonial_profile_pic_wrapper}>
          <Image
            src={testimonial.profileImageSrc}
            alt={testimonial.testimonialName}
            width={64}
            height={64}
          />
        </div>

        {/* Profile label */}
        <div>
          <h3
            className={styles.testimonial_name}
          >{testimonial.testimonialName}</h3>
          <span
            className={styles.testimonial_occupation}
          
          >{testimonial.testimonialOccupation}</span>
        </div>
      </div>
    </article>
  );
};
