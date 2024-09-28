import { Container } from "@/components/ui/container/Container";
import {
  FORM_TYPE,
  FormController,
} from "@/components/ui/forms/FormController";
import { Popup } from "@/components/ui/modals/popup/Popup";
import { Section } from "@/components/ui/section/Section";
import { TGenericElementProps } from "@/typing/elements.type";
import { TVacancies } from "@/typing/products.type";
import { FC, PropsWithChildren } from "react";
import { SeconderyButton } from "../../ui/buttons/seconderyButton/SeconderyButton";
import { DynamicSvg } from "../../ui/dynamicSvg/DynamicSvg";
import { BlockTitle } from "../../ui/titles/titleBlock/BlockTitle";
import styles from "./Vacancies.module.css";

interface IVacancies extends TGenericElementProps {
  vacancies: TVacancies;
}

export const Vacancies: FC<PropsWithChildren<IVacancies>> = ({ vacancies }) => {
  const { blockTitle, formText, formTitle, items } = vacancies;
  return (
    <>
      {vacancies && (
        <Section>
          <BlockTitle leftSide={true}>
            {blockTitle ? blockTitle : "Актуальные вакансии"}
          </BlockTitle>
          <Container>
            <ul className={styles.list}>
              {items.map((item, index) => (
                <li key={index} className={styles.item}>
                  <div className={styles.head}>
                    <div className={styles.head__item}>
                      <h6 className={styles.position}>
                        {item.position && item.position}
                      </h6>
                      <p className={styles.employment}>
                        {item.employment && item.employment}
                      </p>
                    </div>
                    <div className={styles.head__item}>
                      <p className={styles.payroll}>
                        <DynamicSvg name="IconMoney" />
                        {item.payroll?.min &&
                          item.payroll.min.toLocaleString("ru-RU")}
                        {item.payroll?.min && item.payroll?.max && <> - </>}
                        {item.payroll?.max &&
                          item.payroll.max.toLocaleString("ru-RU")}{" "}
                        &#8381;
                      </p>
                    </div>
                  </div>
                  <div className={styles.descr}>
                    {item.description && item.description}
                  </div>
                  <div className={styles.bottom}>
                    <ul className={styles.skills}>
                      {item.skills &&
                        item.skills.map((item, index) => (
                          <li key={index} className={styles.skill}>
                            <DynamicSvg name="IconVacancies" /> {item}
                          </li>
                        ))}
                    </ul>
                    <div className={styles.btn__wrapper}>
                      <Popup
                        initComponent={
                          <SeconderyButton>Откликнуться</SeconderyButton>
                        }
                        contentComponent={
                          <FormController
                            formType={FORM_TYPE.COMPLEX_FORM}
                            title={
                              formTitle
                                ? formTitle
                                : `ОТКЛИКНУТЬСЯ НА ВАКАНСИЮ «${item.position}»`
                            }
                            text={formText && formText}
                          />
                        }
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      )}
    </>
  );
};
