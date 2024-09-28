import { Container } from "@/components/ui/container/Container";
import { DynamicSvg } from "@/components/ui/dynamicSvg/DynamicSvg";
import { SocialLink } from "@/components/ui/links/socialLink/SocialLink";
import { Section } from "@/components/ui/section/Section";
import { IBlogItem } from "@/content/all-blog/all-blog.content";
import { CONTACTS_PUBLIC } from "@/content/contacts.data";
import { TGenericElementProps } from "@/typing/elements.type";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./BlogHero.module.css";

interface IBlogHero extends TGenericElementProps {
  heroContent: IBlogItem;
}

export const BlogHero: FC<PropsWithChildren<IBlogHero>> = ({ heroContent }) => {
  const { name, date, time, author, thems } = heroContent;
  return (
    <Section>
      <Container>
        <div className={styles.root}>
          <div className={styles.head}>
            {thems && thems.length > 0 && (
              <ul className={styles.thems}>
                {thems.map((theme, index) => (
                  <li key={index} className={styles.theme}>
                    {theme}
                  </li>
                ))}
              </ul>
            )}
            {date && (
              <p className={clsx(styles.info, styles.date)}>
                <DynamicSvg name="IconCalendar" />
                {date}
              </p>
            )}
          </div>
          <h1 className={styles.title}> {name} </h1>
          {(time || author) && (
            <div className={styles.info__wrapper}>
              {time && (
                <p className={styles.info}>
                  <DynamicSvg name="IconClock" />
                  {time}
                </p>
              )}
              {author && (
                <p className={styles.info}>
                  <DynamicSvg name="IconHuman" />
                  {author}
                </p>
              )}
            </div>
          )}
          <div className={styles.bottom}>
            <p className={styles.text}>
              Подпишитесь и читайте ещё больше полезных статей и свежих новостей
            </p>
            <div className={styles.btn__group}>
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
        </div>
      </Container>
    </Section>
  );
};