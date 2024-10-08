import { IDashboardItem } from "./app.dashboard";

class SEO_DASHBOARD {
  private root = "/services";

  SEO_INFLUENCE = {
    name: "Инфлюенс-маркетинг",
    smallName: "Инфлюенс-маркетинг",
    url: `${this.root}/influence-marketing`,
    icon: "icon-nav-seo-influence",
    description:
      "Подбор релевантных инфлюенсеров, разработка стратегии кампании, создание контента, анализ результатов",
  } satisfies IDashboardItem;

  SEO_POSEVY = {
    name: "Посевы",
    smallName: "Посевы",
    url: `${this.root}/posevy`,
    icon: "icon-nav-seo-posevy",
    description:
      "Размещение контента на популярных платформах и форумах, разработка стратегии посевов, анализ эффективности.",
  } satisfies IDashboardItem;

  SEO_PROMOTION = {
    name: "SEO-продвижение",
    smallName: "SEO-продвижение",
    url: `${this.root}/seo-prodvizhenie`,
    icon: "icon-nav-seo-promotion",
    description:
      "Аудит сайта, внутренняя и внешняя оптимизация, создание качественного контента, улучшение видимости и позиций в поисковых системах. ",
  } satisfies IDashboardItem;

  SEO_EMAIL_DISTRIBUTION = {
    name: "Email рассылки по базам",
    smallName: "Email рассылки по базам",
    url: `${this.root}/email-rassylki-po-bazam`,
    icon: "icon-nav-seo-email",
    description:
      "Создание персонализированных email-кампаний, сегментация базы данных, анализ и оптимизация рассылок.",
  } satisfies IDashboardItem;

  SEO = {
    url: `${this.root}/trafic-and-seo`,
    name: "Трафик и SEO",
    icon: "IconSeoNav",
    description:
      "В современном мире успех бизнеса во многом зависит от его присутствия в интернете. Трафик и SEO-продвижение — это ключевые инструменты для привлечения клиентов и увеличения продаж. Наши услуги включают инфлюенс маркетинг, посевы, email рассылку по базам и SEO-продвижение. Узнайте, как наши решения могут помочь вам достичь новых высот. ",
    childrens: [
      this.SEO_INFLUENCE,
      this.SEO_POSEVY,
      this.SEO_PROMOTION,
      this.SEO_EMAIL_DISTRIBUTION,
    ],
  } satisfies IDashboardItem;
}

export const SEO_DASHBOARD_PAGES = new SEO_DASHBOARD();
