import { type TCases } from "@/interfaces/types/block/products.type";

class ALL_CASES {
  WILDBERRIES_SHOP = {
    id: 1,
    name: "МАГАЗИН ЖЕНСКОЙ ОДЕЖДЫ НА WB",
    url: "/prodvizhenie-magazina-zhenskoy-odezhdy-na-wildberries",
    description:
      "Увеличение продаж женской одежды на платформе Wildberries через рекламу в ВКонтакте и Яндекс. Повышение видимости и привлечение новых клиентов.",
    image: "case-shop-wb",
    instruments: ["VK Реклама", "Яндекс Директ"],
  } satisfies TCases;

  TAX_OPTIMIZATION = {
    id: 2,
    name: "Оптимизация налогов для предпринимателей на УСН",
    url: "/optimizaciya-nalogov-dlya-predprinimateley-na-usn",
    description:
      "Настройка и оптимизация рекламных кампаний в Яндекс Директ и Google Ads для привлечения целевых клиентов. Увеличение количества заявок на услуги по оптимизации налогов, снижение стоимости клика и повышение рентабельности.",
    image: "case-tax-optimization",
    instruments: ["Яндекс Директ", "Google ads"],
  } satisfies TCases;

  FURNITURE_STORE = {
    id: 3,
    name: "МАГАЗИН МЕБЕЛИ В МОСКВЕ И МО",
    url: "/prodvizhenie-kompanii-po-prodazhe-mebeli-v-moskve-i-moskovskoy-oblasti",
    description:
      "Увеличение продаж и повышение узнаваемости бренда через SEO-продвижение, настройку рекламных кампаний в Яндекс Директ и внедрение сквозной аналитики RoiStat.",
    image: "case-furniture-store",
    instruments: ["SEO-продвижение", "Яндекс Директ", "Сквозная аналитика "],
  } satisfies TCases;

  CONSTRUCTION_COMPANY = {
    id: 4,
    name: "Карельский дом",
    url: "/prodvizhenie-stroitelnoy-kompanii-karelskiy-dom",
    description:
      "Комплексный маркетинговый проект по продвижению компании, занимающейся строительством домов из массивного бруса и каркасных домов. В рамках проекта была разработана рекламная стратегия, включающая контекстную рекламу в Яндекс.Директ и таргетированную рекламу в ВКонтакте. Оптимизация структуры и дизайна сайта.",
    image: "case-karelian-house",
    instruments: ["WEB-разработка", "VK Реклама ", "Яндекс Директ"],
  } satisfies TCases;

  FRONTEND_DEVELOPMENT_UNIVERSITY = {
    id: 5,
    name: "Онлайн-школа frontend-разработки",
    url: "/frontend-development-university",
    description:
      "Увеличение заявок на курсы Frontend разработки. Настройка рекламных кампаний в Яндекс Директ и ВКонтакте для привлечения новых студентов. Повышение конверсии и снижение рекламных затрат.",
    image: "case-online-devschool",
    instruments: ["VK реклама", "яндекс директ"],
  } satisfies TCases;

  STOMATOLOGY_CLINIC = {
    id: 6,
    name: "Стоматологическая клиника в Санкт-Петербурге",
    url: "/stomatologicheskaya-klinika-v-sankt-peterburge",
    description:
      "Создание современного сайта, настройка рекламы в Яндекс Директ и ВКонтакте для привлечения новых пациентов, а также минимальная SEO-оптимизация под брендовые запросы.",
    image: "case-clinic",
    instruments: ["SEO-продвижение", "VK реклама", "яндекс директ"],
  } satisfies TCases;

  toArray(): TCases[] {
    return Object.values(this);
  }
}

export const ALL_CASES_CONTENT = new ALL_CASES();
