import { TButton } from "@/interfaces/button.type";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./PrimaryButton.module.css";

export const PrimaryButton: FC<PropsWithChildren<TButton>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <>
      <button className={clsx(styles.button, className)} {...rest}>
        <span className={styles.snap}>{children}</span>
      </button>
    </>
  );
};
