import {
  CaseBoxTitle,
  CaseBoxWithe,
  CaseList,
  CaseListItem,
  CaseListTitle,
  CaseText,
  CaseTextAccent,
} from "@/components/ui-case";
import { CaseHero } from "@/components/ui-case/caseHero/CaseHero";
import { Box } from "@/components/ui/box/Box";
import { Breadcrumbs } from "@/components/ui/breadcrumbs/Breadcrumbs";
import {
  FORM_TYPE,
  FormController,
} from "@/components/ui/forms/FormController";
import { ALL_CASES_CONTENT } from "@/content/all-cases/all-cases.content";

import { FC } from "react";

export const ConstructionCompanyCase: FC = () => {
  const caseData = ALL_CASES_CONTENT.CONSTRUCTION_COMPANY;

  return (
    <>
      <Breadcrumbs pathname={caseData.url} />
      <CaseHero heroContent={caseData} />
      <Box>
        <CaseBoxTitle>Задачи проекта</CaseBoxTitle>
        <CaseText margin>
          Основная цель проекта заключалась в увеличении продаж и расширении
          клиентской базы компании "Карельский дом". В рамках проекта перед нами
          стояли следующие задачи:
        </CaseText>
        <CaseList marketed>
          <CaseListItem>
            Проведение маркетингового аудита текущих рекламных кампаний.
          </CaseListItem>
          <CaseListItem>Анализ ниши и конкурентной среды.</CaseListItem>
          <CaseListItem>
            Разработка и внедрение эффективных рекламных стратегий.
          </CaseListItem>
          <CaseListItem>
            Оптимизация сайта для улучшения пользовательского опыта.
          </CaseListItem>
        </CaseList>
      </Box>

      <CaseBoxWithe>
        <CaseBoxTitle black>Проблематика</CaseBoxTitle>
        <CaseText margin black>
          Перед началом работы с нами, "Карельский дом" сталкивался с рядом
          проблем:
        </CaseText>
        <CaseList marketed black>
          <CaseListItem>
            Низкий уровень продаж, который составлял в среднем 10 заказов в месяц.
          </CaseListItem>
          <CaseListItem>Низкая узнаваемость бренда на рынке.</CaseListItem>
          <CaseListItem>
            Неоптимизированный сайт, что приводило к высокому показателю отказов
            (более 45%).
          </CaseListItem>
        </CaseList>
      </CaseBoxWithe>

      <Box>
        <CaseBoxTitle>Решение</CaseBoxTitle>

        <CaseList margin>
          <CaseListItem>
            <CaseTextAccent>Аудит:</CaseTextAccent> Мы провели детальный аудит
            текущих рекламных кампаний и сайта. Это позволило выявить основные
            проблемы и определить точки роста.
          </CaseListItem>
          <CaseListItem>
            <CaseTextAccent>Анализ ниши:</CaseTextAccent> Исследование ниши и конкурентной среды помогло понять поведение целевой аудитории и выявить уникальные торговые предложения (УТП) конкурентов.
          </CaseListItem>
        </CaseList>

        <CaseListTitle>Разработка рекламной стратегии</CaseListTitle>
        <CaseList marketed margin>
          <CaseListItem>
            <CaseTextAccent>Контекстная реклама:</CaseTextAccent> Настроили
            эффективные кампании в Яндекс.Директ, ориентированные на высокочастотные и низкочастотные запросы.
          </CaseListItem>
          <CaseListItem>
            <CaseTextAccent>
              Таргетированная реклама в социальных сетях:
            </CaseTextAccent>{" "}
            Создали таргетированные кампании в ВКонтакте, нацеленные на ключевую
            аудиторию.
          </CaseListItem>
        </CaseList>

        <CaseListTitle>Оптимизация сайта</CaseListTitle>
        <CaseList marketed >
          <CaseListItem>
            Улучшили структуру и дизайн сайта, что сократило показатель отказов
            до 16%.
          </CaseListItem>
          <CaseListItem>
            Оптимизировали мобильную версию сайта, что увеличило конверсию на мобильных устройствах на 20%.
          </CaseListItem>
        </CaseList>
      </Box>

      <Box>
        <CaseBoxTitle>Результаты</CaseBoxTitle>
        <CaseList margin>
          <CaseListItem>
            <img
              src={`/images/cases/cases-karelskiy-dom-metrika1.webp`}
              alt="Увеличение продаж и улучшение узнаваемости бренда"
            />
          </CaseListItem>
          <CaseListItem>
            <img
              src={`/images/cases/cases-karelskiy-dom-metrika2.webp`}
              alt="Увеличение продаж и улучшение узнаваемости бренда"
            />
          </CaseListItem>
        </CaseList>

        <CaseText margin>
          Результаты проекта превзошли ожидания клиента:
        </CaseText>

        <CaseList marketed margin>
          <CaseListItem>
            Объем продаж увеличился{" "}
            <CaseTextAccent yellow>на 193%,</CaseTextAccent>, достигнув{" "}
            <CaseTextAccent yellow>29 заказов в месяц.</CaseTextAccent>
          </CaseListItem>
          <CaseListItem>
            Узнаваемость бренда повысилась{" "}
            <CaseTextAccent yellow>на 37%.</CaseTextAccent>
          </CaseListItem>
          <CaseListItem>
            Показатель отказов сократился{" "}
            <CaseTextAccent yellow>до 16%.</CaseTextAccent>
          </CaseListItem>
        </CaseList>
        <CaseText margin>
          Проект продемонстрировал, что комплексный подход к маркетингу может
          значительно улучшить ключевые показатели бизнеса и укрепить его
          позиции на рынке.
        </CaseText>

        <CaseList grid margin threeСolumns>
          <CaseListItem>
            <img
              src={`/images/cases/cases-karelskiy-dom-metrika3.webp`}
              alt="Увеличение продаж и улучшение узнаваемости бренда"
            />
          </CaseListItem>
          <CaseListItem>
            <img
              src={`/images/cases/cases-karelskiy-dom-metrika4.webp`}
              alt="Увеличение продаж и улучшение узнаваемости бренда"
            />
          </CaseListItem>
          <CaseListItem>
            <img
              src={`/images/cases/cases-karelskiy-dom-metrika5.webp`}
              alt="Увеличение продаж и улучшение узнаваемости бренда"
            />
          </CaseListItem>
        </CaseList>

        <CaseList margin> 
          <CaseListItem center>
            <img
              src={`/images/cases/cases-karelskiy-dom-metrika6.webp`}
              alt="Увеличение продаж и улучшение узнаваемости бренда"
            />
          </CaseListItem>
        </CaseList>
        <FormController formType={FORM_TYPE.MAIN_FORM} />
      </Box>
    </>
  );
};
