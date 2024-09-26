"use client";

import { Container } from "@/components/ui/container/Container";
import { Section } from "@/components/ui/section/Section";
import { BlockTitle } from "@/components/ui/titles/titleBlock/BlockTitle";
import { TGenericElementProps } from "@/typing/elements.type";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import styles from "./OurStatistic.module.css";

export const OurStatistic: FC<PropsWithChildren<TGenericElementProps>> = ({
  className,
  ...rest
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: progressRef, inView: progressInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <Section className={className} {...rest}>
      <BlockTitle
        leftSide={true}
        descrSideway="Мы нацелены на долгосрочное сотрудничество"
        className=""
      >
        Наш подход
      </BlockTitle>
      <Container>
        <div className={styles.content_main} ref={ref}>
          <div className={styles.text_content}>
            <p className={styles.text}>
              Наши клиенты остаются с нами в среднем на 835 календарных дней,
              доверяя нам свои проекты и видя стабильные результаты. Мы
              стремимся к тому, чтобы каждая наша работа приносила ощутимые
              результаты и способствовала росту вашего бизнеса.
            </p>
            <p className={styles.big_text}>
              Клиенты в среднем работают с нами:
            </p>
          </div>
          <div className={styles.data_counter}>
            <p className={styles.days}>
              {inView && <CountUp start={0} end={835} duration={5} />}
            </p>
            <p className={styles.days_descr}>календарных дней</p>
          </div>
        </div>
        <div className={styles.progress_bar}>
          <div className={styles.progress_main}>
            <div  ref={progressRef}
  className={clsx(styles.scale, { [styles.visible]: progressInView })}
              
            ></div>
          </div>
          <div className={styles.progress_grafs}>
            <div className={clsx(styles.progress_graf, styles.proc20)}>
              <div className={styles.progress_graf_span}></div>
              <span className={styles.progess_number}>0</span>
            </div>
            <div className={clsx(styles.progress_graf, styles.proc20)}>
              <div className={styles.progress_graf_span}></div>
              <span className={styles.progess_number}>1 год</span>
            </div>
            <div className={clsx(styles.progress_graf, styles.proc20)}>
              <div className={styles.progress_graf_span}></div>
              <span className={styles.progess_number}>2 года</span>
            </div>
            <div className={clsx(styles.progress_graf, styles.proc20)}>
              <div className={styles.progress_graf_span}></div>
              <span className={styles.progess_number}>3 года</span>
            </div>
            <div className={clsx(styles.progress_graf, styles.proc20)}>
              <div className={styles.progress_graf_span}></div>
              <span className={styles.progess_number}>4 года</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
