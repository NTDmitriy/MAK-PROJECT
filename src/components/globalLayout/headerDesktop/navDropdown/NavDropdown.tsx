"use client";

import { useStopScroll } from "@/hooks/useStopScroll";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import {
	FC,
	PropsWithChildren,
	ReactNode,
	useCallback,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from "react";
import styles from "./NavDropdown.module.css";

interface INavDropdown {
  content: ReactNode;
  className?: string;
  centered?: boolean;
}

export const NavDropdown: FC<PropsWithChildren<INavDropdown>> = ({
  content,
  children,
  className,
  centered,
  ...rest
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [headerDimensions, setHeaderDimensions] = useState<{
    left: number | null;
    width: number | null;
  }>({ left: null, width: null });

  const headerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathName = usePathname();

  const handleMouseEnter = useCallback(() => {
    if (headerRef.current && dropdownRef.current) {
      setHeaderDimensions({
        left: headerRef.current.offsetLeft,
        width: headerRef.current.offsetWidth,
      });
      dropdownRef.current.classList.remove(styles.hidden);
    }
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    if (dropdownRef.current) dropdownRef.current.classList.add(styles.hidden);
  }, []);

  useLayoutEffect(() => {
    if (
      dropdownRef.current &&
      headerDimensions.left !== null &&
      headerDimensions.width !== null
    ) {
      if (!centered) {
        dropdownRef.current.style.paddingLeft = `${headerDimensions.left}px`;
      } else {
        dropdownRef.current.style.paddingLeft = `${
          headerDimensions.left + (headerDimensions.width - 330) / 2
        }px`;
      }
    }
  }, [headerDimensions, centered]);

  useEffect(() => {
    if (dropdownRef.current)
      return dropdownRef.current.classList.add(styles.hidden);
  }, [pathName]);

  useStopScroll(isHovered);

  return (
    <div onMouseLeave={handleMouseLeave}>
      <div
        {...rest}
        className={clsx(styles.dropdown__init, className)}
        onMouseEnter={handleMouseEnter}
        ref={headerRef}
      >
        {children}
      </div>
      <div className={clsx(styles.dropdown, styles.hidden)} ref={dropdownRef}>
        {content}
      </div>
    </div>
  );
};
