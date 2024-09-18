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

export const DestroyRoomCase: FC = () => {
  return (
    <>
      <Breadcrumbs pathname={CASES_DASHBOARD_PAGES.ROOM_DESTROY.url} />
      <Box>
        <div className={clsx(styles.content_hero, styles.destroy_room)}>
          <h2 className={styles.hero_title}>
            Комната ярости Udestroy в Москве
          </h2>
          <p className={`${styles.text} ${styles.text_hero}`}>
            Проект по продвижению комнаты ярости "Udestroy" в Москве с помощью
            лидогенерации в Яндекс Директ для увеличения количества бронирований
            и привлечения целевой аудитории.
          </p>
        </div>
        <div className={styles.tasks}>
          <h3 className={styles.title}>Задачи проекта</h3>
          <p className={styles.text}>
            Увеличить количество бронирований и заявок, привлекая целевую
            аудиторию с помощью эффективной лидогенерации в Яндекс Директ.
          </p>
        </div>
        <div className={styles.tasks}>
          <h3 className={styles.title}>Решение</h3>
        </div>
        <p className={styles.text_bg}>Анализ аудитории и конкурентов:</p>
        <ul className={styles.text_list}>
          <li className={styles.text_info}>
            Определили портрет целевой аудитории: молодые активные люди 18-35
            лет, ищущие нестандартные развлечения.
          </li>
          <li className={styles.text_info}>
            Изучили конкурентов и выделили уникальные преимущества "Udestroy".
          </li>
        </ul>
        <p className={styles.text_bg}>
          Настройка рекламной кампании в Яндекс Директ:
        </p>
        <ul className={styles.text_list}>
          <li className={styles.text_info}>
            <span className={styles.text_info_white}>Ключевые слова: </span>
            Подобрали высококонверсионные запросы, связанные с комнатами ярости,
            снятием стресса и необычными развлечениями в Москве.
          </li>
          <li className={styles.text_info}>
            <span className={styles.text_info_white}>Объявления: </span>
            Создали привлекательные заголовки и описания с чёткими призывами к
            действию и указанием уникальных предложений.
          </li>
          <li className={styles.text_info}>
            <span className={styles.text_info_white}>Таргетинг: </span>
            Настроили географический таргетинг на Москву и ближайшие районы,
            время показа объявлений — с учётом пиков активности целевой
            аудитории.
          </li>
          <li className={styles.text_info}>
            <span className={styles.text_info_white}>Ретаргетинг: </span>
            Запустили кампании на пользователей, ранее посещавших сайт или
            совершавших взаимодействия в социальных сетях.
          </li>
        </ul>
        <p className={styles.text_bg}>Оптимизация и мониторинг:</p>
        <ul className={styles.text_list}>
          <li className={styles.text_info}>
            Еженедельно анализировали показатели кампании (CPC, CTR, конверсия).
          </li>
          <li className={styles.text_info}>
            Вносили коррективы в объявления и ставки для улучшения результатов.
          </li>
        </ul>
        <div className={styles.tasks}>
          <h3 className={styles.title}>Результаты</h3>
          <img
            className={styles.image__main}
            src="/images/cases/cases-destroy-room-metrica1.webp"
            alt=""
          />
        </div>
        <h3 className={styles.title}>Ключевые факторы успеха</h3>
        <ul className={styles.text_list}>
          <li className={styles.text_info}>
            <span className={styles.text_info_white}>Точный таргетинг: </span>
            на заинтересованную аудиторию с учётом её поведения и предпочтений.
          </li>
          <li className={styles.text_info}>
            <span className={styles.text_info_white}>
              Креативные и релевантные объявления,{" "}
            </span>
            вызывающие интерес и побуждающие к действию.
          </li>
          <li className={styles.text_info}>
            <span className={styles.text_info_white}>
              Постоянная оптимизация{" "}
            </span>
            кампании на основе аналитики и результатов.
          </li>
        </ul>
        <div className={styles.destroy_room_content_block}>
          <div className={styles.tasks}>
            <h3 className={styles.title}>Вывод</h3>
            <p className={`${styles.text} ${styles.text_hero}`}>
              Использование лидогенерации в Яндекс Директ с продуманной
              стратегией и регулярной оптимизацией позволило комнате ярости
              "Udestroy" значительно увеличить поток клиентов и занять прочные
              позиции на рынке развлечений Москвы.
            </p>
          </div>
          <div className={styles.picture_content_destroy_room}>
            <img
              className={styles.image__main}
              src="/images/cases/cases-destroy-room-metrika2.webp"
              alt=""
            />
            <img
              className={styles.image__main}
              src="/images/cases/cases-destroy-room-metrika3.webp"
              alt=""
            />
          </div>
        </div>
      </Box>

      <Box>
        <FormController formType={FORM_TYPE.MAIN_FORM} />
      </Box>
    </>
  );
};
