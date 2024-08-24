import { Container } from "@/components/ui/container/Container";
import { DynamicSvg } from "@/components/ui/dynamicSvg/DynamicSvg";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import clsx from "clsx";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import styles from "./HeroDescr.module.css";

export const HeroDescr: FC<PropsWithChildren<IGenericElementProps>> = ({
  className,
  ...rest
}) => {
  return (
    <>
      <Container>
        <div className={clsx(styles.content, className)}>
          <div className={styles.descr}>
            <p className={styles.text}>
              Мы - digital маркетинговое агентство с многолетним и успешным
              опытом в оказании маркетинговых услуг. Наша миссия - помогать
              бизнесам{" "}
              <span className={styles.accent}>
                расти и достигать своих целей{" "}
              </span>{" "}
              в онлайн-пространстве
            </p>
            <Link href={"useful/about"} className={styles.link}>
              Подробнее о нас
            </Link>
          </div>
          <div className={styles.logo__wrapper} >
            <DynamicSvg name="IconHeroLogo" className={styles.logo} />
          </div>
        </div>
      </Container>
    </>
  );
};
