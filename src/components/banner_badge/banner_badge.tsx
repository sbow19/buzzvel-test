/**
 * Small badge with title  used in lesson cards, but can be added anywhere
 */

import * as styles from './banner_badge.module.css'

export const BannerBadge: React.FC<BannerBadgeProps> = ({
    bannerBackgroundColor,
    bannerTextColor,
    bannerText
}) => {
  return (
    <div
      className={styles.banner}
      style={{
        backgroundColor: bannerBackgroundColor,
        color: bannerTextColor,
      }}
    >
      {bannerText}
    </div>
  );
};
