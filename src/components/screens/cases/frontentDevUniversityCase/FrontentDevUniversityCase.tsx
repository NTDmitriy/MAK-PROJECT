import { Container } from "@/components/ui/container/Container"
import { FORM_TYPE, FormController } from "@/components/ui/forms/FormController"
import { Section } from "@/components/ui/section/Section"
import { IGenericElementProps } from "@/interfaces/elements.interface"
import { FC, PropsWithChildren } from "react"
import styles from './FrontentDevUniversityCase.module.css'

export const FrontentDevUniversityCase: FC<PropsWithChildren<IGenericElementProps>> = ({
    className,
    ...rest
}
) => {
    return (
    <Section className={className} {...rest}>
    <Container>
    <div className={styles.content_hero}>
        <h2 className={styles.hero_title}>Увеличение числа заявок и повышение конверсии</h2>
        <p className={styles.text}>Маркетинговая кампания для учебного заведения, специализирующегося на Frontend разработке, направленная на привлечение большего числа заявок и улучшение конверсии на посадочных страницах.</p>
    </div>
    <div className={styles.tasks}>
        <h3 className={styles.title}>
        Задачи проекта
        </h3>
        <p className={styles.text}>Проект был нацелен на решение следующих задач:</p>
        <ul className={styles.text_list}>
        <li className={styles.text_info}>Увеличение количества заявок на бесплатные и платные образовательные продукты.</li>
        <li className={styles.text_info}>Повышение конверсии посадочных страниц для улучшения показателей вовлеченности и регистрации.</li>
        </ul>
    </div>
    </Container>
    <div className={styles.tasks__problems}>
        <Container className={styles.problems_content}>
        <h3 className={`${styles.title} ${styles.title_problems}`}>
        Проблематика
        </h3>
        <p className={`${styles.text} ${styles.text_problems}` }>До начала проекта столкнулись со следующими проблемами:</p>
        <ul className={styles.text_list}>
        <li className={`${styles.text_info} ${styles.text_problems}` }>Низкий уровень заявок на курсы: менее 500 заявок в месяц.</li>
        <li className={`${styles.text_info} ${styles.text_problems}` }>Низкая конверсия посадочных страниц, составляющая около 1,2%.</li>
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
        <li className={styles.text_info}>Для максимальной масштабируемости трафика было создано и настроено 4 рекламных аккаунта, что позволило разнообразить подходы и протестировать различные рекламные стратегии.</li>
        <li className={styles.text_info}>Мы настроили кампании, ориентированные на разные группы целевой аудитории, используя как общие, так и специализированные ключевые слова.</li>
        </ul>
        <p className={styles.text_bg}>Реклама в ВКонтакте</p>
        <ul className={styles.text_list}>
        <li className={styles.text_info}>Запустили рекламные кампании, ориентированные на интересы и поведение пользователей в ВКонтакте.</li>
        <li className={styles.text_info}>Разработали и протестировали несколько типов объявлений, включая карусельные объявления и видеообъявления, что позволило увеличить вовлеченность и CTR.</li>
        </ul>
        <div className={styles.tasks}>
        <h3 className={styles.title}>
        Результаты
        </h3>
        <img
        src={`/images/cases/cases-frontend-metrica1.webp`}
        className={styles.image__main}
        alt=''
        title=''
        />
         <img
        src={`/images/cases/cases-frontend-metrica2.webp`}
        className={styles.image__main}
        alt=''
        title=''
        />
         <img
        src={`/images/cases/cases-frontend-metrica3.webp`}
        className={styles.image__main}
        alt=''
        title=''
        />
         <img
        src={`/images/cases/cases-frontend-metrica4.webp`}
        className={styles.image__main}
        alt=''
        title=''
        />
         <img
        src={`/images/cases/cases-frontend-metrica5.webp`}
        className={styles.image__main}
        alt=''
        title=''
        />
        <p className={styles.text}>Проект принес значительные улучшения:</p>
        <ul className={styles.text_list}>
        <li className={styles.text_info}>Количество заявок увеличилось, достигнув <span className={styles.text_info_yellow}>более 2000 заявок в месяц.</span></li>
        <li className={styles.text_info}>Конверсия посадочных страниц выросла в среднем <span className={styles.text_info_yellow}>от 3,5 до 8%.</span></li>
        <li className={styles.text_info}>Средняя стоимость заявки <span className={styles.text_info_yellow}>снизилась более, чем в 2 раза</span>, что повысило рентабельность рекламных кампаний.</li>
       
        </ul>
        <p className={styles.text_full}>Проект продемонстрировал, что использование различных рекламных каналов и стратегий может значительно повысить эффективность маркетинговых усилий и принести ощутимые результаты в короткие сроки.</p>
        </div>
        <div className={styles.picture_content}>
        <img
        src={`/images/cases/cases-frontend-yandx1.webp`}
        className={styles.image__main}
        alt=''
        title=''
        />
          <img
        src={`/images/cases/cases-frontend-yandx2.webp`}
        className={styles.image__main}
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