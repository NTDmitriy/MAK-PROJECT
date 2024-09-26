"use client";

import { PrimaryButton } from "@/components/ui/buttons/primaryButton/PrimaryButton";
import { Container } from "@/components/ui/container/Container";
import { DynamicSvg } from "@/components/ui/dynamicSvg/DynamicSvg";
import { Section } from "@/components/ui/section/Section";
import { BlockTitle } from "@/components/ui/titles/titleBlock/BlockTitle";
import { TGenericElementProps } from "@/typing/elements.type";
import clsx from "clsx";
import { FC, PropsWithChildren, useState } from "react";
import styles from "./OurTeam.module.css";

const workers = [
  {
    id: 0,
    name: "Дмитрий Графов",
    title: "Founder & CEO (Основатель и Генеральный директор)",
    image: "grafov",
    skills: [
      "Стратегическое планирование",
      "Бизнес-развитие",
      "Digital marketing",
    ],
    description:
      "Основатель и генеральный директор нашей компании. Под его руководством мы стали одной из самых инновационных и быстро развивающихся компаний. Его дальновидный подход и способность предвидеть рыночные тренды помогают нам создавать решения, которые идеально соответствуют актуальным потребностям клиентов. Дмитрий вдохновляет команду на достижение высоких результатов и воплощение амбициозных проектов, которые приносят ощутимую пользу нашим клиентам.",
    quote: "Видеть возможности там, где другие видят препятствия.",
  },
  {
    id: 1,
    name: "Максим Бондаренко",
    title: "CMO (Chief Marketing Officer, Директор по маркетингу)",
    image: "bondarenko",
    skills: [
      "Digital marketing",
      "Платная реклама (PPC)",
      "Поисковое продвижение (SEO)",
    ],
    description:
      "Признанный специалист в области маркетинга и цифрового продвижения. Он координирует работу своей команды, разрабатывая и реализуя маркетинговые стратегии, которые помогают нашим клиентам достигать впечатляющих результатов. Под его руководством команда успешно выводит бренды на новый уровень, обеспечивая их устойчивый рост и высокую видимость. Максим и его команда помогут вашему бизнесу привлечь больше клиентов и укрепить позиции на рынке, обеспечивая рост доходов и успех.",
    quote: "В центре каждой маркетинговой стратегии должен быть клиент.",
  },
  {
    id: 2,
    name: "АЛЕКСАНДР ЕРМОЛАЕВ",
    title: "Head of Design (Руководитель отдела дизайна)",
    image: "ermolaev",
    skills: ["Графический дизайн", "UX/UI дизайн", "Брендирование"],
    description:
      "Креативный лидер и талантливый дизайнер. Он и его команда создают уникальные визуальные решения, которые помогают нашим клиентам выделяться на фоне конкурентов. Александр стремится к тому, чтобы каждый проект был эстетически привлекательным и функциональным. Его профессионализм и внимание к деталям помогут вашему бизнесу создать запоминающийся и профессиональный образ бренда, который привлечет внимание и завоюет доверие ваших клиентов. ",
    quote:
      "Креативность — это способность видеть то, что видят все, и думать о том, о чем не думает никто",
  },
  {
    id: 3,
    name: "ВЛАДИСЛАВ КАРПОВ",
    title: "CTO (Chief Technology Officer, Главный технический директор)",
    image: "karpov",
    skills: ["Разработка ПО", "Управление проектами", "Оптимизация процессов"],
    description:
      "Эксперт в области технологий и наш главный технический директор. Он эффективно организовывает работу своей команды, внедряя передовые технологии и обеспечивая успешное выполнение проектов. Под его руководством команда разрабатывает инновационные технические решения, которые повышают эффективность работы и улучшают качество услуг. Владислав и его команда помогут вашему бизнесу достичь новых высот за счет оптимизации процессов и внедрения современных технологий. ",
    quote: "Технологии должны работать на вас, а не наоборот.",
  },
  {
    id: 4,
    name: "ДМИТРИЙ КУБАРЕВ",
    title: "Team Lead Web Development (Руководитель команды веб-разработки)",
    image: "kubarev",
    skills: ["HTML/CSS", "JavaScript", "React", "Управление командой"],
    description:
      "Опытный руководитель команды веб-разработки. Его знания и опыт позволяют ему эффективно управлять процессами разработки и обеспечивать высокое качество реализации проектов. Под его руководством команда создает современные и функциональные веб-сайты, которые улучшают пользовательский опыт и повышают конверсию. Дмитрий и его команда помогут вашему бизнесу создать надежные и удобные веб-решения, которые соответствуют вашим бизнес-целям и ожиданиям пользователей.",
    quote:
      "Отличный веб-сайт — это когда технологии и удобство работают в гармонии.",
  },
];

