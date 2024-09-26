import { Container } from "@/components/ui/container/Container";
import { Section } from "@/components/ui/section/Section";
import { BlockTitle } from "@/components/ui/titles/titleBlock/BlockTitle";
import { TGenericElementProps } from "@/typing/elements.type";
import { FC, PropsWithChildren } from "react";
import styles from "./whyUsSites.module.css";

export const WhyUsSites: FC<PropsWithChildren<TGenericElementProps>> = ({
  className,
  ...rest
}) => {
  return (
    <Section className={className} {...rest}>
      <BlockTitle leftSide={true}>Почему выбирают нас?</BlockTitle>
      <Container>
        <div className={styles.cards_content}>
          <ul className={styles.card_list}>
            <li className={styles.card}>
              <h3 className={styles.title}>Эксклюзивный дизайн</h3>
              <p className={styles.text}>
                Мы создаем неповторимые и запоминающиеся дизайны, которые
                отражают уникальность вашего бренда и делают ваш сайт
                привлекательным для посетителей.
              </p>
            </li>
            <li className={styles.card}>
              <h3 className={styles.title}>Полная адаптивность</h3>
              <p className={styles.text}>
                Ваш сайт будет безупречно работать и выглядеть на любом
                устройстве, от смартфона до большого экрана компьютера,
                обеспечивая пользователям комфортный опыт взаимодействия.
              </p>
            </li>
            <li className={styles.card}>
              <h3 className={styles.title}>Глубокое погружение в ваш бизнес</h3>
              <p className={styles.text}>
                Мы тщательно изучаем ваш бизнес, чтобы создать контент, который
                будет не только релевантным, но и максимально полезным для ваших
                клиентов, подчеркивая ваши преимущества.
              </p>
            </li>
            <li className={styles.card}>
              <h3 className={styles.title}>Безопасность</h3>
              <p className={styles.text}>
                Мы внедряем передовые технологии защиты, гарантируя, что ваш
                сайт будет надежно защищен от любых угроз, сохраняя
                конфиденциальность и безопасность ваших данных.
              </p>
            </li>
            <li className={styles.card}>
              <h3 className={styles.title}>Оперативность и качество</h3>
              <p className={styles.text}>
                Мы понимаем ценность времени и стремимся к тому, чтобы все этапы
                разработки были выполнены в максимально короткие сроки без
                ущерба для качества.
              </p>
            </li>
            <li className={styles.card}>
              <h3 className={styles.title}>Персональные решения</h3>
              <p className={styles.text}>
                Мы предлагаем индивидуальный подход к каждому проекту. Если вы
                сомневаетесь в выборе платформы, наши специалисты предоставят
                бесплатную консультацию и предложат наилучшее решение.
              </p>
            </li>
          </ul>
        </div>
      </Container>
    </Section>
  );
};
