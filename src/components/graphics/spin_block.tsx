'use client'

import useResize from "@/hooks/useResize";

export const SpinBlock = () => {

  const screenWidth = useResize()
  return (
    <svg
      width={screenWidth >= 960 ? 495 : 434}
      height={screenWidth >= 960 ? 573 : 452}
      viewBox="0 0 434 452"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="-18.0977"
        y="144.751"
        width="325.739"
        height="375.632"
        rx="50"
        transform="rotate(-30 -18.0977 144.751)"
        fill="#0F172A"
      />
    </svg>
  );
};
