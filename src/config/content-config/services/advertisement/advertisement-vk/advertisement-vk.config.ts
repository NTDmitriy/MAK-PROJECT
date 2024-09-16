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
import { ADVERTISEMENT_VK_INCLUDE } from "./advertisement-vk-include.config";
import { TARIFFS_VK } from "./advertisement-vk-tariffs.config";

export const ADVERTISEMENT_VK_CONFIG = {
  url: ADVERTISEMENT_DASHBOARD_PAGES.ADVERTISEMENT_VK.url,
  hero: {
    basic: {
      title: {
        accent: "Таргетированная реклама",
        accentAfter: "в ВКонтакте для вашего бизнеса",
      },
      description:
        "Хотите заказать рекламу в социальных сетях? Реклама в ВКонтакте предлагает уникальные возможности для продвижения вашего бизнеса. Наше агентство профессионально настроит и запустит рекламные кампании, ориентированные на вашу целевую аудиторию. Закажите настройку рекламы у нас и увидьте, как растут ваши показатели.",
           image: "advertisement-vk-hero",
    } satisfies THeroBasic,
    infoAdvertisement: [
      {
        title: "Широкий охват:",
        description:
          "Реклама во ВКонтакте достигает миллионов активных пользователей.",
      },
      {
        title: "Персонализированный подход:",
        description:
          "Настройка таргетинга на основе интересов и поведения пользователей.",
      },
      {
        title: "Высокая конверсия:",
        description:
          "Оптимизация рекламных объявлений для достижения максимальной эффективности.",
      },
    ] satisfies THeroInfoAdvertisement[],
  } satisfies THero,
  supplementaryDescr: {
    title:
      "Реклама в ВКонтакте: привлечение клиентов через популярную социальную сеть",
    descr:
      "Реклама в ВКонтакте является мощным инструментом для продвижения вашего бизнеса в одной из самых популярных социальных сетей России. Этот инструмент позволяет точно настроить таргетинг на вашу целевую аудиторию, что повышает эффективность рекламных кампаний и приводит к увеличению продаж. Благодаря разнообразным форматам рекламы и широким аналитическим возможностям, реклама в ВКонтакте предоставляет идеальные условия для успешного продвижения в интернете. Используйте рекламу в ВКонтакте для достижения максимального результата и повышения узнаваемости вашего бренда.",
       image: "advertisement-vk-supplementary",
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
        descr: "Настраиваем и запускаем рекламные кампании в ВКонтакте.",
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
          "в сфере интернет-рекламы и продвижения различных бизнесов.",
      },
      {
        title: "Индивидуальный подход:",
        descrBefore: "Каждому клиенту мы предоставляем ",
        descrAccent: "персонализированные решения,",
        descrAfter: "которые соответствуют его уникальным потребностям.",
      },
      {
        title: "Прозрачность и отчетность:",
        descrBefore: "Мы всегда открыты для общения и предоставляем",
        descrAccent: "прозрачные отчеты",
        descrAfter: "о нашей работе.",
      },
      {
        title: "Результативность:",
        descrBefore: "Мы ориентированы на",
        descrAccent: "достижение конкретных результатов ",
        descrAfter: "и повышение эффективности вашего бизнеса. ",
      },
    ],
    blockTitle: "Почему нас выбирают",
    blockTitleDescr:
      "Наше агентство предлагает комплексный подход к настройке и управлению рекламными кампаниями в ВКонтакте:",
  } satisfies TWhyUs,
  includeService: ADVERTISEMENT_VK_INCLUDE satisfies TIncludedInService,
  projects: ALL_CASES_CONTENT.toArray() satisfies TCases[],
  reviwes: ALL_REVIWES satisfies TReviwe[],
  tariffs: TARIFFS_VK satisfies TTariffs,
} satisfies TScreen;
