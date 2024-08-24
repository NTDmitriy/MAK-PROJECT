import { DynamicSvg } from "@/components/ui/dynamicSvg/DynamicSvg";
import { IDashboardItem } from "@/config/url-config/all-pages.config";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import { FC, PropsWithChildren } from "react";
import { DesktopNavDropdown } from "../desktopNavDropdown/DesktopNavDropdown";
import DesktopNavLink from "../desktopNavLink/DesktopNavLink";
import styles from "./DesktopNavItem.module.css";

interface IDesktopNavItem extends IGenericElementProps {
  page: IDashboardItem;
}

export const DesktopNavItem: FC<PropsWithChildren<IDesktopNavItem>> = ({
  className,
  page,
  ...rest
}) => {
  const { name, url, childrens } = page;

  return (
    <li {...rest} className={className}>
      {!childrens && (
        <DesktopNavLink href={url}>
          {url === "/" ? (
            <DynamicSvg name="IconHomeNav" width="22px" height="22px" />
          ) : (
            name
          )}
        </DesktopNavLink>
      )}

      {childrens && (
        <DesktopNavDropdown
          centered={url === "/services"}
          page={page}
        >
          <DesktopNavLink href={url} >
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
