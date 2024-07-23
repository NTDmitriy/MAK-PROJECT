"use client";

import NavLinkDropdown from "@/components/ui/links/navLinkDropdown/NavLinkDropdown";
import { USEFUL_DASHBOARD } from "@/config/pages.config";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import { FC, PropsWithChildren, SyntheticEvent, useState } from "react";
import styles from "./UsefulMenu.module.css";

export const UsefulMenu: FC<PropsWithChildren<IGenericElementProps>> = ({
  children,
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
        <ul role="menu" className={styles.menu}>
          {USEFUL_DASHBOARD.map((useful, index) => (
            <li key={index}>
              <NavLinkDropdown
                onMouseEnter={(event) => handleChange(event, index)}
                href={useful.url}
                arrayRight={false}
              >
                {useful.icon({})}
                {useful.name}
              </NavLinkDropdown>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
