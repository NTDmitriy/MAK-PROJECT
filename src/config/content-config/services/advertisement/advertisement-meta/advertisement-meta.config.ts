import { ALL_REVIWES } from "@/config/content-config/all-reviwes/all-reviwes.config";
import { ALL_CASES_CONTENT } from "@/config/content-config/prev-cases/prev-cases.config";
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
import { ADVERTISEMENT_META_INCLUDE } from "./advertisement-meta-include.config";
import { TARIFFS_META } from "./advertisement-meta-tariffs.config";

export const ADVERTISEMENT_META_CONFIG = {
  // url: ADVERTISEMENT_DASHBOARD_PAGES.ADVERTISEMENT_META.url,
  url: '/',
  hero: {
    basic: {
      title: {
        accentBefore: "Эффективная реклама",
        accent: "в Meta:Facebook & Instagram",
      },
      description:
        "Хотите привлечь новых клиентов и увеличить узнаваемость вашего бренда? Реклама в Facebook и Instagram предоставляет уникальные возможности для продвижения вашего бизнеса. Эти платформы принадлежат одной компании (Meta) и работают в единой экосистеме, обеспечивая доступ к широкой аудитории по всему миру. Наше агентство поможет вам настроить и запустить рекламные кампании, которые привлекут внимание и приведут к желаемым результатам.  ",
      image: "advertisement-meta-hero",
    } satisfies THeroBasic,
    infoAdvertisement: [
      {
        title: "Точный таргетинг:",
        description:
          "Настраиваем рекламу по демографических данным, интересам и поведению.",
      },
      {
        title: "Гибкость форматов:",
        description:
          "Широкий выбор рекламных форматов: от фото и видео до каруселей и историй.",
      },
      {
        title: "Вовлеченность:",
        description:
          "Реклама способствует активному взаимодействию пользователей с вашим контентом.",
      },
    ] satisfies THeroInfoAdvertisement[],
  } satisfies THero,
  supplementaryDescr: {
    title:
      "Реклама в Meta: завоевание глобальной аудитории с помощью Facebook и Instagram",
    descr:
      "Реклама в Facebook и Instagram — это мощный инструмент для продвижения вашего бизнеса. Эти платформы предлагают широкий выбор форматов рекламы, включая фото, видео, карусели, истории и динамические объявления, что позволяет адаптировать кампании под нужды любой компании. Благодаря возможности точного таргетинга, включая демографические данные, интересы и поведение пользователей, вы можете точно нацеливаться на свою аудиторию. Кроме того, использование аналитических инструментов, таких как Facebook Pixel, позволяет отслеживать эффективность кампаний и оптимизировать их для достижения лучших результатов. Реклама в этих социальных сетях помогает увеличить охват, вовлеченность и конверсии, что делает её незаменимой частью комплексной маркетинговой стратегии.",
    image: "advertisement-meta-supplementary",
  } satisfies TSupplementaryDescr,
  howWorks: {
    items: [
      {
        title: "Консультация и анализ",
        descr:
          "Проводим бесплатную первичную консультацию, анализируем вашу нишу и определяем цели.",
      },
      {
        title: "Разработка стратегии",
        descr:
          "Создаем индивидуальную стратегию продвижения, учитывая особенности вашего бизнеса и целевой аудитории.",
      },
      {
        title: "Запуск кампаний",
        descr:
          "Настраиваем и запускаем рекламные кампании на платформах Facebook и Instagram.",
      },
      {
        title: "Оптимизация и контроль",
        descr:
          "Постоянно оптимизируем кампании, анализируем результаты и вносим необходимые изменения для достижения лучших показателей.",
      },
      {
        title: "Отчеты и улучшения",
        descr:
          "Предоставляем регулярные отчеты и рекомендации по дальнейшему улучшению рекламных кампаний.",
      },
    ],

    blockTitle: "Как мы работаем",
    blockTitleDescr:
      "Мы работаем по четко выстроенной схеме, которая гарантирует успешное продвижение вашего бизнеса:",
  } satisfies THowWorks,
  whyUs: {
    items: [
      {
        title: "Опыт и профессионализм:",
        descrBefore: "Мы",
        descrAccent: "обладаем многолетним опытом",
        descrAfter:
          "в сфере интернет-рекламы и продвижения различных бизнесов.",
      },
      {
        title: "Индивидуальный подход:",
        descrBefore: "Каждому клиенту мы предоставляем ",
        descrAccent: "персонализированные решения,",
        descrAfter: " которые соответствуют его уникальным потребностям.",
      },
      {
        title: "Прозрачность и отчетность:",
        descrBefore: "Мы всегда открыты для общения и предоставляем",
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
  includeService: ADVERTISEMENT_META_INCLUDE satisfies TIncludedInService,
  projects: ALL_CASES_CONTENT.toArray() satisfies TCases[],
  reviwes: ALL_REVIWES satisfies TReviwe[],
  tariffs: TARIFFS_META satisfies TTariffs,
} satisfies TScreen;
