import { Container } from "@/components/ui/container/Container";
import { THeroInfoProduct } from "@/interfaces/types/block/products.type";
import { FC } from "react";
import styles from "./HeroInfoProduct.module.css";

interface IHeroInfoProduct {
  info: THeroInfoProduct;
}

export const HeroInfoProduct: FC<IHeroInfoProduct> = ({ info }) => {
  return (
    <>
      {info && (
        <div className={styles.background}>
          <Container>
            <div className={styles.content}>
              <div className={styles.descr}>
                <h3 className={styles.title}>{info.title}</h3>
                <p className={styles.text}> {info.description}</p>
              </div>
              <img
                className={styles.image}
                src={`/images/services/${info.image}.webp`}
                alt="Онлайн-школы и инфобизнес"
              />
            </div>
          </Container>
        </div>
      )}
    </>
  );
};
