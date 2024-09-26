import { TGenericElementProps } from "@/typing/elements.type";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./BlogText.module.css";

export const BlogText: FC<PropsWithChildren<TGenericElementProps & { margin?: boolean }>> = ({
  children,
  className,
  margin,
  ...rest
}) => {
  const classNames = clsx(styles.root, className, margin && styles.text_mg);

  return (
    <p className={classNames} {...rest}>
      {children}
    </p>
  );
};