import { TGenericElementProps } from "@/typing/elements.type";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./CaseListTitle.module.css";

export const CaseListTitle: FC<PropsWithChildren<TGenericElementProps>> = ({
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
