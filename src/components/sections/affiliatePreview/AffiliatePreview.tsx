import { Container } from "@/components/ui/container/Container";
import { Section } from "@/components/ui/section/Section";
import { BlockTitle } from "@/components/ui/titles/titleBlock/BlockTitle";
import { USEFUL_DASHBOARD_PAGES } from "@/config/url-config/useful-pages.config";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import { FC, PropsWithChildren } from "react";
import { DynamicSvg } from "../../ui/dynamicSvg/DynamicSvg";
import { PrimaryLinkButton } from "../../ui/links/primaryLinkButton/PrimaryLinkButton";
import styles from "./AffiliatePreview.module.css";

export const AffiliatePreview: FC<PropsWithChildren<IGenericElementProps>> = ({
  className,
  ...rest
}) => {
  return (
    <Section className={className} {...rest}>
      <BlockTitle leftSide={false} background="ПАРТНЕРЫ">
        Наша партнерская программа
      </BlockTitle>
      <Container>
        <div className={styles.content}>
          <h3 className={styles.title}>
            <span className="accent">Присоединяйтесь</span> к нашей партнерской
            программе <span className="accent"> и зарабатывайте</span>,
            рекомендуя наши услуги.
          </h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <DynamicSvg className={styles.icon} name="IconCheck" />
              Уникальные условия сотрудничества
            </li>
            <li className={styles.item}>
              <DynamicSvg className={styles.icon} name="IconCheck" />
              Высокие ежемесячные комиссионные
            </li>
            <li className={styles.item}>
              <DynamicSvg className={styles.icon} name="IconCheck" />
              Поддержка на каждом этапе
            </li>
          </ul>

          <div className={styles.btn__wrap}>
            <PrimaryLinkButton href={USEFUL_DASHBOARD_PAGES.PARTNERS.url}>
              Узнать подробнее
            </PrimaryLinkButton>
          </div>
        </div>
      </Container>
    </Section>
  );
};
