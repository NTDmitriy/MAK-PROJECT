import { Container } from "@/components/ui/container/Container";

import { DynamicSvg } from "@/components/ui/dynamicSvg/DynamicSvg";
import { Section } from "@/components/ui/section/Section";
import { BlockTitle } from "@/components/ui/titles/titleBlock/BlockTitle";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import { FC, PropsWithChildren } from "react";
import styles from "./HowWorksSites.module.css";
import clsx from "clsx";

export const HowWorksSites: FC<PropsWithChildren<IGenericElementProps>> = ({
  className,
  ...rest
}) => {
  return (
    <Section className={className} {...rest}>
      <BlockTitle leftSide={true}>Как мы работаем </BlockTitle>
      <Container>
        <div className={styles.card_container}>
          <div className={styles.card}>
            <div className={styles.card_content}>
              <DynamicSvg className={styles.icon} name="IconCheck" />
            <h3 className={styles.card_title}>Опыт и профессионализм</h3>
            </div>
            <ul className={styles.text_list}>
              <li className={styles.text}>
              Определение целей и задач сайта</li>
              <li className={styles.text}>
              Исследование целевой аудитории и конкурентов</li>
              <li className={styles.text}>
              Разработка технического задания</li>
            </ul>
          </div>
          <div className={styles.card}>
            <div className={styles.card_content}>
              <DynamicSvg className={styles.icon} name="IconCheck" />
            <h3 className={styles.card_title}>Дизайн и прототипирование</h3>
            </div>
            <ul className={styles.text_list}>
            <li className={styles.text}>
            Создание прототипов страниц</li>
              <li className={styles.text}>
              Разработка уникального дизайна</li>
              <li className={styles.text}>
              Согласование дизайна с клиентом</li>
            </ul>
          </div> <div className={styles.card}>
            <div className={styles.card_content}>
              <DynamicSvg className={styles.icon} name="IconCheck" />
            <h3 className={styles.card_title}>Разработка и тестирование</h3>
            </div>
            <ul className={styles.text_list}>
            <li className={styles.text}>
              Верстка сайта и подключение функционала</li>
              <li className={styles.text}>
              Тестирование на различных устройствах и браузерах</li>
              <li className={styles.text}>
              Оптимизация скорости загрузки сайта</li>
            </ul>
          </div> <div className={styles.card}>
            <div className={styles.card_content}>
              <DynamicSvg className={styles.icon} name="IconCheck" />
            <h3 className={styles.card_title}>Наполнение контентом</h3>
            </div>
            <ul className={styles.text_list}>
              <li className={styles.text}>
              Создание и размещение текстового и графического контента</li>
              <li className={styles.text}>
              Оптимизация контента для поисковых систем</li>
            </ul>
          </div>
        </div>
        <div className={styles.card}>
            <div className={styles.card_content}>
              <DynamicSvg className={styles.icon} name="IconCheck" />
            <h3 className={styles.card_title}>Запуск и поддержка</h3>
            </div>
            <ul className={clsx(`${styles.text_list} ${styles.text_list_big}`)}>
              <li className={clsx(`${styles.text} ${styles.text_big}`)}>
              Размещение сайта на хостинге</li>
              <li className={clsx(`${styles.text} ${styles.text_big}`)}>
              Инструкция для клиента по работе с системой управления сайтом</li>
              <li className={clsx(`${styles.text} ${styles.text_big}`)}>
              Обеспечение безопасности сайта</li>
              <li className={clsx(`${styles.text} ${styles.text_big}`)}>
              1 месяц бесплатной технической поддержки</li>
            </ul>
          </div>
      </Container>
    </Section>
  );
};
