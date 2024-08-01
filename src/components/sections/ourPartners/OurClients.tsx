import { Container } from "@/components/ui/container/Container";
import { Section } from "@/components/ui/section/Section";
import { BlockTitle } from "@/components/ui/titles/titleBlock/BlockTitle";
import { FC } from "react";
import styles from "./OurClients.module.css";

const icons = [
  { image: "/images/client1.svg"},
  { image: "/images/client2.svg" },
  { image: "/images/client3.svg" },
  { image: "/images/client4.svg" },
  { image: "/images/client5.svg" },
  { image: "/images/client6.svg" },
  { image: "/images/client7.svg" },
  { image: "/images/client8.svg" },
];

export const OurClients: FC = () => {
  return (
    <Section className={styles.ourclients}>
      <Container>
        <BlockTitle
          leftSide={true}
          descrSideway="Познакомьтесь с компаниями, которые доверяют нашему маркетинговому агентству. Мы работаем с лидерами рынка и помогаем им достигать высоких результатов в digital маркетинге."
        >
          Наши Партнеры
        </BlockTitle>
        <div className={styles.container}>
          {icons.map((icon, index) => (
            <img
            key={index}
              src={icon.image}
              className={`${styles.image} ${styles.hoverable}`}
            />
          ))}
        </div>
        <p className={styles.descr}>
          И еще более тысячи довольных клиентов, которые доверяют нашему опыту и
          профессионализму, ежедневно получая результаты от наших маркетинговых
          стратегий
        </p>
      </Container>
    </Section>
  );
};