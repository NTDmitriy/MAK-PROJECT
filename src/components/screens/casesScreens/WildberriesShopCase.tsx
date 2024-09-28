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
import { ALL_CASES_CONTENT } from "@/content/all-cases/all-cases.content";
import { FC } from "react";

export const WildberriesShopCase: FC = () => {
  const caseData = ALL_CASES_CONTENT.WILDBERRIES_SHOP;

  return (
    <>
      <Breadcrumbs pathname={caseData.url} />
      <CaseHero heroContent={caseData} />

      <Box>
        <CaseBoxTitle>Задачи проекта</CaseBoxTitle>
        <CaseText margin>Основные задачи проекта включали:</CaseText>
        <CaseList marketed>
          <CaseListItem>
            Настройка и оптимизация рекламных кампаний в ВКонтакте и Яндекс
            Директ для привлечения целевого трафика.
          </CaseListItem>
          <CaseListItem>
            Увеличение продаж магазина на платформе Wildberries.
          </CaseListItem>
          <CaseListItem>
            Повышение узнаваемости бренда и привлечение новых клиентов.
          </CaseListItem>
        </CaseList>
      </Box>

      <CaseBoxWithe>
        <CaseBoxTitle black>Проблематика</CaseBoxTitle>
        <CaseText margin black>
          До начала нашего сотрудничества магазин сталкивался с рядом
          трудностей:
        </CaseText>
        <CaseList marketed black>
          <CaseListItem>
            Низкая видимость и конкурентоспособность на платформе Wildberries.
          </CaseListItem>
          <CaseListItem>
            Недостаточное количество целевых обращений и продаж.
          </CaseListItem>
          <CaseListItem>
            Высокие затраты на рекламу с низкой эффективностью.
          </CaseListItem>
        </CaseList>
      </CaseBoxWithe>

      <Box>
        <CaseBoxTitle>Решение</CaseBoxTitle>
        <CaseListTitle>Реклама в ВКонтакте</CaseListTitle>
        <CaseList marketed margin>
          <CaseListItem>
            Настроили таргетированные рекламные кампании.
          </CaseListItem>
          <CaseListItem>
            Разработали привлекательные объявления с четким УТП, подчеркивающим
            преимущества товаров и специальные предложения.
          </CaseListItem>
          <CaseListItem>
            Запустили ретаргетинговые кампании для напоминания потенциальным
            клиентам о магазине и стимулирования их к покупке.
          </CaseListItem>
        </CaseList>

        <CaseListTitle>Реклама в Яндекс</CaseListTitle>
        <CaseList marketed margin>
          <CaseListItem>
            Провели аудит текущих рекламных кампаний и выявили ключевые области
            для улучшения.
          </CaseListItem>
          <CaseListItem>
            Настроили новые кампании с использованием высокочастотных и низкочастотных запросов, связанных с женской одеждой и покупками на Wildberries.
          </CaseListItem>
          <CaseListItem>
            Провели A/B тестирование объявлений и ключевых слов для повышения
            CTR и уменьшения стоимости клика.
          </CaseListItem>
          <CaseListItem>
            Оптимизировали рекламные бюджеты, сосредоточившись на наиболее
            результативных ключевых словах и объявлениях.
          </CaseListItem>
        </CaseList>

        <CaseListTitle>Подробный анализ трафика</CaseListTitle>
        <CaseList marketed>
          <CaseListItem>
            Регулярно анализировали метрики, такие как CTR, CPC, количество
            кликов и конверсий, чтобы оптимизировать рекламные кампании.
          </CaseListItem>
          <CaseListItem>
            Использовали инструменты веб-аналитики для отслеживания поведения
            пользователей на сайте Wildberries, выявления узких мест и улучшения
            пользовательского опыта.
          </CaseListItem>
          <CaseListItem>
            Определили, что рекламные кампании в ВКонтакте генерировали более
            целевой трафик с высоким показателем конверсии, тогда как Яндекс
            позволял охватить более широкую аудиторию и увеличить объем трафика.
          </CaseListItem>
        </CaseList>
      </Box>

      <Box>
        <CaseBoxTitle>Результаты</CaseBoxTitle>
        <CaseList margin>
          <CaseListItem>
            <img
              src={`/images/cases/cases-wildberries-metrica2.webp`}
              alt="Увеличение продаж магазина женской одежды на Wildberries"
            />
          </CaseListItem>
          <CaseListItem>
            <img
              src={`/images/cases/cases-wildberries-metrica1.webp`}
              alt="Увеличение продаж магазина женской одежды на Wildberries"
            />
          </CaseListItem>
        </CaseList>
        <CaseText margin>
          Реализация проекта принесла значительные улучшения:
        </CaseText>
        <CaseList marketed margin>
          <CaseListItem>
            Количество целевых обращений и продаж через рекламные кампании
            увеличилось до <CaseTextAccent yellow>250%,</CaseTextAccent>{" "}
            достигнув{" "}
            <CaseTextAccent yellow>более 1500 выкупов в месяц.</CaseTextAccent>
          </CaseListItem>
          <CaseListItem>
            Стоимость привлечения одного клиента снизилась{" "}
            <CaseTextAccent yellow>на 63%, </CaseTextAccent> что повысило
            рентабельность рекламных кампаний.
          </CaseListItem>
          <CaseListItem>
            Приведенный внешний трафик поспособствовал укреплениям позиций в оргнической выдачи, что{" "}
            <CaseTextAccent yellow>дало ощутимый рост продаж. </CaseTextAccent>
          </CaseListItem>
        </CaseList>
        <CaseText margin>
          Проект продемонстрировал, что комплексный подход к рекламе в ВКонтакте
          и Яндекс, с акцентом на анализ и оптимизацию трафика, может
          значительно повысить эффективность маркетинговых усилий и обеспечить
          стабильный рост показателей.
        </CaseText>
        <FormController formType={FORM_TYPE.MAIN_FORM} />
      </Box>
    </>
  );
};
