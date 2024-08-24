import { Container } from "@/components/ui/container/Container";
import { Section } from "@/components/ui/section/Section";
import { BlockTitle } from "@/components/ui/titles/titleBlock/BlockTitle";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import { TCases } from "@/interfaces/types/block/products.type";
import { FC, PropsWithChildren } from "react";
import { Cases } from "./cases/Сases";

interface IProjects extends IGenericElementProps {
  cases: TCases[];
}

export const Projects: FC<PropsWithChildren<IProjects>> = ({
  className,
  cases,
  ...rest
}) => {
  return (
    <Section {...rest}>
      <BlockTitle
        leftSide={true}
        descrSideway="Примеры кейсов и результатов, которых мы достигли для наших клиентов"
      >
        Наши проекты
      </BlockTitle>
      <Container>{cases && <Cases cases={cases} />}</Container>
    </Section>
  );
};
