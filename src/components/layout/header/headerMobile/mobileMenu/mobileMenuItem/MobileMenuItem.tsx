import { DynamicSvg, TSvgMapKeys } from "@/components/ui/dynamicSvg/DynamicSvg";
import { IDashboardItem } from "@/dashboard/app.dashboard";
import { useMobileMenu } from "@/store/mobile-menu.store";
import { TGenericElementProps } from "@/typing/elements.type";
import clsx from "clsx";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import { MobileMenu } from "../MobileMenu";
import { MobileMenuAccordion } from "../mobileMenuAccordion/MobileMenuAccordion";
import { SubButton } from "../subButton/SubButton";
import styles from "./MobileMenuItem.module.css";

interface IMobileMenuItem extends TGenericElementProps {
  page: IDashboardItem;
  isSubMenuItem?: boolean;
  index: number;
}

export const MobileMenuItem: FC<PropsWithChildren<IMobileMenuItem>> = ({
  page,
  className,
  isSubMenuItem,
  index,
  ...rest
}) => {
  const { name, childrens, icon, url } = page;
  const isServices = url.includes('services')

  const subMenuTrigger = url === "/useful" || url === "/services";
  const { dropdownIndex, setDropdownIndex, handleClose } = useMobileMenu();
  const handleOpenDropdown = (index: number) => {
    setDropdownIndex(dropdownIndex === index ? null! : index);
  };

  return (
    <>
      {page && (
        <li className={clsx(styles.menu__item, className)} {...rest}>
          <div className={styles.link__wrapper}>
            <Link href={url} className={styles.link} onClick={handleClose}>
              {icon && (
                <DynamicSvg
                  name={icon as TSvgMapKeys}
                  className={styles.icon}
                />
              )}

              <span className={styles.page__name}>{name}</span>
            </Link>
            {childrens && !isSubMenuItem && subMenuTrigger && (
              <MobileMenu pages={childrens} menuName={name} isSubMenu={true}>
                <SubButton shadowBtn={true}>
                  <DynamicSvg name="IconRightArray" />
                </SubButton>
              </MobileMenu>
            )}

            {childrens && isSubMenuItem && isServices && (
              <SubButton
                shadowBtn={true}
                onClick={() => handleOpenDropdown(index)}
              >
                <DynamicSvg
                  name="IconRightArray"
                  className={clsx(
                    styles.svg,
                    dropdownIndex === index && styles.open
                  )}
                />
              </SubButton>
            )}
          </div>

          {childrens && isSubMenuItem && isServices && (
            <>
              <MobileMenuAccordion
                isOpen={dropdownIndex === index}
                page={page}
              />
            </>
          )}
        </li>
      )}
    </>
  );
};
