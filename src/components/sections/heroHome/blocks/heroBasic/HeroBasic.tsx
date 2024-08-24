import { PrimaryButton } from "@/components/ui/buttons/primaryButton/PrimaryButton";
import { SeconderyButton } from "@/components/ui/buttons/seconderyButton/SeconderyButton";
import { Container } from "@/components/ui/container/Container";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import { FC, PropsWithChildren } from "react";
import styles from "./HeroBasic.module.css";

export const HeroBasic: FC<PropsWithChildren<IGenericElementProps>> = () => {
  return (
    <Container className={styles.hero__container}>
      <div className={styles.left__side}>
        <h1 className={styles.title}>
          М<span className={styles.small__text}>ALL PERFECT</span> аркетинговое{" "}
          <span className={styles.accent}>агенство</span> полного цикла
        </h1>
        <p className={styles.descr}>
          Ваш <span className="accent">надежный партнер</span> в мире digital
          маркетинга
        </p>
        <div className={styles.btn_grop}>
          <PrimaryButton className={styles.button}>
            Заказать звонок
          </PrimaryButton>
          <SeconderyButton className={styles.button__tg}>
            Связаться через Telegram
          </SeconderyButton>
        </div>
        <p className={styles.background__text__top}>MAKE</p>
      </div>

      <div className={styles.face__wrapper}>
        <picture>
          <source
            srcSet={`/images/faces/grafov-hero-954x460.webp`}
            media="(max-width: 1024px)"
          />
          <img
            className={styles.face__img}
            src={`/images/faces/grafov-hero-560x560.webp`}
          />
        </picture>
        <div className={styles.face__descr}>
          <p className={styles.name}>Дмитрий Графов</p>
          <p className={styles.position}>
            Основатель <span className="accent">Make All Perfect</span>
          </p>
        </div>
      </div>

      <div className={styles.img__wrapper}>
        <picture>
          <source
            srcSet={`/images/home-hero-295x191.webp`}
            media="(max-width: 1024px)"
          />
          <img className={styles.img} src={`/images/home-hero-1360x870.webp`} />
        </picture>
        <p className={styles.background__text__bot}>ALL PERFECT</p>
      </div>
    </Container>
  );
};
