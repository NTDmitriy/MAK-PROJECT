import { IGenericElementProps } from "@/interfaces/elements.interface";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./CaseText.module.css";

interface ICaseText extends IGenericElementProps {
  margin?: boolean;
  black?: boolean;
}

export const CaseText: FC<PropsWithChildren<ICaseText>> = ({
  children,
  className,
  margin = false,
  black = false,
  ...rest
}) => {
  const marginClass = margin && styles.margin;
  const blackClass = black && styles.black;

  const classNames = clsx(styles.root, className, marginClass, blackClass);

  return (
    <p className={classNames} {...rest}>
      {children}
    </p>
  );
};
