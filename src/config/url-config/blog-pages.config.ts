import { IDashboardItem } from "./all-pages.config";

export interface IBlogItem extends IDashboardItem {
  date: string;
  time?: string;
  author?: string;
  thems?: string[];
}

class BLOG_DASHBOARD {
  private root = "/blog";

  CREATIVE_ADVERTISING = {
    name: "Как привлечь внимание клиентов в условиях перенасыщенного рынка: креативные подходы к рекламе",
    description:
      "Маркетинговое агентство полного цикла предоставляет полный спектр услуг, включая разработку стратегии, SEO-оптимизацию, контент-маркетинг, управление рекламными кампаниями и анализ результатов.",
    url: `${this.root}/kak-privlech-vnimanie-klientov-v-usloviyah-perenasyshchennogo-rynka-kreativnye-podhody-k-reklame`,
    icon: "IconArticlesNav",
    image: "grafov-hero-700x400.webp",
    date: "09.09.2024",
    time: "~10 мин",
    author: "Максим Бондаренко",
    thems: ["SEO-продвижение", "Яндекс Директ", "Сквозная аналитика"],
  } satisfies IBlogItem;

  toArray(): IBlogItem[] {
    return Object.values(this).filter((item) => {
      return (item as IBlogItem).name !== undefined;
    }) as IBlogItem[];
  }
}

export const BLOG_DASHBOARD_PAGES = new BLOG_DASHBOARD();
