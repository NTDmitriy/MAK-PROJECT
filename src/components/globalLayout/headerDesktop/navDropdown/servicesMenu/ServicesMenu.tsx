"use client";

import NavLinkDropdown from "@/components/ui/links/navLinkDropdown/NavLinkDropdown";
import { SERVISES_NAV_BAR_CONFIG } from "@/config/navbar.config";
import { DASHBOARD_PAGES } from "@/config/urlConfig/all-pages.config";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import clsx from 'clsx';
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
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <div {...rest} className={styles.content}>
        <ul role="tablist" className={styles.tablist}>
          {SERVISES_NAV_BAR_CONFIG.map((service, index) => (
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
							{service.icon({})}
                {service.name}
              </NavLinkDropdown>
            </li>
          ))}
        </ul>

        {SERVISES_NAV_BAR_CONFIG.map((service, index) => (
          <CustomTabPanel
            className={styles.tab__panel}
            key={index}
            value={value}
            index={index}
          >
            {service.childrens.map((child, childIndex) => (
              <Link
                href={`${DASHBOARD_PAGES.SERVICES.url}${child.url}` }
                key={childIndex}
                className={styles.tab__panel__item}
              >
                <img
                  src={`/images/${child.image}.png`}
                  alt={child.name}
                  title={child.name}
                />
                <div className={styles.item__descr__wrapper}>
                  <h3 className={styles.item__descr__title}>{child.name}</h3>
                  <p className={styles.item__descr__text}>
                    {child.description}
                  </p>
                </div>
              </Link>
            ))}
          </CustomTabPanel>
        ))}
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
