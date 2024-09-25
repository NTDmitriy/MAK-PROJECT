import { TGenericElementProps } from "@/interfaces/elements.type";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import { DynamicSvg } from "../../../ui/dynamicSvg/DynamicSvg";
import styles from "./HeaderDesktop.module.css";
import { DesktopBtnGroup } from "./desktopBtnGroup/DesktopBtnGroup";
import { DesktopNav } from "./desktopNav/DesktopNav";

export const HeaderDesktop: FC<PropsWithChildren<TGenericElementProps>> = ({
  className,
  ...rest
}) => {
  return (
    <div {...rest} className={clsx(styles.header, className)}>
      <DesktopNav />
      <div className={styles.logo}>
        <DynamicSvg name="IconLogo" />
      </div>
      <DesktopBtnGroup />
    </div>
  );
};
