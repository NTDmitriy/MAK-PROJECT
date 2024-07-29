import { Section } from "@/components/ui/section/Section";
import { BlockTitle } from "@/components/ui/titles/titleBlock/BlockTitle";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import clsx from "clsx";
import { FC } from "react";

import { Container } from "@/components/ui/container/Container";
import { TReviwe } from "@/interfaces/types/pageTypes/products.type";
import styles from "./Reviwes.module.css";
import { Slider } from "./Slider/Slider";

export interface IReviwes extends IGenericElementProps {
  reviwes: TReviwe[];
}

export const Reviwes: FC<IReviwes> = ({ className, reviwes, ...rest }) => {
  return (
    <>
      {reviwes && (
        <Section
          {...rest}
          className={clsx(styles.reviwes__section, className)}
          style={{ marginTop: "100px"}}
        >
          <Container>
            <BlockTitle
              leftSide={true}
              descrSideway="Отзывы и оценки от наших клиентов"
              background="ОТЗЫВЫ"
              className={styles.reviwes__title}
            >
              Что говорят наши клиенты
            </BlockTitle>
          </Container>

          <Slider reviwes={reviwes} />
        </Section>
      )}
    </>
  );
};
