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

export const ActiveVacation: FC = () => {
  const caseData = ALL_CASES_CONTENT.ACTIVE_VACATION;

  return (
    <>
      <CaseHero heroContent={caseData} />

      <Box>
        <CaseText margin>
          Компания "Active Vladimir" обратилась в наше маркетинговое агентство с целью создания инновационного веб-сайта. Основная задача заключалась в разработке онлайн-платформы для продвижения уникальной услуги —
          экскурсий по городу Владимир в FPV очках. Эти экскурсии позволяют
          посетителям увидеть город с высоты птичьего полета, используя
          технологии виртуальной реальности и дронов.
        </CaseText>
        <CaseList>
          <CaseListItem>
            <img
              src="/images/cases/cases-active-vacation-screens.webp"
              alt="Cоздании онлайн-платформы, которая отразила бы эксклюзивность и премиальность их услуг в сфере дизайна интерьеров."
            />
          </CaseListItem>
        </CaseList>
      </Box>

      <Box>
        <CaseBoxTitle>О клиенте</CaseBoxTitle>
        <CaseText>
          "Active Vladimir" — инновационная компания в сфере туризма и развлечений, предлагающая уникальные экскурсии по Владимиру в FPV
          очках. Используя технологии виртуальной реальности и управления
          дронами, они создают незабываемый опыт для своих клиентов, позволяя им
          увидеть город с новых ракурсов.
        </CaseText>
      </Box>

      <Box>
        <CaseBoxTitle>Целевая аудитория и ее потребности</CaseBoxTitle>
        <CaseList marketed>
          <CaseListItem>
            <CaseTextAccent>Туристы</CaseTextAccent> ищущие новые впечатления и необычные экскурсии.
          </CaseListItem>
          <CaseListItem>
            <CaseTextAccent>Жители Владимира</CaseTextAccent> заинтересованные в активном отдыхе и новых развлечениях
          </CaseListItem>
          <CaseListItem>
            <CaseTextAccent>
              Молодежь и технологические энтузиасты
            </CaseTextAccent>{" "}
            интересующиеся инновационными технологиями и виртуальной
            реальностью.
          </CaseListItem>
        </CaseList>
      </Box>

      <Box>
        <CaseBoxTitle>Цели разработки сайта</CaseBoxTitle>
        <CaseList marketed>
          <CaseListItem>
            Получить подробную информацию об услуге и ее уникальности.
          </CaseListItem>
          <CaseListItem>
            Представить портфолио проектов в привлекательном и удобном формате.
          </CaseListItem>
          <CaseListItem>Удобно забронировать экскурсию онлайн.</CaseListItem>
          <CaseListItem>
            Убедиться в безопасности и профессионализме компании.
          </CaseListItem>
        </CaseList>
      </Box>

      <Box>
        <CaseBoxTitle>Постановка задачи</CaseBoxTitle>

        <CaseListTitle>Проблемы, с которыми столкнулся клиент</CaseListTitle>
        <CaseList marketed margin>
          <CaseListItem>
            Отсутствие эффективного онлайн-присутствия и информирования
            потенциальных клиентов об уникальной услуге.
          </CaseListItem>
          <CaseListItem>
            Сложности с бронированием экскурсий через интернет.
          </CaseListItem>
          <CaseListItem>
            Недостаточная узнаваемость бренда на туристическом рынке.
          </CaseListItem>
        </CaseList>
        <CaseListTitle>Задачи, которые необходимо было решить</CaseListTitle>
        <CaseList marketed margin>
          <CaseListItem>
            Разработать современный и привлекательный сайт, отражающий
            инновационность услуги.
          </CaseListItem>
          <CaseListItem>
            Интегрировать систему онлайн-бронирования и оплаты.
          </CaseListItem>
          <CaseListItem>
            Создать контент, объясняющий преимущества и уникальность экскурсий в FPV очках.
          </CaseListItem>
          <CaseListItem>
            Оптимизировать сайт для поисковых систем (SEO).
          </CaseListItem>
        </CaseList>
        <CaseListTitle>Ожидаемые результаты и KPI</CaseListTitle>
        <CaseList marketed margin>
          <CaseListItem>
            Увеличение трафика на сайт на 20% в течение первых 3 месяцев.
          </CaseListItem>
          <CaseListItem>
            Повышение узнаваемости бренда среди целевой аудитории.
          </CaseListItem>
          <CaseListItem>
            Увеличение среднего времени пребывания на сайте до 3 минут.
          </CaseListItem>
        </CaseList>
      </Box>

      <Box>
        <CaseBoxTitle>Анализ и стратегия</CaseBoxTitle>
        <CaseText margin>
          Проведя анализ туристического рынка Владимира, мы обнаружили, что
          прямых конкурентов у "Active Vladimir" нет, однако существует
          множество традиционных экскурсионных услуг. Это предоставило
          возможность выделить уникальность предложения клиента.
        </CaseText>

        <CaseListTitle>
          Определение уникального торгового предложения
        </CaseListTitle>
        <CaseList margin>
          <CaseListItem>
            <CaseTextAccent>
              Определение уникального торгового предложения
            </CaseTextAccent>
          </CaseListItem>
          <CaseListItem>
            <CaseTextAccent>Уникальность опыта</CaseTextAccent> экскурсии в FPV
            очках предлагают совершенно новый способ увидеть город.
          </CaseListItem>
          <CaseListItem>
            <CaseTextAccent>Современные технологии</CaseTextAccent>{" "}
            использование дронов и виртуальной реальности
          </CaseListItem>
          <CaseListItem>
            <CaseTextAccent>Персонализация</CaseTextAccent> возможность
            индивидуальных экскурсий и маршрутов
          </CaseListItem>
        </CaseList>

        <CaseListTitle>Стратегический план действий</CaseListTitle>
        <CaseList marketed>
          <CaseListItem>
            Создать визуально привлекательный сайт с акцентом на инновационность.
          </CaseListItem>
          <CaseListItem>
            Разработать интерактивный контент: видео, 3D-тур, галереи.
          </CaseListItem>
          <CaseListItem>
            Интегрировать удобную систему бронирования и оплаты.
          </CaseListItem>
          <CaseListItem>
            Реализовать SEO-стратегию для повышения видимости в поисковых
            системах.
          </CaseListItem>
          <CaseListItem>
            Запустить рекламные кампании в социальных сетях.
          </CaseListItem>
        </CaseList>
      </Box>

      <Box>
        <CaseBoxTitle>Процесс разработки</CaseBoxTitle>
        <CaseListTitle>Этапы работы</CaseListTitle>
        <CaseList>
          <CaseListItem>
            <CaseTextAccent>Планирование:</CaseTextAccent> определение целей,
            целевой аудитории, функциональных требований.
          </CaseListItem>
          <CaseListItem>
            <CaseTextAccent>Дизайн:</CaseTextAccent> создание прототипов,
            разработка уникального визуального стиля.
          </CaseListItem>
          <CaseListItem>
            <CaseTextAccent>Разработка:</CaseTextAccent> рограммирование,
            интеграция систем бронирования и оплаты.
          </CaseListItem>
          <CaseListItem>
            <CaseTextAccent>Тестирование:</CaseTextAccent> проверка
            функциональности, юзабилити-тестирование, оптимизация
            производительности.
          </CaseListItem>
          <CaseListItem>
            <CaseTextAccent>Запуск:</CaseTextAccent> размещение на сервере,
            настройка аналитики, обучение персонала клиента.
          </CaseListItem>
        </CaseList>

        <CaseListTitle>Команда проекта и их роли</CaseListTitle>
        <CaseList>
          <CaseListItem>
            <CaseTextAccent>Проектный менеджер -</CaseTextAccent> координация
            проекта, связь с клиентом.
          </CaseListItem>
          <CaseListItem>
            <CaseTextAccent>UX/UI дизайнер -</CaseTextAccent> разработка
            пользовательского интерфейса и опыта.
          </CaseListItem>
          <CaseListItem>
            <CaseTextAccent>Фронтенд-разработчик -</CaseTextAccent> верстка,
            создание интерактивных элементов.
          </CaseListItem>
          <CaseListItem>
            <CaseTextAccent>Бэкенд-разработчик -</CaseTextAccent> серверная
            логика, интеграция систем бронирования и оплаты.
          </CaseListItem>
          <CaseListItem>
            <CaseTextAccent>Контент-менеджер -</CaseTextAccent> создание
            текстового и визуального контента.
          </CaseListItem>
          <CaseListItem>
            <CaseTextAccent>SEO-специалист -</CaseTextAccent> оптимизация сайта
            для поисковых систем.
          </CaseListItem>
          <CaseListItem>
            <CaseTextAccent>Тестировщик -</CaseTextAccent> контроль качества,
            функциональное тестирование.
          </CaseListItem>
        </CaseList>
      </Box>

      <Box>
        <CaseBoxTitle>Дизайн и функциональность</CaseBoxTitle>
        <CaseListTitle>Подход к UX/UI дизайну</CaseListTitle>
        <CaseText margin>
          Дизайн сайта отражает инновационность и динамику услуги. Использованы
          яркие цвета, современные шрифты, анимации и видеофон на главной
          странице. Навигация интуитивно понятна, акцент сделан на удобство
          пользователя и быструю доступность информации.
        </CaseText>
        <CaseListTitle>
          Описание ключевых функций и особенностей сайта
        </CaseListTitle>
        <CaseList margin>
          <CaseListItem>
            <CaseTextAccent>Главная страница:</CaseTextAccent> Видео-презентация
            услуги, ключевые преимущества, CTA (призыв к действию) для
            бронирования.
          </CaseListItem>
          <CaseListItem>
            <CaseTextAccent>Раздел "О нас":</CaseTextAccent> История компании,
            миссия, команда специалистов.
          </CaseListItem>
          <CaseListItem>
            <CaseTextAccent>Экскурсии:</CaseTextAccent> Подробное описание
            доступных маршрутов, продолжительность, стоимость.
          </CaseListItem>
          <CaseListItem>
            <CaseTextAccent>Бронирование:</CaseTextAccent> Интерактивный
            календарь, выбор даты и времени, онлайн-оплата.
          </CaseListItem>
          <CaseListItem>
            <CaseTextAccent>Галерея:</CaseTextAccent> Фото и видео с предыдущих
            экскурсий, демонстрирующие опыт клиентов.
          </CaseListItem>
          <CaseListItem>
            <CaseTextAccent>Отзывы:</CaseTextAccent> Реальные отзывы клиентов,
            интеграция с Google Reviews.
          </CaseListItem>
          <CaseListItem>
            <CaseTextAccent>Контакты:</CaseTextAccent> Форма обратной связи,
            карта с местоположением офиса, контактные данные.
          </CaseListItem>
        </CaseList>

        <CaseListTitle>
          Интеграция с другими сервисами и платформами
        </CaseListTitle>
        <CaseList>
          <CaseListItem>
            <CaseTextAccent>Платежные системы:</CaseTextAccent> Безопасные
            онлайн-платежи через Robokassa, Yandex.Kassa.
          </CaseListItem>

          <CaseListItem>
            <CaseTextAccent>Чат-бот:</CaseTextAccent> Автоматическое
            консультирование пользователей, ответы на часто задаваемые вопросы.
          </CaseListItem>
          <CaseListItem>
            <CaseTextAccent>Email-маркетинг:</CaseTextAccent> Подписка на новости и специальные предложения, интеграция с Mailchimp.
          </CaseListItem>
        </CaseList>
      </Box>

      <Box>
        <CaseBoxTitle>Результаты</CaseBoxTitle>
        <CaseListTitle>Достигнутые показатели</CaseListTitle>
        <CaseList margin>
          <CaseListItem>
            <CaseTextAccent>Трафик:</CaseTextAccent> Увеличение на 90% в течение
            первых 6 месяцев.
          </CaseListItem>
          <CaseListItem>
            <CaseTextAccent>Онлайн-бронирования:</CaseTextAccent> Рост на 65%
            благодаря удобству использования сайта.
          </CaseListItem>
          <CaseListItem>
            <CaseTextAccent>Среднее время на сайте:</CaseTextAccent> Повышение
            до 6 минут 20 секунд.
          </CaseListItem>
          <CaseListItem>
            <CaseTextAccent>Позиции в поисковых системах:</CaseTextAccent> Вывод
            сайта в топ-3 по ключевым запросам "экскурсия в FPV очках Владимир",
            "виртуальные экскурсии Владимир".
          </CaseListItem>
        </CaseList>
        <CaseListTitle>Сравнение с исходными данными</CaseListTitle>
        <CaseList margin>
          <CaseListItem>
            <CaseTextAccent>До:</CaseTextAccent> Отсутствие онлайн-продвижения,
            минимальное количество бронирований через интернет.
          </CaseListItem>
          <CaseListItem>
            <CaseTextAccent>После:</CaseTextAccent> Стабильный поток посетителей
            на сайт, значительный рост бронирований и повышенная узнаваемость
            бренда.
          </CaseListItem>
        </CaseList>
        <CaseListTitle>Отзывы клиента и конечных пользователей</CaseListTitle>
        <CaseList>
          <CaseListItem>
            <CaseTextAccent>Клиент:</CaseTextAccent> "Сайт превзошел наши
            ожидания. Он не только красивый, но и функциональный. Количество
            бронирований выросло, и мы получаем много положительных отзывов от клиентов о простоте использования сайта."
          </CaseListItem>
          <CaseListItem>
            <CaseTextAccent>Пользователи:</CaseTextAccent> Отмечают
            привлекательный дизайн, удобство бронирования и интерес к уникальной
            услуге после посещения сайта.
          </CaseListItem>
        </CaseList>
      </Box>
      <Box>
        <CaseBoxTitle>Выводы</CaseBoxTitle>
        <CaseListTitle>Сравнение с исходными данными</CaseListTitle>
        <CaseList marketed margin>
          <CaseListItem>
            Создание эффективного инструмента для продвижения инновационной
            услуги.
          </CaseListItem>
          <CaseListItem>
            Увеличение продаж и расширение клиентской базы.
          </CaseListItem>
          <CaseListItem>
            Укрепление имиджа компании как лидера в сфере туристических
            технологий.
          </CaseListItem>
        </CaseList>

        <CaseList marketed margin>
          <CaseListItem>
            Рост доходов за счет увеличения количества бронирований.
          </CaseListItem>
          <CaseListItem>
            Расширение присутствия на рынке и опережение конкурентов.
          </CaseListItem>
          <CaseListItem>
            Возможность масштабирования бизнеса и введения новых услуг.
          </CaseListItem>
        </CaseList>
        <FormController formType={FORM_TYPE.MAIN_FORM} />
      </Box>
    </>
  );
};
