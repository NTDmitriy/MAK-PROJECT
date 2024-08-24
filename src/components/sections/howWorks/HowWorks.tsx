import { Container } from "@/components/ui/container/Container";
import { Section } from "@/components/ui/section/Section";
import { BlockTitle } from "@/components/ui/titles/titleBlock/BlockTitle";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import { FC, PropsWithChildren } from "react";
import styles from "./HowWorks.module.css";

export const HowWorks: FC<PropsWithChildren<IGenericElementProps>> = ({
  className,
  ...rest
}) => {
  return (
    <Section className={className} {...rest}>
      <BlockTitle leftSide={true}>Как мы работаем</BlockTitle>
      <Container>
        <div className={styles.card_container}>
          <div className={styles.card}>
            <div className={styles.title_container}>
              <span className={styles.after}>01</span>
              <h3 className={styles.title}>Проведение аудита</h3>
            </div>
            <p className={styles.text}>
              Оцениваем текущую маркетинговую стратегию и выявляем ключевые
              области для улучшения.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.title_container}>
              <span className={styles.after}>02</span>
              <h3 className={styles.title}>Разработка плана</h3>
            </div>
            <p className={styles.text}>
              Создаем индивидуальный план продвижения, учитывая уникальные
              особенности вашего медицинского учреждения.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.title_container}>
              <span className={styles.after}>03</span>
              <h3 className={styles.title}>Реализация стратегии</h3>
            </div>
            <p className={styles.text}>
              Внедряем разработанные решения и постоянно адаптируем их для
              достижения максимальной эффективности.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.title_container}>
              <span className={styles.after}>04</span>
              <h3 className={styles.title}>Мониторинг и отчетность</h3>
            </div>
            <p className={styles.text}>
              Проводим регулярный мониторинг результатов и предоставляем
              подробные отчеты, чтобы вы всегда были в курсе успехов кампаний.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};
