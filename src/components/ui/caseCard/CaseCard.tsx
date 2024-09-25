import { TGenericElementProps } from "@/interfaces/elements.type";
import { TCase } from "@/interfaces/types/block/products.type";
import Link from "next/link";
import { FC } from "react";
import { DynamicSvg } from "../dynamicSvg/DynamicSvg";
import styles from "./CaseCard.module.css";

interface ICase extends TGenericElementProps {
  caseData: TCase;
}

export const CaseCard: FC<ICase> = ({ caseData, ...rest }) => {
  const { prevName, prevDescription, image, categories, url } = caseData;
  return (
    <li className={styles.root} {...rest}>
        <ul className={styles.categories}>
          {categories.map((category, index) => (
            <li key={index} className={styles.category}>
              {category}
            </li>
          ))}
        </ul>
        <h3 className={styles.title}>{prevName}</h3>
        <p className={styles.descr}>{prevDescription}</p>
        <Link href={url} className={styles.btn}>
            <DynamicSvg name="IconRightArray" />
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
