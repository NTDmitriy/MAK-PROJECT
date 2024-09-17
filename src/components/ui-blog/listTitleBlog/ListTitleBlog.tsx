import { IGenericElementProps } from "@/interfaces/elements.interface";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./ListTitleBlog.module.css";

export const ListTitleBlog: FC<PropsWithChildren<IGenericElementProps>> = ({
  children,
  className,
  ...rest
}) => {
  return <h4 className={clsx(styles.root, className)} {...rest}>{children}</h4>;
};
