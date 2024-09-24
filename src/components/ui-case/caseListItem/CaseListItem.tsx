import { IGenericElementProps } from "@/interfaces/elements.interface";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./CaseListItem.module.css";

interface ICaseListItem extends IGenericElementProps {
  center?: boolean;
}

export const CaseListItem: FC<PropsWithChildren<ICaseListItem>> = ({
  children,
  className,
  center,
  ...rest
}) => {
  return (
    <li
      className={clsx(styles.root, center && styles.center, className)}
      {...rest}
    >
      {children}
    </li>
  );
};
