export const Stroke = ({ stretchY, stretchX }) => {
  return (
    <svg
      width={`${stretchX * 196}`}
      height={`${stretchY * 23}`}
      viewBox={`0 0 ${stretchX * 196} ${stretchY * 23}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        transform={`scale(${stretchX}, ${stretchY})`}
        d="M0.499969 8.99998C25.5 6.5 116.5 1.63771 191 9.00001C152.328 9.00001 101.942 9.74446 69.5 17.5"
        stroke="#FB923C"
        strokeWidth="10"
        strokeLinejoin="round"
      />
    </svg>
  );
};
