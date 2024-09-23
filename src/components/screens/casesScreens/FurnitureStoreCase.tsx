import {
  CaseBoxTitle,
  CaseBoxWithe,
  CaseHero,
  CaseList,
  CaseListItem,
  CaseListTitle,
  CaseText,
  CaseTextAccent,
} from "@/components/ui-case";
import { Box } from "@/components/ui/box/Box";
import { Breadcrumbs } from "@/components/ui/breadcrumbs/Breadcrumbs";
import {
  FORM_TYPE,
  FormController,
} from "@/components/ui/forms/FormController";
import { ALL_CASES_CONTENT } from "@/config/content-config/all-cases/all-cases.config";
import { FC } from "react";

export const FurnitureStoreCase: FC = () => {
  const caseData = ALL_CASES_CONTENT.FURNITURE_STORE;

  return (
    <>
      <Breadcrumbs pathname={caseData.url} />
      <CaseHero heroContent={caseData} />

      <Box>
        <CaseBoxTitle>Задачи проекта</CaseBoxTitle>
        <CaseText margin>Основные задачи проекта включали:</CaseText>
        <CaseList marketed>
          <CaseListItem>
            Повышение видимости сайта в поисковых системах через
            SEO-продвижение.
          </CaseListItem>
          <CaseListItem>
            Настройка и оптимизация рекламных кампаний в Яндекс Директ для
            привлечения целевого трафика.
          </CaseListItem>
          <CaseListItem>
            Внедрение системы сквозной аналитики для отслеживания и оптимизации
            маркетинговых усилий.
          </CaseListItem>
        </CaseList>
      </Box>

      <CaseBoxWithe>
        <CaseBoxTitle black>Проблематика</CaseBoxTitle>
        <CaseText margin black>
          До начала нашего сотрудничества компания по продаже мебели
          сталкивалась с рядом трудностей:
        </CaseText>
        <CaseList marketed black>
          <CaseListItem>
            Низкая видимость сайта в поисковых системах, что приводило к
            недостаточному органическому трафику
          </CaseListItem>
          <CaseListItem>
            Высокие затраты на рекламу с низкой конверсией и недостаточным
            количеством целевых обращений.
          </CaseListItem>
          <CaseListItem>
            Отсутствие сквозной аналитики, что затрудняло отслеживание реальной
            эффективности различных рекламных каналов.
          </CaseListItem>
        </CaseList>
      </CaseBoxWithe>

      <Box>
        <CaseBoxTitle>Решение</CaseBoxTitle>
        <CaseListTitle>SEO-продвижение</CaseListTitle>
        <CaseList marketed margin>
          <CaseListItem>
            Провели полный аудит сайта, выявив основные технические ошибки и
            проблемы, мешающие эффективному ранжированию в поисковых системах.
          </CaseListItem>
          <CaseListItem>
            Оптимизировали мета-теги, контент и структуру сайта, улучшили
            внутреннюю перелинковку.
          </CaseListItem>
          <CaseListItem>
            Создали и внедрили стратегию контент-маркетинга, включающую
            написание и публикацию статей, блогов и других материалов, полезных
            для целевой аудитории.
          </CaseListItem>
          <CaseListItem>
            Работали над увеличением ссылочной массы путем получения
            качественных внешних ссылок с авторитетных сайтов.
          </CaseListItem>
        </CaseList>

        <CaseListTitle>Реклама в Яндекс Директ</CaseListTitle>
        <CaseList marketed margin>
          <CaseListItem>
            Провели детальный анализ текущих рекламных кампаний и определили
            ключевые направления для улучшения.
          </CaseListItem>
          <CaseListItem>
            Настроили новые кампании с использованием точного таргетинга и
            ретаргетинга, чтобы привлечь более релевантный трафик.
          </CaseListItem>
          <CaseListItem>
            Запустили A/B тестирование объявлений и ключевых слов для
            определения наиболее эффективных комбинаций и увеличения CTR.
          </CaseListItem>
          <CaseListItem>
            Оптимизировали рекламные бюджеты, сосредоточившись на наиболее
            результативных ключевых словах и объявлениях.
          </CaseListItem>
        </CaseList>

        <CaseListTitle>Внедрение сквозной аналитики RoiStat</CaseListTitle>
        <CaseList marketed margin>
          <CaseListItem>
            Внедрили систему сквозной аналитики RoiStat, что позволило
            отслеживать путь каждого клиента от первого клика до покупки.
          </CaseListItem>
          <CaseListItem>
            Настроили новые кампании с использованием точного таргетинга и
            ретаргетинга, чтобы привлечь более релевантный трафик.
          </CaseListItem>
          <CaseListItem>
            Настроили интеграцию с CRM-системой клиента, чтобы объединить данные
            по продажам и маркетингу и получить полное представление о
            рентабельности различных каналов.
          </CaseListItem>
          <CaseListItem>
            Регулярно анализировали данные аналитики, выявляли узкие места и
            вносили корректировки в маркетинговую стратегию для повышения
            эффективности.
          </CaseListItem>
        </CaseList>
        <CaseList>
          <CaseListItem>
            <img
              src={`/images/cases/cases-magazin-mebeli-metrica1.webp`}
              alt="Продвижение компании по продаже мебели в Москве и Московской области"
            />
          </CaseListItem>
        </CaseList>
      </Box>

      <Box>
        <CaseBoxTitle>Результаты (за 3 года)</CaseBoxTitle>

        <CaseText margin>
          Реализация проекта принесла значительные улучшения:
        </CaseText>
        <CaseList marketed margin>
          <CaseListItem>
            Количество заявок увеличилось,{" "}
            <CaseTextAccent yellow>
              достигнув более 2000 заявок в месяц.
            </CaseTextAccent>
          </CaseListItem>
          <CaseListItem>
            Конверсия посадочных страниц выросла в среднем от{" "}
            <CaseTextAccent yellow>от 3,5 до 8%.</CaseTextAccent>
          </CaseListItem>

          <CaseListItem>
            Средняя стоимость заявки{" "}
            <CaseTextAccent yellow>
              снизилась более, чем в 2 раза,
            </CaseTextAccent>{" "}
            что повысило рентабельность рекламных кампаний.
          </CaseListItem>
        </CaseList>
        <CaseText margin>
          Проект продемонстрировал, что комплексный подход к рекламе в ВКонтакте
          и Яндекс, с акцентом на анализ и оптимизацию трафика, может
          значительно повысить эффективность маркетинговых усилий и обеспечить
          стабильный рост показателей.
        </CaseText>
        <FormController formType={FORM_TYPE.MAIN_FORM} />
      </Box>
    </>
  );
};
