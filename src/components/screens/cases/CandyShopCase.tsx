import { Box } from "@/components/ui-blog/box/Box";
import { Breadcrumbs } from "@/components/ui/breadcrumbs/Breadcrumbs";
import {
  FORM_TYPE,
  FormController,
} from "@/components/ui/forms/FormController";
import { CASES_DASHBOARD_PAGES } from "@/config/url-config/cases-pages.config";
import clsx from "clsx";
import { FC } from "react";
import styles from "./CasesPages.module.css";

export const CandyShopCase: FC = () => {
  return (
    <>
      <Breadcrumbs pathname={CASES_DASHBOARD_PAGES.CANDY_SHOP.url} />
      <Box>
        <div className={clsx(styles.content_hero, styles.candy_shop)}>
          <h2 className={styles.hero_title}>
            Эффективное привлечение клиентов для кондитерской в Краснодаре
          </h2>
          <p className={`${styles.text} ${styles.text_hero}`}>
            Проект по продвижению кондитерской в Краснодаре с помощью настройки
            и оптимизации рекламных кампаний в Яндекс Директ для увеличения
            трафика и продаж.
          </p>
        </div>
        <div className={styles.tasks}>
          <h3 className={styles.title}>Задачи проекта</h3>
          <p className={styles.text}>
            <span className={styles.text_info_white}>
              Основные задачи проекта включали:
            </span>
          </p>
          <ul className={styles.text_list}>
            <li className={styles.text_info}>
              Настройку и оптимизацию рекламных кампаний в Яндекс Директ для
              привлечения целевой аудитории.
            </li>
            <li className={styles.text_info}>
              Увеличение количества заказов и посещений кондитерской.
            </li>
            <li className={styles.text_info}>
              Повышение узнаваемости бренда на локальном рынке.
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
              До начала нашего сотрудничества кондитерская сталкивалась со
              следующими трудностями:
            </p>
            <ul className={styles.text_list}>
              <li className={`${styles.text_info} ${styles.text_problems}`}>
                Низкая осведомленность жителей Краснодара о кондитерской и её
                продукции
              </li>
              <li className={`${styles.text_info} ${styles.text_problems}`}>
                Отсутствие эффективной онлайн-рекламы, что приводило к
                недостаточному потоку клиентов.
              </li>
              <li className={`${styles.text_info} ${styles.text_problems}`}>
                Высокая конкуренция на локальном рынке, затрудняющая привлечение
                новых клиентов.
              </li>
            </ul>
          </div>
        </div>
      </Box>
      <Box>
        <div className={styles.tasks}>
          <h3 className={styles.title}>Решение - Реклама в Яндекс Директ</h3>
        </div>
        <p className={styles.text_bg}>
          Анализ целевой аудитории и конкурентов:
        </p>
        <p className={styles.text}>
          Провели детальный анализ рынка и конкурентов, чтобы определить
          уникальные преимущества кондитерской.
        </p>
        <p className={styles.text_bg}>Настройка геотаргетинга:</p>
        <p className={styles.text}>
          Ограничили показы рекламы территорией Краснодара и ближайших
          населенных пунктов для максимальной релевантности.
        </p>
        <p className={styles.text_bg}>Подбор ключевых слов:</p>
        <p className={styles.text}>
          Подобрали релевантные высокочастотные и низкочастотные запросы,
          связанные с кондитерскими изделиями, тортами на заказ, выпечкой и
          другими услугами.
        </p>
        <p className={styles.text_bg}>Создание привлекательных объявлений:</p>
        <p className={styles.text}>
           Разработали креативные объявления с яркими изображениями продукции и
          призывами к действию, подчеркивающими уникальные предложения и акции.
        </p>
        <p className={styles.text_bg}>Оптимизация ставок и бюджета:</p>
        <p className={styles.text}>
          Настроили автоматические стратегии назначения ставок для оптимального
          расходования бюджета и повышения ROI.
        </p>
        <p className={styles.text_bg}>Ретаргетинг:</p>
        <p className={styles.text}>
          Запустили кампании ретаргетинга для возвращения на сайт пользователей,
          которые уже проявили интерес к продукции, но не совершили покупку.
        </p>

        <div className={styles.tasks}>
          <h3 className={styles.title}>Результаты</h3>
          <img
            className={styles.image__main}
            src="/images/cases/cases-candy-shop-metrika1.webp"
            alt=""
          />
        </div>
        <p className={styles.text}>
          Реализация проекта принесла следующие положительные результаты:
        </p>
        <ul className={styles.text_list}>
          <li className={styles.text_info}>
            <span className={styles.text_info_white}>Точный таргетинг: </span>
            на заинтересованную аудиторию с учётом её поведения и предпочтений.
          </li>
          <li className={styles.text_info}>
            <span className={styles.text_info_white}>
              Креативные и релевантные объявления,
            </span>
            вызывающие интерес и побуждающие к действию.
          </li>
          <li className={styles.text_info}>
            <span className={styles.text_info_white}>
              Постоянная оптимизация
            </span>
            кампании на основе аналитики и результатов.
          </li>
        </ul>
        <p className={styles.text}>
          Проект продемонстрировал, что профессиональная настройка и управление
          рекламными кампаниями в Яндекс Директ способны значительно увеличить
          продажи и укрепить позиции бизнеса даже в условиях высокой
          конкуренции.
        </p>

        <div className={styles.picture_content}>
          <img
            src={`/images/cases/cases-candy-shop-metrika2.webp`}
            className={styles.image__main}
            alt=""
            title=""
          />
          <img
            src={`/images/cases/cases-candy-shop-metrika3.webp`}
            className={styles.image__main}
            alt=""
            title=""
          />
          <img
            src={`/images/cases/cases-candy-shop-metrika4.webp`}
            className={styles.image__main}
            alt=""
            title=""
          />
        </div>
        <FormController formType={FORM_TYPE.MAIN_FORM} />
      </Box>
    </>
  );
};
