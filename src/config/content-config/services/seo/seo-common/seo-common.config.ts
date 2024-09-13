import { ALL_CASES_CONTENT } from "@/config/content-config/all-cases/all-cases.config";
import { ALL_REVIWES } from "@/config/content-config/all-reviwes/all-reviwes.config";
import { SEO_DASHBOARD_PAGES } from "@/config/url-config/seo-pages.config";
import type {
  TCases,
  THero,
  THeroBasic,
  THeroInfo,
  TReviwe,
  TServiceProducts,
  TSupplementaryDescr,
  TWhyUs,
} from "@/interfaces/types/block/products.type";
import { TScreen } from "@/interfaces/types/screens/screens.type";
import { SEO_PRODUCTS } from "./seo-products.config";

export const SEO_COMMON_CONFIG = {
  url: SEO_DASHBOARD_PAGES.SEO.url,
  hero: {
    basic: {
      title: {
        accent: "эффективные решения для вашего бизнеса",
        accentBefore: "Трафик и SEO-продвижение:",
      },
      description:
        "Ищете, где заказать рекламу в интернете? Наше рекламное агентство предоставляет комплексные услуги по настройке и запуску рекламных кампаний в Яндекс Директ, ВКонтакте, Google Ads, Telegram Ads и Meta: Facebook & Instagram. Мы поможем вам привлечь целевую аудиторию, увеличить конверсию и добиться максимального результата от рекламы. Доверьтесь профессионалам!",
      image: "seo-common-hero",
    } satisfies THeroBasic,
    infoService: [
      "Привлечение целевой аудитории",
      "Увеличение конверсии и продаж ",
      "Повышение видимости в поисковых системах",
    ] satisfies THeroInfo,
  } satisfies THero,
  supplementaryDescr: {
    title: "Трафик и SEO-продвижение: основы результата в цифровом мире",
    descr:
      "В условиях быстро развивающегося цифрового мира трафик и SEO-продвижение играют решающую роль в успехе бизнеса. Правильное использование этих инструментов помогает привлекать новых клиентов, удерживать существующих и существенно увеличивать прибыль. Комплексный подход к цифровому маркетингу включает использование различных стратегий и технологий, которые позволяют максимально эффективно продвигать ваши товары и услуги.",
    image: "seo-common-supplementary",
  } satisfies TSupplementaryDescr,
  products: {
    formTitle: "Не нашли свою нишу? Напишите нам!",
    formDescr:
      "Каждая ниша уникальна и требует индивидуального подхода. Если вы не нашли свою нишу среди наших услуг, свяжитесь с нами. Мы обсудим ваш проект и предложим наилучшие решения для продвижения. Наш опыт охватывает множество отраслей, и мы уверены, что сможем помочь вам достичь ваших целей. Оставьте свои контактные данные и наш менеджер свяжется с вами и предложит идеальные решения для вашего бизнеса. ",
    ...SEO_PRODUCTS,
  } satisfies TServiceProducts,
  howWorks: {
    items: [
      {
        title: "Анализ и аудит",
        descr:
          "Изучаем вашу текущую маркетинговую стратегию и определяем точки роста.",
      },
      {
        title: "Планирование и стратегия",
        descr:
          "Разрабатываем детальный план продвижения, учитывая особенности вашего бизнеса и целевой аудитории.",
      },
      {
        title: "Реализация",
        descr:
          "Внедряем разработанную стратегию, постоянно оптимизируя процессы для достижения лучших результатов.",
      },
      {
        title: "Отчетность и анализ",
        descr:
          "Предоставляем регулярные отчеты и анализируем эффективность кампаний, корректируя их по мере необходимости.",
      },
    ],

    blockTitle: "Как мы работаем",
  },
  whyUs: {
    items: [
      {
        title: "Профессионализм",
        descrBefore: "наша команда",
        descrAccent: "состоит из опытных специалистов",
        descrAfter:
          "которые владеют новейшими методами и технологиями в сфере трафика и SEO-продвижения.",
      },
      {
        title: "Индивидуальный подход",
        descrBefore: "Мы разрабатываем",
        descrAccent: "уникальные стратегии ",
        descrAfter: "для каждого клиента, учитывая специфику его бизнеса.",
      },
      {
        title: "Прозрачность и отчетность",
        descrBefore: "мы предоставляем",
        descrAccent: "подробные отчеты",
        descrAfter:
          "о проделанной работе и достигнутых результатах, обеспечивая полную прозрачность наших действий. ",
      },
      {
        title: "Доказанная эффективность",
        descrBefore: "наши клиенты достигают",
        descrAccent: "устойчивого роста и увеличения прибыли",
        descrAfter: "благодаря нашим решениям.",
      },
    ],
    blockTitle: "Почему нас выбирают:",
  } satisfies TWhyUs,
  projects: ALL_CASES_CONTENT.toArray() satisfies TCases[],
  reviwes: ALL_REVIWES satisfies TReviwe[],
} satisfies TScreen;
