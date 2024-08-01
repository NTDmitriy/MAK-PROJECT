"use client";

import NavLinkDropdown from "@/components/ui/links/navLinkDropdown/NavLinkDropdown";
import { DASHBOARD_PAGES } from "@/config/urlConfig/all-pages.config";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import clsx from "clsx";
import Link from "next/link";
import {
	FC,
	PropsWithChildren,
	ReactNode,
	SyntheticEvent,
	useState,
} from "react";
import styles from "./ServicesMenu.module.css";

export const ServicesMenu: FC<PropsWithChildren<IGenericElementProps>> = ({
  className,
  ...rest
}) => {
  const [value, setValue] = useState<number | null>(null);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <div {...rest} className={styles.content}>
        <ul role="tablist" className={styles.tablist}>
          {DASHBOARD_PAGES.SERVICES.childrens.map((service, index) => (
            <li key={index}>
              <NavLinkDropdown
                role="tab"
                id={`simple-tab-${index}`}
                aria-controls={`simple-tabpanel-${index}`}
                aria-selected={value === index}
                onMouseEnter={(event) => handleChange(event, index)}
                href={service.url}
                arrayRight={true}
                isActive={value === index ? true : false}
              >
                <service.icon />
                {service.name}
              </NavLinkDropdown>
            </li>
          ))}
        </ul>
        {value !== null && (
          <>
            {DASHBOARD_PAGES.SERVICES.childrens.map((service, index) => (
              <CustomTabPanel
                className={styles.tab__panel}
                key={index}
                value={value}
                index={index}
              >
                {service.childrens.map((child, childIndex) => (
                  <Link
                    href={`${DASHBOARD_PAGES.SERVICES.url}${child.url}`}
                    key={childIndex}
                    className={styles.tab__panel__item}
                  >
                    <img
                      src={`/images/${child.image}.jpg`}
                      alt={child.name}
                      title={child.name}
                    />
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
              </CustomTabPanel>
            ))}
          </>
        )}
      </div>
    </>
  );
};

interface ITabPanelProps {
  children?: ReactNode;
  className?: string;
  index: number;
  value: number;
}

const CustomTabPanel = (props: ITabPanelProps) => {
  const { children, value, index, className, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className={clsx(className)}
      {...other}
    >
      {value === index && <>{children} </>}
    </div>
  );
};
