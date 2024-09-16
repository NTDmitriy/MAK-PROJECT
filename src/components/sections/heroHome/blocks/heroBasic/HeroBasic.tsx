import { SeconderyButton } from "@/components/ui/buttons/seconderyButton/SeconderyButton";
import { Container } from "@/components/ui/container/Container";
import {
  FORM_TYPE,
  FormController,
} from "@/components/ui/forms/FormController";
import { PrimaryLinkButton } from "@/components/ui/links/primaryLinkButton/PrimaryLinkButton";
import { Popup } from "@/components/ui/modals/popup/Popup";
import { CONTACTS_PUBLIC } from "@/config/contact.config";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./HeroBasic.module.css";

export const HeroBasic: FC<PropsWithChildren<IGenericElementProps>> = () => {
  return (
    <div className={styles.content}>
      <Container className={styles.hero__container}>
        <div className={styles.left__side}>
          <div className={styles.title__wrapper}>
            <p className={clsx(styles.title, styles.absolute)}>
              <span className={styles.opacity}>М</span>
              <span className={styles.small__text}>AKE ALL PERFECT</span>{" "}
              <span className={styles.opacity}>
                аркетинговое агентство полного цикла
              </span>
            </p>
            <h1 className={clsx(styles.title)}>
              Маркетинговое <span className={styles.accent}>агентство</span>{" "}
              полного&nbsp;цикла
            </h1>
          </div>
          <p className={styles.descr}>
          Полный цикл маркетинговых услуг: от настройки рекламы до SEO-продвижения и создания сайтов. Ваш надежный партнер в мире digital маркетинга. Доверьтесь нам и наблюдайте за ростом своего бизнеса.
          </p>
          <div className={styles.btn_grop}>
            <Popup
              initComponent={
                <SeconderyButton className={styles.button}>
                  Заказать звонок
                </SeconderyButton>
              }
              contentComponent={
                <FormController
                  formType={FORM_TYPE.COMPLEX_FORM}
                  title="Свяжитесь с нами"
                />
              }
            />

            <PrimaryLinkButton
              href={CONTACTS_PUBLIC.TELEGRAM}
              target="_blank"
              className={styles.button__tg}
            >
              Связаться через Telegram
            </PrimaryLinkButton>
          </div>
        </div>

        <div className={styles.face__wrapper}>
          <picture>
          <source
            srcSet={`/images/faces/grafov-hero-360x360.webp`}
            media="(max-width: 768px)"
          />
            <img
              className={styles.face__img}
              src={`/images/faces/grafov-hero-560x560.webp`}
              alt="Дмитрий Графов"
              loading="lazy"
            />
          </picture>
          <div className={styles.face__descr}>
            <p className={styles.name}>Дмитрий Графов</p>
            <p className={styles.position}>
              Основатель <span className={styles.accent}>Make All Perfect</span>
            </p>
          </div>
        </div>
      </Container>
      <p className={styles.background__text__top}>MAKE</p>
      <div className={styles.img__wrapper}>
        <picture>
          <source
            srcSet={`/images/home-hero-295x191.webp`}
            media="(max-width: 768px)"
          />
          <img
            className={styles.img}
            src={`/images/home-hero-1360x870.webp`}
            alt="Маркетинговое агенство полного цикла"
            loading="lazy"
          />
        </picture>
        <p className={styles.background__text__bot}>ALL PERFECT</p>
      </div>
    </div>
  );
};
