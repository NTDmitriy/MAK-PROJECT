import { Container } from "@/components/ui/container/Container"
import { Section } from "@/components/ui/section/Section"
import { IGenericElementProps } from "@/interfaces/elements.interface"
import { FC, PropsWithChildren } from "react"
import styles from './karelskiy-dom-case.module.css';
import { FORM_TYPE, FormController } from "@/components/ui/forms/FormController"

export const KARELSKIY_DOM_CASE: FC<PropsWithChildren<IGenericElementProps>> = ({
    className,
    ...rest
}
) => {
    return (
    <Section className={className} {...rest}>
    <Container>
    <div className={styles.content_hero}>
        <h2 className={styles.hero_title}>Увеличение продаж и улучшение узнаваемости бренда "Карельский дом"</h2>
        <p className={styles.text}>Комплексный маркетинговый проект по продвижению компании, занимающейся строительством домов из массивного бруса и каркасных домов, направленный на повышение продаж и узнаваемости бренда на рынке.</p>
    </div>
    <div className={styles.tasks}>
        <h3 className={styles.title}>
        Задачи проекта
        </h3>
        <p className={styles.text}>Основная цель проекта заключалась в увеличении продаж и расширении клиентской базы компании "Карельский дом". В рамках проекта перед нами стояли следующие задачи:</p>
        <ul className={styles.text_list}>
        <li className={styles.text_info}>Проведение маркетингового аудита текущих рекламных кампаний.</li>
        <li className={styles.text_info}>Анализ ниши и конкурентной среды.</li>
        <li className={styles.text_info}>Разработка и внедрение эффективных рекламных стратегий.</li>
        <li className={styles.text_info}>Оптимизация сайта для улучшения пользовательского опыта.</li>
        </ul>
    </div>
    </Container>
    <div className={styles.tasks__problems}>
        <Container className={styles.problems_content}>
        <h3 className={`${styles.title} ${styles.title_problems}`}>
        Проблематика
        </h3>
        <p className={`${styles.text} ${styles.text_problems}` }>Перед началом работы с нами, "Карельский дом" сталкивался с рядом проблем:</p>
        <ul className={styles.text_list}>
        <li className={`${styles.text_info} ${styles.text_problems}` }>Низкий уровень продаж, который составлял в среднем 10 заказов в месяц.</li>
        <li className={`${styles.text_info} ${styles.text_problems}` }>Низкая узнаваемость бренда на рынке.</li>
        <li className={`${styles.text_info} ${styles.text_problems}` }>Неоптимизированный сайт, что приводило к высокому показателю отказов (более 45%).</li>
        </ul>
        </Container>
    </div>
    <Container>
    <div className={styles.tasks}>
        <h3 className={styles.title}>
        Решение
        </h3>
        <ul className={styles.text_list}>
        <li className={styles.text_info}><span className={styles.text_info_white}>Аудит: </span>Мы провели детальный аудит текущих рекламных кампаний и сайта. Это позволило выявить основные проблемы и определить точки роста.</li>
        <li className={styles.text_info}><span className={styles.text_info_white}>Анализ ниши: </span>Исследование ниши и конкурентной среды помогло понять поведение целевой аудитории и выявить уникальные торговые предложения (УТП) конкурентов.</li>
        </ul>
        <p className={styles.text_bg}>Разработка рекламной стратегии</p>
        <ul className={styles.text_list}>
        <li className={styles.text_info}><span className={styles.text_info_white}>Контекстная реклама: </span>Настроили эффективные кампании в Яндекс.Директ, ориентированные на высокочастотные и низкочастотные запросы.</li>
        <li className={styles.text_info}><span className={styles.text_info_white}>Таргетированная реклама в социальных сетях: </span>Создали таргетированные кампании в ВКонтакте, нацеленные на ключевую аудиторию.</li>

        
        </ul>
        <p className={styles.text_bg}>Оптимизация сайта</p>
        <ul className={styles.text_list}>
        <li className={styles.text_info}>Улучшили структуру и дизайн сайта, что сократило показатель отказов до 16%.</li>
        <li className={styles.text_info}>Оптимизировали мобильную версию сайта, что увеличило конверсию на мобильных устройствах на 20%.</li>
       
        </ul>
       
        
        <div className={styles.tasks}>
        <h3 className={styles.title}>
        Результаты
        </h3>
        <img
        src={`/images/cases/cases-karelskiy-dom-metrika1.webp`}
        className={styles.image__main}
        alt=''
        title=''
        />
        <img
        src={`/images/cases/cases-karelskiy-dom-metrika2.webp`}
        className={styles.image__main}
        alt=''
        title=''
        />
        <p className={styles.text}>Результаты проекта превзошли ожидания клиента:</p>
        <ul className={styles.text_list}>
        <li className={styles.text_info}>Объем продаж увеличился<span className={styles.text_info_yellow}> на 193%, </span>достигнув
        <span className={styles.text_info_yellow}> 29 заказов в месяц.</span>
        </li>
        <li className={styles.text_info}>Узнаваемость бренда повысилась <span className={styles.text_info_yellow}>на 37%.</span></li>
        <li className={styles.text_info}>Показатель отказов сократился <span className={styles.text_info_yellow}>до 16%.</span></li>
        </ul>
        <p className={styles.text_full}>
        Проект продемонстрировал, что комплексный подход к маркетингу может значительно улучшить ключевые показатели бизнеса и укрепить его позиции на рынке.
        </p>
        <div className={styles.picture_content}>
        <img
        src={`/images/cases/cases-karelskiy-dom-metrika3.webp`}
        className={styles.image__main}
        alt=''
        title=''
        />
        <img
        src={`/images/cases/cases-karelskiy-dom-metrika4.webp`}
        className={styles.image__main}
        alt=''
        title=''
        />
        <img
        src={`/images/cases/cases-karelskiy-dom-metrika5.webp`}
        className={styles.image__main}
        alt=''
        title=''
        />
        </div>
        <img
        src={`/images/cases/cases-karelskiy-dom-metrika6.webp`}
        className={`${styles.image__main} ${styles.image_main_mid}`}
        alt=''
        title=''
        />
        </div>
        <FormController formType={FORM_TYPE.MAIN_FORM} />
    </div>
    </Container>
    </Section>
    )
}