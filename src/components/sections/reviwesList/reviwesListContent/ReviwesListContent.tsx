"use client";

import { PrimaryButton } from "@/components/ui/buttons/primaryButton/PrimaryButton";
import { Container } from "@/components/ui/container/Container";
import { Reviwe } from "@/components/ui/review/Reviwe";
import { Section } from "@/components/ui/section/Section";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import { TReviwe } from "@/interfaces/types/block/products.type";
import { FC, PropsWithChildren, useState } from "react";
import { FORM_TYPE, FormController } from "../../../ui/forms/FormController";
import styles from "./ReviwesListContent.module.css";

interface IReviwesListContent extends IGenericElementProps {
  reviwes: TReviwe[];
}

export const ReviwesListContent: FC<PropsWithChildren<IReviwesListContent>> = ({
  className,
  reviwes,
  ...rest
}) => {
  const initialReviwsToShow = 6;
  const [reviwsToShow, setReviewsToShow] = useState(initialReviwsToShow);

  const handleShowMore = () => {
    setReviewsToShow((prev) => prev + initialReviwsToShow);
  };

  const displayedReviews = reviwes.slice(0, reviwsToShow);

  return (
    <>
      {reviwes && reviwes.length > 0 && (
        <Section className={className} {...rest}>
          <Container>
            <div className={styles.root}>
              <ul className={styles.list}>
                {displayedReviews.map((review, index) => (
                  <Reviwe key={index} reviwe={review} />
                ))}
              </ul>

              {reviwsToShow < reviwes.length && (
                <div className={styles.button__wrapper}>
                  <PrimaryButton
                    onClick={handleShowMore}
                    className={styles.more__btn}
                  >
                    Показать еще
                  </PrimaryButton>
                </div>
              )}

              <FormController formType={FORM_TYPE.MAIN_FORM} />
            </div>
          </Container>
        </Section>
      )}
    </>
  );
};
