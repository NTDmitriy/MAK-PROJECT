"use client";

import { SeconderyButton } from "@/components/ui/buttons/seconderyButton/SeconderyButton";
import { CaseCard } from "@/components/ui/caseCard/CaseCard";
import { SeconderyLinkButton } from "@/components/ui/links/seconderyLinkButton/SeconderyLinkButton";
import { DASHBOARD_PAGES } from "@/config/url-config/all-pages.config";
import { TGenericElementProps } from "@/interfaces/elements.type";
import { TCase } from "@/interfaces/types/block/products.type";
import { FC, useState } from "react";
import styles from "./СasesList.module.css";

interface ICases extends TGenericElementProps {
  cases: TCase[];
  isPrev?: boolean;
}

export const CaseList: FC<ICases> = ({ cases, isPrev = true, ...rest }) => {
  const initialCasesToShow = 6;
  const [casesToShow, setCasesToShow] = useState(initialCasesToShow);

  const handleShowMore = () => {
    setCasesToShow((prev) => prev + initialCasesToShow);
  };

  const displayedCases = isPrev
    ? cases
        .toReversed()
        .filter((caseItem) => caseItem.isGlobal)
        .slice(0, 6)
    : cases.toReversed().slice(0, casesToShow);

  return (
    <>
      <div className={styles.root} {...rest}>
        <ul className={styles.list}>
          {displayedCases.map((item, index) => (
            <CaseCard key={index} caseData={item} />
          ))}
        </ul>

        <div className={styles.button__wrapper}>
          {isPrev && (
            <SeconderyLinkButton href={DASHBOARD_PAGES.CASES.url}>
              Все кейсы
            </SeconderyLinkButton>
          )}
          {!isPrev && casesToShow < cases.length && (
            <div className={styles.button__wrapper}>
              <SeconderyButton onClick={handleShowMore}>
                Показать еще
              </SeconderyButton>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
