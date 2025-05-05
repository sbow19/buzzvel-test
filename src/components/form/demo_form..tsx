"use client";

import { BlueButton } from "../buttons/default_buttons";
import * as styles from "./demo_form.module.css";

export const DemoForm = () => {
  return (
    <form className={styles.demo_form}>
      <div className={styles.demo_form_email}>
        <label htmlFor="">Email</label>
        <input
          type="text"
          className={styles.email_input}
          placeholder="Enter your email"
        />
      </div>
      <div className={styles.demo_form_message}>
        <label htmlFor="">Message</label>
        <textarea
          name=""
          id=""
          className={styles.message_input}
          placeholder="Send us a message!"
        ></textarea>
      </div>
      <BlueButton onClick={() => {}} text="Request Demo" />
    </form>
  );
};
