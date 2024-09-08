import { Container } from "@/components/ui/container/Container";
import { Section } from "@/components/ui/section/Section";
import { BlockTitle } from "@/components/ui/titles/titleBlock/BlockTitle";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import { FC, PropsWithChildren } from "react";
import styles from "./AffiliateAvantages.module.css";

const avantages = [
  {
    name: "Высокие вознаграждения",
    description: "10-20% от суммы сделки ежемесячно",
    image: "promotion-medical-700x300",
  },
  {
    name: "Пассивный доход",
    description: "Вам не нужно продавать услуги, просто рекомендуйте нас",
    image: "promotion-medical-700x300",
  },
  {
    name: "Бонусы для клиентов",
    description: "Бесплатная консультация и аудит и другие бонусы для привлеченных клиентов",
    image: "promotion-medical-700x300",
  },
];

export const AffiliateAvantages: FC<
  PropsWithChildren<IGenericElementProps>
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
                    src={`/images/services/${item.image}.webp`}
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
