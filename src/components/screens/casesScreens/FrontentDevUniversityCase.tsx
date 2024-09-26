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

export const FrontentDevUniversityCase: FC = () => {
  const caseData = ALL_CASES_CONTENT.FRONTEND_DEVELOPMENT_UNIVERSITY;

  return (
    <>
      <Breadcrumbs pathname={caseData.url} />
      <CaseHero heroContent={caseData} />
      <Box>
        <CaseBoxTitle>Задачи проекта</CaseBoxTitle>
        <CaseText margin>
          Проект был нацелен на решение следующих задач:
        </CaseText>
        <CaseList marketed>
          <CaseListItem>
            Увеличение количества заявок на бесплатные и платные образовательные
            продукты.
          </CaseListItem>
          <CaseListItem>
            Повышение конверсии посадочных страниц для улучшения показателей
            вовлеченности и регистрации.
          </CaseListItem>
        </CaseList>
      </Box>

      <CaseBoxWithe>
        <CaseBoxTitle black>Проблематика</CaseBoxTitle>
        <CaseText margin black>
          До начала проекта столкнулись со следующими проблемами:
        </CaseText>
        <CaseList marketed black>
          <CaseListItem>
            Низкий уровень заявок на курсы: менее 500 заявок в месяц.
          </CaseListItem>
          <CaseListItem>
            Низкая конверсия посадочных страниц, составляющая около 1,2%.
          </CaseListItem>
        </CaseList>
      </CaseBoxWithe>

      <Box>
        <CaseBoxTitle>Решение</CaseBoxTitle>
        <CaseListTitle>Реклама в Яндекс Директ</CaseListTitle>
        <CaseList marketed margin>
          <CaseListItem>
            Для максимальной масштабируемости трафика было создано и настроено 4
            рекламных аккаунта, что позволило разнообразить подходы и
            протестировать различные рекламные стратегии.
          </CaseListItem>
          <CaseListItem>
            Мы настроили кампании, ориентированные на разные группы целевой
            аудитории, используя как общие, так и специализированные ключевые
            слова.
          </CaseListItem>
        </CaseList>

        <CaseListTitle>Реклама в ВКонтакте</CaseListTitle>
        <CaseList marketed margin>
          <CaseListItem>
            Запустили рекламные кампании, ориентированные на интересы и
            поведение пользователей в ВКонтакте.
          </CaseListItem>
          <CaseListItem>
            Разработали и протестировали несколько типов объявлений, включая
            карусельные объявления и видеообъявления, что позволило увеличить
            вовлеченность и CTR.
          </CaseListItem>
        </CaseList>

        <CaseList>
          <CaseListItem>
            <img
              src={`/images/cases/cases-frontend-metrica1.webp`}
              alt="Увеличение числа заявок и повышение конверсии для онлайн-школы frontend-разработки"
            />
          </CaseListItem>
          <CaseListItem>
            <img
              src={`/images/cases/cases-frontend-metrica2.webp`}
              alt="Увеличение числа заявок и повышение конверсии для онлайн-школы frontend-разработки"
            />
          </CaseListItem>
          <CaseListItem>
            <img
              src={`/images/cases/cases-frontend-metrica3.webp`}
              alt="Увеличение числа заявок и повышение конверсии для онлайн-школы frontend-разработки"
            />
          </CaseListItem>
          <CaseListItem>
            <img
              src={`/images/cases/cases-frontend-metrica4.webp`}
              alt="Увеличение числа заявок и повышение конверсии для онлайн-школы frontend-разработки"
            />
          </CaseListItem>
          <CaseListItem>
            <img
              src={`/images/cases/cases-frontend-metrica5.webp`}
              alt="Увеличение числа заявок и повышение конверсии для онлайн-школы frontend-разработки"
            />
          </CaseListItem>
        </CaseList>
      </Box>

      <Box>
        <CaseBoxTitle>Результаты</CaseBoxTitle>

        <CaseText margin>Проект принес значительные улучшения:</CaseText>

        <CaseList marketed margin>
          <CaseListItem>
            Количество заявок увеличилось, достигнув{" "}
            <CaseTextAccent yellow>более 2000 заявок в месяц.</CaseTextAccent>
          </CaseListItem>
          <CaseListItem>
            Конверсия посадочных страниц выросла в среднем{" "}
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
          Проект продемонстрировал, что использование различных рекламных
          каналов и стратегий может значительно повысить эффективность
          маркетинговых усилий и принести ощутимые результаты в короткие сроки.
        </CaseText>

        <CaseList grid margin>
          <CaseListItem>
            <img
              src={`/images/cases/cases-frontend-yandex1.webp`}
              alt="Увеличение числа заявок и повышение конверсии для онлайн-школы frontend-разработки"
            />
          </CaseListItem>
          <CaseListItem>
            <img
              src={`/images/cases/cases-frontend-yandex2.webp`}
              alt="Увеличение числа заявок и повышение конверсии для онлайн-школы frontend-разработки"
            />
          </CaseListItem>
        </CaseList>
        <FormController formType={FORM_TYPE.MAIN_FORM} />
      </Box>
    </>
  );
};
