import { Container } from "@/components/ui/container/Container";
import { Section } from "@/components/ui/section/Section";
import { BlockTitle } from "@/components/ui/titles/titleBlock/BlockTitle";
import { TGenericElementProps } from "@/typing/elements.type";
import { FC, PropsWithChildren } from "react";
import styles from "./AffiliateAvantages.module.css";

const avantages = [
  {
    name: "Высокие вознаграждения",
    description: "10-20% от суммы сделки ежемесячно",
    image: "affiliate-avantages-1",
  },
  {
    name: "Пассивный доход",
    description: "Вам не нужно продавать услуги, просто рекомендуйте нас",
    image: "affiliate-avantages-2",
  },
  {
    name: "Бонусы для клиентов",
    description: "Бесплатная консультация и аудит и другие бонусы для привлеченных клиентов",
    image: "affiliate-avantages-3",
  },
];

export const AffiliateAvantages: FC<
  PropsWithChildren<TGenericElementProps>
> = ({ className, ...rest }) => {
  return (
    <>
      <Section className={className} {...rest}>
        <BlockTitle leftSide={true}>Ваши преимущества как партнера</BlockTitle>
        <Container>
          <ul className={styles.list}>
            {avantages &&
              avantages.map((item, index) => (
                <li key={index} className={styles.item}>
                  <img
                    className={styles.img}
                    src={`/images/useful/${item.image}.webp`}
                    alt={item.name}
                    title={item.name}
                  />

                  <div className={styles.descr}>
                    {item.name && <h4 className={styles.title}>{item.name}</h4>}

                    {item.description && (
                      <p className={styles.text}>
                        {item.description && item.description}
                      </p>
                    )}
                  </div>
                </li>
              ))}
          </ul>
        </Container>
      </Section>
    </>
  );
};
