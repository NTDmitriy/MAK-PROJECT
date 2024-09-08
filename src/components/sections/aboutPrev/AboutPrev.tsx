import { Container } from "@/components/ui/container/Container";
import { DynamicSvg } from "@/components/ui/dynamicSvg/DynamicSvg";
import { SeconderyLinkButton } from "@/components/ui/links/seconderyLinkButton/SeconderyLinkButton";
import { Section } from "@/components/ui/section/Section";
import { USEFUL_DASHBOARD_PAGES } from "@/config/url-config/useful-pages.config";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./AboutPrev.module.css";

export const AboutPrev: FC<PropsWithChildren<IGenericElementProps>> = ({
  className,
  ...rest
}) => {
  return (
    <Section>
      <Container>
        <div className={clsx(styles.content, className)} {...rest}>
          <div className={styles.descr}>
            <p className={styles.text}>
              Мы - digital маркетинговое агентство с многолетним и успешным
              опытом в оказании маркетинговых услуг. Наша миссия - помогать
              бизнесам{" "}
              <span className={styles.accent}>
                расти и достигать своих целей{" "}
              </span>{" "}
              в онлайн-пространстве
            </p>

            <SeconderyLinkButton href={USEFUL_DASHBOARD_PAGES.ABOUT.url} className={styles.link}> Подробнее о нас</SeconderyLinkButton>
          </div>
          <div className={styles.logo__wrapper}>
            <DynamicSvg name="IconHeroLogo" className={styles.logo} />
          </div>
        </div>
      </Container>
    </Section>
  );
};
