import { IGenericElementProps } from "@/interfaces/elements.interface";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./CaseTextAccent.module.css";

interface ICaseTextAccent extends IGenericElementProps {
  yellow?: boolean;
}

export const CaseTextAccent: FC<PropsWithChildren<ICaseTextAccent>> = ({
  children,
  className,
  yellow,
  ...rest
}) => {
  return (
    <span
      className={clsx(styles.root, className, yellow && styles.yellow)}
      {...rest}
    >
      {children}
    </span>
  );
};
