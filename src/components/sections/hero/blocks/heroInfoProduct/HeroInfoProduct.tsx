import { Container } from "@/components/ui/container/Container";
import { THeroInfo } from "@/interfaces/types/pageTypes/products.type";
import { FC } from "react";
import styles from './HeroInfoProduct.module.css'

interface IHeroInfoProduct {
  infoContent: THeroInfo;
}

export const HeroInfoProduct: FC<IHeroInfoProduct> = ({ infoContent }) => {
  return (
    <>
      {infoContent && (
        <div className={styles.background}>
        <Container>
          <div className={styles.content}>
              <h3 className={styles.title}>{infoContent.title}</h3>
              <p className={styles.text}> {infoContent.description}</p>
              <picture className={styles.imagecontainer}>
              <source type="image/webp" srcSet={`/images/${infoContent.image}.webp`} />
              <img src={`/images/${infoContent.image}.jpg`} className={styles.image} alt="Онлайн-школы и инфобизнес" />
            </picture>
            
          </div>
        </Container>
        </div>
      )}
    </>
  );
};
