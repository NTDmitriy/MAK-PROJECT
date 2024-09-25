import { Container } from "@/components/ui/container/Container";
import { PrimaryLinkButton } from "@/components/ui/links/primaryLinkButton/PrimaryLinkButton";
import { Section } from "@/components/ui/section/Section";
import { USEFUL_DASHBOARD_PAGES } from "@/config/url-config/useful-pages.config";
import { TGenericElementProps } from "@/interfaces/elements.type";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import { BlockTitle } from "../../ui/titles/titleBlock/BlockTitle";
import styles from "./VacanciesPrev.module.css";

export const VacanciesPrev: FC<PropsWithChildren<TGenericElementProps>> = ({
  className,
  ...rest
}) => {
  return (
    <Section>
      <BlockTitle
        leftSide={true}
        descrSideway="Make All Perfect — это целый мир возможностей, где можно зарабатывать деньги благодаря своей смекалке и трудолюбию. "
      >
        Наши вакансии
      </BlockTitle>
      <Container>
        <div className={clsx(styles.content, className)} {...rest}>
          <div className={styles.descr}>
            <p className={styles.text}>
              Ищете новые возможности для профессионального развития?{" "}
            </p>
            <p className={styles.text}>
              В Make All Perfect мы всегда рады талантливым и амбициозным людям,
              которые готовы расти и достигать новых высот. Мы предлагаем
              интересные задачи, возможность работы с ведущими брендами
              и проектами, а также поддержку и развитие в динамичной и дружной
              команде.
            </p>
            <div className={styles.btn__wrapper}>
              <PrimaryLinkButton
                className={styles.btn}
                href={USEFUL_DASHBOARD_PAGES.VACANCIES.url}
              >
                Узнать о вакансиях
              </PrimaryLinkButton>
            </div>
          </div>
          <img
            className={styles.img}
            src="/images/vacancies-prev.webp"
            alt="Вакансии Make All Perfect"
          />
        </div>
      </Container>
    </Section>
  );
};
