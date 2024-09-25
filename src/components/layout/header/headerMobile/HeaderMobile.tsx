import { FORM_TYPE, FormController } from "@/components/ui/forms/FormController";
import { Popup } from "@/components/ui/modals/popup/Popup";
import { DASHBOARD_PAGES } from "@/config/url-config/all-pages.config";
import { TGenericElementProps } from "@/interfaces/elements.type";
import clsx from "clsx";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import { DynamicSvg } from "../../../ui/dynamicSvg/DynamicSvg";
import styles from "./HeaderMobile.module.css";
import { BottomNavigation } from "./bottomNavigation/BottomNavigation";

export const HeaderMobile: FC<PropsWithChildren<TGenericElementProps>> = ({
  className,
  ...rest
}) => {
  return (
    <div {...rest} className={clsx(styles.header, className)}>
      <Link className={styles.button} href={DASHBOARD_PAGES.HOME.url}>
        <DynamicSvg name="IconHomeNav" />
      </Link>

      <DynamicSvg name="IconLogo" />

      <Popup
        initComponent={
          <button className={styles.button}>Обсудить проект</button>
        }
        contentComponent={<FormController formType={FORM_TYPE.MAIN_FORM} />}
      />

      <BottomNavigation />
    </div>
  );
};
