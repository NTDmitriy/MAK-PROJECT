import { TGenericElementProps } from "@/interfaces/elements.type";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./BlogListItem.module.css";

export const BlogListItem: FC<PropsWithChildren<TGenericElementProps>> = ({
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
