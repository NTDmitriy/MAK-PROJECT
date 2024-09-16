import { ALL_CASES_CONTENT } from "@/config/content-config/all-cases/all-cases.config";
import { ALL_REVIWES } from "@/config/content-config/all-reviwes/all-reviwes.config";
import { ADVERTISEMENT_DASHBOARD_PAGES } from "@/config/url-config/advertisement-pages.config";
import {
  TCases,
  THero,
  THeroBasic,
  THeroInfoAdvertisement,
  THowWorks,
  TIncludedInService,
  TReviwe,
  TSupplementaryDescr,
  TTariffs,
  TWhyUs,
} from "@/interfaces/types/block/products.type";
import { TScreen } from "@/interfaces/types/screens/screens.type";
import { ADVERTISEMENT_YANDEX_INCLUDE } from "./advertisement-yandex-include.config";
import { TARIFFS_YANDEX } from "./advertisement-yandex-tariffs.config";

export const ADVERTISEMENT_YANDEX_CONFIG = {
  url: ADVERTISEMENT_DASHBOARD_PAGES.ADVERTISEMENT_YANDEX.url,
  hero: {
    basic: {
      title: {
        accentBefore: "Эффективная контекстная реклама",
        accent: "в Яндекс Директ",
      },
      description:
        "Ищете способы заказать рекламу в интернете? Яндекс Директ – это ваш ключ к успеху! Мы предлагаем комплексные услуги по настройке и управлению рекламными кампаниями в Яндекс Директ. Наша команда специалистов поможет вам привлечь целевую аудиторию и увеличить конверсию. Закажите рекламу у нас и ощутите результаты уже сегодня.",
      image: "advertisement-yandex-hero",
    } satisfies THeroBasic,
    infoAdvertisement: [
      {
        title: "Целевая аудитория:",
        description:
          "Настройка рекламы по ключевым словам для максимального охвата вашей целевой аудитории.",
      },
      {
        title: "Анализ эффективности:",
        description:
          "Регулярный мониторинг и оптимизация кампаний для достижения лучших результатов.",
      },
      {
        title: "Креативные решения: ",
        description:
          "Создание привлекательных объявлений, которые привлекают внимание и стимулируют клики.",
      },
    ] satisfies THeroInfoAdvertisement[],
  } satisfies THero,
  supplementaryDescr: {
    title:
      "Контекстная реклама в Яндекс Директ: ключ к успеху в российском интернете",
    descr:
      "Яндекс Директ является одним из наиболее эффективных инструментов контекстной рекламы в России. С его помощью можно быстро и точно достигнуть целевую аудиторию, повысить узнаваемость бренда и увеличить количество продаж. Благодаря гибким настройкам и мощным аналитическим инструментам, Яндекс Директ предоставляет возможности для точного таргетинга и постоянной оптимизации рекламных кампаний. Используя этот инструмент, вы сможете достичь максимальной эффективности своей рекламы в интернете.",
    image: "advertisement-yandex-supplementary",
  } satisfies TSupplementaryDescr,
  howWorks: {
    items: [
      {
        title: "Консультация и анализ:",
        descr:
          "Проводим бесплатную первичную консультацию, анализируем вашу нишу и определяем цели.",
      },
      {
        title: "Разработка стратегии:",
        descr:
          "Создаем индивидуальную стратегию продвижения, учитывая особенности вашего бизнеса.",
      },
      {
        title: "Запуск кампаний:",
        descr: "Настраиваем и запускаем рекламные кампании в Яндекс Директ.",
      },
      {
        title: "Оптимизация и контроль:",
        descr:
          "Постоянно оптимизируем кампании для достижения лучших результатов.",
      },
      {
        title: "Отчеты и улучшения:",
        descr:
          "Предоставляем регулярные отчеты и вносим необходимые изменения для повышения эффективности.",
      },
    ],

    blockTitle: "Как мы работаем",
    blockTitleDescr:
      "Мы работаем по четко выстроенной схеме, которая гарантирует успешное продвижение вашего бизнеса:",
  } satisfies THowWorks,
  whyUs: {
    items: [
      {
        title: "Опыт и профессионализм:",
        descrBefore: "Мы",
        descrAccent: "обладаем многолетним опытом",
        descrAfter:
          "в сфере интернет-рекламы и продвижения различных бизнесов.",
      },
      {
        title: "Индивидуальный подход:",
        descrBefore: "Каждому клиенту мы предоставляем ",
        descrAccent: "персонализированные решения,",
        descrAfter: " которые соответствуют его уникальным потребностям.",
      },
      {
        title: "Прозрачность и отчетность:",
        descrBefore: "Мы всегда открыты для общения и предоставляем",
        descrAccent: "прозрачные отчеты",
        descrAfter: "о нашей работе.",
      },
      {
        title: "Комплексный подход:",
        descrBefore: "Мы ориентированы на ",
        descrAccent: "достижение конкретных результатов ",
        descrAfter: "и повышение эффективности вашего бизнеса. ",
      },
    ],

    blockTitle: "Почему нас выбирают",
  } satisfies TWhyUs,
  includeService: ADVERTISEMENT_YANDEX_INCLUDE satisfies TIncludedInService,
  projects: ALL_CASES_CONTENT.toArray() satisfies TCases[],
  reviwes: ALL_REVIWES satisfies TReviwe[],
  tariffs: TARIFFS_YANDEX satisfies TTariffs,
} satisfies TScreen;
