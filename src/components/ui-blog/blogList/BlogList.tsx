import { TGenericElementProps } from "@/typing/elements.type";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./BlogList.module.css";

interface IBlogList extends TGenericElementProps {
  grid?: boolean;
  margin?: boolean;
  marketed?: boolean;
}

export const BlogList: FC<PropsWithChildren<IBlogList>> = ({
  grid,
  children,
  className,
  margin,
  marketed,
  ...rest
}) => {
  const gridClass = grid ? styles.grid : styles.flex;
  const marginClass = margin && styles.margin;
  const marketedClass = marketed && styles.marketed;

  const classes = clsx(
    styles.root,
    className,
    gridClass,
    marketedClass,
    marginClass
  );

  return (
    <ul className={classes} {...rest}>
      {children}
    </ul>
  );
};
