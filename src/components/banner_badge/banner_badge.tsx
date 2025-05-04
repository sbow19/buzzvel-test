import * as styles from './banner_badge.module.css'

export const BannerBadge = ({
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
