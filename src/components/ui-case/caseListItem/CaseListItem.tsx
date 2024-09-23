import { IGenericElementProps } from "@/interfaces/elements.interface";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./CaseListItem.module.css";

export const CaseListItem: FC<PropsWithChildren<IGenericElementProps>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <li className={clsx(styles.root, className)} {...rest}>
      {children}
    </li>
  );
};
