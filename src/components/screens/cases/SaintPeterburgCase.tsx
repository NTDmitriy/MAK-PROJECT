import { Box } from "@/components/ui-blog/box/Box";
import { Breadcrumbs } from "@/components/ui/breadcrumbs/Breadcrumbs";
import {
  FORM_TYPE,
  FormController,
} from "@/components/ui/forms/FormController";
import { CASES_DASHBOARD_PAGES } from "@/config/url-config/cases-pages.config";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./CasesPages.module.css";

export const SaintPeterburgCase: FC<
  PropsWithChildren<IGenericElementProps>
> = () => {
  return (
    <>
      <Breadcrumbs
        pathname={CASES_DASHBOARD_PAGES.SAINT_PETERSBURG_COMPANY.url}
      />
      <Box>
        <div className={clsx(styles.content_hero, styles.sainpeterburg)}>
          <h2 className={styles.hero_title}>
            Продажа элитных участков в Санкт-Петербурге и Ленинградской области
          </h2>
        </div>
        <div className={styles.tasks}>
          <p className={clsx(styles.text, styles.text_spb)}>
            Проект включал продвижение элитных участков земли в Санкт-Петербурге
            и области, стоимость которых начиналась от 18 млн рублей. Наша цель
            заключалась в привлечении целевой аудитории для покупки земельных
            участков премиум-класса. Данный кейс сосредоточен на работе с
            контекстной рекламой в Яндекс Директ, в то время как реклама в
            Telegram и посевы в ВКонтакте находятся под NDA.
          </p>
        </div>
      </Box>
      <Box>
        <h3 className={styles.title}>Вводные данные о проекте</h3>
        <p className={clsx(styles.text, styles.text_spb)}>
          Продажа элитных участков всегда требует особого подхода к продвижению,
          поскольку такие объекты ориентированы на узкую и специфическую целевую
          аудиторию. В Санкт-Петербурге и области спрос на подобные участки
          высок, но привлечь реальных покупателей довольно сложно из-за высокой
          стоимости объектов, конкуренции в сегменте и необходимости точной
          настройки рекламы.
        </p>
        <p className={clsx(styles.text, styles.text_spb)}>
          Стоимость участков начиналась от 18 млн рублей, что подразумевало
          работу с состоятельной аудиторией, интересующейся инвестициями в
          недвижимость премиум-класса, дачные поселки и покупку земли под
          строительство элитных домов.
        </p>
      </Box>
      <Box>
        <div className={styles.tasks}>
          <h3 className={styles.title}>Задачи проекта</h3>
          <p className={clsx(styles.text, styles.text_spb)}>
            Перед нами стояла цель не только запустить рекламу с нуля, но и
            обеспечить надежную защиту сайта от атак конкурентов и ботов,
            провести детальный технический аудит и оптимизацию сайта для
            улучшения пользовательского опыта. Наши основные задачи включали:
          </p>
          <p className={clsx(styles.text_bg, styles.text_spb_bg)}>
            Запуск и оптимизация контекстной рекламы в Яндекс Директ.
          </p>
          <ul className={styles.text_list}>
            <li className={styles.text_info}>
              Построение стратегии продвижения с нуля.
            </li>
            <li className={styles.text_info}>
              Настройка рекламных кампаний для узкой аудитории с высоким уровнем
              дохода.
            </li>
            <li className={styles.text_info}>
              Постоянная аналитика и масштабирование успешных решений.
            </li>
          </ul>
          <p className={clsx(styles.text_bg, styles.text_spb_bg)}>
            UX/UI исследование сайта.
          </p>
          <ul className={styles.text_list}>
            <li className={styles.text_info}>
              Анализ взаимодействия пользователей с сайтом.
            </li>
            <li className={styles.text_info}>
              Оптимизация интерфейса и пользовательского пути для повышения
              конверсии.
            </li>
          </ul>
          <p className={clsx(styles.text_bg, styles.text_spb_bg)}>
            Борьба с наплывом роботов и атаками конкурентов.
          </p>
          <ul className={styles.text_list}>
            <li className={styles.text_info}>
              Внедрение решений для защиты сайта от DDoS-атак и автоматических
              запросов.
            </li>
            <li className={styles.text_info}>
              Обеспечение безопасности сайта и данных пользователей.
            </li>
          </ul>

          <p className={clsx(styles.text_bg, styles.text_spb_bg)}>
            SEO и технический аудит сайта.
          </p>
          <ul className={styles.text_list}>
            <li className={styles.text_info}>
              Проведение SEO-анализа с целью улучшения видимости сайта в
              поисковых системах.
            </li>
            <li className={styles.text_info}>
              Внедрение рекомендаций по технической оптимизации для ускорения
              загрузки и улучшения индексации сайта.
            </li>
          </ul>
        </div>
      </Box>
      <Box>
        <h3 className={styles.title}>Этапы выполнения проекта</h3>
        <p className={clsx(styles.text, styles.text_info_white)}>
          Запуск рекламы в Яндекс Директ
        </p>
        <p className={clsx(styles.text_info, styles.margin)}>
          Основным инструментом привлечения клиентов была реклама в Яндекс
          Директ, учитывая специфику целевой аудитории и высокую стоимость
          объектов. Для успешного старта и дальнейшего масштабирования кампаний
          была выполнена следующая работа:
        </p>

        <p className={clsx(styles.text_bg, styles.text_spb_bg)}>
          Анализ рынка и конкурентной среды.
        </p>
        <ul className={styles.text_list}>
          <li className={styles.text_info}>
            Мы провели глубокий анализ конкурентных предложений на рынке элитных
            земельных участков. Это помогло нам определить наиболее
            востребованные предложения и конкурентные преимущества, которые
            нужно было продвигать.
          </li>
        </ul>
        <p className={clsx(styles.text_bg, styles.text_spb_bg)}>
          Настройка рекламных кампаний.
        </p>
        <ul className={styles.text_list}>
          <li className={styles.text_info}>
            Кампании были настроены на основе высокочастотных и низкочастотных
            запросов, которые использует состоятельная аудитория для поиска
            элитных земельных участков. Важно было учесть запросы, связанные с
            инвестициями в недвижимость, престижными районами и строительством
            элитных домов.
          </li>
          <li className={styles.text_info}>
            Мы использовали несколько стратегий: от продвижения конкретных
            участков до усиления имиджа бренда, предлагающего эксклюзивные
            участки.
          </li>
          <li className={styles.text_info}>
            Были разработаны привлекательные объявления с акцентом на уникальные
            преимущества участков: местоположение, безопасность, престиж,
            инфраструктура.
          </li>
        </ul>
        <p className={clsx(styles.text_bg, styles.text_spb_bg)}>
          Аналитика и корректировка кампаний.
        </p>
        <ul className={styles.text_list}>
          <li className={styles.text_info}>
            На всех этапах работы велась аналитика по ключевым метрикам (CTR,
            стоимость клика, конверсия). Это позволило нам своевременно
            корректировать ставки, отключать неэффективные ключевые слова и
            масштабировать кампании, которые приносили лучшие результаты.
          </li>
          <li className={styles.text_info}>
            Использование А/В тестирования объявлений помогло найти наиболее
            успешные форматы, которые приводили к увеличению конверсии.
          </li>
        </ul>
      </Box>
      <Box>
        <p className={clsx(styles.text, styles.text_info_white)}>
          UX/UI исследование сайта
        </p>
        <p className={clsx(styles.text, styles.text_info)}>
          При работе с премиальной недвижимостью важно, чтобы сайт был не только
          информативным, но и удобным в использовании, особенно для мобильных
          устройств. Мы провели UX/UI исследование, чтобы улучшить
          взаимодействие пользователей с сайтом.
        </p>
        <p className={clsx(styles.text_bg, styles.text_spb_bg)}>
          Анализ пользовательского пути.
        </p>
        <ul className={styles.text_list}>
          <li className={styles.text_info}>
            Мы проанализировали путь пользователей, начиная с момента перехода
            на сайт и заканчивая отправкой заявки. Особое внимание уделялось
            этапам, на которых пользователи могли покинуть сайт, не совершив
            целевого действия.
          </li>
          <li className={styles.text_info}>
            Было выявлено, что сложная навигация и перегруженность информации на
            страницах могли стать барьерами для пользователей.
          </li>
        </ul>
        <p className={clsx(styles.text_bg, styles.text_spb_bg)}>
          Оптимизация интерфейса.
        </p>
        <ul className={styles.text_list}>
          <li className={styles.text_info}>
            Мы упростили структуру сайта, улучшив логическую цепочку переходов
            между страницами. Разделы, касающиеся объектов, были структурированы
            для быстрого поиска информации.
          </li>
          <li className={styles.text_info}>
            Для премиального сегмента важен акцент на визуальную составляющую,
            поэтому была проведена работа по улучшению визуальных материалов
            (карты участков, 3D-визуализация, фотографии).
          </li>
        </ul>
        <p className={clsx(styles.text_bg, styles.text_spb_bg)}>
          Оптимизация мобильной версии.
        </p>
        <ul className={styles.text_list}>
          <li className={styles.text_info}>
            Проведена оптимизация сайта для мобильных устройств, что значительно
            улучшило конверсию на мобильных устройствах. Увеличение скорости
            загрузки страниц и удобство навигации на мобильных платформах
            повысили лояльность пользователей.
          </li>
        </ul>
      </Box>
      <Box>
        <p className={clsx(styles.text, styles.text_info_white)}>
          Борьба с роботами и атаками конкурентов
        </p>
        <p className={clsx(styles.text, styles.text_info)}>
          На этапе активной рекламной кампании мы столкнулись с проблемой: на
          сайт стали поступать многочисленные автоматические запросы и
          DDoS-атаки, направленные на ухудшение работы ресурса и снижение
          эффективности рекламы. Решение этой проблемы было одной из
          приоритетных задач.
        </p>
        <p className={clsx(styles.text_bg, styles.text_spb_bg)}>
          Внедрение защиты от DDoS-атак.
        </p>
        <ul className={styles.text_list}>
          <li className={styles.text_info}>
            Мы использовали специализированные инструменты для защиты сайта от
            атак конкурентов. В первую очередь это касалось установки сервисов
            по отслеживанию подозрительной активности и автоматическому
            блокированию IP-адресов, откуда происходили атаки.
          </li>
        </ul>
        <p className={clsx(styles.text_bg, styles.text_spb_bg)}>
          Фильтрация трафика.
        </p>
        <ul className={styles.text_list}>
          <li className={styles.text_info}>
            Для исключения трафика от ботов была внедрена система фильтрации,
            которая отсекала подозрительные запросы и автоматически блокировала
            повторяющиеся действия.
          </li>
        </ul>
        <p className={clsx(styles.text_bg, styles.text_spb_bg)}>
          Улучшение безопасности сайта.
        </p>
        <ul className={styles.text_list}>
          <li className={styles.text_info}>
            Были проведены работы по усилению безопасности сайта: установка
            SSL-сертификатов, улучшение защиты данных пользователей и интеграция
            инструментов мониторинга работы сайта в реальном времени.
          </li>
        </ul>
      </Box>
      <Box>
        <p className={clsx(styles.text, styles.text_info_white)}>
          SEO и технический аудит сайта
        </p>
        <p className={clsx(styles.text, styles.text_info)}>
          Параллельно с рекламной кампанией был проведен полный SEO и
          технический аудит сайта, который включал:
        </p>
        <p className={clsx(styles.text_bg, styles.text_spb_bg)}>SEO-аудит.</p>
        <ul className={styles.text_list}>
          <li className={styles.text_info}>
            Мы проанализировали позиции сайта в поисковых системах,
            оптимизировали мета-теги, заголовки, описание страниц и внедрили
            ключевые слова, ориентированные на брендовые и географические
            запросы.
          </li>
          <li className={styles.text_info}>
            Внедрили стратегию контентного наполнения, включая статьи и блоги о
            преимуществах покупки земли в определенных районах СПБ и области,
            что увеличило органический трафик.
          </li>
        </ul>
        <p className={clsx(styles.text_bg, styles.text_spb_bg)}>
          Технический аудит.
        </p>
        <ul className={styles.text_list}>
          <li className={styles.text_info}>
            В ходе технического аудита были выявлены проблемы, замедляющие
            загрузку сайта, и низкая адаптивность страниц под мобильные
            устройства.
          </li>
          <li className={styles.text_info}>
            Мы улучшили производительность сайта, снизив время загрузки до
            минимально возможного, что положительно сказалось на
            пользовательском опыте и ранжировании сайта в поисковых системах.
          </li>
        </ul>
      </Box>
      <Box>
        <h3 className={styles.title}>Этапы выполнения проекта</h3>
        <p className={styles.text}>
          Реализация проекта принесла значительные результаты:
        </p>
        <img
          src={`/images/cases/cases-saintpeterburg-metrica1.webp`}
          className={styles.image__main}
          alt=""
          title=""
        />
        <img
          src={`/images/cases/cases-saintpeterburg-metrica2.webp`}
          className={clsx(styles.image__main, styles.image_spb)}
          alt=""
          title=""
        />

        <h3 className={styles.title}>Заключение</h3>
        <p className={styles.text}>
          Проект по продаже элитных участков в Санкт-Петербурге и области стал
          примером успешного комплексного подхода к маркетинговой стратегии.
          Запуск и оптимизация рекламных кампаний, UX/UI исследования, работа по
          SEO и защите сайта позволили достичь высоких результатов в условиях
          жесткой конкуренции.
        </p>

        <FormController formType={FORM_TYPE.MAIN_FORM} />
      </Box>
    </>
  );
};
