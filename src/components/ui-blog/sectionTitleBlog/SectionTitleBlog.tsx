import { IGenericElementProps } from "@/interfaces/elements.interface";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./SectionTitleBlog.module.css";

export const SectionTitleBlog: FC<PropsWithChildren<IGenericElementProps>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <h2 className={clsx(styles.root, className)} {...rest}>
      {children}
    </h2>
  );
};