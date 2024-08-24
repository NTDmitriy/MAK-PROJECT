"use client";

import { IGenericElementProps } from "@/interfaces/elements.interface";
import { TAccordionItem } from "@/interfaces/types/block/products.type";
import clsx from "clsx";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import { DynamicSvg } from "../dynamicSvg/DynamicSvg";
import styles from "./Accordion.module.css";

interface IAccordion extends IGenericElementProps {
  items: TAccordionItem[];
}

export const Accordion: FC<PropsWithChildren<IAccordion>> = ({
  items,
  className,
  ...rest
}) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(0);

  const handleOpenDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  useEffect(() => {
    if (items && items.length > 0) {
      setOpenDropdown(0);
    }
  }, [items]);

  return (
    <ul className={clsx(styles.content, className)} {...rest}>
      {items.map((item, index) => (
        <li
          key={index}
          className={styles.item}
          onClick={() => handleOpenDropdown(index)}
        >
          <h4 className={styles.title}>
            <span>{item.title}</span>
            <DynamicSvg
              name="IconFaq"
              className={clsx(
                styles.icon,
                openDropdown === index && styles.open
              )}
            />
          </h4>
          <div
            className={clsx(
              styles.descr,
              openDropdown === index && styles.open
            )}
          >
            <p>{item.descr}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