export const OurTeam: FC<PropsWithChildren<TGenericElementProps>> = ({
  className,
  ...rest
}) => {
  const [selectedWorker, setSelectedWorker] = useState<number>(0);

  const [openDropdown, setOpenDropdown] = useState<number | null>(0);

  const handleOpenDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <Section className={className} {...rest}>
      <BlockTitle
        leftSide={true}
        descrSideway="Ключевые лица компании и их навыки"
        background="КОМАНДА"
      >
        Наша команда
      </BlockTitle>
      <Container>
        <div className={styles.content}>
          {selectedWorker !== null && (
            <div className={styles.selected__worker} key={selectedWorker}>
              <div className={styles.img__container}>
                <img
                  src={`/images/faces/${workers[selectedWorker].image}-702x540.webp`}
                  className={styles.image__main}
                  alt={workers[selectedWorker].name}
                  title={workers[selectedWorker].name}
                  loading="lazy"
                />
              </div>
              <h3 className={styles.title}>{workers[selectedWorker].name}</h3>
              <div className={styles.skills}>
                {workers[selectedWorker].skills.map((skill) => (
                  <p className={styles.skill__name} key={skill}>
                    {skill}
                  </p>
                ))}
              </div>
              <p className={styles.achievment}>
                {workers[selectedWorker].title}
              </p>
              <p className={styles.descr}>
                {workers[selectedWorker].description}
              </p>
              {workers[selectedWorker].quote && (
                <p className={styles.quote}>
                  <DynamicSvg name="IconQoute" />
                  {workers[selectedWorker].quote}
                </p>
              )}
            </div>
          )}

          <ul className={styles.workers__list}>
            {workers.map((worker) => (
              <li
                className={clsx(
                  styles.worker,
                  selectedWorker === worker.id && styles.active__worker
                )}
                key={worker.id}
                onClick={() => setSelectedWorker(worker.id)}
              >
                <div className={styles.worker__wrapper}>
                  <picture>
                    <source
                      srcSet={`/images/faces/${worker.image}-780x220.webp`}
                      media="(max-width: 768px)"
                    />
                    <img
                      src={`/images/faces/${worker.image}-702x540.webp`}
                      className={styles.image}
                      alt={worker.name}
                      loading="lazy"
                    />
                  </picture>
                  <div className={styles.worker__info}>
                    <p className={styles.worker__name}>{worker.name}</p>
                    <p className={styles.worker__descr}>{worker.title}</p>
                    <div className={styles.skills__wrapper}>
                      <div className={styles.skills}>
                        {worker.skills.map((skill) => (
                          <p className={styles.skill__name} key={skill}>
                            {skill}
                          </p>
                        ))}
                      </div>
                      <PrimaryButton
                        className={clsx(
                          styles.button,
                          styles.inner,
                          openDropdown === worker.id && styles.open
                        )}
                        onClick={() => handleOpenDropdown(worker.id)}
                      >
                        <DynamicSvg name="IconDownArray" />
                      </PrimaryButton>
                    </div>
                    <DynamicSvg name="IconLogo" className={styles.logo} />
                  </div>
                </div>

                <div
                  className={clsx(
                    styles.accordion,
                    openDropdown === worker.id && styles.open
                  )}
                >
                  <div className={styles.accordion__content}>
                    <p className={styles.descr}>{worker.description}</p>
                    {worker.quote && (
                      <p className={styles.quote}>
                        <DynamicSvg name="IconQoute" />
                        {worker.quote}
                      </p>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
};
