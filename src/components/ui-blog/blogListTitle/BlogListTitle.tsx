import { TGenericElementProps } from "@/interfaces/elements.type";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./BlogListTitle.module.css";

export const BlogListTitle: FC<PropsWithChildren<TGenericElementProps>> = ({
  children,
  className,
  ...rest
}) => {
  return <h4 className={clsx(styles.root, className)} {...rest}>{children}</h4>;
};
