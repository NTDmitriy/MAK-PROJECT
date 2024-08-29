import { IDashboardItem } from "./all-pages.config";

class SEO_DASHBOARD {
  private root = "/services";

  SEO_INFLUENCE = {
    name: "Инфлюенс-маркетинг",
    smallName: "Инфлюенс-маркетинг",
    url: `${this.root}/influence-marketing`,
    image: "hero-info",
    icon: "hero-info",
    description:
      "Подбор релевантных инфлюенсеров, разработка стратегии кампании, создание контента, анализ результатов",
  } satisfies IDashboardItem;

  SEO_POSEVY = {
    name: "Посевы",
    smallName: "Посевы",
    url: `${this.root}/posevy`,
    image: "hero-info",
    icon: "hero-info",
    description:
      "Размещение контента на популярных платформах и форумах, разработка стратегии посевов, анализ эффективности.",
  } satisfies IDashboardItem;

  SEO_PROMOTION = {
    name: "SEO-продвижение",
    smallName: "SEO-продвижение",
    url: `${this.root}/seo-prodvizhenie`,
    image: "hero-info",
    icon: "hero-info",
    description:
      "Аудит сайта, внутренняя и внешняя оптимизация, создание качественного контента, улучшение видимости и позиций в поисковых системах. ",
  } satisfies IDashboardItem;

  SEO_EMAIL_DISTRIBUTION = {
    name: "Email рассылки по базам",
    smallName: "Email рассылки по базам",
    url: `${this.root}/email-rassylki-po-bazam`,
    image: "hero-info",
    icon: "hero-info",
    description:
      "Создание персонализированных email-кампаний, сегментация базы данных, анализ и оптимизация рассылок.",
  } satisfies IDashboardItem;

  SEO = {
    name: "Трафик и SEO",
    url: `${this.root}/trafic-and-seo`,
    childrens: [
      this.SEO_INFLUENCE,
      this.SEO_POSEVY,
      this.SEO_PROMOTION,
      this.SEO_EMAIL_DISTRIBUTION,
    ],
  } satisfies IDashboardItem;
}

export const SEO_DASHBOARD_PAGES = new SEO_DASHBOARD();
