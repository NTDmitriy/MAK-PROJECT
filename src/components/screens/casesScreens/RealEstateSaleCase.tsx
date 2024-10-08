import {
  CaseBoxTitle,
  CaseList,
  CaseListItem,
  CaseListTitle,
  CaseText,
  CaseTextTitle,
} from "@/components/ui-case";
import { CaseHero } from "@/components/ui-case/caseHero/CaseHero";
import { Box } from "@/components/ui/box/Box";
import {
  FORM_TYPE,
  FormController,
} from "@/components/ui/forms/FormController";
import { ALL_CASES_CONTENT } from "@/content/all-cases/all-cases.content";
import { FC } from "react";

export const RealEstateSaleCase: FC = () => {
  const caseData = ALL_CASES_CONTENT.REAL_ESTATE_SALE;

  return (
    <>
  
      <CaseHero heroContent={caseData} />

      <Box>
        <CaseText>
          Проект включал продвижение элитных участков земли в Санкт-Петербурге и области, стоимость которых начиналась от 18 млн рублей. Наша цель
          заключалась в привлечении целевой аудитории для покупки земельных
          участков премиум-класса. Данный кейс сосредоточен на работе с контекстной рекламой в Яндекс Директ, в то время как реклама в Telegram и посевы в ВКонтакте находятся под NDA.
        </CaseText>
      </Box>

      <Box>
        <CaseBoxTitle>Вводные данные о проекте</CaseBoxTitle>
        <CaseText margin>
          Продажа элитных участков всегда требует особого подхода к продвижению,
          поскольку такие объекты ориентированы на узкую и специфическую целевую
          аудиторию. В Санкт-Петербурге и области спрос на подобные участки
          высок, но привлечь реальных покупателей довольно сложно из-за высокой
          стоимости объектов, конкуренции в сегменте и необходимости точной
          настройки рекламы.
        </CaseText>
        <CaseText>
          Стоимость участков начиналась от 18 млн рублей, что подразумевало
          работу с состоятельной аудиторией, интересующейся инвестициями в недвижимость премиум-класса, дачные поселки и покупку земли под строительство элитных домов.
        </CaseText>
      </Box>

      <Box>
        <CaseBoxTitle>Задачи проекта</CaseBoxTitle>
        <CaseText margin>
          Перед нами стояла цель не только запустить рекламу с нуля, но и обеспечить надежную защиту сайта от атак конкурентов и ботов, провести
          детальный технический аудит и оптимизацию сайта для улучшения
          пользовательского опыта. Наши основные задачи включали:
        </CaseText>

        <CaseListTitle>
          Запуск и оптимизация контекстной рекламы в Яндекс Директ.
        </CaseListTitle>
        <CaseList margin marketed>
          <CaseListItem>Построение стратегии продвижения с нуля.</CaseListItem>
          <CaseListItem>
            Настройка рекламных кампаний для узкой аудитории с высоким уровнем
            дохода.
          </CaseListItem>
          <CaseListItem>
            Постоянная аналитика и масштабирование успешных решений.
          </CaseListItem>
        </CaseList>

        <CaseListTitle>
          Борьба с наплывом роботов и атаками конкурентов.
        </CaseListTitle>
        <CaseList margin marketed>
          <CaseListItem>
            Внедрение решений для защиты сайта от DDoS-атак и автоматических
            запросов.
          </CaseListItem>
          <CaseListItem>
            Обеспечение безопасности сайта и данных пользователей.
          </CaseListItem>
        </CaseList>

        <CaseListTitle>SEO и технический аудит сайта</CaseListTitle>
        <CaseList marketed>
          <CaseListItem>
            Проведение SEO-анализа с целью улучшения видимости сайта в поисковых
            системах.
          </CaseListItem>
          <CaseListItem>
            Внедрение рекомендаций по технической оптимизации для ускорения
            загрузки и улучшения индексации сайта.
          </CaseListItem>
        </CaseList>
      </Box>

      <Box>
        <CaseBoxTitle>Этапы выполнения проекта</CaseBoxTitle>
        <CaseTextTitle>Запуск рекламы в Яндекс Директ</CaseTextTitle>
        <CaseText margin>
          Основным инструментом привлечения клиентов была реклама в Яндекс
          Директ, учитывая специфику целевой аудитории и высокую стоимость
          объектов. Для успешного старта и дальнейшего масштабирования кампаний
          была выполнена следующая работа:
        </CaseText>

        <CaseListTitle>Анализ рынка и конкурентной среды</CaseListTitle>
        <CaseList margin marketed>
          <CaseListItem>
            Мы провели глубокий анализ конкурентных предложений на рынке элитных
            земельных участков. Это помогло нам определить наиболее
            востребованные предложения и конкурентные преимущества, которые
            нужно было продвигать.
          </CaseListItem>
        </CaseList>

        <CaseListTitle>Настройка рекламных кампаний</CaseListTitle>
        <CaseList margin marketed>
          <CaseListItem>
            Кампании были настроены на основе высокочастотных и низкочастотных
            запросов, которые использует состоятельная аудитория для поиска
            элитных земельных участков. Важно было учесть запросы, связанные с инвестициями в недвижимость, престижными районами и строительством
            элитных домов.
          </CaseListItem>
          <CaseListItem>
            Мы использовали несколько стратегий: от продвижения конкретных
            участков до усиления имиджа бренда, предлагающего эксклюзивные
            участки.
          </CaseListItem>
          <CaseListItem>
            Были разработаны привлекательные объявления с акцентом на уникальные
            преимущества участков: местоположение, безопасность, престиж,
            инфраструктура.
          </CaseListItem>
        </CaseList>

        <CaseListTitle>Аналитика и корректировка кампаний</CaseListTitle>
        <CaseList marketed margin>
          <CaseListItem>
            На всех этапах работы велась аналитика по ключевым метрикам (CTR,
            стоимость клика, конверсия). Это позволило нам своевременно
            корректировать ставки, отключать неэффективные ключевые слова и масштабировать кампании, которые приносили лучшие результаты.
          </CaseListItem>
          <CaseListItem>
            Использование А/В тестирования объявлений помогло найти наиболее
            успешные форматы, которые приводили к увеличению конверсии.
          </CaseListItem>
        </CaseList>

        <CaseTextTitle>UX/UI исследование сайта</CaseTextTitle>
        <CaseText margin>
          При работе с премиальной недвижимостью важно, чтобы сайт был не только
          информативным, но и удобным в использовании, особенно для мобильных
          устройств. Мы провели UX/UI исследование, чтобы улучшить
          взаимодействие пользователей с сайтом.
        </CaseText>

        <CaseListTitle>Анализ пользовательского пути</CaseListTitle>
        <CaseList marketed margin>
          <CaseListItem>
            Мы проанализировали путь пользователей, начиная с момента перехода
            на сайт и заканчивая отправкой заявки. Особое внимание уделялось
            этапам, на которых пользователи могли покинуть сайт, не совершив
            целевого действия.
          </CaseListItem>
          <CaseListItem>
            Было выявлено, что сложная навигация и перегруженность информации на страницах могли стать барьерами для пользователей.
          </CaseListItem>
        </CaseList>

        <CaseListTitle>Оптимизация интерфейса</CaseListTitle>
        <CaseList marketed margin>
          <CaseListItem>
            Мы упростили структуру сайта, улучшив логическую цепочку переходов
            между страницами. Разделы, касающиеся объектов, были структурированы
            для быстрого поиска информации.
          </CaseListItem>
          <CaseListItem>
            Для премиального сегмента важен акцент на визуальную составляющую,
            поэтому была проведена работа по улучшению визуальных материалов
            (карты участков, 3D-визуализация, фотографии).
          </CaseListItem>
        </CaseList>

        <CaseListTitle>Оптимизация мобильной версии</CaseListTitle>
        <CaseList marketed margin>
          <CaseListItem>
            Проведена оптимизация сайта для мобильных устройств, что значительно
            улучшило конверсию на мобильных устройствах. Увеличение скорости
            загрузки страниц и удобство навигации на мобильных платформах
            повысили лояльность пользователей.
          </CaseListItem>
        </CaseList>

        <CaseTextTitle>Борьба с роботами и атаками конкурентов</CaseTextTitle>
        <CaseText margin>
          На этапе активной рекламной кампании мы столкнулись с проблемой: на сайт стали поступать многочисленные автоматические запросы и DDoS-атаки, направленные на ухудшение работы ресурса и снижение
          эффективности рекламы. Решение этой проблемы было одной из приоритетных задач.
        </CaseText>

        <CaseListTitle>Внедрение защиты от DDoS-атак</CaseListTitle>
        <CaseList marketed margin>
          <CaseListItem>
            Мы использовали специализированные инструменты для защиты сайта от атак конкурентов. В первую очередь это касалось установки сервисов
            по отслеживанию подозрительной активности и автоматическому
            блокированию IP-адресов, откуда происходили атаки.
          </CaseListItem>
        </CaseList>

        <CaseListTitle>Фильтрация трафика</CaseListTitle>
        <CaseList marketed margin>
          <CaseListItem>
            Для исключения трафика от ботов была внедрена система фильтрации,
            которая отсекала подозрительные запросы и автоматически блокировала
            повторяющиеся действия.
          </CaseListItem>
        </CaseList>

        <CaseListTitle>Улучшение безопасности сайта</CaseListTitle>
        <CaseList marketed margin>
          <CaseListItem>
            Были проведены работы по усилению безопасности сайта: установка
            SSL-сертификатов, улучшение защиты данных пользователей и интеграция
            инструментов мониторинга работы сайта в реальном времени.
          </CaseListItem>
        </CaseList>

        <CaseTextTitle>SEO и технический аудит сайта</CaseTextTitle>
        <CaseText margin>
          Параллельно с рекламной кампанией был проведен полный SEO и технический аудит сайта, который включал:
        </CaseText>

        <CaseListTitle>SEO-аудит</CaseListTitle>
        <CaseList marketed margin>
          <CaseListItem>
            Мы проанализировали позиции сайта в поисковых системах,
            оптимизировали мета-теги, заголовки, описание страниц и внедрили
            ключевые слова, ориентированные на брендовые и географические
            запросы.
          </CaseListItem>
          <CaseListItem>
            Внедрили стратегию контентного наполнения, включая статьи и блоги о преимуществах покупки земли в определенных районах СПБ и области,
            что увеличило органический трафик.
          </CaseListItem>
        </CaseList>
        <CaseListTitle>Технический аудит</CaseListTitle>
        <CaseList marketed>
          <CaseListItem>
            В ходе технического аудита были выявлены проблемы, замедляющие
            загрузку сайта, и низкая адаптивность страниц под мобильные
            устройства.
          </CaseListItem>
          <CaseListItem>
            Мы улучшили производительность сайта, снизив время загрузки до минимально возможного, что положительно сказалось на пользовательском опыте и ранжировании сайта в поисковых системах
          </CaseListItem>
        </CaseList>
      </Box>

      <Box>
        <CaseBoxTitle>Результаты</CaseBoxTitle>
        <CaseText margin>
          Реализация проекта принесла значительные результаты:
        </CaseText>
        <CaseList>
          <CaseListItem>
            <img
              src="/images/cases/cases-saintpeterburg-metrica1.webp"
              alt="Продажа элитных участков в Санкт-Петербурге и Ленинградской области"
            />
          </CaseListItem>
          <CaseListItem>
            <img
              src="/images/cases/cases-saintpeterburg-metrica2.webp"
              alt="Продажа элитных участков в Санкт-Петербурге и Ленинградской области"
            />
          </CaseListItem>
        </CaseList>
      </Box>

      <Box>
        <CaseBoxTitle>Заключение</CaseBoxTitle>
        <CaseText margin>
          Проект по продаже элитных участков в Санкт-Петербурге и области стал
          примером успешного комплексного подхода к маркетинговой стратегии.
          Запуск и оптимизация рекламных кампаний, UX/UI исследования, работа по
          SEO и защите сайта позволили достичь высоких результатов в условиях
          жесткой конкуренции.
        </CaseText>

        <FormController formType={FORM_TYPE.MAIN_FORM} />
      </Box>
    </>
  );
};
