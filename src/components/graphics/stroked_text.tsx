import { Stroke } from "./stroke";
import * as styles from './stroked_text.module.css'

export const StrokedText = ({ text, textStyle, strokeX, strokeY, strokeYOffset, strokeXOffset }) => {
  return (
    <span className={`${styles.text} ${textStyle}`}>
      {text}

      <div
        className={styles.stroke}
        style={{
            top:strokeYOffset,
            left: strokeXOffset
        }}
      >
        <Stroke stretchX={strokeX} stretchY={strokeY} />
      </div>
    </span>
  );
};
