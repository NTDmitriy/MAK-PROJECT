import { Container } from "@/components/ui/container/Container";
import { Section } from "@/components/ui/section/Section";
import { BlockTitle } from "@/components/ui/titles/titleBlock/BlockTitle";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import { TCases } from "@/interfaces/types/pageTypes/products.type";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./Projects.module.css";
import { Cases } from "./blocks/cases/Сases";

interface ICases extends IGenericElementProps {
  cases: TCases[];
}

export const Projects: FC<PropsWithChildren<ICases>> = ({
  className,
  cases,
  ...rest
}) => {
  return (
    <Section
      {...rest}
      className={clsx(styles.hero, className)}
      style={{ padding: "100px 0 0 0" }}
    >
      <Container>
        <BlockTitle
          leftSide={true}
          descrSideway="Примеры кейсов и результатов, которых мы достигли для наших клиентов"
        >
          Наши проекты
        </BlockTitle>
        {cases && <Cases cases={cases} />}
      </Container>
    </Section>
  );
};
