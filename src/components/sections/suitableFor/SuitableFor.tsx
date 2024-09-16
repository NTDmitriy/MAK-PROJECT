import { Container } from "@/components/ui/container/Container";
import { Section } from "@/components/ui/section/Section";
import { BlockTitle } from "@/components/ui/titles/titleBlock/BlockTitle";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import { TSuitableFor } from "@/interfaces/types/block/products.type";
import { FC, PropsWithChildren } from "react";
import styles from "./SuitableFor.module.css";

interface ISuitableFor extends IGenericElementProps {
  suitableForContent: TSuitableFor;
}

export const SuitableFor: FC<PropsWithChildren<ISuitableFor>> = ({
  className,
  suitableForContent,
  ...rest
}) => {
  const { items, title } = suitableForContent;

  return (
    <Section className={className} {...rest}>
      <BlockTitle leftSide={true}>
        {title ? <>{title}</> : "Кому подойдет редизайн и доработка"}
      </BlockTitle>
      <Container>
        <ul className={styles.card_container}>
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
      </Container>
    </Section>
  );
};
