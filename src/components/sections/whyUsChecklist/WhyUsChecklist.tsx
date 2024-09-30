import { Container } from "@/components/ui/container/Container";
import { Section } from "@/components/ui/section/Section";
import { BlockTitle } from "@/components/ui/titles/titleBlock/BlockTitle";
import { FC } from "react";
import { DynamicSvg } from "../../ui/dynamicSvg/DynamicSvg";
import styles from "./WhyUsChecklist.module.css";

const whyUsServicesArr = [
  "Опытная команда специалистов",
  "Индивидуальный подход к каждому проекту",
  "Прозрачность и честность",
  "Использование современных решений",
  "Высокая эффективность и результативность",
  "Ежедневная отчетность и подробная аналитика",
];

export const WhyUsChecklist: FC = () => {
  return (
    <Section>
      <BlockTitle leftSide={false}>
      Почему рекламу доверяют нам
      </BlockTitle>
      <Container>
        <ul className={styles.list}>
          {whyUsServicesArr.map((item, index) => (
            <li key={index} className={styles.item}>
              <DynamicSvg name="IconCheck" className={styles.icon} />

              <h3 className={styles.title}>{item}</h3>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
};
