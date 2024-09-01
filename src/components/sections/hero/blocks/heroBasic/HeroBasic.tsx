import { SeconderyButton } from "@/components/ui/buttons/seconderyButton/SeconderyButton";
import { Container } from "@/components/ui/container/Container";
import {
  FORM_TYPE,
  FormController,
} from "@/components/ui/forms/FormController";
import { PrimaryLinkButton } from "@/components/ui/links/primaryLinkButton/PrimaryLinkButton";
import { Popup } from "@/components/ui/modals/popup/Popup";
import { CONTACTS_PUBLIC } from "@/config/contact.config";
import { THeroBasic } from "@/interfaces/types/block/products.type";
import { FC } from "react";
import styles from "./HeroBasic.module.css";

interface IHeroBasic {
  basicContent: THeroBasic;
}

export const HeroBasic: FC<IHeroBasic> = ({ basicContent }) => {
  const { title, description, image } = basicContent;

  return (
    <Container className={styles.hero__container}>
      <h1 className={styles.title}>
        {title.accentText && title.accentOrder === 0 ? (
          <>
            <span className={styles.accent}>{title.accentText}</span>{" "}
            <span>{title.text}</span>
          </>
        ) : (
          <>
            <span>{title.text}</span>{" "}
            {title.accentText && (
              <span className={styles.accent}>{title.accentText}</span>
            )}
          </>
        )}
      </h1>
      <p className={styles.descr}>{description}</p>
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
      <div className={styles.img__wrapper}>
        <picture>
          <source
            srcSet={`/images/services/${image}-295x191.webp`}
            media="(max-width: 1024px)"
          />
          <img
            className={styles.img}
            src={`/images/services/${image}-1360x870.webp`}
          />
        </picture>
      </div>
    </Container>
  );
};
