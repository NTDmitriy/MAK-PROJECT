import { DynamicSvg } from "@/components/ui/dynamicSvg/DynamicSvg";
import { IDashboardItem } from "@/config/url-config/all-pages.config";
import { TGenericElementProps } from "@/interfaces/elements.type";
import { FC, PropsWithChildren } from "react";
import { DesktopNavDropdown } from "../desktopNavDropdown/DesktopNavDropdown";
import DesktopNavLink from "../desktopNavLink/DesktopNavLink";
import styles from "./DesktopNavItem.module.css";

interface IDesktopNavItem extends TGenericElementProps {
  page: IDashboardItem;
}

export const DesktopNavItem: FC<PropsWithChildren<IDesktopNavItem>> = ({
  className,
  page,
  ...rest
}) => {
  const { name, url, childrens } = page;

  const dropDownTrigger = url === "/useful" || url === "/services";

  return (
    <li {...rest} className={className}>
      {!dropDownTrigger && (
        <DesktopNavLink href={url}>
          {url === "/" ? (
            <DynamicSvg name="IconHomeNav" width="22px" height="22px" />
          ) : (
            name
          )}
        </DesktopNavLink>
      )}

      {childrens && dropDownTrigger && (
        <DesktopNavDropdown centered={url === "/services"} page={page}>
          <DesktopNavLink href={url}>
            {name} <DynamicSvg name="IconDownArray" />
            {url === "/useful" && (
              <DynamicSvg name="IconUsefulBellNav" className={styles.bell} />
            )}
          </DesktopNavLink>
        </DesktopNavDropdown>
      )}
    </li>
  );
};
