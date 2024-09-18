import { Box } from "@/components/ui-blog/box/Box";
import { Breadcrumbs } from "@/components/ui/breadcrumbs/Breadcrumbs";
import {
  FORM_TYPE,
  FormController,
} from "@/components/ui/forms/FormController";
import { CASES_DASHBOARD_PAGES } from "@/config/url-config/cases-pages.config";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import { FC, PropsWithChildren } from "react";
import styles from "./CasesPages.module.css";

export const FurnitureStoreCase: FC<
  PropsWithChildren<IGenericElementProps>
> = ({ className, ...rest }) => {
  return (
    <>
      <Breadcrumbs pathname={CASES_DASHBOARD_PAGES.FURNITURE_STORE.url} />
      <Box className={className} {...rest}>
        <div className={styles.content_hero}>
          <h2 className={styles.hero_title}>
            Комплексное увеличение продаж и оптимизация маркетинговых усилий для
            компании по продаже мебели
          </h2>
          <p className={styles.text}>
            Проект по SEO-продвижению, настройке рекламных кампаний в Яндекс
            Директ и внедрению сквозной аналитики для компании, занимающейся
            продажей мебели в Москве и Московской области.
          </p>
        </div>
        <div className={styles.tasks}>
          <h3 className={styles.title}>Задачи проекта</h3>
          <p className={styles.text}>Основные задачи проекта включали:</p>
          <ul className={styles.text_list}>
            <li className={styles.text_info}>
              Повышение видимости сайта в поисковых системах через
              SEO-продвижение.
            </li>
            <li className={styles.text_info}>
              Настройка и оптимизация рекламных кампаний в Яндекс Директ для
              привлечения целевого трафика.
            </li>
            <li className={styles.text_info}>
              Внедрение системы сквозной аналитики для отслеживания и
              оптимизации маркетинговых усилий.
            </li>
          </ul>
        </div>
      </Box>
      <Box>
        <div className={styles.tasks__problems}>
          <div className={styles.problems_content}>
            <h3 className={`${styles.title} ${styles.title_problems}`}>
              Проблематика
            </h3>
            <p className={`${styles.text} ${styles.text_problems}`}>
              До начала нашего сотрудничества компания по продаже мебели
              сталкивалась с рядом трудностей:
            </p>
            <ul className={styles.text_list}>
              <li className={`${styles.text_info} ${styles.text_problems}`}>
                Низкая видимость сайта в поисковых системах, что приводило к
                недостаточному органическому трафику.
              </li>
              <li className={`${styles.text_info} ${styles.text_problems}`}>
                Высокие затраты на рекламу с низкой конверсией и недостаточным
                количеством целевых обращений.
              </li>
              <li className={`${styles.text_info} ${styles.text_problems}`}>
                Отсутствие сквозной аналитики, что затрудняло отслеживание
                реальной эффективности различных рекламных каналов.
              </li>
            </ul>
          </div>
        </div>
      </Box>
      <Box>
        <div className={styles.tasks}>
          <h3 className={styles.title}>Решение</h3>
          <p className={styles.text_bg}>SEO-продвижение</p>
          <ul className={styles.text_list}>
            <li className={styles.text_info}>
              Провели полный аудит сайта, выявив основные технические ошибки и
              проблемы, мешающие эффективному ранжированию в поисковых системах.
            </li>
            <li className={styles.text_info}>
              Оптимизировали мета-теги, контент и структуру сайта, улучшили
              внутреннюю перелинковку.
            </li>
            <li className={styles.text_info}>
              Создали и внедрили стратегию контент-маркетинга, включающую
              написание и публикацию статей, блогов и других материалов,
              полезных для целевой аудитории.
            </li>
            <li className={styles.text_info}>
              Работали над увеличением ссылочной массы путем получения
              качественных внешних ссылок с авторитетных сайтов.
            </li>
          </ul>
          <p className={styles.text_bg}>Реклама в Яндекс Директ</p>
          <ul className={styles.text_list}>
            <li className={styles.text_info}>
              Провели детальный анализ текущих рекламных кампаний и определили
              ключевые направления для улучшения.
            </li>
            <li className={styles.text_info}>
              Настроили новые кампании с использованием точного таргетинга и
              ретаргетинга, чтобы привлечь более релевантный трафик.
            </li>
            <li className={styles.text_info}>
              Запустили A/B тестирование объявлений и ключевых слов для
              определения наиболее эффективных комбинаций и увеличения CTR.
            </li>
            <li className={styles.text_info}>
              Оптимизировали рекламные бюджеты, сосредоточившись на наиболее
              результативных ключевых словах и объявлениях.
            </li>
          </ul>
          <p className={styles.text_bg}>Внедрение сквозной аналитики RoiStat</p>
          <ul className={styles.text_list}>
            <li className={styles.text_info}>
              Внедрили систему сквозной аналитики RoiStat, что позволило
              отслеживать путь каждого клиента от первого клика до покупки.
            </li>
            <li className={styles.text_info}>
              Настроили новые кампании с использованием точного таргетинга и
              ретаргетинга, чтобы привлечь более релевантный трафик.
            </li>
            <li className={styles.text_info}>
              Настроили интеграцию с CRM-системой клиента, чтобы объединить
              данные по продажам и маркетингу и получить полное представление о
              рентабельности различных каналов.
            </li>
            <li className={styles.text_info}>
              Регулярно анализировали данные аналитики, выявляли узкие места и
              вносили корректировки в маркетинговую стратегию для повышения
              эффективности.
            </li>
          </ul>
          <img
            src={`/images/cases/cases-magazin-mebeli-metrica1.webp`}
            className={styles.image__main}
            alt=""
            title=""
          />
          <div className={styles.tasks}>
            <h3 className={styles.title}>Результаты (за 3 года)</h3>

            <p className={styles.text}>
              Реализация проекта принесла значительные улучшения:
            </p>
            <ul className={styles.text_list}>
              <li className={styles.text_info}>
                Количество заявок увеличилось, достигнув{" "}
                <span className={styles.text_info_yellow}>
                  более 2000 заявок в месяц.
                </span>
              </li>
              <li className={styles.text_info}>
                Конверсия посадочных страниц выросла в среднем{" "}
                <span className={styles.text_info_yellow}>от 3,5 до 8%.</span>
              </li>
              <li className={styles.text_info}>
                Средняя стоимость заявки{" "}
                <span className={styles.text_info_yellow}>
                  снизилась более, чем в 2 раза
                </span>
                , что повысило рентабельность рекламных кампаний.
              </li>
            </ul>
            <p className={styles.text_full}>
              Проект продемонстрировал, что использование различных рекламных
              каналов и стратегий может значительно повысить эффективность
              маркетинговых усилий и принести ощутимые результаты в короткие
              сроки.
            </p>
          </div>

          <FormController formType={FORM_TYPE.MAIN_FORM} />
        </div>
      </Box>
    </>
  );
};
