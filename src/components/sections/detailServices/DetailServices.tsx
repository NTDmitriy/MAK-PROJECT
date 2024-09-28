import { PrimaryButton } from "@/components/ui/buttons/primaryButton/PrimaryButton";
import { SeconderyButton } from "@/components/ui/buttons/seconderyButton/SeconderyButton";
import { Container } from "@/components/ui/container/Container";
import {
  FORM_TYPE,
  FormController,
} from "@/components/ui/forms/FormController";
import { Popup } from "@/components/ui/modals/popup/Popup";
import { Section } from "@/components/ui/section/Section";
import { BlockTitle } from "@/components/ui/titles/titleBlock/BlockTitle";
import { TGenericElementProps } from "@/typing/elements.type";
import { TDetialServices } from "@/typing/products.type";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./DetailServices.module.css";

interface IDetailServices extends TGenericElementProps {
  detailContent: TDetialServices;
}

export const DetailServices: FC<PropsWithChildren<IDetailServices>> = ({
  className,
  detailContent,
  ...rest
}) => {
  const { title, services } = detailContent;

  const subServicesArray = services.map((service) => service.title);

  return (
    <>
      {services && services.length > 0 && (
        <Section className={className} {...rest}>
          <BlockTitle leftSide={true}>{title}</BlockTitle>
          <Container>
            <div className={styles.content}>
              <ul className={styles.list}>
                {services.map((service, index) => (
                  <li key={index} className={styles.item}>
                    <div className={styles.descr}>
                      <h4 className={styles.title}>{service.title}</h4>
                      <p className={styles.text}>{service.description}</p>
                    </div>

                    <img
                      className={styles.img}
                      src={`/images/services/${service.image}.webp`}
                      alt={service.title}
                    />
                  </li>
                ))}
              </ul>

              <div className={styles.sticky}>
                <h5 className={styles.sticky__title}>ОБРАТИТЕ ВНИМАНИЕ!</h5>
                <p className={styles.sticky__text}>
                Мы предлагаем как полный комплекс услуг по продвижению вашего бизнеса, так и отдельные решения по вашему выбору. Вы можете выбрать только те услуги, которые вам необходимы, или воспользоваться нашим полным пакетом для максимальной эффективности.
                </p>

                <Popup
                  initComponent={
                    <SeconderyButton
                      className={clsx(styles.sticky__button, styles.inner)}
                    >
                      Выбрать услугу
                    </SeconderyButton>
                  }
                  contentComponent={
                    <FormController
                      formType={FORM_TYPE.STEP_FORM}
                      subServices={subServicesArray}
                    />
                  }
                />
                <Popup
                  initComponent={
                    <PrimaryButton>Заказать комплекс услуг</PrimaryButton>
                  }
                  contentComponent={
                    <FormController formType={FORM_TYPE.COMPLEX_FORM} />
                  }
                />
              </div>
            </div>
          </Container>
        </Section>
      )}
    </>
  );
};
