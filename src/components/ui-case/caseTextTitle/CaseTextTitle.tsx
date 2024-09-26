import { TGenericElementProps } from "@/typing/elements.type";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./CaseTextTitle.module.css";

export const CaseTextTitle: FC<PropsWithChildren<TGenericElementProps>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <h3 className={clsx(styles.root, className)} {...rest}>
      {children}
    </h3>
  );
};