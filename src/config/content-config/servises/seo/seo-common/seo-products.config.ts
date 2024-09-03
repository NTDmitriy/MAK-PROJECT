import { SEO_DASHBOARD_PAGES } from "@/config/url-config/seo-pages.config";
import { TServiceProducts } from "@/interfaces/types/block/products.type";

export const SEO_PRODUCTS = {
  blockTitle: "Услуги по трафику и SEO",
  blockTitleDescr:
    "Наша команда предоставляет полный спектр услуг для эффективного продвижения вашего бизнеса:",
  items: [
    {
      name: "Инфлюенс маркетинг",
      description:
        "Подбор релевантных инфлюенсеров, разработка стратегии кампании, создание контента, анализ результатов",
      priceFrom: "от 10% рекламного бюджета",
      image: "promotion-medical-700x300",
      url: SEO_DASHBOARD_PAGES.SEO_INFLUENCE.url,
    },
    {
      name: "Посевы",
      description:
        "Размещение контента на популярных платформах и форумах, разработка стратегии посевов, анализ эффективности.",
      priceFrom: "от 30% рекламного бюджета",
      image: "promotion-medical-700x300",
      url: SEO_DASHBOARD_PAGES.SEO_POSEVY.url,
    },
    {
      name: "Email рассылка по базам",
      description:
        "Создание персонализированных email-кампаний, сегментация базы данных, анализ и оптимизация рассылок.",
      priceFrom: 30000,
      image: "promotion-medical-700x300",
      url: SEO_DASHBOARD_PAGES.SEO_EMAIL_DISTRIBUTION.url,
    },
    {
      name: "SEO-продвижение",
      description:
        "Аудит сайта, внутренняя и внешняя оптимизация, создание качественного контента, улучшение видимости и позиций в поисковых системах.",
      priceFrom: 70000,
      image: "promotion-medical-700x300",
      url: SEO_DASHBOARD_PAGES.SEO_PROMOTION.url,
    },
  ],
} satisfies TServiceProducts;
