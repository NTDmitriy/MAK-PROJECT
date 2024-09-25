import { TGenericElementProps } from "@/interfaces/elements.type";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./CaseList.module.css";

interface ICaseList extends TGenericElementProps {
  grid?: boolean;
  margin?: boolean;
  marketed?: boolean;
  gap?: boolean;
  black?: boolean;
  threeСolumns?: boolean;
}

export const CaseList: FC<PropsWithChildren<ICaseList>> = ({
  children,
  className,
  margin,
  grid,
  threeСolumns,
  marketed,
  gap,
  black,
  ...rest
}) => {
  const gridClass = grid ? styles.grid : styles.flex;
  const threeСolumnsClass = grid && threeСolumns && styles.three_columns;
  const marginClass = margin && styles.margin;
  const marketedClass = marketed && styles.marketed;
  const gapClass = gap && styles.gap;
  const blackClass = black && styles.black;

  const classes = clsx(
    styles.root,
    gridClass,
    threeСolumnsClass,
    marginClass,
    marketedClass,
    gapClass,
    blackClass,
    className
  );

  return (
    <ul className={classes} {...rest}>
      {children}
    </ul>
  );
};
