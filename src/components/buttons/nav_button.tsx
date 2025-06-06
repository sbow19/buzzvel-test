import * as styles from "./nav_button.module.css";

export const NavButtonLeft: React.FC<DefaultButtonProps> = ({ onClick, ariaLabel }) => {
  return (
    <button
      aria-label={ariaLabel}
      className={styles.default_style}
      onClick={onClick}
    >
      <svg
        width="54"
        height="55"
        viewBox="0 0 57 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_dd_1_11908)">
          <rect
            x="4"
            y="3.5"
            width="46"
            height="46"
            rx="23"
            stroke="#EA580C"
            stroke-width="2"
          />
          <path
            d="M33.5 26.5H21H33.5ZM21 26.5L27 20.5L21 26.5ZM21 26.5L27 32.5L21 26.5Z"
            fill="#EA580C"
          />
          <path
            d="M21 26.5L27 32.5M33.5 26.5H21H33.5ZM21 26.5L27 20.5L21 26.5Z"
            stroke="#EA580C"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_dd_1_11908"
            x="0"
            y="0.5"
            width="54"
            height="54"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1_11908"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_1_11908"
              result="effect2_dropShadow_1_11908"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_1_11908"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </button>
  );
};

export const NavButtonRight: React.FC<DefaultButtonProps> = ({ onClick, ariaLabel }) => {
  return (
    <button
      aria-label={ariaLabel}
      className={styles.default_style}
      onClick={onClick}
    >
      <svg
        width="54"
        height="55"
        viewBox="0 0 57 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_dd_1_11909)">
          <rect
            x="4"
            y="3.5"
            width="46"
            height="46"
            rx="23"
            stroke="#EA580C"
            stroke-width="2"
          />
          <path
            d="M21 26.5H33.5H21ZM33.5 26.5L27.5 20.5L33.5 26.5ZM33.5 26.5L27.5 32.5L33.5 26.5Z"
            fill="#EA580C"
          />
          <path
            d="M33.5 26.5L27.5 32.5M21 26.5H33.5H21ZM33.5 26.5L27.5 20.5L33.5 26.5Z"
            stroke="#EA580C"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_dd_1_11909"
            x="0"
            y="0.5"
            width="54"
            height="54"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1_11909"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_1_11909"
              result="effect2_dropShadow_1_11909"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_1_11909"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </button>
  );
};
