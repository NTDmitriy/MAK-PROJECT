import { IButton } from "@/interfaces/button.interface";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./PrimaryButton.module.css";

export const PrimaryButton: FC<PropsWithChildren<IButton>> = ({
  children,
  className,
  ...rest
}) => {
  return ( <>
    <button className={clsx(styles.button, className)} {...rest}>
      {children}
    </button>
	</>
  );
};
