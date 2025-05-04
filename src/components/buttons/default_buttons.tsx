/* Default buttons. If customisation desired, use button template */
"use client";
import * as defaultButtonStyles from "./default_button.module.css";

export const OrangeButton = ({ onClick, text, ariaLabel }) => {
  return (
    <button
      onClick={onClick}
      className={defaultButtonStyles.orange_button}
      aria-label={ariaLabel}
    >
      <span className={defaultButtonStyles.button_text}>{text}</span>
    </button>
  );
};

export const BlueButton = ({ onClick, text, ariaLabel }) => {
  return (
    <button
      onClick={onClick}
      className={defaultButtonStyles.blue_button}
      aria-label={ariaLabel}
    >
      <span className={defaultButtonStyles.button_text}>{text}</span>
    </button>
  );
};

export const DemoButton = ({ onClick, text, ariaLabel }) => {
  return (
    <button
      onClick={onClick}
      className={defaultButtonStyles.view_demo_button}
      aria-label={ariaLabel}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.99997 20.2662C4.47697 20.2662 -3.05176e-05 15.7892 -3.05176e-05 10.2662C-3.05176e-05 4.74317 4.47697 0.266174 9.99997 0.266174C15.523 0.266174 20 4.74317 20 10.2662C20 15.7892 15.523 20.2662 9.99997 20.2662ZM9.99997 18.2662C12.1217 18.2662 14.1565 17.4233 15.6568 15.923C17.1571 14.4227 18 12.3879 18 10.2662C18 8.14444 17.1571 6.10961 15.6568 4.60932C14.1565 3.10903 12.1217 2.26617 9.99997 2.26617C7.87824 2.26617 5.84341 3.10903 4.34312 4.60932C2.84282 6.10961 1.99997 8.14444 1.99997 10.2662C1.99997 12.3879 2.84282 14.4227 4.34312 15.923C5.84341 17.4233 7.87824 18.2662 9.99997 18.2662ZM14.126 12.0122L10.071 14.9102C9.16597 15.5562 7.94097 15.2992 7.33397 14.3342C7.11491 13.9833 6.99915 13.5778 6.99997 13.1642V7.36817C6.99997 6.20817 7.88297 5.26617 8.97197 5.26617C9.36297 5.26617 9.74597 5.39017 10.071 5.62217L14.126 8.52017C15.031 9.16717 15.272 10.4722 14.666 11.4372C14.5251 11.6621 14.3416 11.8574 14.126 12.0122ZM8.97197 7.36817V13.1642L13.027 10.2662L8.97197 7.36817Z"
          fill="#2563EB"
        />
      </svg>
      <span className={defaultButtonStyles.demo_text}>{text}</span>
    </button>
  );
};

export const LessonButton = ({ onClick, text, ariaLabel }) => {
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      className={defaultButtonStyles.lesson_button}
    >
      <span className={defaultButtonStyles.lesson_text}>{text}</span>
    </button>
  );
};

// Call-To-Action
export const CTAButton = ({ onClick, text, ariaLabel }) => {
  return (
    <button
      aria-label={ariaLabel}
      className={defaultButtonStyles.cta_button}
      onClick={onClick}
    >
      <span>{text}</span>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.586 10.6569L11.636 6.70692C11.4538 6.51832 11.353 6.26571 11.3553 6.00352C11.3576 5.74132 11.4628 5.49051 11.6482 5.3051C11.8336 5.11969 12.0844 5.01452 12.3466 5.01224C12.6088 5.00997 12.8614 5.11076 13.05 5.29292L18.707 10.9499C18.8002 11.0426 18.8741 11.1527 18.9246 11.2741C18.9751 11.3954 19.001 11.5255 19.001 11.6569C19.001 11.7883 18.9751 11.9184 18.9246 12.0398C18.8741 12.1611 18.8002 12.2713 18.707 12.3639L13.05 18.0209C12.9578 18.1164 12.8474 18.1926 12.7254 18.245C12.6034 18.2974 12.4722 18.325 12.3394 18.3262C12.2066 18.3273 12.0749 18.302 11.952 18.2517C11.8291 18.2015 11.7175 18.1272 11.6236 18.0333C11.5297 17.9394 11.4555 17.8278 11.4052 17.7049C11.3549 17.582 11.3296 17.4503 11.3307 17.3175C11.3319 17.1847 11.3595 17.0535 11.4119 16.9315C11.4643 16.8095 11.5405 16.6992 11.636 16.6069L15.586 12.6569H6C5.73478 12.6569 5.48043 12.5516 5.29289 12.364C5.10536 12.1765 5 11.9221 5 11.6569C5 11.3917 5.10536 11.1373 5.29289 10.9498C5.48043 10.7623 5.73478 10.6569 6 10.6569H15.586Z"
          fill="#2563EB"
        />
      </svg>
    </button>
  );
};
