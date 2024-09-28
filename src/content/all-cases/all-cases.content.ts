import { IDashboardItem } from "@/dashboard/app.dashboard";
import { type TCase } from "@/typing/products.type";

class ALL_CASES {
  private root = "/cases";

  WILDBERRIES_SHOP = {
    id: 1,
    url: `${this.root}/prodvizhenie-magazina-zhenskoy-odezhdy-na-wildberries`,
    prevName: "Магазин женской одежды на WB",
    name: "Увеличение продаж магазина женской одежды на Wildberries",
    prevDescription:
      "Увеличение продаж женской одежды на платформе Wildberries через рекламу в ВКонтакте и Яндекс. Повышение видимости и привлечение новых клиентов.",
    description:
      "Проект по продвижению магазина женской одежды на платформе Wildberries через рекламу в ВКонтакте и Яндекс.",
    image: "cases-shop-wb",
    categories: ["VK Реклама", "Яндекс Директ"],
  } satisfies TCase;

  TAX_OPTIMIZATION = {
    id: 2,
    url: `${this.root}/optimizaciya-nalogov-dlya-predprinimateley-na-usn`,
    prevName: "Оптимизация налогов для предпринимателей на УСН",
    name: "Оптимизация налогов для предпринимателей на УСН",
    prevDescription:
      "Настройка и оптимизация рекламных кампаний в Яндекс Директ и Google Ads для привлечения целевых клиентов. Увеличение количества заявок на услуги по оптимизации налогов, снижение стоимости клика и повышение рентабельности.",
    description:
      "Проект по продвижению услуги оптимизации налогов для предпринимателей на упрощенной системе налогообложения (УСН) через рекламу в Яндекс Директ и Google Ads.",
    image: "cases-tax-optimization",
    categories: ["Яндекс Директ", "Google ads"],
    isGlobal: true,
  } satisfies TCase;

  FURNITURE_STORE = {
    id: 3,
    url: `${this.root}/prodvizhenie-kompanii-po-prodazhe-mebeli-v-moskve-i-moskovskoy-oblasti`,
    prevName: "Магазин мебели в Москве и МО",
    name: "Продвижение компании по продаже мебели в Москве и Московской области",
    prevDescription:
      "Увеличение продаж и повышение узнаваемости бренда через SEO-продвижение, настройку рекламных кампаний в Яндекс Директ и внедрение сквозной аналитики RoiStat.",
    description:
      "Проект по SEO-продвижению, настройке рекламных кампаний в Яндекс Директ и внедрению сквозной аналитики для компании, занимающейся продажей мебели в Москве и Московской области.",
    image: "cases-furniture-store",
    categories: ["SEO-продвижение", "Яндекс Директ", "Сквозная аналитика "],
    isGlobal: true,
  } satisfies TCase;

  CONSTRUCTION_COMPANY = {
    id: 4,
    url: `${this.root}/prodvizhenie-stroitelnoy-kompanii-karelskiy-dom`,
    prevName: "Карельский дом",
    name: "Продвижение строительной компании «Карельский дом»",
    prevDescription:
      "Комплексное продвижение компании, занимающейся строительством домов из массивного бруса и каркасных домов. В рамках проекта была разработана рекламная стратегия, включающая рекламу в Яндекс.Директ и ВКонтакте. Оптимизация структуры и дизайна сайта.",
    description:
      "Комплексный маркетинговый проект по продвижению компании, занимающейся строительством домов из массивного бруса и каркасных домов, направленный на повышение продаж и узнаваемости бренда на рынке.",
    image: "cases-karelian-house",
    categories: ["WEB-разработка", "VK Реклама ", "Яндекс Директ"],
  } satisfies TCase;

