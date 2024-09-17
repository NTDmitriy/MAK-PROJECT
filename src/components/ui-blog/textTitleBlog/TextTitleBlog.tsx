import { IGenericElementProps } from "@/interfaces/elements.interface";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./TextTitleBlog.module.css";

export const TextTitleBlog: FC<PropsWithChildren<IGenericElementProps>> = ({
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