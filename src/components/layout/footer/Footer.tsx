import { Container } from "@/components/ui/container/Container";
import { DynamicSvg } from "@/components/ui/dynamicSvg/DynamicSvg";
import {
  FORM_TYPE,
  FormController,
} from "@/components/ui/forms/FormController";
import { SocialLink } from "@/components/ui/links/socialLink/SocialLink";
import { CONTACTS_PUBLIC } from "@/config/contact.config";
import { DASHBOARD_PAGES } from "@/config/url-config/all-pages.config";
import { TGenericElementProps } from "@/interfaces/elements.type";
import clsx from "clsx";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import styles from "./Footer.module.css";

export const Footer: FC<PropsWithChildren<TGenericElementProps>> = ({
  className,
  ...rest
}) => {
  const services = DASHBOARD_PAGES.SERVICES;
  const { childrens } = services;
  const getCurrentYear = () => new Date().getFullYear();

  return (
    <footer className={clsx(styles.footer, className)} {...rest}>
      <Container>
        <div className={styles.footer__content}>
          <div className={styles.head}>
            <div className={styles.head__item}>
              <div className={styles.logo__wrapper}>
                <DynamicSvg name="IconLogo" className={styles.logo} />
                Make All Perfect
              </div>
              <p className={styles.logo__descr}>
                <span className={styles.accent}>Ваш надежный партнер</span> в мире
                digital&nbsp;маркетинга
              </p>
            </div>
            <div className={clsx(styles.head__item, styles.social__item)}>
              <div className={styles.head__social}>
                <FormController formType={FORM_TYPE.SING_UP_FORM} />
                <div className={styles.social__btns}>
                  <SocialLink
                    className={styles.btn}
                    icon={<DynamicSvg name="IconTelegram" />}
                    href={CONTACTS_PUBLIC.TELEGRAM_PUBLIC}
                  />
                  <SocialLink
                    className={styles.btn}
                    icon={<DynamicSvg name="IconVk" />}
                    href={CONTACTS_PUBLIC.VK}
                  />
                  <SocialLink
                    className={styles.btn}
                    icon={<DynamicSvg name="IconDzen" />}
                    href={CONTACTS_PUBLIC.DZEN}
                  />
                </div>
              </div>
              <div className={styles.head__social__text}>
                Подписывайтесь! Мы отправляем только полезные письма – кейсы,
                собственные разработки в digital, лайфхаки при работе с
                агентством, анонсы вебинаров и конференций
              </div>
            </div>
            <div className={clsx(styles.head__item, styles.contact__item)}>
              <div className={styles.contact__wrapper}>
                <a
                  className={styles.contact__link}
                  href={`tel:${CONTACTS_PUBLIC.PHONE}`}
                >
                  <DynamicSvg name="IconPhone" />
                  <span>{CONTACTS_PUBLIC.PHONE}</span>
                </a>
                <a
                  className={styles.contact__link}
                  href={`mailto:${CONTACTS_PUBLIC.EMAIL}`}
                >
                  <DynamicSvg name="IconEMailTransparent" />
                  <span>{CONTACTS_PUBLIC.EMAIL}</span>
                </a>

              </div>
            </div>
          </div>
          {childrens && (
            <nav className={styles.nav}>
              <ul className={styles.nav__list}>
                {childrens.map((service, index) => (
                  <li className={styles.nav__item} key={index}>
                    <Link
                      className={styles.nav__head__link}
                      href={`${service.url}`}
                    >
                      {service.name}
                    </Link>

                    <ul className={styles.service__list}>
                      {service.childrens &&
                        service.childrens.map((subService, index) => (
                          <li key={index} className={styles.service__item}>
                            <Link
                              className={styles.footer__link}
                              href={`${subService.url}`}
                            >
                              <span>{subService.smallName}</span>
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <div className={styles.lower__block}>
            <div
              className={clsx(styles.lower__block__item, styles.copy__block)}
            >
              <p className={styles.copy}>
                {getCurrentYear()} © all rights reserved
              </p>
              <div className={styles.ducument__links}>
                <a
                  className={clsx(styles.footer__link, styles.ducument__link)}
                  href={`/privacy-policy.pdf`}
                  target="_blank"
                >
                  <span>Политика конфиденциальности</span>
                </a>
                <a
                  className={clsx(styles.footer__link, styles.ducument__link)}
                  href='/sitemap'
                  target="_blank"
                >
                  <span>Карта сайта</span>
                </a>
              </div>
            </div>
            <div className={styles.lower__block__item}>
              <address className={clsx(styles.legal__entry__info)}>
                <div>
                  <p>
                    {CONTACTS_PUBLIC.LEGAL_ENTRY_TYPE}{" "}
                    {CONTACTS_PUBLIC.LEGAL_ENTRY}
                  </p>
                  <p>ОГРН: {CONTACTS_PUBLIC.OGRN} </p>
                  <p>ИНН: {CONTACTS_PUBLIC.INN} </p>
                </div>
                <p className={styles.location}>{CONTACTS_PUBLIC.ADDRESS}</p>
              </address>
              <p className={styles.small__descr}>
                Данный сайт носит информационно-справочный характер и не
                является публичной офертой
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
