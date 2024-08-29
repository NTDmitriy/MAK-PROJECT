import { Accordion } from "@/components/ui/accordion/Accordion";
import { Container } from "@/components/ui/container/Container";
import {
	FORM_TYPE,
	FormController,
} from "@/components/ui/forms/FormController";
import { Section } from "@/components/ui/section/Section";
import { BlockTitle } from "@/components/ui/titles/titleBlock/BlockTitle";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import { TAccordionItem } from "@/interfaces/types/block/products.type";
import { FC, PropsWithChildren } from "react";
import styles from "./Faq.module.css";

interface IFaq extends IGenericElementProps {
  faq: TAccordionItem[];
}

const Faq: FC<PropsWithChildren<IFaq>> = ({ faq }) => {
  return (
    <>
      {faq && faq.length > 0 && (
        <Section>
          <BlockTitle
            leftSide={false}
            descrSideway="Ответы на самые распространенные вопросы наших клиентов"
            background="FAq"
          >
            Часто задаваемые вопросы
          </BlockTitle>
          <Container>
            <div className={styles.container}>
              <Accordion items={faq} />
              <div className={styles.form}>
                <FormController
                  formType={FORM_TYPE.FAQ_FORM}
                  areaVisible={true}
                />
              </div>
            </div>
          </Container>
        </Section>
      )}
    </>
  );
};

export default Faq;