  FRONTEND_DEVELOPMENT_UNIVERSITY = {
    id: 5,
    url: `${this.root}/frontend-development-university`,
    prevName: "Онлайн-школа frontend-разработки",
    name: "Увеличение числа заявок и повышение конверсии для онлайн-школы frontend-разработки",
    prevDescription:
      "Увеличение заявок на курсы Frontend разработки. Настройка рекламных кампаний в Яндекс Директ и ВКонтакте для привлечения новых студентов. Повышение конверсии и снижение рекламных затрат.",
    description:
      "Маркетинговая кампания для учебного заведения, специализирующегося на Frontend разработке, направленная на привлечение большего числа заявок и улучшение конверсии на посадочных страницах. ",
    image: "cases-online-devschool",
    categories: ["VK реклама", "яндекс директ"],
    isGlobal: true,
  } satisfies TCase;

  STOMATOLOGY_CLINIC = {
    id: 6,
    url: `${this.root}/stomatologicheskaya-klinika-v-sankt-peterburge`,
    prevName: "Стоматологическая клиника в Санкт-Петербурге",
    name: "Стоматологическая клиника в Санкт-Петербурге",
    prevDescription:
      "Создание современного сайта, настройка рекламы в Яндекс Директ и ВКонтакте для привлечения новых пациентов, а также минимальная SEO-оптимизация под брендовые запросы.",
    description:
      "Проект по привлечению новых пациентов и повышению узнаваемости бренда стоматологических клиник через рекламу в Яндекс Директ, ВКонтакте и разработку оптимизированного сайта.",
    image: "cases-stomatology-clinic",
    categories: ["SEO-продвижение", "VK реклама", "яндекс директ"],
    isGlobal: true,
  } satisfies TCase;

  ROOM_DESTROY = {
    id: 7,
    url: `${this.root}/komnata-yarosti-udestroy-v-moskve`,
    prevName: "Комната ярости Udestroy в Москве ",
    name: "Комната ярости Udestroy в Москве",
    prevDescription:
      "Проект по продвижению комнаты ярости «Udestroy» в Москве с помощью лидогенерации в Яндекс Директ для увеличения количества бронирований и привлечения целевой аудитории.",
    description:
      "Проект по продвижению комнаты ярости «Udestroy» в Москве с помощью лидогенерации в Яндекс Директ для увеличения количества бронирований и привлечения целевой аудитории.",
    image: "cases-room-destroy",
    categories: ["яндекс директ"],
  } satisfies TCase;

  CANDY_SHOP = {
    id: 8,
    url: `${this.root}/effektivnoye-privlecheniye-kliyentov-dlya-konditerskoy-v-krasnodare`,
    prevName: "Увеличение продаж кондитерской в Краснодаре",
    name: "Эффективное привлечение клиентов для кондитерской в Краснодаре",
    prevDescription:
      "Проект по продвижению кондитерской в Краснодаре с помощью настройки и оптимизации рекламных кампаний в Яндекс Директ для увеличения трафика и продаж.",
    description:
      "Проект по продвижению кондитерской в Краснодаре с помощью настройки и оптимизации рекламных кампаний в Яндекс Директ для увеличения трафика и продаж. ",
    image: "cases-candy-shop",
    categories: ["Яндекс Директ"],
    isGlobal: true,
  } satisfies TCase;

  REAL_ESTATE_SALE = {
    id: 9,
    url: `${this.root}/prodazha-elitnykh-uchastkov-v-sankt-peterburge-i-leningradskoy-oblasti`,
    prevName: "Продажа элитных участков в Санкт-Петербурге и ЛO",
    name: "Продажа элитных участков в Санкт-Петербурге и Ленинградской области",
    prevDescription:
      "Комплексное продвижение элитных земельных участков стоимостью от 18 млн рублей с помощью контекстной рекламы в Яндекс Директ, UX/UI исследования сайта, SEO-оптимизации и защиты от атак конкурентов.",
    description: null,
    image: "cases-real-estate-sale",
    categories: ["Яндекс Директ", "UX/UI аудит", "SEO аудит"],
    isGlobal: true,
  } satisfies TCase;

  toArray(): TCase[] {
    return Object.values(this).filter((item): item is TCase => {
      return (item as TCase).name !== undefined;
    });
  }

  toArrayForDashbord(): IDashboardItem[] {
    return this.toArray().map((caseItem) => ({
      name: caseItem.prevName,
      url: caseItem.url,
    }));
  }
}

export const ALL_CASES_CONTENT = new ALL_CASES();
