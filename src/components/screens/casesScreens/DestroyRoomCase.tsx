import {
  CaseBoxTitle,
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

export const DestroyRoomCase: FC = () => {
  const caseData = ALL_CASES_CONTENT.ROOM_DESTROY;

  return (
    <>
      <Breadcrumbs pathname={caseData.url} />
      <CaseHero heroContent={caseData} />
      <Box>
        <CaseBoxTitle>Задачи проекта</CaseBoxTitle>
        <CaseText>
          Увеличить количество бронирований и заявок, привлекая целевую
          аудиторию с помощью эффективной лидогенерации в Яндекс Директ.
        </CaseText>
      </Box>
      <Box>
        <CaseBoxTitle>Решение</CaseBoxTitle>

        <CaseListTitle>Анализ аудитории и конкурентов:</CaseListTitle>
        <CaseList marketed margin>
          <CaseListItem>
            Определили портрет целевой аудитории: молодые активные люди 18-35
            лет, ищущие нестандартные развлечения.
          </CaseListItem>
          <CaseListItem>
            Изучили конкурентов и выделили уникальные преимущества "Udestroy".
          </CaseListItem>
        </CaseList>

        <CaseListTitle>
          Настройка рекламной кампании в Яндекс Директ:
        </CaseListTitle>
        <CaseList marketed margin>
          <CaseListItem>
            <CaseTextAccent>Ключевые слова:</CaseTextAccent> Подобрали
            высококонверсионные запросы, связанные с комнатами ярости, снятием
            стресса и необычными развлечениями в Москве.
          </CaseListItem>
          <CaseListItem>
            <CaseTextAccent>Объявления:</CaseTextAccent> Создали привлекательные
            заголовки и описания с чёткими призывами к действию и указанием
            уникальных предложений.
          </CaseListItem>
          <CaseListItem>
            <CaseTextAccent>Таргетинг:</CaseTextAccent> Настроили географический
            таргетинг на Москву и ближайшие районы, время показа объявлений — с
            учётом пиков активности целевой аудитории
          </CaseListItem>
          <CaseListItem>
            <CaseTextAccent>Ретаргетинг:</CaseTextAccent> Запустили кампании на
            пользователей, ранее посещавших сайт или совершавших взаимодействия
            в социальных сетях.
          </CaseListItem>
        </CaseList>

        <CaseListTitle>Оптимизация и мониторинг:</CaseListTitle>
        <CaseList marketed>
          <CaseListItem>
            Еженедельно анализировали показатели кампании (CPC, CTR, конверсия).
          </CaseListItem>
          <CaseListItem>
            Вносили коррективы в объявления и ставки для улучшения результатов.
          </CaseListItem>
        </CaseList>
      </Box>

      <Box>
        <CaseBoxTitle>Результаты</CaseBoxTitle>
        <CaseList margin>
          <CaseListItem>
            <img
              src={`/images/cases/cases-destroy-room-metrica1.webp`}
              alt="Комната ярости Udestroy в Москве"
            />
          </CaseListItem>
        </CaseList>
      </Box>
      <Box>
        <CaseBoxTitle>Ключевые факторы успеха</CaseBoxTitle>
        <CaseList marketed gap>
          <CaseListItem>
            <CaseTextAccent>Точный таргетинг</CaseTextAccent> на
            заинтересованную аудиторию с учётом её поведения и предпочтений.
          </CaseListItem>
          <CaseListItem>
            <CaseTextAccent>
              Креативные и релевантные объявления,
            </CaseTextAccent>{" "}
            вызывающие интерес и побуждающие к действию.
          </CaseListItem>

          <CaseListItem>
            <CaseTextAccent>Постоянная оптимизация</CaseTextAccent> кампании на
            основе аналитики и результатов.
          </CaseListItem>
        </CaseList>
      </Box>

      <Box>
        <CaseList grid margin>
          <CaseListItem>
            <CaseBoxTitle>Вывод</CaseBoxTitle>
            <CaseText margin>
              Использование лидогенерации в Яндекс Директ с продуманной
              стратегией и регулярной оптимизацией позволило комнате ярости
              "Udestroy" значительно увеличить поток клиентов и занять прочные
              позиции на рынке развлечений Москвы.
            </CaseText>
          </CaseListItem>
          <CaseListItem>
            <CaseList grid>
              <CaseListItem>
                <img
                  src={`/images/cases/cases-destroy-room-metrika2.webp`}
                  alt="Комната ярости Udestroy в Москве"
                />
              </CaseListItem>
              <CaseListItem>
                <img
                  src={`/images/cases/cases-destroy-room-metrika3.webp`}
                  alt="Комната ярости Udestroy в Москве"
                />
              </CaseListItem>
            </CaseList>
          </CaseListItem>
        </CaseList>
        <FormController formType={FORM_TYPE.MAIN_FORM} />
      </Box>
    </>
  );
};
