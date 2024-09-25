import { TGenericElementProps } from "@/interfaces/elements.type";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./CaseTextAccent.module.css";

interface ICaseTextAccent extends TGenericElementProps {
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
