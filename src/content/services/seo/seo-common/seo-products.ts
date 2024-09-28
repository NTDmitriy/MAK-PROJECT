import { SEO_DASHBOARD_PAGES } from "@/dashboard/seo.dashboard";
import { TServiceProducts } from "@/typing/products.type";

export const SEO_PRODUCTS = {
  blockTitle: "Услуги по трафику и SEO",
  blockTitleDescr:
    "Наша команда предоставляет полный спектр услуг для эффективного продвижения вашего бизнеса:",
  items: [
    {
      name: "Инфлюенс маркетинг",
      description:
        "Подбор релевантных инфлюенсеров, разработка стратегии кампании, создание контента, анализ результатов",
      priceFrom: "от 10% рекламного бюджета",
      image: "seo-influence-prev",
      url: SEO_DASHBOARD_PAGES.SEO_INFLUENCE.url,
    },
    {
      name: "Посевы",
      description:
        "Размещение контента на популярных платформах и форумах, разработка стратегии посевов, анализ эффективности.",
      priceFrom: "от 30% рекламного бюджета",
      image: "seo-posevy-prev",
      url: SEO_DASHBOARD_PAGES.SEO_POSEVY.url,
    },
    {
      name: "Email рассылка по базам",
      description:
        "Создание персонализированных email-кампаний, сегментация базы данных, анализ и оптимизация рассылок.",
      priceFrom: 30000,
      image: "seo-email-prev",
      url: SEO_DASHBOARD_PAGES.SEO_EMAIL_DISTRIBUTION.url,
    },
    {
      name: "SEO-продвижение",
      description:
        "Аудит сайта, внутренняя и внешняя оптимизация, создание качественного контента, улучшение видимости и позиций в поисковых системах.",
      priceFrom: 70000,
      image: "seo-promotion-prev",
      url: SEO_DASHBOARD_PAGES.SEO_PROMOTION.url,
    },
  ],
} satisfies TServiceProducts;
