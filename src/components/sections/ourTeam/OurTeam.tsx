import { Container } from "@/components/ui/container/Container";
import { QouteIcon } from "@/components/ui/icons/genericIcons/QouteIcon";
import { Section } from "@/components/ui/section/Section";
import { BlockTitle } from "@/components/ui/titles/titleBlock/BlockTitle";
import { FC } from "react";
import styles from "./OurTeam.module.css";

export const OurTeam: FC = () => {
  return (
    <Section>
      <Container>
        <BlockTitle
          leftSide={true}
          descrSideway={
            <>
              Ключевые лица компании
              <br /> и их навыки
            </>
          }
          background="КОМАНДА"
        >
          Наша команда
        </BlockTitle>
        <div>
          <div className={styles.container}>
            <div className={styles.head_container}>
              <picture>
                {/* <source
                  type="image/webp"
                  srcSet={`/images/grafov.webp`}
                /> */}
                <img
                  src={`/images/grafov.jpg`}
                  className={styles.image_main}
                  alt="Дмитрий Графов"
                />
              </picture>
              <h3 className={styles.title}>Дмитрий Графов</h3>
              <div className={styles.skills}>
                <p className={styles.skill_name}>Cтратегическое планирование</p>
                <p className={styles.skill_name}>Бизнес-развитие</p>
                <p className={styles.skill_name}>Управление проектами</p>
              </div>
              <p className={styles.achievment}>
                Founder & CEO (Основатель и Генеральный директор)  
              </p>
              <p className={styles.descr}>
                Основатель и генеральный директор нашей компании. Под его
                руководством мы стали одной из самых инновационных и быстро
                развивающихся компаний. Его дальновидный подход и способность
                предвидеть рыночные тренды помогают нам создавать решения,
                которые идеально соответствуют актуальным потребностям клиентов.
                Дмитрий вдохновляет команду на достижение высоких результатов и
                воплощение амбициозных проектов, которые приносят ощутимую
                пользу нашим клиентам.
              </p>
              <p className={styles.quote}>
                <span className={styles.quote_span}>
                  <QouteIcon />
                </span>
                Видеть возможности там, где другие видят препятствия.
              </p>
            </div>
            <div className={styles.workers_container}>
              <div className={styles.worker}>
                <picture>
                  {/* <source
                  type="image/webp"
                  srcSet={`/images/grafov.webp`}
                /> */}
                  <img
                    src={`/images/13rand.jpg`}
                    className={styles.image}
                    alt="Максим Бондаренко"
                  />
                </picture>
                <div className={styles.worker_info}>
                  <p className={styles.worker_name}>МАКСИМ БОНДАРЕНКО</p>
                  <p className={styles.worker_descr}>
                    CMO (Chief Marketing Officer, Директор по маркетингу)  
                  </p>
                  <div className={styles.skills}>
                    <p className={styles.skill_name}>Digital marketing</p>
                    <p className={styles.skill_name}>Платная реклама (PPC)</p>
                    <p className={styles.skill_name}>
                      Поисковое продвижение (SEO)
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.worker}>
                <picture>
                  {/* <source
                  type="image/webp"
                  srcSet={`/images/grafov.webp`}
                /> */}
                  <img
                    src={`/images/alex.jpg`}
                    className={styles.image}
                    alt="АЛЕКСАНДР ЕРМОЛАЕВ"
                  />
                </picture>
                <div className={styles.worker_info}>
                  <p className={styles.worker_name}>АЛЕКСАНДР ЕРМОЛАЕВ</p>
                  <p className={styles.worker_descr}>
                    Head of Design (Руководитель отдела дизайна)  
                  </p>
                  <div className={styles.skills}>
                    <p className={styles.skill_name}>Графический дизайн</p>
                    <p className={styles.skill_name}>UX/UI дизайн</p>
                    <p className={styles.skill_name}>Брендирование</p>
                  </div>
                </div>
              </div>
              <div className={styles.worker}>
                <picture>
                  {/* <source
                  type="image/webp"
                  srcSet={`/images/grafov.webp`}
                /> */}
                  <img
                    src={`/images/vlad.jpg`}
                    className={styles.image}
                    alt="ВЛАДИСЛАВ КАРПОВ"
                  />
                </picture>
                <div className={styles.worker_info}>
                  <p className={styles.worker_name}>ВЛАДИСЛАВ КАРПОВ</p>
                  <p className={styles.worker_descr}>
                    CTO (Chief Technology Officer, Главный технический директор)
                     
                  </p>
                  <div className={styles.skills}>
                    <p className={styles.skill_name}>Разработка ПО</p>
                    <p className={styles.skill_name}>Управление проектами</p>
                    <p className={styles.skill_name}>Оптимизация процессов</p>
                  </div>
                </div>
              </div>
              <div className={styles.worker}>
                <picture>
                  {/* <source
                  type="image/webp"
                  srcSet={`/images/grafov.webp`}
                /> */}
                  <img
                    src={`/images/dima.jpg`}
                    className={styles.image}
                    alt="ДМИТРИЙ КУБАРЕВ"
                  />
                </picture>
                <div className={styles.worker_info}>
                  <p className={styles.worker_name}>ДМИТРИЙ КУБАРЕВ</p>
                  <p className={styles.worker_descr}>
                    Team Lead Web Development (Руководитель команды
                    веб-разработки)  
                  </p>
                  <div className={styles.skills}>
                    <p className={styles.skill_name}>HTML/CSS</p>
                    <p className={styles.skill_name}>JavaScript</p>
                    <p className={styles.skill_name}>React</p>
                    <p className={styles.skill_name}>Управление командой</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
