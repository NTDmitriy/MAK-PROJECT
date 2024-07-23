"use client";

import clsx from "clsx";
import {
	FC,
	PropsWithChildren,
	ReactNode,
	useCallback,
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
  const [headerDimensions, setHeaderDimensions] = useState<{
    height: number | null;
    left: number | null;
    width: number | null;
  }>({ height: null, left: null, width: null });

  const headerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = useCallback(() => {
    if (headerRef.current) {
      setHeaderDimensions({
        height: headerRef.current.offsetHeight,
        left: headerRef.current.offsetLeft,
        width: headerRef.current.offsetWidth,
      });
    }
  }, []);

  useLayoutEffect(() => {
    if (
      dropdownRef.current &&
      headerDimensions.height !== null &&
      headerDimensions.left !== null &&
      headerDimensions.width !== null
    ) {
      dropdownRef.current.style.top = `${headerDimensions.height}px`;
      if (!centered) {
        dropdownRef.current.style.paddingLeft = `${headerDimensions.left}px`;
      } else {
        dropdownRef.current.style.paddingLeft = `${
          headerDimensions.left + (headerDimensions.width - 330) / 2
        }px`;
      }
    }
  }, [headerDimensions]);

  return (
    <>
      <div
        {...rest}
        className={clsx(styles.dropdown__init, className)}
        onMouseEnter={handleMouseEnter}
        ref={headerRef}
      >
        {children}
      </div>

      <div className={styles.dropdown} ref={dropdownRef}>
        {content}
      </div>
    </>
  );
};
