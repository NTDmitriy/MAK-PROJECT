import { DynamicSvg, TSvgMapKeys } from "@/components/ui/dynamicSvg/DynamicSvg";
import { DASHBOARD_PAGES, IDashboardItem } from "@/config/url-config/all-pages.config";
import { TGenericElementProps } from "@/interfaces/elements.type";
import clsx from "clsx";
import Link from "next/link";
import { FC, PropsWithChildren, SyntheticEvent, useState } from "react";
import DropdownLink from "../dropdownLink/DropdownLink";
import styles from "./DropdownMenu.module.css";

interface IDropdownMenu extends TGenericElementProps {
  page: IDashboardItem;
}

export const DropdownMenu: FC<PropsWithChildren<IDropdownMenu>> = ({
  page,
  className,
  ...rest
}) => {
  const [value, setValue] = useState<number | null>(0);
  const { childrens, url } = page;
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const isServices = url === DASHBOARD_PAGES.SERVICES.url;

  return (
    <>
      <div {...rest} className={styles.content}>
        <ul className={styles.tablist} key={"menu"}>
          {childrens &&
            childrens.map((item, index) => (
              <li key={index}>
                <DropdownLink
                  onMouseEnter={(event) => handleChange(event, index)}
                  href={item.url}
                  arrayRight={isServices}
                  isActive={value === index && isServices ? true : false}
                >
                  {item.icon && (
                    <DynamicSvg
                      name={item.icon as TSvgMapKeys}
                      className={styles.icon}
                    />
                  )}
                  {item.name && item.name}
                </DropdownLink>
              </li>
            ))}
        </ul>


        <div className={styles.tab__panels}>
          {childrens &&
            isServices &&
            childrens.map((item, index) => (
              <div
                className={clsx(
                  styles.tab__panel,
                  value === index && styles.active
                )}
                key={index}
              >
                <div className={styles.tab__panel__content}>
                  {item.childrens &&
                    item.childrens.map((child, childIndex) => (
                      <Link
                        href={child.url}
                        key={childIndex}
                        className={styles.tab__panel__item}
                      >
                        <picture>
                          <source
                            srcSet={`/images/${child.icon}.webp`}
                            type="image/webp"
                            media="(min-width: 1025px)"
                          />
                          <img
                            src={`/images/1x1.webp`}
                            alt={child.name}
                            title={child.name}
                            loading="lazy"
                          />
                        </picture>
                        <div className={styles.item__descr__wrapper}>
                          <h3 className={styles.item__descr__title}>
                            {child.name}
                          </h3>
                          <p className={styles.item__descr__text}>
                            {child.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
