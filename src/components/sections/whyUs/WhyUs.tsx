import { Container } from "@/components/ui/container/Container";
import { DynamicSvg } from "@/components/ui/dynamicSvg/DynamicSvg";
import { Section } from "@/components/ui/section/Section";
import { BlockTitle } from "@/components/ui/titles/titleBlock/BlockTitle";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import { TWhyUs } from "@/interfaces/types/block/products.type";
import { FC, PropsWithChildren } from "react";
import styles from "./WhyUs.module.css";

interface IWhyUs extends IGenericElementProps {
  whyUsContent: TWhyUs;
}

export const WhyUs: FC<PropsWithChildren<IWhyUs>> = ({
  className,
  whyUsContent,
  ...rest
}) => {
  const { items, blockTitle, blockTitleDescr } = whyUsContent;

  return (
    <Section className={className} {...rest}>
      <BlockTitle
        leftSide={false}
        descrBottom={<>{blockTitleDescr && blockTitleDescr}</>}
      >
        {blockTitle ? <>{blockTitle}</> : "Почему нас выбирают"}
      </BlockTitle>
      <Container>
        <ul className={styles.list}>
          {items &&
            items.map((item, index) => (
              <li key={index} className={styles.card}>
                <DynamicSvg className={styles.icon} name="IconCheck" />
                <h3 className={styles.card_title}>
                  {item.title && item.title}
                </h3>
                <p className={styles.card_text}>
                  {item.descrBefore && item.descrBefore}
                  <span className={styles.accent}>
                    {item.descrAccent && <> {item.descrAccent}</>}
                  </span>
                  {item.descrAfter && <> {item.descrAfter}</>}
                </p>
              </li>
            ))}
        </ul>
      </Container>
    </Section>
  );
};
