import { Section } from "@/components/ui/section/Section";
import { BlockTitle } from "@/components/ui/titles/titleBlock/BlockTitle";
import { TGenericElementProps } from "@/typing/elements.type";
import { TReviwe } from "@/typing/products.type";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./ReviwesSlider.module.css";
import { Slider } from "./slider/Slider";


export interface IReviwesSlider extends TGenericElementProps {
  reviwes: TReviwe[];
}

export const Reviwes: FC<PropsWithChildren<IReviwesSlider>> = ({
  className,
  reviwes,
  ...rest
}) => {
  return (
    <>
      {reviwes && (
        <Section {...rest} className={clsx(styles.reviwes, styles.inner)}>
          <BlockTitle
            leftSide={true}
            descrSideway={
              <span className={styles.black}>
                Отзывы и оценки от наших клиентов{" "}
              </span>
            }
            background="ОТЗЫВЫ"
            bgLessVisibility={true}
            className={styles.reviwes__title}
          >
            Что говорят наши клиенты
          </BlockTitle>
          <Slider reviwes={reviwes} />
        </Section>
      )}
    </>
  );
};
