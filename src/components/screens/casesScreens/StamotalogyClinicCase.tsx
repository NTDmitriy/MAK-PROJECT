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
import { TGenericElementProps } from "@/typing/elements.type";
import { FC, PropsWithChildren } from "react";

export const StamotalogyClinicCase: FC<
  PropsWithChildren<TGenericElementProps>
> = ({ className, ...rest }) => {
  const caseData = ALL_CASES_CONTENT.STOMATOLOGY_CLINIC;

  return (
    <>
      <Breadcrumbs pathname={caseData.url} />
      <CaseHero heroContent={caseData} />

      <Box>
        <CaseBoxTitle>Задачи проекта</CaseBoxTitle>
        <CaseText margin>Основные задачи проекта включали:</CaseText>
        <CaseList marketed>
          <CaseListItem>
            Разработка современного и удобного сайта для сети стоматологических
            клиник.
          </CaseListItem>
          <CaseListItem>
            Настройка и оптимизация рекламных кампаний в Яндекс Директ для
            привлечения целевого трафика.
          </CaseListItem>
          <CaseListItem>
            Проведение рекламных кампаний в ВКонтакте для повышения
            вовлеченности и привлечения новых клиентов.
          </CaseListItem>
          <CaseListItem>
            Минимальная SEO-оптимизация сайта под брендовые запросы для
            улучшения видимости в поисковых системах.
          </CaseListItem>
        </CaseList>
      </Box>

      <CaseBoxWithe>
        <CaseBoxTitle black>Проблематика</CaseBoxTitle>
        <CaseText margin black>
          До начала нашего сотрудничества сеть стоматологических клиник
          сталкивалась с рядом трудностей:
        </CaseText>
        <CaseList marketed black>
          <CaseListItem>
            Отсутствие современного и функционального веб-сайта, что снижало
            доверие потенциальных клиентов.
          </CaseListItem>
          <CaseListItem>
            Низкая эффективность текущих рекламных кампаний с недостаточным
            количеством целевых обращений.
          </CaseListItem>
          <CaseListItem>
            Недостаточная узнаваемость бренда в интернете и низкий органический
            трафик.
          </CaseListItem>
        </CaseList>
      </CaseBoxWithe>

      <Box>
        <CaseBoxTitle>Решение</CaseBoxTitle>
        <CaseListTitle>Разработка сайта</CaseListTitle> 
        <CaseList marketed margin>
          <CaseListItem>
            Создали современный, удобный и интуитивно понятный сайт, который
            представляет услуги клиник и их преимущества.
          </CaseListItem>
          <CaseListItem>
            Внедрили удобную систему онлайн-записи, что упростило процесс
            регистрации на прием для пациентов.
          </CaseListItem>
          <CaseListItem>
            Обеспечили мобильную адаптацию сайта, чтобы пользователи могли
            удобно пользоваться им с любых устройств.
          </CaseListItem>
        </CaseList>

        <CaseListTitle>Реклама в Яндекс Директ</CaseListTitle>
        <CaseList marketed margin>
          <CaseListItem>
            Настроили рекламные кампании, ориентированные на ключевые запросы,
            связанные со стоматологическими услугами в Санкт-Петербурге.
          </CaseListItem>
          <CaseListItem>
            Запустили ретаргетинговые кампании, чтобы напоминать потенциальным
            клиентам о клинике и побуждать их к записи на прием.
          </CaseListItem>
          <CaseListItem>
            Провели A/B тестирование объявлений и ключевых слов для повышения
            CTR и уменьшения стоимости клика.
          </CaseListItem>
        </CaseList>

        <CaseListTitle>Реклама в ВКонтакте</CaseListTitle>
        <CaseList marketed margin>
          <CaseListItem>
            Запустили таргетированные рекламные кампании, ориентированные на
            жителей Санкт-Петербурга, интересующихся стоматологическими
            услугами.
          </CaseListItem>
          <CaseListItem>
            Разработали контент-план для ведения страницы клиник в ВКонтакте,
            включая публикации о преимуществах клиники, отзывы клиентов и
            полезные советы по уходу за зубами.
          </CaseListItem>
        </CaseList>

        <CaseListTitle>
          Минимальная SEO-оптимизация под брендовые запросы
        </CaseListTitle>
        <CaseList marketed margin>
          <CaseListItem>
            Оптимизировали сайт под брендовые запросы, улучшив его видимость в
            поисковых системах.
          </CaseListItem>
          <CaseListItem>
            Провели базовую оптимизацию мета-тегов и контента на сайте.
          </CaseListItem>
        </CaseList>

        <CaseList>
          <CaseListItem>
            <img
              src={`/images/cases/cases-stamotologiya-metrica1.webp`}
              alt="Комплексное продвижение сети стоматологических клиник в Санкт-Петербурге"
            />
          </CaseListItem>
        </CaseList>
      </Box>

      <Box>
        <CaseBoxTitle>Результаты</CaseBoxTitle>

        <CaseText margin>
          Реализация проекта принесла значительные улучшения:
        </CaseText>
        <CaseList marketed margin>
          <CaseListItem>
            Количество целевых обращений через сайт увеличилось на{" "}
            <CaseTextAccent yellow>на 250%,</CaseTextAccent> достигнув{" "}
            <CaseTextAccent yellow>500 заявок в месяц.</CaseTextAccent>
          </CaseListItem>
          <CaseListItem>
            Узнаваемость бренда в интернете повысилась{" "}
            <CaseTextAccent yellow>на 40%,</CaseTextAccent> что способствовало
            росту органического трафика на{" "}
            <CaseTextAccent yellow>на 60%.</CaseTextAccent>
          </CaseListItem>

          <CaseListItem>
            Показатель отказов на сайте сократился{" "}
            <CaseTextAccent yellow>до 20%,</CaseTextAccent> что свидетельствует
            о повышении качества трафика и улучшении пользовательского опыта.
          </CaseListItem>
        </CaseList>
        <CaseText margin>
          Проект продемонстрировал, что комплексный подход к маркетингу,
          включающий разработку современного сайта, настройку рекламных кампаний
          и минимальную SEO-оптимизацию, может значительно повысить
          эффективность маркетинговых усилий и обеспечить стабильный рост
          показателей.
        </CaseText>
        <FormController formType={FORM_TYPE.MAIN_FORM} />
      </Box>
    </>
  );
};
