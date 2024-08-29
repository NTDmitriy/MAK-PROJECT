import { IGenericElementProps } from "@/interfaces/elements.interface";
import clsx from "clsx";
import { FC, PropsWithChildren, ReactNode } from "react";

import { Container } from "../../container/Container";
import { DynamicSvg } from "../../dynamicSvg/DynamicSvg";
import styles from "./BlockTitle.module.css";

interface IBlockTitle extends IGenericElementProps {
  leftSide: boolean;
  descrBottom?: string | ReactNode ;
  descrSideway?: string | ReactNode;
  background?: string;
  bgLessVisibility?: boolean;
}

export const BlockTitle: FC<PropsWithChildren<IBlockTitle>> = ({
  children,
  leftSide,
  className,
  descrBottom,
  descrSideway,
  background,
  bgLessVisibility,
  ...rest
}) => {
  const titleAlignmentClass = leftSide
    ? styles.title__left
    : styles.title__right;
  const iconAlignmentClass = leftSide ? styles.icon__left : styles.icon__right;
  const backgroundAlignmentClass = leftSide ? styles.left : styles.right;

  return (
    <div className={styles.overflow}>
      <Container
        className={clsx(styles.title__wrapper, {
          [styles.title__wrapper__flex]: descrSideway,
        })}
      >
        <h2
          className={clsx(styles.title, titleAlignmentClass, className)}
          {...rest}
        >
          {children}
        </h2>

        {descrSideway && (
          <div
            className={clsx(styles.descr, {
              [styles.align__left]: !leftSide,
            })}
          >
            {descrSideway}
          </div>
        )}

        {descrBottom && <>{descrBottom}</>}

        <DynamicSvg
          name="IconTitleSecondery"
          className={clsx(styles.icon, iconAlignmentClass)}
        />

        {background && (
          <div
            className={clsx(
              styles.background__text,
              backgroundAlignmentClass,
              bgLessVisibility && styles.bg__less__visibility
            )}
          >
            {background}
          </div>
        )}
				
      </Container>
    </div>
  );
};
