import { Container } from "@/components/ui/container/Container";
import {
  FORM_TYPE,
  FormController,
} from "@/components/ui/forms/FormController";
import { Section } from "@/components/ui/section/Section";
import { BlockTitle } from "@/components/ui/titles/titleBlock/BlockTitle";
import { TGenericElementProps } from "@/typing/elements.type";
import { TCase } from "@/typing/products.type";
import { FC, PropsWithChildren } from "react";
import styles from "./Cases.module.css";
import { CaseList } from "./casesList/СasesList";

interface IProjects extends TGenericElementProps {
  cases: TCase[];
  formVisible?: boolean;
  isPrev?: boolean;
}

export const Cases: FC<PropsWithChildren<IProjects>> = ({
  className,
  cases,
  formVisible = false,
  isPrev = true,
  ...rest
}) => {
  return (
    <>
      {cases && cases.length > 0 && (
        <Section {...rest}>
          {isPrev && (
            <BlockTitle
              leftSide={false}
              descrSideway="Примеры кейсов и результатов, которых мы достигли для наших клиентов"
            >
              Наши проекты
            </BlockTitle>
          )}

          <Container>
            <div className={styles.root}>
              <CaseList cases={cases} isPrev={isPrev} />
              {formVisible && <FormController formType={FORM_TYPE.MAIN_FORM} />}
            </div>
          </Container>
        </Section>
      )}
    </>
  );
};
