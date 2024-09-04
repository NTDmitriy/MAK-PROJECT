import { IGenericElementProps } from "@/interfaces/elements.interface";
import { FC } from "react";
// import styles from "./MaybeInteresting.module.css";

interface IMaybeInteresting extends IGenericElementProps {
  pathname: string;
}

export const MaybeInteresting: FC<IMaybeInteresting> = ({
  pathname,
  className,
  ...rest
}) => {
  // const parents = useFindParent(
  //   SERVICES_DASHBOARD_PAGES.SERVICES.childrens,
  //   pathname
  // );

  // const exclude = parents && parents[1].url;

  // const isInteresting =
  //   parents &&
  //   SERVICES_DASHBOARD_PAGES.SERVICES.childrens.filter(
  //     (item) => item.url !== exclude
  //   );

  return (
    <>
      {/* {isInteresting && (
        <Section className={className} {...rest}>
          <BlockTitle leftSide={true}>
            Посмотрите. Это тоже интересно
          </BlockTitle>
          <Container>
            <ul className={styles.list}>
              {isInteresting.map((item, index) => (
                <li key={index} className={styles.item}>
                  <div className={styles.img__wrapper}>
                    <img
                      src={`/images/services/${item.image}`}
                      className={styles.img}
                      alt={item.name}
                    />
                  </div>
                  <h4 className={styles.title}>{item.name}</h4>
                  <p className={styles.text}>{item.description}</p>
                  <PrimaryLinkButton href={item.url} className={styles.link}>
                    Подробнее
                  </PrimaryLinkButton>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      )} */}
    </>
  );
};
