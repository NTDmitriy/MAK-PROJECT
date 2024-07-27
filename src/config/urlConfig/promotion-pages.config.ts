class PROMOTION_DASHBOARD {
  PROMOTION_ONLINE_SCHOOL = {
    name: "Продвижение онлайн школ",
    url: "/prodvigenie-online-shkol",
    image: "product-icon",
    description:
      "Создание сайтов — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
  };

  PROMOTION_MARKETPLACE = {
    name: "Продвижение для строительных компаний",
    url: "/prodvigenie-na-marketpeyse",
    image: "product-icon",
    description:
      "Создание сайтов — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
  };

  PROMOTION_CONSTRUCTION_COMPANY = {
    name: "Продвижение маркетплесов",
    url: "/prodvigenie-stroitelnih-kompaniy",
    image: "product-icon",
    description:
      "Создание сайтов — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
  };

  PROMOTION_MEDICAL = {
    name: "Продвижение медецинский учреждений",
    url: "/prodvigenie-medicinskih-uchrejdeniy",
    image: "product-icon",
    description:
      "Создание сайтов — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
  };

  PROMOTION = {
    name: "Нишевое продвижение",
    url: "/nishevoe-prodvigenie",
    childrens: [
      this.PROMOTION_ONLINE_SCHOOL,
      this.PROMOTION_MARKETPLACE,
      this.PROMOTION_CONSTRUCTION_COMPANY,
      this.PROMOTION_MEDICAL,
    ],
  };
}

export const PROMOTION_DASHBOARD_PAGES = new PROMOTION_DASHBOARD();
