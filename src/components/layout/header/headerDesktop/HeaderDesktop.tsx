import { IconLogo } from "@/components/ui/icons/genericIcons/IconLogo";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./HeaderDesktop.module.css";
import { DesktopBtnGroup } from "./desktopBtnGroup/DesktopBtnGroup";
import { DesktopNav } from "./desktopNav/DesktopNav";

export const HeaderDesktop: FC<PropsWithChildren<IGenericElementProps>> = ({
  className,
  ...rest
}) => {

  return (
    <div {...rest} className={clsx(styles.desktop, className)}>
      <DesktopNav />
      <div className={styles.logo}>
        <IconLogo />
      </div>
      <DesktopBtnGroup />
    </div>
  );
};
