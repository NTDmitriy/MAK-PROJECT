import { Container } from "@/components/ui/container/Container";
import { DynamicSvg } from "@/components/ui/dynamicSvg/DynamicSvg";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./HeroInfo.module.css";

export const HeroInfo: FC<PropsWithChildren<IGenericElementProps>> = ({
  className,
  ...rest
}) => {
  return (
    <>
      <div className={clsx(styles.background, className)} {...rest}>
        <Container>
          <div className={styles.content}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <div className={styles.item__head}>
                  <DynamicSvg className={styles.icon} name="IconCheck" />
                  <h5 className={styles.title}>Бесплатный аудит и прогноз</h5>
                </div>
                <p className={styles.descr}>
                  Проводим оценку и{" "}
                  <span className={styles.accent}>
                    спрогнозируем показатели
                  </span>{" "}
                  до начала работ
                </p>
              </li>
              <li className={styles.item}>
                <div className={styles.item__head}>
                  <DynamicSvg className={styles.icon} name="IconCheck" />
                  <h5 className={styles.title}>
                    Персонализированные стратегии
                  </h5>
                </div>
                <p className={styles.descr}>
                  <span className={styles.accent}>
                    Креативные и современные{" "}
                  </span>{" "}
                  решения под ваш бизнес и аудиторию
                </p>
              </li>
              <li className={styles.item}>
                <div className={styles.item__head}>
                  <DynamicSvg className={styles.icon} name="IconCheck" />
                  <h5 className={styles.title}>Акцент на успех</h5>
                </div>
                <p className={styles.descr}>
                  Наш главный фокус —
                  <span className={styles.accent}>
                    {" "}
                    увеличение вашей прибыли
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </>
  );
};
