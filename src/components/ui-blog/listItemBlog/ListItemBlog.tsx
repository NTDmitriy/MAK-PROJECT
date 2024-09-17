import { IGenericElementProps } from "@/interfaces/elements.interface";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./ListItemBlog.module.css";

export const ListItemBlog: FC<PropsWithChildren<IGenericElementProps>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <li className={clsx(styles.root, className)} {...rest}>
      {children}
    </li>
  );
};
