import { IGenericElementProps } from "@/interfaces/elements.interface";
import { TCases } from "@/interfaces/types/block/products.type";
import clsx from "clsx";
import { FC } from "react";

import { DynamicSvg } from "@/components/ui/dynamicSvg/DynamicSvg";
import { PrimaryLinkButton } from "@/components/ui/links/primaryLinkButton/PrimaryLinkButton";
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
              loading="lazy"
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
            <div className={styles.btn__wrapper}>
              <PrimaryLinkButton href={`/cases${item.url}`}>
                <span className={clsx(styles.btn__text, styles.inner)}>
                  Смотреть кейс
                </span>
                <DynamicSvg
                  name="IconRightArray"
                  className={styles.btn__icon}
                />
              </PrimaryLinkButton>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
