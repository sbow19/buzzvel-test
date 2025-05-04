export const Airplane = ({
    height,
    width
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_12210)">
        <path
          d="M14.6389 10.2577L19.4685 8.96358C19.9809 8.82629 20.5268 8.89816 20.9862 9.16338C21.4455 9.4286 21.7807 9.86543 21.918 10.3778C22.0553 10.8902 21.9834 11.4361 21.7182 11.8954C21.453 12.3548 21.0162 12.69 20.5038 12.8273L6.01493 16.7096L1.56424 11.6905L4.46201 10.914L6.9115 12.3282L9.80928 11.5518L6.0657 5.30793L8.96347 4.53147L14.6389 10.2577Z"
          stroke="#FACC15"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 21H21"
          stroke="#FACC15"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_12210">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
