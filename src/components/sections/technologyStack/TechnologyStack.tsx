import { Container } from "@/components/ui/container/Container";
import { Section } from "@/components/ui/section/Section";
import { BlockTitle } from "@/components/ui/titles/titleBlock/BlockTitle";
import { TGenericElementProps } from "@/interfaces/elements.type";
import { FC, PropsWithChildren } from "react";
import styles from "./TechnologyStack.module.css";

const technology = [
  "react",
  "vue",
  "angular",
  "sass",
  "tailwindcss",
  "express",
  "fastify",
  "nest",
  "mysql",
  "postgresql",
  "mongodb",
  "prisma",
];

export const TechnologyStack: FC<PropsWithChildren<TGenericElementProps>> = ({
  className,
  ...rest
}) => {
  return (
    <Section className={className} {...rest}>
      <BlockTitle leftSide={false}>
        Технологии, с которыми мы работаем
      </BlockTitle>
      <Container>
        <ul className={styles.list}>
          {technology.map((item, index) => (
            <li key={index} className={styles.item}>
              <img
                src={`/images/stack/${item}.webp`}
                className={styles.img}
                alt={item}
              />
              <p className={styles.name}>{item}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
};
