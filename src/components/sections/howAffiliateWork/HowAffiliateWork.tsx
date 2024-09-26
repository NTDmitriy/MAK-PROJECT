import { Container } from "@/components/ui/container/Container";
import { Section } from "@/components/ui/section/Section";
import { BlockTitle } from "@/components/ui/titles/titleBlock/BlockTitle";
import { TGenericElementProps } from "@/typing/elements.type";
import { THowWorks } from "@/typing/products.type";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./HowAffiliateWork.module.css";

interface IhowAffiliateWork extends TGenericElementProps {
  howAffiliateWorkContent: THowWorks;
}

export const HowAffiliateWork: FC<PropsWithChildren<IhowAffiliateWork>> = ({
  className,
  howAffiliateWorkContent,
  ...rest
}) => {
  const { items, blockTitle, blockTitleDescr } = howAffiliateWorkContent;

  return (
    <Section className={className} {...rest}>
      <BlockTitle
        leftSide={true}
        descrBottom={<>{blockTitleDescr && blockTitleDescr}</>}
      >
        {blockTitle ? blockTitle : "Как мы работаем"}
      </BlockTitle>
      <Container>
        <ul className={styles.list}>
          {items &&
            items.map((item, index) => (
              <li key={index} className={styles.card}>
                <div className={styles.title_container}>
                  <span className={styles.after}>0{index + 1}</span>
                  <h3 className={styles.title}>{item.title && item.title}</h3>
                </div>
                <p className={styles.text}>{item.descr && item.descr}</p>
              </li>
            ))}
        </ul>
        <div className={styles.descr}>
          <p className={styles.title__question}>Что получают ваши клиенты?</p>
          <p className={clsx(styles.text, styles.response)}>
            Ваши клиенты получают качественные услуги и бесплатную консультацию.
            Мы предлагаем широкий спектр маркетинговых услуг
          </p>
        </div>
      </Container>
    </Section>
  );
};
