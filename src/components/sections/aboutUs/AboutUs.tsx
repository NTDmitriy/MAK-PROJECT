import { Container } from "@/components/ui/container/Container";
import { DynamicSvg } from "@/components/ui/dynamicSvg/DynamicSvg";
import { Section } from "@/components/ui/section/Section";
import { BlockTitle } from "@/components/ui/titles/titleBlock/BlockTitle";
import { FC, PropsWithChildren } from "react";
import { TGenericElementProps } from "../../../typing/elements.type";
import styles from "./AboutUs.module.css";

export const AboutUs: FC<PropsWithChildren<TGenericElementProps>> = ({
  className,
  ...rest
}) => {
  return (
    <Section className={className} {...rest}>
      <BlockTitle leftSide={true} background="MAKE ALL PERFECT">
        Немного о нас
      </BlockTitle>
      <Container>
        <p className={styles.text_main}>
          Добро пожаловать в Make All Perfect, маркетинговое агентство полного
          цикла, работающее по всей России и миру. Мы гордимся тем, что на протяжении уже 7 лет помогаем компаниям достигать высоких результатов
          благодаря нашим инновационным методам работы и индивидуальному подходу
          без шаблонных решений.
        </p>
        <div className={styles.content_main}>
          <img className={styles.img} src="/images/team.webp"></img>

          <p className={styles.text}>
            Наша миссия – быть надежным партнером для вашего бизнеса,
            предоставляя комплексные и индивидуализированные маркетинговые
            решения. Мы занимаемся всеми аспектами маркетинга: от разработки
            стратегии до её полной реализации и анализа результатов.{" "}
          </p>
        </div>
        <div className={styles.content_bottom}>
          <div className={styles.text_cont}>
            <p className={styles.text_main}>
              Мы всегда в курсе последних трендов и новинок в мире маркетинга,
              что позволяет нам предлагать только самые эффективные решения для
              вашего бизнеса. Наша цель – помочь вам достигать новых высот и уверенно идти к успеху.
            </p>
            <p className={styles.text_main}>
              Мы верим, что креативность и профессионализм – ключ к успешной
              реализации любых проектов. Каждый клиент для нас уникален, и мы
              стремимся предложить наиболее подходящие и инновационные решения,
              которые будут эффективно работать именно для вас.
            </p>
          </div>
          <div className={styles.logo__wrapper}>
            <DynamicSvg name="IconHeroLogo" className={styles.logo} />
          </div>
        </div>
      </Container>
    </Section>
  );
};
