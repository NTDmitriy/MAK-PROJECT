import { Breadcrumbs } from "@/components/ui/breadcrumbs/Breadcrumbs";
import { CopyButton } from "@/components/ui/buttons/copyButton/CopyButton";
import { Container } from "@/components/ui/container/Container";
import { DynamicSvg } from "@/components/ui/dynamicSvg/DynamicSvg";
import {
  FORM_TYPE,
  FormController,
} from "@/components/ui/forms/FormController";
import { SocialLink } from "@/components/ui/links/socialLink/SocialLink";
import { Section } from "@/components/ui/section/Section";
import { CONTACTS_PUBLIC } from "@/content/contacts.data";
import { DASHBOARD_PAGES } from "@/dashboard/app.dashboard";
import { TGenericElementProps } from "@/typing/elements.type";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./Contacts.module.css";

export const Contacts: FC<PropsWithChildren<TGenericElementProps>> = (
  props
) => {
  return (
    <Section {...props} className={clsx(styles.contacts, props.className)}>
      <Container>
      <Breadcrumbs pathname={DASHBOARD_PAGES.CONTACTS.url} />
        <div className={styles.content}>
          <address className={styles.cards_wrapper}>
          <div className={styles.card}>
              <h1 className={styles.title}>НАШИ КОНТАКТЫ</h1>
              <div className={styles.text__wrapper}>
                <a
                  className={clsx(styles.link)}
                  href={`mailto:${CONTACTS_PUBLIC.EMAIL}`}
                >
                  <DynamicSvg name="IconEMail" className={styles.svg} />
                  <span>{CONTACTS_PUBLIC.EMAIL}</span>
                </a>

                <CopyButton text={CONTACTS_PUBLIC.EMAIL} />
              </div>
              <div className={styles.text__wrapper}>
                <a
                  className={clsx(styles.link)}
                  href={`tel:${CONTACTS_PUBLIC.PHONE}`}
                >
                  <DynamicSvg name="IconPhone" className={styles.svg} />
                  <span>{CONTACTS_PUBLIC.PHONE}</span>
                </a>

                <CopyButton text={CONTACTS_PUBLIC.PHONE} />
              </div>
              <p className={clsx(styles.text, styles.text_nopointer)}>
                <DynamicSvg name="IconDeadline" className={styles.svg} />
                Пн-Пт, с 9:00 до 18:00 (МСК)
              </p>
            </div>
            <div className={styles.card}>
              <h2 className={styles.title}>Реквизиты</h2>
              <div className={styles.text__wrapper}>
                <p className={styles.text}>
                  <span className={styles.accent}>Юр. лицо:</span>{" "}
                  {CONTACTS_PUBLIC.LEGAL_ENTRY_TYPE}{" "}
                  {CONTACTS_PUBLIC.LEGAL_ENTRY}
                </p>
                <CopyButton
                  text={`${CONTACTS_PUBLIC.LEGAL_ENTRY_TYPE} ${CONTACTS_PUBLIC.LEGAL_ENTRY}`}
                />
              </div>

              <div className={styles.text__wrapper}>
                <p className={styles.text}>
                  <span className={styles.accent}>ОГРН:</span>{" "}
                  {CONTACTS_PUBLIC.OGRN}
                </p>
                <CopyButton text={CONTACTS_PUBLIC.OGRN} />
              </div>
              <div className={styles.text__wrapper}>
                <p className={styles.text}>
                  <span className={styles.accent}>ИНН:</span>{" "}
                  {CONTACTS_PUBLIC.INN}
                </p>
                <CopyButton text={CONTACTS_PUBLIC.INN} />
              </div>
              {CONTACTS_PUBLIC.ADDRESS && (
                <div className={styles.text__wrapper}>
                  <p className={styles.text}>
                    <span className={styles.accent}>Адрес:</span>{" "}
                    {CONTACTS_PUBLIC.ADDRESS}
                  </p>
                  <CopyButton text={CONTACTS_PUBLIC.ADDRESS} />
                </div>
              )}
            </div>

      

            <div className={styles.card}>
              <h2 className={styles.title}>СОЦИАЛЬНЫЕ СЕТИ</h2>
              <div className={styles.social__btns}>
                <SocialLink
                  className={clsx(styles.btn, styles.inner)}
                  icon={<DynamicSvg name="IconTelegram" />}
                  href={CONTACTS_PUBLIC.TELEGRAM_PUBLIC}
                />
                <SocialLink
                  className={clsx(styles.btn, styles.inner)}
                  icon={<DynamicSvg name="IconVk" />}
                  href={CONTACTS_PUBLIC.VK}
                />
                <SocialLink
                  className={clsx(styles.btn, styles.inner)}
                  icon={<DynamicSvg name="IconDzen" />}
                  href={CONTACTS_PUBLIC.DZEN}
                />
              </div>
            </div>
          </address>

          <div className={styles.form}>
            <FormController
              formType={FORM_TYPE.FAQ_FORM}
              areaVisible={true}
              title="Есть вопросы? Мы поможем!"
              text="Задайте свой вопрос в поле ниже, и наш менеджер свяжется с вами в ближайшее время, чтобы предоставить подробный и развернутый ответ."
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};
