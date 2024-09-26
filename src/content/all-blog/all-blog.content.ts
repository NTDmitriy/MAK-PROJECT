import { IDashboardItem } from "@/dashboard/app.dashboard";


export interface IBlogItem extends IDashboardItem {
  date: string;
  time?: string;
  author?: string;
  thems?: string[];
}

class ALL_BLOG {
  private root = "/blog";

  CREATIVE_ADVERTISING = {
    name: "Как привлечь внимание клиентов в условиях перенасыщенного рынка: креативные подходы к рекламе",
    description:
      "Маркетинговое агентство полного цикла предоставляет полный спектр услуг, включая разработку стратегии, SEO-оптимизацию, контент-маркетинг, управление рекламными кампаниями и анализ результатов.",
    url: `${this.root}/kak-privlech-vnimanie-klientov-v-usloviyah-perenasyshchennogo-rynka-kreativnye-podhody-k-reklame`,
    image: "recommendation-advertisement.webp",
    date: "12.09.2024",
    time: "~10 мин",
    author: "Make All Perfect",
    thems: ["SEO-продвижение", "Яндекс Директ", "Сквозная аналитика"],
  } satisfies IBlogItem;

  REDESIGN_GUIDE = {
    name: "Как правильно провести редизайн сайта: подробное руководство",
    description:
      "Редизайн сайта помогает улучшить его внешний вид и функциональность. Узнайте, когда и как его проводить, чтобы сайт соответствовал современным требованиям и привлекал новых пользователей.",
    url: `${this.root}/kak-pravilno-provesti-redizayn-sayta-podrobnoye-rukovodstvo`,
    image: "recommendation-advertisement.webp",
    date: "19.09.2024",
    time: "~14 мин",
    author: "Make All Perfect",
    thems: ["Маркетинг", "Веб-дизайн", "Оптимизация сайтов"],
  } satisfies IBlogItem;


  ADS_GOOGLE_GUIDE = {
    name: "Как продвигаться в Google в 2024 году, когда нет контекстной рекламы",
    description: "В условиях отсутствия контекстной рекламы SEO становится ключевым инструментом продвижения. Узнайте, как адаптировать стратегию, оптимизировать контент и использовать технические аспекты для успешного продвижения в Google.",
    url: `${this.root}/kak-pravilno-provesti-redizayn-sayta-podrobnoye-rukovodstvo`,
    image: "recommendation-advertisement.webp",
    date: "23.09.2024",
    time: "~8 мин",
    author: "Make All Perfect",
    thems: ["SEO-продвижение", "Google Ads"],
  } satisfies IBlogItem;


  WHY_ADS_EXPENSIVE = {
    name: "Почему реклама дорожает из года в год?",
    description: "Узнайте о факторах, влияющих на рост стоимости рекламы, и эффективных альтернативных стратегиях продвижения. SEO, посевы и инфлюенс-маркетинг помогут оптимизировать бюджет и привлечь клиентов в новых условиях.",
    url: `${this.root}/kak-pravilno-provesti-redizayn-sayta-podrobnoye-rukovodstvo`,
    image: "recommendation-advertisement.webp",
    date: "26.09.2024",
    time: "~8 мин",
    author: "Make All Perfect",
    thems: ["Маркетинг", "Реклама"],
  } satisfies IBlogItem;


  toArray(): IBlogItem[] {
    return Object.values(this).filter((item) => {
      return (item as IBlogItem).name !== undefined;
    }) as IBlogItem[];
  }
}

export const ALL_BLOG_CONTENT = new ALL_BLOG();

