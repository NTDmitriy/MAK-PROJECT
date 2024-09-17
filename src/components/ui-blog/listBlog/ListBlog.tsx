import { IGenericElementProps } from "@/interfaces/elements.interface";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./ListBlog.module.css";

interface IListBlog extends IGenericElementProps {
  grid?: boolean;
  margin?: boolean;
}

export const ListBlog: FC<PropsWithChildren<IListBlog>> = ({
  grid,
  children,
  className,
  margin,
  ...rest
}) => {
  const classes = clsx(
    styles.root,
    className,
    grid ? styles.grid : styles.flex,
    margin && styles.margin
  );

  return (
    <ul className={classes} {...rest}>
      {children}
    </ul>
  );
};
