import { Container } from "@/components/ui/container/Container";
import { TGenericElementProps } from "@/interfaces/elements.type";
import { THeroInfoAdvertisement } from "@/interfaces/types/block/products.type";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./HeroInfoAdvertisement.module.css";

interface IHeroInfoAdvertisement extends TGenericElementProps {
  info: THeroInfoAdvertisement[];
}

export const HeroInfoAdvertisement: FC<
  PropsWithChildren<IHeroInfoAdvertisement>
> = ({ className, info, ...rest }) => {
  return (
    <>
      {info && (
        <div className={clsx(styles.background, className)} {...rest}>
          <Container>
            <ul className={styles.list}>
              {info.map((item, index) => (
                <li key={index} className={styles.item}>
                  <h5 className={styles.title}>{item.title && item.title}</h5>
                  <p className={styles.descr}>{item.description && item.description}</p>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      )}
    </>
  );
};
