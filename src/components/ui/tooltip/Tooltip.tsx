import { DynamicSvg } from "@/components/ui/dynamicSvg/DynamicSvg";
import { IButton } from "@/interfaces/button.interface";
import clsx from "clsx";
import { FC, PropsWithChildren, ReactNode } from "react";
import styles from "./Tooltip.module.css";

interface ITooltip extends IButton {
  text?: string | ReactNode;
}

export const Tooltip: FC<PropsWithChildren<ITooltip>> = ({
  text,
  className,
}) => {
  return (
    <span className={clsx(styles.wrapper, className)}>
      <button className={styles.button}>
        <DynamicSvg name="IconTooltip" />
      </button>
      <span className={styles.text}>{text}</span>
    </span>
  );
};
