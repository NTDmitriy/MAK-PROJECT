import { TWorkStages } from "@/typing/products.type";

export const WEBDEV_REDESING_STAGES = {
  items: [
    {
      stage: "Анализ и планирование",
      descr: [
        "Оценка текущего состояния сайта",
        "Определение целей редизайна и доработки",
        "Разработка технического задания",
      ],
    },
    {
      stage: "Дизайн и прототипирование",
      descr: [
        "Создание нового дизайна",
        "Разработка прототипов страниц",
        "Согласование дизайна с клиентом",
      ],
    },
    {
      stage: "Доработка и тестирование",
      descr: [
        "Внедрение новых функций и улучшение существующих",
        "Тестирование на различных устройствах и браузерах",
        "Оптимизация скорости загрузки сайта",
      ],
    },
    {
      stage: "Наполнение контентом",
      descr: [
        "Обновление и оптимизация контента",
        "Адаптация контента под новый дизайн и функционал",
      ],
    },
    {
      stage: "Запуск и поддержка",
      descr: [
        "Обновление сайта на хостинге",
        "1 месяц бесплатной технической поддержки",
        "Обучение клиента управлению обновленным сайтом",
      ],
    },
  ],
  title: "Этапы работ",
} satisfies TWorkStages;