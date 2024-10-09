import {
  CaseBoxTitle,
  CaseHero,
  CaseList,
  CaseListItem,
  CaseListTitle,
  CaseText,
  CaseTextAccent,
} from "@/components/ui-case";
import { Box } from "@/components/ui/box/Box";
import {
  FORM_TYPE,
  FormController,
} from "@/components/ui/forms/FormController";
import { ALL_CASES_CONTENT } from "@/content/all-cases/all-cases.content";
import { FC } from "react";

export const InteriorDesignStudio: FC = () => {
  const caseData = ALL_CASES_CONTENT.INTERIOR_DESIGN_STUDIO;

  return (
    <>
      <CaseHero heroContent={caseData} />

      <Box>
        <CaseText margin>
          Компания Royal-33 обратилась в наше маркетинговое агентство с целью
          разработки современного и функционального веб-сайта. Основная задача
          заключалась в создании онлайн-платформы, которая отразила бы
          эксклюзивность и премиальность их услуг в сфере дизайна интерьеров.
        </CaseText>
        <CaseList>
          <CaseListItem>
            <img
              src="/images/cases/cases-interios-design-studio-screens.webp"
              alt="Cоздании онлайн-платформы, которая отразила бы эксклюзивность и премиальность их услуг в сфере дизайна интерьеров."
            />
          </CaseListItem>
        </CaseList>
      </Box>

      <Box>
        <CaseBoxTitle>О клиенте</CaseBoxTitle>
        <CaseText>
          Royal-33 — ведущая компания в сфере дизайна интерьеров,
          специализирующаяся на создании эксклюзивных дизайн-решений для частных
          резиденций и коммерческих пространств. Компания славится своим
          индивидуальным подходом и вниманием к деталям, предлагая клиентам
          уникальные интерьеры, отражающие их образ жизни и персональные
          предпочтения.
        </CaseText>
        <CaseText>
          Целевая аудитория включает владельцев элитной недвижимости,
          бизнес-клиентов, архитекторов и застройщиков, которые ищут партнера
          для реализации премиальных проектов.
        </CaseText>
      </Box>

      <Box>
        <CaseBoxTitle>Цели разработки сайта</CaseBoxTitle>
        <CaseList marketed margin>
          <CaseListItem>
            Повысить узнаваемость бренда в цифровом пространстве.
          </CaseListItem>
          <CaseListItem>
            Представить портфолио проектов в привлекательном и удобном формате.
          </CaseListItem>
          <CaseListItem>
            Увеличить количество обращений и заявок от потенциальных клиентов.
          </CaseListItem>
          <CaseListItem>
            Подчеркнуть уникальность и индивидуальный подход компании.
          </CaseListItem>
        </CaseList>

        <CaseText>
          Новый сайт должен был стать главным инструментом привлечения клиентов,
          демонстрируя высокий уровень профессионализма и эксклюзивные
          дизайн-решения, предлагаемые Royal-33.
        </CaseText>
      </Box>

      <Box>
        <CaseBoxTitle>Поставленные задачи</CaseBoxTitle>
        <CaseText margin>
          Основные проблемы, с которыми столкнулся клиент, включали устаревший
          сайт, недостаточную презентацию портфолио и отсутствие эффективных
          онлайн-инструментов для взаимодействия с клиентами.
        </CaseText>

        <CaseListTitle>Задачи</CaseListTitle>
        <CaseList marketed margin>
          <CaseListItem>
            Разработать современный и элегантный дизайн сайта, соответствующий
            бренду.
          </CaseListItem>
          <CaseListItem>
            Создать удобную навигацию и структуру для презентации портфолио.
          </CaseListItem>
          <CaseListItem>
            Интегрировать формы обратной связи и возможности для
            онлайн-консультаций.
          </CaseListItem>
          <CaseListItem>
            Оптимизировать сайт для поисковых систем (SEO).
          </CaseListItem>
        </CaseList>

        <CaseText>
          Ожидалось, что проект приведет к увеличению трафика и запросов на услуги, а также улучшит взаимодействие с аудиторией.
        </CaseText>
      </Box>

      <Box>
        <CaseBoxTitle>Анализ и стратегия</CaseBoxTitle>
        <CaseText>
          Проведено исследование конкурентов, определены уникальные преимущества
          компании и разработан стратегический план, включающий создание
          интерактивного портфолио, блог-платформы и SEO-стратегии.
        </CaseText>
      </Box>

      <Box>
        <CaseBoxTitle>Процесс разработки</CaseBoxTitle>
        <CaseList>
          <CaseListItem>
            <CaseTextAccent>Планирование:</CaseTextAccent> определение целей,
            аудитории и требований.
          </CaseListItem>
          <CaseListItem>
            <CaseTextAccent>Дизайн:</CaseTextAccent> создание прототипов и разработка UX/UI концепции.
          </CaseListItem>
          <CaseListItem>
            <CaseTextAccent>Разработка:</CaseTextAccent> верстка,
            программирование и интеграции.
          </CaseListItem>
          <CaseListItem>
            <CaseTextAccent>Тестирование:</CaseTextAccent> проверка на ошибки и оптимизация производительности.
          </CaseListItem>
          <CaseListItem>
            <CaseTextAccent>Запуск:</CaseTextAccent> размещение на сервере и настройка аналитики.
          </CaseListItem>
        </CaseList>
      </Box>

      <Box>
        <CaseBoxTitle>Дизайн и функциональность</CaseBoxTitle>
        <CaseText>
          Сайт включает интерактивное портфолио, блог, формы для
          онлайн-консультаций и раздел с отзывами клиентов, подчеркивающий
          эксклюзивность услуг Royal-33.
        </CaseText>
      </Box>

      <Box>
        <CaseBoxTitle>Результаты</CaseBoxTitle>
        <CaseList marketed>
          <CaseListItem>Трафик увеличился на 75% за 5 месяцев.</CaseListItem>
          <CaseListItem>Запросы на услуги выросли на 55%.</CaseListItem>
          <CaseListItem>
            Среднее время на сайте повысилось до 6 минут.
          </CaseListItem>
        </CaseList>
      </Box>

      <Box>
        <CaseBoxTitle>Выводы</CaseBoxTitle>
        <CaseText margin>
          Проект укрепил имидж бренда Royal-33, увеличил количество клиентов и улучшил присутствие в онлайн-среде.
        </CaseText>
        <FormController formType={FORM_TYPE.MAIN_FORM} />
      </Box>
    </>
  );
};
