import { DASHBOARD_PAGES } from "@/config/url-config/all-pages.config";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import clsx from "clsx";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import { DynamicSvg } from "../../../ui/dynamicSvg/DynamicSvg";
import styles from "./HeaderMobile.module.css";
import { BottomNavigation } from "./bottomNavigation/BottomNavigation";

export const HeaderMobile: FC<PropsWithChildren<IGenericElementProps>> = ({
  className,
  ...rest
}) => {
  return (
    <div {...rest} className={clsx(styles.header, className)}>
      <Link className={styles.button} href={DASHBOARD_PAGES.HOME.url}>
        <DynamicSvg name="IconHomeNav"  />
      </Link>

			<DynamicSvg name="IconLogo"  />
      <button className={styles.button}>Обсудить проект</button>

      <BottomNavigation />
    </div>
  );
};
