import { IGenericElementProps } from "@/interfaces/elements.interface";
import clsx from "clsx";
import { FC, PropsWithChildren, ReactNode } from "react";
import { IconTitleSecondery } from "../../icons";
import styles from "./BlockTitle.module.css";

interface IBlockTitle extends IGenericElementProps {
  leftSide: boolean;
  descrBottom?: ReactNode;
  descrSideway?: string;
  background?: string;
}

export const BlockTitle: FC<PropsWithChildren<IBlockTitle>> = ({
  children,
  leftSide,
  className,
  descrBottom,
  descrSideway,
  background,
  ...rest
}) => {
  return (
    <div
      className={clsx(
        styles.title__wrapper,
        descrSideway ? styles.title__wrapper__flex : "",
        className
      )}
    >
      <h2
        className={clsx(
          styles.title,
          leftSide ? styles.title__left : styles.title__right
        )}
        {...rest}
      >
        {children}
      </h2>

      {descrSideway && (
        <div
          className={clsx(styles.descr, !leftSide ? styles.align__left : "")}
        >
          {descrSideway}
        </div>
      )}

      {descrBottom && <div>{descrBottom}</div>}
      <IconTitleSecondery
        className={clsx(
          styles.icon,
          leftSide ? styles.icon__left : styles.icon__right
        )}
      />
      {background && (
        <div
          className={clsx(
            styles.background__text,
            leftSide ? styles.left : styles.right
          )}
        >
          {background}
        </div>
      )}
    </div>
  );
};
