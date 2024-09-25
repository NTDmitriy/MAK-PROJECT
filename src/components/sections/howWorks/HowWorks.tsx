import { Container } from "@/components/ui/container/Container";
import { Section } from "@/components/ui/section/Section";
import { BlockTitle } from "@/components/ui/titles/titleBlock/BlockTitle";
import { TGenericElementProps } from "@/interfaces/elements.type";
import { THowWorks } from "@/interfaces/types/block/products.type";
import { FC, PropsWithChildren } from "react";
import styles from "./HowWorks.module.css";
interface IHowWorks extends TGenericElementProps {
  howWorksContent: THowWorks;
}

export const HowWorks: FC<PropsWithChildren<IHowWorks>> = ({
  className,
  howWorksContent,
  ...rest
}) => {
  const { items, blockTitle, blockTitleDescr } = howWorksContent;

  return (
    <Section className={className} {...rest}>
      <BlockTitle
        leftSide={true}
        descrBottom={<>{blockTitleDescr && blockTitleDescr}</>}
      >
        {blockTitle ? blockTitle : "Как мы работаем"}
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
