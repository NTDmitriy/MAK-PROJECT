import { Container } from "@/components/ui/container/Container";
import {
    FORM_TYPE,
    FormController,
} from "@/components/ui/forms/FormController";
import { Section } from "@/components/ui/section/Section";
import { BlockTitle } from "@/components/ui/titles/titleBlock/BlockTitle";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import { TCases } from "@/interfaces/types/block/products.type";
import { FC, PropsWithChildren } from "react";
import { Cases } from "./cases/Сases";
import styles from "./Projects.module.css";
interface IProjects extends IGenericElementProps {
  cases: TCases[];
  formVisible?: boolean;
}

export const Projects: FC<PropsWithChildren<IProjects>> = ({
  className,
  cases,
  formVisible,
  ...rest
}) => {
  return (
    <Section {...rest}>
      <BlockTitle
        leftSide={false}
        descrSideway="Примеры кейсов и результатов, которых мы достигли для наших клиентов"
      >
        Наши проекты
      </BlockTitle>
      <Container>
        <div className={styles.root}>
          {cases && <Cases cases={cases} />}
          {formVisible && <FormController formType={FORM_TYPE.MAIN_FORM} />}
        </div>
      </Container>
    </Section>
  );
};
