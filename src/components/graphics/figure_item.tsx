import * as styles from "./figure_item.module.css";
/* Provide svg image as icon */
export const FigureItem = ({ children, figure, tag }) => {
  return (
    <div className={styles.figure_item_wrapper}>
      <div className={styles.figure_icon}>{children}</div>
      <p className={styles.figure}>{figure}</p>
      <p className={styles.figure_tag}>{tag}</p>
    </div>
  );
};
