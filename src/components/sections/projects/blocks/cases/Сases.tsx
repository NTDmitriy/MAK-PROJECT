import { TCases } from "@/interfaces/types/pageTypes/products.type";
import clsx from "clsx";
import { FC } from "react";
import styles from "./Сases.module.css";

interface ICases {
  cases: TCases[];
}

export const Cases: FC<ICases> = ({ cases }) => {
  return (
    <div className={styles.cases}>
      {cases.map((item, index) => (
        <div
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
            <h3 className={clsx(styles.case__title)}>{item.title}</h3>
            <p className={clsx(styles.case__text)}>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
