import { Container } from "@/components/ui/container/Container"
import { FORM_TYPE, FormController } from "@/components/ui/forms/FormController"
import { Section } from "@/components/ui/section/Section"
import { IGenericElementProps } from "@/interfaces/elements.interface"
import { FC, PropsWithChildren } from "react"
import styles from './WildberriesShopCase.module.css'

export const WildberriesShopCase: FC<PropsWithChildren<IGenericElementProps>> = ({
    className,
    ...rest
}
) => {
    return (
        <Section className={className} {...rest}>
            <Container>
                <div className={styles.content_hero}>
                    <h2 className={styles.hero_title}>Увеличение продаж магазина женской одежды на Wildberries</h2>
                    <p className={`${styles.text} ${styles.text_hero}`}>Проект по продвижению магазина женской одежды на платформе Wildberries через рекламу в ВКонтакте и Яндекс.</p>
                </div>
                <div className={styles.tasks}>
                    <h3 className={styles.title}>
                        Задачи проекта
                    </h3>
                    <p className={styles.text}>Основные задачи проекта включали:</p>
                    <ul className={styles.text_list}>
                        <li className={styles.text_info}>Настройка и оптимизация рекламных кампаний в ВКонтакте и Яндекс Директ для привлечения целевого трафика.</li>
                        <li className={styles.text_info}>Увеличение продаж магазина на платформе Wildberries.</li>
                        <li className={styles.text_info}>Повышение узнаваемости бренда и привлечение новых клиентов.</li>
                    </ul>
                </div>
            </Container>
            <div className={styles.tasks__problems}>
                <Container className={styles.problems_content}>
                    <h3 className={`${styles.title} ${styles.title_problems}`}>
                        Проблематика
                    </h3>
                    <p className={`${styles.text} ${styles.text_problems}`}>До начала нашего сотрудничества магазин сталкивался с рядом трудностей:</p>
                    <ul className={styles.text_list}>
                        <li className={`${styles.text_info} ${styles.text_problems}`}>Низкая видимость и конкурентоспособность на платформе Wildberries.</li>
                        <li className={`${styles.text_info} ${styles.text_problems}`}>Недостаточное количество целевых обращений и продаж.</li>
                        <li className={`${styles.text_info} ${styles.text_problems}`}>Высокие затраты на рекламу с низкой эффективностью.</li>
                    </ul>
                </Container>
            </div>
            <Container>
                <div className={styles.tasks}>
                    <h3 className={styles.title}>
                        Решение
                    </h3>
                    <p className={styles.text_bg}>Реклама в ВКонтакте</p>
                    <ul className={styles.text_list}>
                        <li className={styles.text_info}>Настроили таргетированные рекламные кампании.</li>
                        <li className={styles.text_info}>Разработали привлекательные объявления с четким УТП, подчеркивающим преимущества товаров и специальные предложения.</li>
                        <li className={styles.text_info}>Запустили ретаргетинговые кампании для напоминания потенциальным клиентам о магазине и стимулирования их к покупке.</li>
                    </ul>
                    <p className={styles.text_bg}>Реклама в Яндекс</p>
                    <ul className={styles.text_list}>
                        <li className={styles.text_info}>Провели аудит текущих рекламных кампаний и выявили ключевые области для улучшения.</li>
                        <li className={styles.text_info}>Настроили новые кампании с использованием высокочастотных и низкочастотных запросов, связанных с женской одеждой и покупками на Wildberries.</li>
                        <li className={styles.text_info}>Провели A/B тестирование объявлений и ключевых слов для повышения CTR и уменьшения стоимости клика.</li>
                        <li className={styles.text_info}>Оптимизировали рекламные бюджеты, сосредоточившись на наиболее результативных ключевых словах и объявлениях.</li>
                    </ul>
                    <p className={styles.text_bg}>Подробный анализ трафика</p>
                    <ul className={styles.text_list}>
                        <li className={styles.text_info}>Регулярно анализировали метрики, такие как CTR, CPC, количество кликов и конверсий, чтобы оптимизировать рекламные кампании.</li>
                        <li className={styles.text_info}>Использовали инструменты веб-аналитики для отслеживания поведения пользователей на сайте Wildberries, выявления узких мест и улучшения пользовательского опыта.</li>
                        <li className={styles.text_info}>Определили, что рекламные кампании в ВКонтакте генерировали более целевой трафик с высоким показателем конверсии, тогда как Яндекс позволял охватить более широкую аудиторию и увеличить объем трафика.</li>
                    </ul>
                    <div className={styles.tasks}>
                        <h3 className={styles.title}>
                            Результаты
                        </h3>
                        <img
                            src={`/images/cases/cases-wildberries-metrica2.webp`}
                            className={styles.image__main}
                            alt=''
                            title=''
                        />
                        <img
                            src={`/images/cases/cases-wildberries-metrica1.webp`}
                            className={styles.image__main}
                            alt=''
                            title=''
                        />
                        <p className={styles.text}>Реализация проекта принесла значительные улучшения:</p>
                        <ul className={styles.text_list}>
                            <li className={styles.text_info}>Количество целевых обращений и продаж через рекламные кампании увеличилось <span className={styles.text_info_yellow}>более 1500 выкупов в месяц.</span></li>
                            <li className={styles.text_info}>Стоимость привлечения одного клиента снизилась <span className={styles.text_info_yellow}>на 63%,</span>что повысило рентабельность рекламных кампаний.</li>
                            <li className={styles.text_info}>Приведенный внешний трафик поспособствовал укреплениям позиций в органической выдачи, что<span className={styles.text_info_yellow}> дало ощутимый рост продаж.</span></li>
                        </ul>
                    </div>

                    <FormController formType={FORM_TYPE.MAIN_FORM} />
                </div>
            </Container>
        </Section>
    )
}