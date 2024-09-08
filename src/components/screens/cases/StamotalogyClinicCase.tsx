import { Container } from "@/components/ui/container/Container";
import { FORM_TYPE, FormController } from "@/components/ui/forms/FormController";
import { Section } from "@/components/ui/section/Section";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import { FC, PropsWithChildren } from "react";
import styles from './Cases.module.css';

export const StamotalogyClinicCase: FC<PropsWithChildren<IGenericElementProps>> = ({
    className,
    ...rest
}
) => {
    return (
    <Section className={className} {...rest}>
    <Container>
    <div className={styles.content_hero}>
        <h2 className={styles.hero_title}>Комплексное продвижение сети стоматологических клиник в Санкт-Петербурге</h2>
        <p className={styles.text}>Проект по привлечению новых пациентов и повышению узнаваемости бренда стоматологических клиник через рекламу в Яндекс Директ, ВКонтакте и разработку оптимизированного сайта.</p>
    </div>
    <div className={styles.tasks}>
        <h3 className={styles.title}>
        Задачи проекта
        </h3>
        <p className={styles.text}>Основные задачи проекта включали:        </p>
        <ul className={styles.text_list}>
        <li className={styles.text_info}>Разработка современного и удобного сайта для сети стоматологических клиник.</li>
        <li className={styles.text_info}>Настройка и оптимизация рекламных кампаний в Яндекс Директ для привлечения целевого трафика.</li>
        <li className={styles.text_info}>Проведение рекламных кампаний в ВКонтакте для повышения вовлеченности и привлечения новых клиентов.</li>
        <li className={styles.text_info}>Минимальная SEO-оптимизация сайта под брендовые запросы для улучшения видимости в поисковых системах.</li>
        </ul>
    </div>
    </Container>
    <div className={styles.tasks__problems}>
        <Container className={styles.problems_content}>
        <h3 className={`${styles.title} ${styles.title_problems}`}>
        Проблематика
        </h3>
        <p className={`${styles.text} ${styles.text_problems}` }>До начала нашего сотрудничества сеть стоматологических клиник сталкивалась с рядом трудностей
        :</p>
        <ul className={styles.text_list}>
        <li className={`${styles.text_info} ${styles.text_problems}` }>Отсутствие современного и функционального веб-сайта, что снижало доверие потенциальных клиентов.</li>
        <li className={`${styles.text_info} ${styles.text_problems}` }>Низкая эффективность текущих рекламных кампаний с недостаточным количеством целевых обращений.</li>
        <li className={`${styles.text_info} ${styles.text_problems}` }>Недостаточная узнаваемость бренда в интернете и низкий органический трафик.</li>
        </ul>
        </Container>
    </div>
    <Container>
    <div className={styles.tasks}>
        <h3 className={styles.title}>
        Решение
        </h3>
        <p className={styles.text_bg}>Разработка сайта</p>
        <ul className={styles.text_list}>
        <li className={styles.text_info}>Создали современный, удобный и интуитивно понятный сайт, который представляет услуги клиник и их преимущества.</li>
        <li className={styles.text_info}>Внедрили удобную систему онлайн-записи, что упростило процесс регистрации на прием для пациентов.</li>
        <li className={styles.text_info}>Обеспечили мобильную адаптацию сайта, чтобы пользователи могли удобно пользоваться им с любых устройств.</li>
        
        </ul>
        <p className={styles.text_bg}>Реклама в Яндекс Директ</p>
        <ul className={styles.text_list}>
        <li className={styles.text_info}>Настроили рекламные кампании, ориентированные на ключевые запросы, связанные со стоматологическими услугами в Санкт-Петербурге.</li>
        <li className={styles.text_info}>Запустили ретаргетинговые кампании, чтобы напоминать потенциальным клиентам о клинике и побуждать их к записи на прием.</li>
        <li className={styles.text_info}>Провели A/B тестирование объявлений и ключевых слов для повышения CTR и уменьшения стоимости клика.</li>
        </ul>
        <p className={styles.text_bg}>Реклама в ВКонтакте</p>
        <ul className={styles.text_list}>
        <li className={styles.text_info}>Запустили таргетированные рекламные кампании, ориентированные на жителей Санкт-Петербурга, интересующихся стоматологическими услугами.</li>
        <li className={styles.text_info}>Разработали контент-план для ведения страницы клиник в ВКонтакте, включая публикации о преимуществах клиники, отзывы клиентов и полезные советы по уходу за зубами.</li>
        </ul>
        <p className={styles.text_bg}>Минимальная SEO-оптимизация под брендовые запросы</p>
        <ul className={styles.text_list}>
        <li className={styles.text_info}>Оптимизировали сайт под брендовые запросы, улучшив его видимость в поисковых системах.</li>
        <li className={styles.text_info}>Провели базовую оптимизацию мета-тегов и контента на сайте.</li>
        </ul>
        
        <div className={styles.tasks}>
        <h3 className={styles.title}>
        Результаты
        </h3>
        <img
        src={`/images/cases/cases-stamotologiya-metrica1.webp`}
        className={styles.image__main}
        alt=''
        title=''
        />
        <p className={styles.text}>Реализация проекта принесла значительные улучшения:</p>
        <ul className={styles.text_list}>
        <li className={styles.text_info}>Количество целевых обращений через сайт увеличилось<span className={styles.text_info_yellow}> на 250%, </span>достигнув
        <span className={styles.text_info_yellow}> 500 заявок в месяц.</span>
        </li>
        <li className={styles.text_info}>Узнаваемость бренда в интернете повысилась <span className={styles.text_info_yellow}>на 40%,</span> что способствовало росту органического трафика <span className={styles.text_info_yellow}>на 60%,</span></li>
        <li className={styles.text_info}>Средняя стоимость заявки <span className={styles.text_info_yellow}>снизилась более, чем в 2 раза</span>, что повысило рентабельность рекламных кампаний.</li>
        </ul>
        <p className={styles.text_full}>Проект продемонстрировал, что комплексный подход к маркетингу, включающий разработку современного сайта, настройку рекламных кампаний и минимальную SEO-оптимизацию, может значительно повысить эффективность маркетинговых усилий и обеспечить стабильный рост показателей.
        </p>
        </div>
        <FormController formType={FORM_TYPE.MAIN_FORM} />
    </div>
    </Container>
    </Section>
    )
}