import { TDetialServices } from "@/interfaces/types/block/products.type";

export const MEDICAL_DETAIL = {
  title: "Услуги для медицинских учреждений",
  services: [
    {
      id: 1,
      title: "Анализ целевой аудитории и конкурентов",
      description:
        "Проводим подробный анализ вашего рынка, чтобы определить сильные и слабые стороны, а также выявить возможности для роста.",
      image: "promotion-schools-hero-info", 
      // promotion-marketplace-services-info1
    },
    {
      id: 2,
      title: "SEO-оптимизация",
      description:
        "Оптимизируем ваш сайт для поисковых систем, чтобы повысить его видимость и привлечь больше органического трафика.",

      image: "promotion-schools-hero-info",
    },
    {
      id: 3,
      title: "Разработка контента",
      description:
        "Создаем качественный контент, который информирует и привлекает пациентов, помогая им принимать обоснованные решения о выборе вашего учреждения.",

      image: "promotion-schools-hero-info",
    },
    {
      id: 4,
      title: "Управление репутацией",
      description:
        "Работаем с отзывами и рейтингами, чтобы поддерживать высокий уровень доверия к вашему медицинскому учреждению.",

      image: "promotion-schools-hero-info",
    },
    {
      id: 5,
      title: "SMM (продвижение в социальных сетях)",
      description:
        "Ведем активную работу в социальных сетях, привлекая внимание и взаимодействуя с потенциальными пациентами.",

      image: "promotion-schools-hero-info",
    },
    {
      id: 6,
      title: "PPC-реклама",
      description:
        "Настраиваем и управляем рекламными кампаниями в поисковых системах и на социальных платформах, чтобы быстро привлекать целевую аудиторию.",

      image: "promotion-schools-hero-info",
    },
  ],
} satisfies TDetialServices;
