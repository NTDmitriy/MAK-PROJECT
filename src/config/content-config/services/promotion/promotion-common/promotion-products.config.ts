import { PROMOTION_DASHBOARD_PAGES } from "@/config/url-config/promotion-pages.config";

import { TServiceProducts } from "@/interfaces/types/block/products.type";

export const PROMOTION_PRODUCTS = {
  blockTitle: "Наши услуги по продвижению",
  blockTitleDescr:
    "Мы предлагаем комплексное продвижение для различных ниш и сфер деятельности. Выберите подходящее решение для вашего бизнеса.",
  items: [
    {
      name: "Продвижение онлайн-школ",
      description:
        "В условиях растущей конкуренции на рынке онлайн-образования, важно выделяться среди множества предложений. Мы предлагаем комплексное продвижение онлайн-школ, включая разработку стратегии, создание контента, SEO, SMM и PPC-рекламу. Наша цель - привлечь новых учеников и повысить узнаваемость вашего бренда.",
      priceFrom: 100000,
      image: "promotion-online-school-prev",
      url: PROMOTION_DASHBOARD_PAGES.PROMOTION_ONLINE_SCHOOL.url,
    },
    {
      name: "Продвижение магазинов на маркетплейсах",
      description:
        "Эффективное продвижение на маркетплейсах требует глубокого понимания платформ и особенностей поведения покупателей. Мы предлагаем услуги по оптимизации карточек товаров, управлению отзывами, контекстной рекламе и анализу конкурентов. С нашей помощью ваши товары будут на виду и привлекут больше клиентов.",
      priceFrom: 100000,
      image: "promotion-marketplace-prev",
      url: PROMOTION_DASHBOARD_PAGES.PROMOTION_MARKETPLACE.url,
    },
    {
      name: "Продвижение для строительных компаний",
      description:
        "Строительная отрасль требует специфического подхода к маркетингу. Мы предлагаем целевые стратегии продвижения, включающие SEO для локальных запросов, контент-маркетинг, социальные сети и контекстную рекламу. Наша задача - привлечь новых клиентов и укрепить позиции вашей компании на рынке.",
      priceFrom: 100000,
      image: "promotion-construction-company-prev",
      url: PROMOTION_DASHBOARD_PAGES.PROMOTION_CONSTRUCTION_COMPANY.url,
    },
    {
      name: "Продвижение для медицинских учреждений",
      description:
        "Медицинские учреждения нуждаются в особом подходе к продвижению, чтобы обеспечить доверие и привлечение пациентов. Мы предлагаем комплексные решения: SEO, контент-маркетинг, управление репутацией, продвижение в соц. сетях и контекстную рекламу. Наша цель - увеличить поток пациентов и повысить узнаваемость учреждения.",
      priceFrom: 100000,
      image: "promotion-medical-prev",
      url: PROMOTION_DASHBOARD_PAGES.PROMOTION_MEDICAL.url,
    },
  ],
} satisfies TServiceProducts;
