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
import { ALL_CASES_CONTENT } from "@/config/content-config/all-cases/all-cases.config";
import { FC } from "react";

export const TaxOptimizationCase: FC = () => {
  const caseData = ALL_CASES_CONTENT.TAX_OPTIMIZATION;

  return (
    <>
      <Breadcrumbs pathname={caseData.url} />
      <CaseHero heroContent={caseData} />
      <Box>
        <CaseBoxTitle>Задачи проекта</CaseBoxTitle>
        <CaseText margin>Основные задачи проекта включали:</CaseText>
        <CaseList marketed>
          <CaseListItem>
            Настройка и оптимизация рекламных кампаний в Яндекс Директ и Google
            Ads для привлечения целевого трафика.
          </CaseListItem>
          <CaseListItem>
            Увеличение количества заявок на услугу оптимизации налогов.
          </CaseListItem>
          <CaseListItem>
            Повышение рентабельности рекламных кампаний.
          </CaseListItem>
        </CaseList>
      </Box>

      <CaseBoxWithe>
        <CaseBoxTitle black>Проблематика</CaseBoxTitle>
        <CaseText margin black>
          До начала нашего сотрудничества услуга по оптимизации налогов
          сталкивалась с рядом трудностей:
        </CaseText>
        <CaseList marketed black>
          <CaseListItem>
            Низкая осведомленность целевой аудитории о преимуществах данной
            услуги.
          </CaseListItem>
          <CaseListItem>
            Высокие затраты на рекламу с низкой конверсией и недостаточным
            количеством целевых обращений.
          </CaseListItem>
        </CaseList>
      </CaseBoxWithe>

      <Box>
        <CaseBoxTitle>Решение</CaseBoxTitle>
        <CaseListTitle>Реклама в Яндекс Директ</CaseListTitle>
        <CaseList marketed margin>
          <CaseListItem>
            Провели аудит текущих рекламных кампаний и выявили ключевые области
            для улучшения.
          </CaseListItem>
          <CaseListItem>
            Настроили новые кампании с использованием высокочастотных и
            низкочастотных запросов, связанных с оптимизацией налогов и УСН.{" "}
          </CaseListItem>
          <CaseListItem>
            Разработали привлекательные объявления с четким УТП, подчеркивающим
            выгоды от использования услуги.
          </CaseListItem>
          <CaseListItem>
            Запустили ретаргетинговые кампании, чтобы вернуть на сайт
            пользователей, ранее проявивших интерес к услуге.
          </CaseListItem>
        </CaseList>

        <CaseListTitle>Реклама в Google Ads</CaseListTitle>
        <CaseList marketed margin>
          <CaseListItem>
            Настроили рекламные кампании в Google Ads с использованием поисковой
            и контекстно-медийной сети.
          </CaseListItem>
          <CaseListItem>
            Ориентировались на предпринимателей, ищущих способы оптимизации
            налогов, используя релевантные ключевые слова и интересы.
          </CaseListItem>
          <CaseListItem>
            Запустили A/B тестирование различных объявлений, чтобы определить
            наиболее эффективные форматы и сообщения.
          </CaseListItem>
          <CaseListItem>
            Оптимизировали кампании по конверсии, сосредоточив бюджет на
            ключевых словах и объявлениях с наивысшей отдачей.
          </CaseListItem>
        </CaseList>

        <CaseListTitle>Подробный анализ трафика</CaseListTitle>
        <CaseList marketed>
          <CaseListItem>
            В ходе реализации проекта было важно отслеживать качество и объем
            трафика, привлекаемого через Яндекс Директ и Google Ads.
          </CaseListItem>
          <CaseListItem>
            Регулярно анализировали метрики, такие как CTR, CPC, количество
            кликов и конверсий, чтобы оптимизировать рекламные кампании.
          </CaseListItem>
          <CaseListItem>
            Использовали инструменты веб-аналитики для отслеживания поведения
            пользователей на сайте, выявления узких мест и улучшения
            пользовательского опыта.
          </CaseListItem>
          <CaseListItem>
            Определили, что рекламные кампании в Яндекс Директ генерировали
            более целевой трафик с высоким показателем конверсии, тогда как
            Google Ads позволял охватить более широкую аудиторию и увеличить
            объем трафика.
          </CaseListItem>
        </CaseList>
      </Box>

      <Box>
        <CaseBoxTitle>Результаты</CaseBoxTitle>

        <CaseList margin>
          <CaseListItem>
            <img
              src={`/images/cases/cases-effectivnoe-prevlichenie-metrika1.webp`}
              alt="Эффективное привлечение клиентов для услуги оптимизации налогов на УСН"
            />
          </CaseListItem>
        </CaseList>

        <CaseText margin>
          Реализация проекта принесла значительные улучшения:
        </CaseText>
        <CaseList marketed margin>
          <CaseListItem>
            Количество целевых обращений через рекламные кампании составило{" "}
            <CaseTextAccent yellow>
              2318 лидов за период в 7 месяцев.
            </CaseTextAccent>
          </CaseListItem>
          <CaseListItem>
            Стоимость привлечения одного клиента снизилась почти{" "}
            <CaseTextAccent yellow>в 3 раза,</CaseTextAccent> что повысило
            рентабельность рекламных кампаний и ROMI.
          </CaseListItem>
          <CaseListItem>
            Показатель отказов сократился{" "}
            <CaseTextAccent yellow>до 18%,</CaseTextAccent> что свидетельствует
            о повышении качества трафика и улучшении пользовательского опыта.
          </CaseListItem>
        </CaseList>

        <CaseText margin>
          Проект продемонстрировал, что комплексный подход к рекламе в Яндекс
          Директ и Google Ads, с акцентом на анализ и оптимизацию трафика, может
          значительно повысить эффективность маркетинговых усилий и обеспечить
          стабильный рост показателей.
        </CaseText>

        <CaseList grid margin threeСolumns>
          <CaseListItem>
            <img
              src={`/images/cases/cases-effectivnoe-prevlichenie-metrika2.webp`}
              alt="Эффективное привлечение клиентов для услуги оптимизации налогов на УСН"
            />
          </CaseListItem>
          <CaseListItem>
            <img
              src={`/images/cases/cases-effectivnoe-prevlichenie-metrika3.webp`}
              alt="Эффективное привлечение клиентов для услуги оптимизации налогов на УСН"
            />
          </CaseListItem>
          <CaseListItem>
            <img
              src={`/images/cases/cases-effectivnoe-prevlichenie-metrika4.webp`}
              alt="Эффективное привлечение клиентов для услуги оптимизации налогов на УСН"
            />
          </CaseListItem>
        </CaseList>

        <FormController formType={FORM_TYPE.MAIN_FORM} />
      </Box>
    </>
  );
};
