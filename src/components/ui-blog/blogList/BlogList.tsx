import { TGenericElementProps } from "@/typing/elements.type";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./BlogList.module.css";

interface IBlogList extends TGenericElementProps {
  grid?: boolean;
  margin?: boolean;
}

export const BlogList: FC<PropsWithChildren<IBlogList>> = ({
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
