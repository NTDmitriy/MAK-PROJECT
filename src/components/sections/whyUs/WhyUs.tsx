import { Container } from "@/components/ui/container/Container";

import { DynamicSvg } from "@/components/ui/dynamicSvg/DynamicSvg";
import { Section } from "@/components/ui/section/Section";
import { BlockTitle } from "@/components/ui/titles/titleBlock/BlockTitle";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import { FC, PropsWithChildren } from "react";
import styles from "./WhyUs.module.css";

export const WhyUs: FC<PropsWithChildren<IGenericElementProps>> = ({
  className,
  ...rest
}) => {
  return (
    <Section className={className} {...rest}>
      <BlockTitle leftSide={false}>Почему нас выбирают</BlockTitle>
      <Container>
        <div className={styles.card_container}>
          <div className={styles.card}>
            <DynamicSvg className={styles.icon} name="IconCheck" />
            <h3 className={styles.card_title}>Опыт и профессионализм</h3>
            <p className={styles.card_text}>
              Наши специалисты{" "}
              <span className="accent"> имеют богатый опыт работы</span> с
              онлайн-школами и знают, как достичь максимальных результатов.
            </p>
          </div>
          <div className={styles.card}>
            <DynamicSvg className={styles.icon} name="IconCheck" />
            <h3 className={styles.card_title}>Индивидуальный подход</h3>
            <p className={styles.card_text}>
              Мы разрабатываем{" "}
              <span className="accent"> уникальные стратегии</span> для каждого
              клиента, учитывая все особенности и потребности бизнеса.
            </p>
          </div>
          <div className={styles.card}>
            <DynamicSvg className={styles.icon} name="IconCheck" />
            <h3 className={styles.card_title}>Прозрачность и отчетность</h3>
            <p className={styles.card_text}>
              <span className="accent"> Вы всегда будете в курсе</span> того,
              как идут дела с вашими кампаниями, благодаря регулярным отчетам и
              открытой коммуникации.
            </p>
          </div>
          <div className={styles.card}>
            <DynamicSvg className={styles.icon} name="IconCheck" />
            <h3 className={styles.card_title}>Комплексный подход</h3>
            <p className={styles.card_text}>
              Мы охватываем{" "}
              <span className="accent"> все аспекты интернет-маркетинга</span>,
              чтобы обеспечить всестороннее продвижение вашей онлайн-школы.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};
