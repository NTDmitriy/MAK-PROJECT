"use client";

import { TButton } from "@/interfaces/button.type";
import clsx from "clsx";
import { FC, PropsWithChildren, ReactNode } from "react";
import { DynamicSvg } from "../dynamicSvg/DynamicSvg";
import styles from "./Tooltip.module.css";

interface ITooltip extends TButton {
  text?: string | ReactNode;
  side?: "left" | "right";
}
export const MyTooltip: FC<PropsWithChildren<ITooltip>> = ({
  text,
  className,
  side = 'left',
}) => {
  return (
    <>
      <span className={clsx(styles.wrapper, className)}>
        <button className={styles.button}>
          <DynamicSvg name="IconTooltip" />
        </button>
        <span
          className={clsx(
            styles.tooltip,
            side === "right" ? styles.tooltip__right : styles.tooltip__left,
          )}
        >
          {text}
        </span>
      </span>
    </>
  );
};
