import { Container } from "@/components/ui/container/Container";
import { DynamicSvg, TSvgMapKeys } from "@/components/ui/dynamicSvg/DynamicSvg";
import { Section } from "@/components/ui/section/Section";
import { BlockTitle } from "@/components/ui/titles/titleBlock/BlockTitle";
import { TGenericElementProps } from "@/typing/elements.type";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./OurClients.module.css";

const clients = [
  "IconClient1",
  "IconClient2",
  "IconClient3",
  "IconClient4",
  "IconClient5",
  "IconClient6",
  "IconClient7",
  "IconClient8",
];

export const OurClients: FC<PropsWithChildren<TGenericElementProps>> = ({
  className,
  ...rest
}) => {
  return (
    <Section
      className={clsx(styles.ourclients, styles.inner, className)}
      {...rest}
    >

        <BlockTitle
          leftSide={true}
          descrSideway="Познакомьтесь с компаниями, которые доверяют нашему маркетинговому агентству. Мы работаем с лидерами рынка и помогаем им достигать высоких результатов в digital маркетинге."
        >
          Наши клиенты
        </BlockTitle>
        <Container>
          <div className={styles.container}>
            {clients.map((icon, index) => (
              <DynamicSvg
                key={index}
                name={icon as TSvgMapKeys}
                className={styles.image}
              />
            ))}
          </div>
          <p className={styles.descr}>
            И еще более тысячи довольных клиентов, которые доверяют нашему опыту
            и профессионализму, ежедневно получая результаты от наших
            маркетинговых стратегий
          </p>
        </Container>
        <img
          src="/images/ourclients-bg.webp"
          alt="background"
          className={styles.bg}
          loading="lazy"
        />
  
    </Section>
  );
};
