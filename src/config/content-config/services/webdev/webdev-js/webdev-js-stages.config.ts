import { TWorkStages } from "@/interfaces/types/block/products.type";

export const WEBDEV_JS_STAGES = {
  items: [
    {
      stage: "Анализ и планирование",
      descr: [
        "Определение целей и задач сайта",
        "Исследование целевой аудитории и конкурентов",
        "Разработка технического задания",
      ],
    },
    {
      stage: "Дизайн и прототипирование",
      descr: [
        "Создание уникального дизайна",
        "Разработка прототипов страниц",
        "Согласование дизайна с клиентом",
      ],
    },
    {
      stage: "Разработка и тестирование",
      descr: [
        "Разработка сайта на JavaScript с использованием выбранного фреймворка",
        "Тестирование на различных устройствах и браузерах",
        "Оптимизация скорости загрузки сайта",
      ],
    },
    {
      stage: "Наполнение контентом",
      descr: [
        "Создание и размещение текстового и графического контента",
        "Оптимизация контента для поисковых систем",
      ],
    },
    {
      stage: "Запуск и поддержка",
      descr: [
        "Размещение сайта на хостинге",
        "Обучение клиента работе с системой управления сайтом",
        "1 месяц бесплатной технической поддержки",
      ],
    },
  ],
  title: "Этапы работ",
} satisfies TWorkStages;
