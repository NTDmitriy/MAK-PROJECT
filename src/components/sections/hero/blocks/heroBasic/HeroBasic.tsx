import { PrimaryButton } from "@/components/ui/buttons/primaryButton/PrimaryButton";
import { SeconderyButton } from "@/components/ui/buttons/seconderyButton/SeconderyButton";
import { Container } from "@/components/ui/container/Container";
import { THeroBasic } from "@/interfaces/types/block/products.type";
import { FC } from "react";
import styles from "./HeroBasic.module.css";
interface IHeroBasic {
  basicContent: THeroBasic;
}

export const HeroBasic: FC<IHeroBasic> = ({ basicContent }) => {
  const { title, description, image } = basicContent;

  return (
    <Container className={styles.hero__container}>
      <h1 className={styles.title}>
        {title.accentText && title.accentOrder === 0 ? (
          <>
            <span className={styles.accent}>{title.accentText}</span>{" "}
            <span>{title.text}</span>
          </>
        ) : (
          <>
            <span>{title.text}</span>
            {title.accentText && (
              <span className={styles.accent}>{title.accentText}</span>
            )}
          </>
        )}
      </h1>
      <p className={styles.descr}>{description}</p>
      <div className={styles.btn_grop}>
        <PrimaryButton className={styles.button}>Заказать звонок</PrimaryButton>
        <SeconderyButton className={styles.button__tg}>
          Связаться через Telegram
        </SeconderyButton>
      </div>
      <div className={styles.img__wrapper}>
        <picture>
          <source
            srcSet={`/images/services/${image}-295x191.webp`}
            media="(max-width: 1024px)"
          />
          <img className={styles.img} src={`/images/services/${image}-1360x870.webp`} />
        </picture>
      </div>
    </Container>
  );
};
