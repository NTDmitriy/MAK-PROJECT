import { Container } from "@/components/ui/container/Container";
import { Section } from "@/components/ui/section/Section";
import { BlockTitle } from "@/components/ui/titles/titleBlock/BlockTitle";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import clsx from "clsx";
import { FC } from "react";
import styles from "./Reviwes.module.css";

interface IReviwes extends IGenericElementProps {
  reviwes?: Record<string, unknown>;
}

export const Reviwes: FC<IReviwes> = ({ className, reviwes, ...rest }) => {
  return (
    <Section {...rest} className={clsx(className, styles.reviwes__section)} style={{marginTop: '100px'}}>
      <Container>
        <BlockTitle
          leftSide={true}
          descrSideway="Отзывы и оценки от наших клиентов "
          background="ОТЗЫВЫ"
					className={styles.reviwes__title}
        >
          Что говорят наши клиенты
        </BlockTitle>

				
      </Container>
    </Section>
  );
};
