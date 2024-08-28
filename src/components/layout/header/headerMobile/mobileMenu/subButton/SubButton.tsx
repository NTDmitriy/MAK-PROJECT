import { IButton } from "@/interfaces/button.interface";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./SubButton.module.css";

interface ISubButton extends IButton {
  shadowBtn?: boolean;
}

export const SubButton: FC<PropsWithChildren<ISubButton>> = ({
  children,
  shadowBtn,
  className,
  ...rest
}) => {
  return (
    <>
      {shadowBtn && (
        <button className={styles.button__shadow} {...rest}>
          <span className={clsx(styles.btn, className)}>{children}</span>
        </button>
      )}

      {!shadowBtn && (
        <button className={clsx(styles.btn, className)} {...rest}>
          {children}
        </button>
      )}
    </>
  );
};