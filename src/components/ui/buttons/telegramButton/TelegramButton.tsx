"use client";

import { IButton } from "@/interfaces/button.interface";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./SeconderyButton.module.css";

export const SeconderyButton: FC<PropsWithChildren<IButton>> = ({
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
