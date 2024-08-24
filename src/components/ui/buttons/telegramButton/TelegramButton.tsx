import { IButton } from "@/interfaces/button.interface";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

import { DynamicSvg } from "../../dynamicSvg/DynamicSvg";
import styles from "./TelegramButton.module.css";

export const TelegramButton: FC<PropsWithChildren<IButton>> = ({
  className,
  ...rest
}) => {
  return (
    <button className={clsx(styles.button, className)} {...rest}>
      <DynamicSvg name="IconTelegramBlue" /> Telegram
    </button>
  );
};
