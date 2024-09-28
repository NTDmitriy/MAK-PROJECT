import { TGenericElementProps } from "@/typing/elements.type";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./BlogTextTitle.module.css";

interface TBlogTextTitle extends TGenericElementProps {
  margin?: boolean;
}

export const BlogTextTitle: FC<PropsWithChildren<TBlogTextTitle>> = ({
  children,
  className,
  margin = true,
  ...rest
}) => {
  return (
    <h3
      className={clsx(styles.root, className, margin && styles.margin)}
      {...rest}
    >
      {children}
    </h3>
  );
};
