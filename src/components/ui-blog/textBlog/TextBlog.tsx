import { IGenericElementProps } from "@/interfaces/elements.interface";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./TextBlog.module.css";

export const TextBlog: FC<PropsWithChildren<IGenericElementProps>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <p className={clsx(styles.root, className)} {...rest}>
      {children}
    </p>
  );
};
