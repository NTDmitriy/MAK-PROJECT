import { IDashboardItem } from "./all-pages.config";

class PROMOTION_DASHBOARD {
  private root = "/services";

  PROMOTION_ONLINE_SCHOOL = {
    name: "Продвижение онлайн школ",
    smallName: "Онлайн-школ",
    url: `${this.root}/prodvizhenie-onlayn-shkol`,
    image: "promotion-online-school-700x300",
    icon: "hero-info",
    description:
      "В условиях растущей конкуренции на рынке онлайн-образования, важно выделяться среди множества предложений. Мы предлагаем комплексное продвижение онлайн-школ, включая разработку стратегии, создание контента, SEO, SMM и PPC-рекламу. Наша цель - привлечь новых учеников и повысить узнаваемость вашего бренда.",
  } satisfies IDashboardItem;

  PROMOTION_MARKETPLACE = {
    name: "Продвижение магазинов на маркетплейсах",
    smallName: "Магазинов на маркетплейсах",
    url: `${this.root}/prodvizhenie-magazinov-na-marketpleysah`,
    image: "promotion-marketplace-700x300",
    icon: "hero-info",
    description:
      "Эффективное продвижение на маркетплейсах требует глубокого понимания платформ и особенностей поведения покупателей. Мы предлагаем услуги по оптимизации карточек товаров, управлению отзывами, контекстной рекламе и анализу конкурентов. С нашей помощью ваши товары будут на виду и привлекут больше клиентов.",
  } satisfies IDashboardItem;

  PROMOTION_CONSTRUCTION_COMPANY = {
    name: "Продвижение строительных компаний",
    smallName: "Строительных компаний",
    url: `${this.root}/prodvizhenie-stroitelnyh-kompaniy`,
    image: "promotion-construction-company-700x300",
    icon: "hero-info",
    description:
      "Строительная отрасль требует специфического подхода к маркетингу. Мы предлагаем целевые стратегии продвижения, включающие SEO для локальных запросов, контент-маркетинг, социальные сети и контекстную рекламу. Наша задача - привлечь новых клиентов и укрепить позиции вашей компании на рынке.",
  } satisfies IDashboardItem;

  PROMOTION_MEDICAL = {
    name: "Продвижение медицинский учреждений",
    smallName: "Медицинскиx учреждений",
    url: `${this.root}/prodvizhenie-medicinskih-uchrezhdeniy`,
    image: "promotion-medical-700x300",
    icon: "hero-info",
    description:
      "Медицинские учреждения нуждаются в особом подходе к продвижению, чтобы обеспечить доверие и привлечение пациентов. Мы предлагаем комплексные решения: SEO, контент-маркетинг, управление репутацией, продвижение в соц. сетях и контекстную рекламу. Наша цель - увеличить поток пациентов и повысить узнаваемость учреждения.",
  } satisfies IDashboardItem;

  PROMOTION = {
    name: "Нишевое продвижение",
    url: `${this.root}/nishevoe-prodvigenie`,
    childrens: [
      this.PROMOTION_ONLINE_SCHOOL,
      this.PROMOTION_MARKETPLACE,
      this.PROMOTION_CONSTRUCTION_COMPANY,
      this.PROMOTION_MEDICAL,
    ],
  } satisfies IDashboardItem;
}

export const PROMOTION_DASHBOARD_PAGES = new PROMOTION_DASHBOARD();
