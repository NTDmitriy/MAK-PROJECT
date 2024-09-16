import { USEFUL_DASHBOARD_PAGES } from "@/config/url-config/useful-pages.config";
import {
  THero,
  THeroBasic,
  THowWorks,
} from "@/interfaces/types/block/products.type";
import { TUsefulScreen } from "@/interfaces/types/screens/screens.type";
import { TWhyUs } from "../../../../interfaces/types/block/products.type";

export const AFFILIATE_CONFIG = {
  url: USEFUL_DASHBOARD_PAGES.PARTNERS.url,
  hero: {
    basic: {
      title: {
        accent: "Выгодная партнерская программа",
        accentAfter: " от нашего маркетингового агентства",
      },
      description:
        "Мы предлагаем взаимовыгодные условия партнерства для всех, кто заинтересован в развитии и продвижении бизнеса. Рекомендуйте наши услуги своим клиентам, партнерам, друзьям и знакомым и получайте 10-20% от суммы сделки ежемесячно.",
      image: "useful-affiliate-hero",
      formBtnText: "Стать партнером",
      formTitle: "Стать партнером",
      formText:
        "Оставьте свои контактные данные, и мы свяжемся с вами, чтобы обсудить условия взаимовыгодного сотрудничества. Рекомендуйте наши услуги своим клиентам, партнерам, друзьям и знакомым. Мы предлагаем прозрачные условия для долгосрочного партнерства, которое будет способствовать развитию вашего бизнеса и принесет стабильный доход.",
    } satisfies THeroBasic,
  } satisfies THero,
  partnerBenefits: {
    blockTitle: "Порядок сотрудничества",
    items: [
      {
        title: "Заключение договора",
        descrAfter: "Определяем размер вознаграждения и порядок выплат",
      },
      {
        title: "Закрепление менеджера",
        descrAfter:
          "За вами закрепляется менеджер отдела продаж, который ведет учет всех ваших клиентов и партнерских процентов",
      },
      {
        title: "Информирование",
        descrAfter:
          "Менеджер информирует вас о заключении договоров с вашими клиентами",
      },
      {
        title: "Начисление средств",
        descrAfter: "Вы получаете свои партнерские проценты",
      },
    ],
  } satisfies TWhyUs,
  joinProgram: true,
  howAffiliateWork: {
    items: [
      {
        title: "Станьте партнером",
        descr:
          "Зарегистрируйтесь в нашей партнерской программе",
      },
      {
        title: "Рекомендуйте наши услуги",
        descr:
          "Делитесь информацией о нашем агентстве со своей аудиторией ",
      },
      {
        title: "Получайте доход",
        descr: "За каждую успешную сделку по вашей рекомендации вы получаете 10- 20% от ее суммы ежемесячно",
      },
    ],
    blockTitle: "Как работает наша партнерская программа?",
  } satisfies THowWorks,
  affiliateAvantages: true,
} satisfies TUsefulScreen;
