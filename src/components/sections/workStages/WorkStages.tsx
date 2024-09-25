import { Container } from "@/components/ui/container/Container";
import { DynamicSvg } from "@/components/ui/dynamicSvg/DynamicSvg";
import { Section } from "@/components/ui/section/Section";
import { BlockTitle } from "@/components/ui/titles/titleBlock/BlockTitle";
import { TGenericElementProps } from "@/interfaces/elements.type";
import { TWorkStages } from "@/interfaces/types/block/products.type";
import { FC, PropsWithChildren } from "react";
import styles from "./WorkStages.module.css";

interface IWorkStages extends TGenericElementProps {
  workStagesContent: TWorkStages;
}

export const WorkStages: FC<PropsWithChildren<IWorkStages>> = ({
  workStagesContent,
  className,
  ...rest
}) => {
  const { title, items } = workStagesContent;

  return (
    <Section className={className} {...rest}>
      <BlockTitle leftSide={true}>
        {title ? title : "Как мы работаем"}
      </BlockTitle>
      <Container>
        <ul className={styles.list}>
          {items &&
            items.map((item, index) => (
              <li key={index} className={styles.item}>
                <div className={styles.title__wrapper}>
                  <DynamicSvg className={styles.icon} name="IconCheck" />
                  <h4 className={styles.title}>{item.stage}</h4>
                </div>
                <ul className={styles.item_list}>
                  {item.descr.map((item, index) => (
                    <li key={index} className={styles.text}>{item && item}</li>
                  ))}
                </ul>
              </li>
            ))}
        </ul>
      </Container>
    </Section>
  );
};
