import { ILink } from "@/interfaces/link.interface";
import clsx from "clsx";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";

import { DynamicSvg } from "@/components/ui/dynamicSvg/DynamicSvg";
import styles from "./DropdownLink.module.css";

interface IDropdownLink extends ILink {
  arrayRight: boolean;
  isActive?: boolean;
}

const DropdownLink: FC<PropsWithChildren<IDropdownLink>> = ({
  children,
  className,
  href,
  arrayRight,
  isActive,
  ...rest
}) => {
  return (
    <Link
      className={clsx(styles.button, isActive ? styles.active : "", className)}
      href={href}
      {...rest}
    >
      {children}

      {arrayRight && (
        <span className={styles.array}>
          <DynamicSvg name="IconRightArray" />
        </span>
      )}
    </Link>
  );
};

export default DropdownLink;
