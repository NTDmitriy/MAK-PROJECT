import { IGenericElementProps } from "@/interfaces/elements.interface";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./BlogImageList.module.css";

interface IBlogImageList extends IGenericElementProps {
  grid?: boolean;
  margin?: boolean;
}

export const BlogImageList: FC<PropsWithChildren<IBlogImageList>> = ({
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
