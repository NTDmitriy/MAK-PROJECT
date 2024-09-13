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
              <picture>
                <source
                  type="image/webp"
                  srcSet={`/images/services/${info.image}-small.webp`}
                  media="(max-width: 1200px)"
                />
                <img
                  className={styles.image}
                  src={`/images/services/${info.image}-large.webp`}
                  alt="Онлайн-школы и инфобизнес"
                />
              </picture>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};
