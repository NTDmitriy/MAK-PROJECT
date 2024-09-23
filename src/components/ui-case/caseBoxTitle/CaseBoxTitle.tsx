import { IGenericElementProps } from "@/interfaces/elements.interface";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./CaseBoxTitle.module.css";

interface ICaseBoxTitle extends IGenericElementProps {
  black?: boolean;
}

export const CaseBoxTitle: FC<PropsWithChildren<ICaseBoxTitle>> = ({
  children,
  className,
  black,
  ...rest
}) => {
  return (
    <h2
      className={clsx(styles.root, className, black && styles.black)}
      {...rest}
    >
      {children}
    </h2>
  );
};
