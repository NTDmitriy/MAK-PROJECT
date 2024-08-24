import { PrimaryButton } from "@/components/ui/buttons/primaryButton/PrimaryButton";
import { SeconderyButton } from "@/components/ui/buttons/seconderyButton/SeconderyButton";
import { Container } from "@/components/ui/container/Container";
import { Section } from "@/components/ui/section/Section";
import { BlockTitle } from "@/components/ui/titles/titleBlock/BlockTitle";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import { TDetialServices } from "@/interfaces/types/block/products.type";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./DetailServices.module.css";

interface IDetailServices extends IGenericElementProps {
  detailContent: TDetialServices;
}

export const DetailServices: FC<PropsWithChildren<IDetailServices>> = ({
  className,
  detailContent,
  ...rest
}) => {
  const { title, services } = detailContent;
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
                      alt="Онлайн-школы и инфобизнес"
                    />
                  </li>
                ))}
              </ul>

              <div className={styles.sticky}>
                <h5 className={styles.sticky__title}>

                  ОБРАТИТЕ ВНИМАНИЕ!
                </h5>
                <p className={styles.sticky__text}>
                  Мы предлагаем как полный комплекс услуг по продвижению вашей
                  онлайн-школы, так и отдельные решения по вашему выбору. Вы
                  можете выбрать только те услуги, которые вам необходимы, или
                  воспользоваться нашим полным пакетом для максимальной
                  эффективности.
                </p>
                <SeconderyButton className={clsx(styles.sticky__button, styles.inner)}>Выбрать услугу</SeconderyButton>
                <PrimaryButton>Заказать комплекс услуг</PrimaryButton>
              </div>
            </div>
          </Container>
        </Section>
      )}
    </>
  );
};
