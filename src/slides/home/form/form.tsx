import * as styles from "./form.module.css";
import * as slideStyles from "../../slides_styles.module.css";

import { DemoForm } from "@/components/form/demo_form.";

export const Form = () => {
  return (
    <aside className={`${slideStyles.slide_wrapper} ${styles.wrapper}`}>
      <h3 className={styles.header}>Ready for your next project?</h3>
      <p className={styles.content}>Sit elit feugiat turpis sed integer integer accumsan turpis.</p>
      <DemoForm />
    </aside>
  );
};
