import { IGenericElementProps } from "@/interfaces/elements.interface";
import { TCase } from "@/interfaces/types/block/products.type";
import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";
import { DynamicSvg } from "../dynamicSvg/DynamicSvg";
import styles from "./CaseCard.module.css";

interface ICase extends IGenericElementProps {
  caseData: TCase;
}

export const CaseCard: FC<ICase> = ({ caseData, ...rest }) => {
  const { prevName, prevDescription, image, instruments, url } = caseData;
  return (
    <li className={clsx(styles.root)} {...rest}>
      <Link href={url} className={styles.link}>
        <ul className={styles.instruments}>
          {instruments.map((instrument, index) => (
            <li key={index} className={styles.instrument}>
              {instrument}
            </li>
          ))}
        </ul>
        <h3 className={styles.title}>{prevName}</h3>
        <p className={styles.descr}>{prevDescription}</p>
        <div className={styles.btn}>
            <DynamicSvg name="IconRightArray" />
        </div>

      </Link>
        <picture>
          <source
            srcSet={`/images/cases/${image}-small.webp`}
            media="(min-width: 768px) and (max-width: 1024px)"
          />
          <source
            srcSet={`/images/cases/${image}-small.webp`}
            media="(max-width: 576px)"
          />
          <img
            className={styles.img}
            src={`/images/cases/${image}-medium.webp`}
            alt={prevName}
            loading="lazy"
          />
        </picture>
    </li>
  );
};
