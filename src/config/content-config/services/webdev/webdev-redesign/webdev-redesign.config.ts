import { ALL_REVIWES } from "@/config/content-config/all-reviwes/all-reviwes.config";
import { WEBDEV_DASHBOARD_PAGES } from "@/config/url-config/webdev-pages.config";
import {
  TFaq,
  THero,
  THeroBasic,
  THeroInfo,
  TReviwe,
  TServiceProducts,
  TSuitableFor,
  TSupplementaryDescr,
  TWorkStages
} from "@/interfaces/types/block/products.type";
import { TScreen } from "@/interfaces/types/screens/screens.type";
import { WEBDEV_PRODUCTS } from "../webdev-common/webdev-products.config";
import { WEBDEV_REDESING_STAGES } from "./webdev-redesign-stages.config";
import { REDESIGN_FAQ } from "./webdev-redesing-faq.config";

export const WEBDEV_REDESIGN_CONFIG = {
  url: WEBDEV_DASHBOARD_PAGES.WEBDEV_REDESIGN.url,
  hero: {
    basic: {
      title: {
        accent: "Редизайн и доработка сайтов:",
        accentAfter: "Улучшите свой сайт, повысив его эффективность",
      },
      description:
        "Мы предлагаем услуги по редизайну и доработке сайтов любого типа и на любой платформе. Наша команда поможет вам обновить внешний вид вашего сайта, улучшить его функциональность и адаптировать под современные требования, чтобы он максимально соответствовал вашим бизнес-целям.",
      image: "promotion-stroitelnie-comp-hero",
    } satisfies THeroBasic,
    infoWebdev: [
      "Современный и стильный дизайн",
      "Оптимизация функционала",
      "Улучшение пользовательского опыта (UX)",
      "1 месяц бесплатной поддержки",
    ] satisfies THeroInfo,
  } satisfies THero,
  supplementaryDescr: {
    title: "Обновите ваш веб-сайт для соответствия современным стандартам",
    descr:
      "Редизайн и доработка сайта – это важный этап в развитии любого веб-сайта, который помогает сделать его более современным, удобным и эффективным. В условиях быстрого изменения трендов и технологий ваш сайт должен соответствовать высоким стандартам, чтобы оставаться конкурентоспособным. Мы предлагаем комплексный подход, начиная с анализа текущего состояния сайта, разработки нового дизайна и доработки функционала, до полной оптимизации и поддержки. Независимо от того, на какой платформе создан ваш сайт, наша команда обеспечит качественное обновление, которое будет способствовать росту вашего бизнеса.",
    image: "seo-common-supplementary.webp",
  } satisfies TSupplementaryDescr,
  suitableFor: {
    items: [
      {
        title: "Бизнесам с устаревшим дизайном",
        descr:
          "Если ваш сайт выглядит устаревшим, мы поможем создать современный и привлекательный дизайн, который будет соответствовать текущим трендам.",
      },
      {
        title: "Компаниям, нуждающимся в улучшении функционала",
        descr:
          "Мы доработаем ваш сайт, добавив новые функции и улучшив существующие, чтобы повысить удобство и эффективность его использования.",
      },
      {
        title: "Предприятиям, стремящимся повысить конверсию",
        descr:
          "Оптимизация пользовательского опыта (UX) и улучшение интерфейса помогут увеличить конверсию и привлечь больше клиентов.",
      },
    ],
  } satisfies TSuitableFor,
  allSiteTypes: {
    formTitle: "Сроки редизайна и доработки",
    formDescr: "Сроки редизайна и доработки сайта зависят от индивидуальных особенностей и потребностей вашего проекта. Мы подходим к каждому клиенту персонально и учитываем все нюансы, чтобы предложить оптимальное решение. Для точной оценки сроков и объема работ нам необходимо ознакомиться с вашим действующим сайтом и понять ваши цели. Запишитесь на консультацию, чтобы мы могли обсудить все детали и предложить вам наилучший план действий",
    ...WEBDEV_PRODUCTS,
  } satisfies TServiceProducts,
  workStages: WEBDEV_REDESING_STAGES satisfies TWorkStages,
  faq: REDESIGN_FAQ satisfies TFaq[],
  reviwes: ALL_REVIWES satisfies TReviwe[],
  
} satisfies TScreen;
