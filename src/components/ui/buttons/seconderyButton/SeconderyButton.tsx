import { TButton } from "@/interfaces/button.type";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./SeconderyButton.module.css";

export const SeconderyButton: FC<PropsWithChildren<TButton>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <button className={clsx(styles.button, className)} {...rest}>
      {children}
    </button>
  );
};
