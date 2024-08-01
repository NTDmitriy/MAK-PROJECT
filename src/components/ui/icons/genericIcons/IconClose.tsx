import { SVGProps } from "react";

export const IconClose = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="0.686523"
        y="21.8995"
        width="30"
        height="2"
        rx="1"
        transform="rotate(-45 0.686523 21.8995)"
        fill="currentColor"
      />
      <rect
        x="21.8994"
        y="23.3137"
        width="30"
        height="2"
        rx="1"
        transform="rotate(-135 21.8994 23.3137)"
        fill="currentColor"
      />
    </svg>
  );
};
