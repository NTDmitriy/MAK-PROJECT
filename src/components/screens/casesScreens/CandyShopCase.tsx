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

export const CandyShopCase: FC = () => {
  const caseData = ALL_CASES_CONTENT.CANDY_SHOP;

  return (
    <>
      <Breadcrumbs pathname={caseData.url} />
      <CaseHero heroContent={caseData} />
      <Box>
        <CaseBoxTitle>Задачи проекта</CaseBoxTitle>
        <CaseText>
          <CaseTextAccent>Основные задачи проекта включали:</CaseTextAccent>
        </CaseText>
        <CaseList marketed>
          <CaseListItem>
            Настройку и оптимизацию рекламных кампаний в Яндекс Директ для
            привлечения целевой аудитории.
          </CaseListItem>
          <CaseListItem>
            Увеличение количества заказов и посещений кондитерской.
          </CaseListItem>
          <CaseListItem>
            Повышение узнаваемости бренда на локальном рынке.
          </CaseListItem>
        </CaseList>
      </Box>

      <CaseBoxWithe>
        <CaseBoxTitle black>Проблематика</CaseBoxTitle>
        <CaseText margin black>
          До начала нашего сотрудничества кондитерская сталкивалась со
          следующими трудностями:
        </CaseText>
        <CaseList marketed black>
          <CaseListItem>
            Низкая осведомленность жителей Краснодара о кондитерской и её
            продукции.
          </CaseListItem>
          <CaseListItem>
            Отсутствие эффективной онлайн-рекламы, что приводило к недостаточному потоку клиентов.
          </CaseListItem>
          <CaseListItem>
            Высокая конкуренция на локальном рынке, затрудняющая привлечение
            новых клиентов.
          </CaseListItem>
        </CaseList>
      </CaseBoxWithe>

      <Box>
        <CaseBoxTitle>Решение - Реклама в Яндекс Директ</CaseBoxTitle>

        <CaseListTitle>Анализ целевой аудитории и конкурентов:</CaseListTitle>
        <CaseText margin>
          Провели детальный анализ рынка и конкурентов, чтобы определить
          уникальные преимущества кондитерской.
        </CaseText>
        <CaseListTitle>Настройка геотаргетинга:</CaseListTitle>
        <CaseText margin>
          Ограничили показы рекламы территорией Краснодара и ближайших
          населенных пунктов для максимальной релевантности.
        </CaseText>
        <CaseListTitle>Подбор ключевых слов:</CaseListTitle>
        <CaseText margin>
          Подобрали релевантные высокочастотные и низкочастотные запросы,
          связанные с кондитерскими изделиями, тортами на заказ, выпечкой и другими услугами.
        </CaseText>
        <CaseListTitle>Создание привлекательных объявлений:</CaseListTitle>
        <CaseText margin>
           Разработали креативные объявления с яркими изображениями продукции и призывами к действию, подчеркивающими уникальные предложения и акции.
        </CaseText>
        <CaseListTitle>Оптимизация ставок и бюджета:</CaseListTitle>
        <CaseText margin>
          Настроили автоматические стратегии назначения ставок для оптимального
          расходования бюджета и повышения ROI.
        </CaseText>
        <CaseListTitle>Ретаргетинг:</CaseListTitle>
        <CaseText>
          Запустили кампании ретаргетинга для возвращения на сайт пользователей,
          которые уже проявили интерес к продукции, но не совершили покупку.
        </CaseText>
      </Box>

      <Box>
        <CaseBoxTitle>Результаты</CaseBoxTitle>

        <CaseList margin>
          <CaseListItem>
            <img
              src={`/images/cases/cases-candy-shop-metrika1.webp`}
              alt="Эффективное привлечение клиентов для кондитерской в Краснодаре"
            />
          </CaseListItem>
        </CaseList>

        <CaseText margin>
          Реализация проекта принесла значительные улучшения:
        </CaseText>
        <CaseList marketed margin>
          <CaseListItem>
            <CaseTextAccent>
              Увеличение количества заказов на 217%
            </CaseTextAccent>{" "}
            в течение первых двух месяцев после запуска кампании.
          </CaseListItem>

          <CaseListItem>
            <CaseTextAccent>
              Снижение стоимости привлечения клиента на более 30%,
            </CaseTextAccent>{" "}
            что повысило общую рентабельность рекламных вложений.
          </CaseListItem>

          <CaseListItem>
            <CaseTextAccent>Рост посещаемости сайта на 165%,</CaseTextAccent>{" "}
            что свидетельствует об успешном привлечении целевого трафика.
          </CaseListItem>

          <CaseListItem>
            <CaseTextAccent>Повышение узнаваемости бренда</CaseTextAccent> на локальном рынке, что привело к увеличению числа постоянных клиентов
            и рекомендаций.
          </CaseListItem>
        </CaseList>

        <CaseText margin>
          Проект продемонстрировал, что профессиональная настройка и управление
          рекламными кампаниями в Яндекс Директ способны значительно увеличить
          продажи и укрепить позиции бизнеса даже в условиях высокой
          конкуренции.
        </CaseText>

        <CaseList grid margin threeСolumns>
          <CaseListItem>
            <img
              src={`/images/cases/cases-candy-shop-metrika2.webp`}
              alt="Эффективное привлечение клиентов для кондитерской в Краснодаре"
            />
          </CaseListItem>
          <CaseListItem>
            <img
              src={`/images/cases/cases-candy-shop-metrika3.webp`}
              alt="Эффективное привлечение клиентов для кондитерской в Краснодаре"
            />
          </CaseListItem>
          <CaseListItem>
            <img
              src={`/images/cases/cases-candy-shop-metrika4.webp`}
              alt="Эффективное привлечение клиентов для кондитерской в Краснодаре"
            />
          </CaseListItem>
        </CaseList>

        <FormController formType={FORM_TYPE.MAIN_FORM} />
      </Box>
    </>
  );
};
