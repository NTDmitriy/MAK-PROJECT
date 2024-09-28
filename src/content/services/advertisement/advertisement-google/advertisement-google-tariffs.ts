import { TTariffs } from "@/typing/products.type";

export const TARIFFS_GOOGLE = {
  blockTitle: "Тарифы и команда, работающая над вашим проектом",
  blickTitleDescr:
    "Мы предлагаем гибкие тарифные планы, которые соответствуют различным потребностям бизнеса. Наши тарифы зависят от объема работы и состава проектной команды, что позволяет нам предложить оптимальные решения для вашего бизнеса и обеспечить высокую эффективность рекламных кампаний в Яндекс Директ.",
  plans: [
    {
      title: "Базовый",
      description:
        "Идеально подходит для старта рекламных кампаний с ограниченным бюджетом и базовыми потребностями в продвижении.",
      price: 50000,
      items: [
        {
          title: "Дизайнер:",
          description:
            "Создает визуальные материалы для рекламных объявлений, делая их привлекательными для аудитории.",
        },
        {
          title: "Специалист по контекстной рекламе:",
          description:
            "Отвечает за настройку и управление рекламными кампаниями в Google Ads, обеспечивая их эффективность.",
        },
        {
          title: "Копирайтер:",
          description:
            "Разрабатывает тексты для рекламных объявлений, чтобы привлечь внимание целевой аудитории и повысить кликабельность.",
        },
      ],
    },
    {
      title: "Стандарт",
      description:
        "Оптимальный выбор для компаний, стремящихся к устойчивому росту и более детализированному подходу к продвижению.",
      price: 100000,
      items: [
        {
          title: "Дизайнер:",
          description:
            "Разрабатывает креативные визуальные решения для рекламы.",
        },
        {
          title: "Ведущий специалист по контекстной рекламе:",
          description:
            "Разрабатывает и оптимизирует рекламные кампании, контролирует бюджет и эффективность, применяя передовые методы и инструменты Google Ads.",
        },
        {
          title: "Копирайтер:",
          description:
            "Создает привлекательные и информативные тексты для рекламных объявлений, ориентированные на привлечение внимания и конверсии.",
        },
        {
          title: "Трафик-аналитик:",
          description:
            "Анализирует результаты рекламных кампаний, готовит отчеты и рекомендации по улучшению, помогает понять поведение аудитории.",
        },
        {
          title: "Маркетолог:",
          description:
            "Определяет стратегическое направление кампаний, изучает рынок и целевую аудиторию для более точного таргетинга.",
        },
      ],
    },
    {
      title: "ПРЕМИУМ",
      description:
        "Максимальная эффективность и высокий уровень конверсии благодаря комплексному подходу и расширенной команде специалистов.",
      price: 200000,
      items: [
        {
          title: "Менеджер проекта",
          description:
            "Управляет всеми аспектами проекта, поддерживает связь с клиентом и командой, обеспечивает координацию и достижение поставленных целей.",
        },
        {
          title: "Senior-дизайнер и UX/UI специалист",
          description:
            "Создает высококачественные визуальные и пользовательские интерфейсы для максимальной вовлеченности аудитории.",
        },
        {
          title: "Senior-специалист по контекстной рекламе",
          description:
            "Разрабатывает стратегию и тактику рекламных кампаний, обеспечивает их оптимизацию и контроль, распределяет задачи среди команды контекстологов.",
        },
        {
          title: "1-3 контекстолога",
          description:
            "Занимаются настройкой и управлением контекстной рекламой в Google Ads, количество специалистов зависит от сложности и объема проекта.",
        },
        {
          title: "Копирайтер",
          description:
            "Пишет эффективные тексты для объявлений, направленные на конверсию, используя лучшие практики в написании рекламных сообщений.",
        },
        {
          title: "Трафик-аналитик",
          description:
            "Детально анализирует эффективность кампаний, предлагает решения для повышения ROI и достижения маркетинговых целей.",
        },
        {
          title: "Специалист по веб-аналитике",
          description:
            "Настраивает и анализирует данные в Google Analytics 4, помогает выявить возможности для улучшения конверсии и общей производительности сайта.",
        },
        {
          title: "Senior-маркетолог",
          description:
            "Руководит маркетинговой стратегией, разрабатывает тактические решения для достижения долгосрочных целей, анализирует рынок и конкурентов.",
        },
        {
          title: "Настройка сквозной аналитики",
          description:
            "Включает интеграцию всех рекламных каналов и CRM-системы, что позволяет точно отслеживать путь клиента и оценивать эффективность каждого канала взаимодействия.",
        },
      ],
    },
    {
      title: "ИНДИВИДУАЛЬНЫЙ",
      description:
        "Индивидуальное решение для крупных компаний с уникальными требованиями и высокими стандартами качества продвижения.",
      price: "индивидуально, по запросу",
      items: [
        {
          description:
            "Мы предлагаем команду специалистов, которая будет подобрана в соответствии с уникальными потребностями вашего бизнеса. Свяжитесь с нами, и мы разработаем персонализированное предложение, которое обеспечит максимальную эффективность ваших рекламных кампаний в Google Ads.",
        },
      ],
    },
  ],
} satisfies TTariffs;
