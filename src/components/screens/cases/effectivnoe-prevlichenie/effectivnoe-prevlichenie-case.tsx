import { Container } from "@/components/ui/container/Container"
import { Section } from "@/components/ui/section/Section"
import { IGenericElementProps } from "@/interfaces/elements.interface"
import { FC, PropsWithChildren } from "react"
import styles from './effectivnoe-prevlichenie-case.module.css';
import { FORM_TYPE, FormController } from "@/components/ui/forms/FormController"

export const EFFECTIVNOE_PREVLECHENIE_CASE: FC<PropsWithChildren<IGenericElementProps>> = ({
    className,
    ...rest
}
) => {
    return (
        <Section className={className} {...rest}>
            <Container>
                <div className={styles.content_hero}>
                    <h2 className={styles.hero_title}>Эффективное привлечение клиентов для услуги оптимизации налогов на УСН</h2>
                    <p className={styles.text}>Проект по продвижению услуги оптимизации налогов для предпринимателей на упрощенной системе налогообложения (УСН) через рекламу в Яндекс Директ и Google Ads.</p>
                </div>
                <div className={styles.tasks}>
                    <h3 className={styles.title}>
                        Задачи проекта
                    </h3>
                    <p className={styles.text}>Основные задачи проекта включали:</p>
                    <ul className={styles.text_list}>
                        <li className={styles.text_info}>Настройка и оптимизация рекламных кампаний в Яндекс Директ и Google Ads для привлечения целевого трафика.</li>
                        <li className={styles.text_info}>Увеличение количества заявок на услугу оптимизации налогов.</li>
                        <li className={styles.text_info}>Повышение рентабельности рекламных кампаний.</li>
                    </ul>
                </div>
            </Container>
            <div className={styles.tasks__problems}>
                <Container className={styles.problems_content}>
                    <h3 className={`${styles.title} ${styles.title_problems}`}>
                        Проблематика
                    </h3>
                    <p className={`${styles.text} ${styles.text_problems}`}>До начала нашего сотрудничества услуга по оптимизации налогов сталкивалась с рядом трудностей:</p>
                    <ul className={styles.text_list}>
                        <li className={`${styles.text_info} ${styles.text_problems}`}>Низкая осведомленность целевой аудитории о преимуществах данной услуги.</li>
                        <li className={`${styles.text_info} ${styles.text_problems}`}>Высокие затраты на рекламу с низкой конверсией и недостаточным количеством целевых обращений.</li>
                    </ul>
                </Container>
            </div>
            <Container>
                <div className={styles.tasks}>
                    <h3 className={styles.title}>
                        Решение
                    </h3>
                    <p className={styles.text_bg}>Реклама в Яндекс Директ</p>
                    <ul className={styles.text_list}>
                      
                        <li className={styles.text_info}>Провели аудит текущих рекламных кампаний и выявили ключевые области для улучшения.</li>
                        <li className={styles.text_info}>Настроили новые кампании с использованием высокочастотных и низкочастотных запросов, связанных с оптимизацией налогов и УСН.</li>
                        <li className={styles.text_info}>Разработали привлекательные объявления с четким УТП, подчеркивающим выгоды от использования услуги.</li>
                        <li className={styles.text_info}>Запустили ретаргетинговые кампании, чтобы вернуть на сайт пользователей, ранее проявивших интерес к услуге.</li>

                    </ul>
                    <p className={styles.text_bg}>Реклама в Google Ads</p>
                    <ul className={styles.text_list}>
                        <li className={styles.text_info}>Настроили рекламные кампании в Google Ads с использованием поисковой и контекстно-медийной сети.</li>
                        <li className={styles.text_info}>Ориентировались на предпринимателей, ищущих способы оптимизации налогов, используя релевантные ключевые слова и интересы.</li>
                        <li className={styles.text_info}>Запустили A/B тестирование различных объявлений, чтобы определить наиболее эффективные форматы и сообщения.</li>
                        <li className={styles.text_info}>Оптимизировали кампании по конверсии, сосредоточив бюджет на ключевых словах и объявлениях с наивысшей отдачей.</li>
                    </ul>
                    <p className={styles.text_bg}>Подробный анализ трафика</p>
                    <ul className={styles.text_list}>
                        <li className={styles.text_info}> В ходе реализации проекта было важно отслеживать качество и объем трафика, привлекаемого через Яндекс Директ и Google Ads.</li>
                        <li className={styles.text_info}>Регулярно анализировали метрики, такие как CTR, CPC, количество кликов и конверсий, чтобы оптимизировать рекламные кампании.</li>
                        <li className={styles.text_info}>Использовали инструменты веб-аналитики для отслеживания поведения пользователей на сайте, выявления узких мест и улучшения пользовательского опыта.</li>
                        <li className={styles.text_info}>Определили, что рекламные кампании в Яндекс Директ генерировали более целевой трафик с высоким показателем конверсии, тогда как Google Ads позволял охватить более широкую аудиторию и увеличить объем трафика.</li>
                    </ul>
                    

                    <div className={styles.tasks}>
                        <h3 className={styles.title}>
                            Результаты
                        </h3>
                        <img
                            src={`/images/cases/cases-effectivnoe-prevlichenie-metrika1.webp`}
                            className={styles.image__main}
                            alt=''
                            title=''
                        />
                        <p className={styles.text}>Реализация проекта принесла значительные улучшения:</p>
                        <ul className={styles.text_list}>
                            <li className={styles.text_info}>Количество целевых обращений через рекламные кампании составило<span className={styles.text_info_yellow}> 2318 лидов за период в 7 месяцев.</span>
                            </li>
                            <li className={styles.text_info}>Стоимость привлечения одного клиента снизилась почти <span className={styles.text_info_yellow}>в 3 раза</span> что повысило рентабельность рекламных кампаний и ROMI.</li>
                            <li className={styles.text_info}>Показатель отказов сократился <span className={styles.text_info_yellow}>до 18%,</span> что свидетельствует о повышении качества трафика и улучшении пользовательского опыта.</li>
                        </ul>
                        <p className={styles.text_full}>Проект продемонстрировал, что комплексный подход к рекламе в Яндекс Директ и Google Ads, с акцентом на анализ и оптимизацию трафика, может значительно повысить эффективность маркетинговых усилий и обеспечить стабильный рост показателей.
                        </p>
                        <div className={styles.picture_content}>
        <img
        src={`/images/cases/cases-effectivnoe-prevlichenie-metrika2.webp`}
        className={styles.image__main}
        alt=''
        title=''
        />
        <img
        src={`/images/cases/cases-effectivnoe-prevlichenie-metrika3.webp`}
        className={styles.image__main}
        alt=''
        title=''
        />
        <img
        src={`/images/cases/cases-effectivnoe-prevlichenie-metrika4.webp`}
        className={styles.image__main}
        alt=''
        title=''
        />
        </div>
                    </div>
                    <FormController formType={FORM_TYPE.MAIN_FORM} />
                </div>
            </Container>
        </Section>
    )
}