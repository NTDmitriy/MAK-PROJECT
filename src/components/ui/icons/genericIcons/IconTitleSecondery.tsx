import { SVGProps } from "react";

export const IconTitleSecondery = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="35"
      height="119"
      viewBox="0 0 35 119"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
			{...props}
    >
      <rect x="16.3301" width="2" height="18" fill="currentColor" />
      <g clipPath="url(#clip0_3038_114)">
        <rect
          x="26.0098"
          y="28"
          width="34.6631"
          height="40.0438"
          transform="rotate(60 26.0098 28)"
          fill="url(#paint0_linear_3038_114)"
        />
      </g>
      <rect x="16" y="89" width="2" height="30" fill="currentColor" />
      <defs>
        <linearGradient
          id="paint0_linear_3038_114"
          x1="24.665"
          y1="66.699"
          x2="62.0192"
          y2="29.3464"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F4A21A" />
          <stop offset="1" stopColor="#FFDE00" />
        </linearGradient>
        <clipPath id="clip0_3038_114">
          <rect
            width="40.04"
            height="40.05"
            fill="white"
            transform="matrix(0.866026 0.5 0 1 0 22.9902)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
