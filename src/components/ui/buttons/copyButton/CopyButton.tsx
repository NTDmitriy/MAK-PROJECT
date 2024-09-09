"use client";

import { useNotification } from "@/hooks/useNotification";
import { IButton } from "@/interfaces/button.interface";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import { DynamicSvg } from "../../dynamicSvg/DynamicSvg";
import styles from "./CopyButton.module.css";

interface ICopyButton extends IButton {
  text: string;
}

const copyTextToClipboard = async (text: any) => {
  try {
    await navigator.clipboard.writeText(text);
    useNotification("Текст скопирован в буфер обмена", "default");
  } catch (err) {
    console.error("Ошибка:", err);
  }
};

export const CopyButton: FC<PropsWithChildren<ICopyButton>> = ({
  text,
  className,
}) => {
  return (
    <button
      className={clsx(styles.btn, className)}
      onClick={() => copyTextToClipboard(text)}
    >
      <DynamicSvg name="CopyIcon" />
    </button>
  );
};
