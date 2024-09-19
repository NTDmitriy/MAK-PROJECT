import { IGenericElementProps } from "@/interfaces/elements.interface";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./BlogListTitle.module.css";

export const BlogListTitle: FC<PropsWithChildren<IGenericElementProps>> = ({
  children,
  className,
  ...rest
}) => {
  return <h4 className={clsx(styles.root, className)} {...rest}>{children}</h4>;
};
