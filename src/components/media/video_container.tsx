/* 
  With video, swap for video element and use png banner image
  while video is loaded lazily.
 */

import * as styles from "./video_container.module.css";
import Image from "next/image";

export const VideoContainer = () => {
  return (
    <div className={styles.video_wrapper}>
      <div className={styles.toolbar}>
        <svg
          width="10"
          height="11"
          viewBox="0 0 10 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.00004 9.69381C2.69879 9.69381 0.833374 7.82839 0.833374 5.52714C0.833374 3.22589 2.69879 1.36047 5.00004 1.36047C7.30129 1.36047 9.16671 3.22589 9.16671 5.52714C9.16671 7.82839 7.30129 9.69381 5.00004 9.69381Z"
            fill="#E11D48"
          />
        </svg>
        <svg
          width="10"
          height="11"
          viewBox="0 0 10 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.00004 9.69381C2.69879 9.69381 0.833374 7.82839 0.833374 5.52714C0.833374 3.22589 2.69879 1.36047 5.00004 1.36047C7.30129 1.36047 9.16671 3.22589 9.16671 5.52714C9.16671 7.82839 7.30129 9.69381 5.00004 9.69381Z"
            fill="#FBBF24"
          />
        </svg>
        <svg
          width="10"
          height="11"
          viewBox="0 0 10 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.00004 9.69381C2.69879 9.69381 0.833374 7.82839 0.833374 5.52714C0.833374 3.22589 2.69879 1.36047 5.00004 1.36047C7.30129 1.36047 9.16671 3.22589 9.16671 5.52714C9.16671 7.82839 7.30129 9.69381 5.00004 9.69381Z"
            fill="#22C55E"
          />
        </svg>
      </div>

        <Image src="/images/tablet.png" width={348} height={234} alt="Tablet" className={styles.image} />
    </div>
  );
};
