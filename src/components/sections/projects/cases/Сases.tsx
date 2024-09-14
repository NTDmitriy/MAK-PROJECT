import { IGenericElementProps } from "@/interfaces/elements.interface";
import { TCases } from "@/interfaces/types/block/products.type";
import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";

import { DynamicSvg } from "@/components/ui/dynamicSvg/DynamicSvg";
import styles from "./Сases.module.css";

interface ICases extends IGenericElementProps {
  cases: TCases[];
}

export const Cases: FC<ICases> = ({ cases }) => {
  return (
    <ul className={styles.cases}>
      {cases.map((item, index) => (
        <li
          key={index}
          className={clsx(styles.case, styles[`case${index + 1}`])}
        >
          <picture>
            <source
              srcSet={`/images/cases/${item.image}-360x400.webp`}
              media="(max-width: 1024px)"
            />
            <source srcSet={`/images/cases/${item.image}.webp`} />
            <img
              className={styles.img}
              src={`/images/cases/${item.image}.jpg`}
              alt={item.name}
            />
          </picture>

          <div className={clsx(styles.case__descr)}>
            <div className={styles.instruments}>
              {item.instruments.map((instrument, index) => (
                <p key={index} className={styles.instrument}>
                  {instrument}
                </p>
              ))}
            </div>
            <h3 className={clsx(styles.case__title)}>{item.name}</h3>
            <p className={clsx(styles.case__text)}>{item.description}</p>

            <Link href={`/cases${item.url}`} className={styles.btn}>
              <span className={styles.btn__text}>Смотреть кейс</span>
              <DynamicSvg name="IconRightArray" className={styles.btn__icon} />
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};
