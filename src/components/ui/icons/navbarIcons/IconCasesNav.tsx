import { SVGProps } from "react";

export const IconCasesNav = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
			{...props}
    >
      <path
        d="M12.1395 20.487C13.5308 19.4667 17.3708 18.0383 21.6004 20.487V5.18263M2.40039 4.90437V20.487C3.79169 19.4667 7.63169 18.0383 11.8613 20.487V5.46089M2.40039 4.86511C3.79169 3.84482 7.63169 2.41642 11.8613 4.86511M12.1395 4.86511C13.5308 3.84482 17.3708 2.41642 21.6004 4.86511"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};