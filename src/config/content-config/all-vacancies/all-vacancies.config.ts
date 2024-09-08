import { TVacanciesItem } from "@/interfaces/types/block/products.type";

export const ALL_VACANCIES = [
  {
    position: "специалист по рекламе",
    payroll: {
      min: 90000,
      max: 250000,
    },
    employment: "полная занятость, опыт работы от 4 лет",
    description:
      "Ищем внимательного к деталям специалиста по контекстной или таргетированной рекламе. Важно, чтобы вы были нацелены на результат, готовы решать нестандартные задачи и стремились к профессиональному росту в сфере digital маркетинга.",
    skills: [
      "Опыт настройки контекстной рекламы (Яндекс Директ, Google Ads)",
      "Настройка и оптимизация таргетированной рекламы (ВКонтакте, Facebook, Instagram)",
      "Анализ и корректировка рекламных кампаний",
      "Умение работать с аналитическими системами (Google Analytics, Яндекс Метрика)",
      "Умение работать с бюджетами и выполнение KPI",
    ],
  },
  {
    position: "SMM-специалист",
    payroll: {
      min: 70000,
      max: 150000,
    },
    employment: "полная занятость, опыт работы от 3 лет",
    description:
      "Ищем креативного и стратегически мыслящего SMM-специалиста. Вам предстоит работать с социальными сетями, генерировать контент, привлекать аудиторию и увеличивать её вовлечённость.",
    skills: [
      "Опыт ведения страниц в соцсетях (Instagram, Facebook, ВКонтакте)",
      "Создание и реализация SMM-стратегий",
      "Умение создавать контент и работать с дизайнерами",
      "Анализ активности и составление отчетов",
      "Знание основ таргетирования рекламы в соцсетях",
    ],
  },
  {
    position: "Дизайнер",
    payroll: {
      min: 80000,
      max: 200000,
    },
    employment: "полная занятость, опыт работы от 5 лет",
    description:
      "Ищем творческого дизайнера с хорошим чувством стиля и умением работать в различных графических редакторах. Вам предстоит создавать креативы для рекламы, макеты для соцсетей и другие визуальные материалы.",
    skills: [
      "Отличное владение Figma, пакета Adobe, умение работать с нейросетями",
      "Умение разрабатывать креативы для рекламы и соцсетей",
      "Опыт работы с веб-дизайном (баннеры, лэндинги)",
      "Знание основ UX/UI",
      "Умение работать в сжатые сроки и выполнять задачи в рамках дедлайнов",
    ],
  },
  {
    position: "Менеджер проектов",
    payroll: {
      min: 100000,
      max: 300000,
    },
    employment: "полная занятость, опыт работы от 5 лет",
    description:
      "Ищем организованного менеджера проектов с отличными коммуникативными навыками. Ваша задача — координировать работу команды, общаться с клиентами и следить за выполнением проектов в срок.",
    skills: [
      "Опыт управления проектами в сфере digital маркетинга",
      "Умение координировать работу команды и ставить задачи",
      "Коммуникация с клиентами и решение их запросов",
      "Планирование и контроль выполнения проектов",
      "Знание принципов работы с CRM и трекерами задач (Trello, Asana)",
    ],
  },
  {
    position: "SEO-специалист",
    payroll: {
      min: 80000,
      max: 200000,
    },
    employment: "полная занятость, опыт работы от 3 лет",
    description:
      "Ищем специалиста с глубокими знаниями в SEO для работы с проектами различного уровня. Необходимо уверенно разбираться в поисковой оптимизации и уметь проводить аудиты сайтов.",
    skills: [
      "Опыт проведения SEO-аудитов сайтов",
      "Умение работать с внутренней и внешней оптимизацией",
      "Навыки работы с SEO-инструментами (Ahrefs, SEMrush, Screaming Frog)",
      "Знание принципов создания семантического ядра",
      "Опыт работы с аналитикой и отчетностью",
    ],
  },
  {
    position: "Маркетолог",
    payroll: {
      min: 200000,
      max: 300000,
    },
    employment: "полная занятость, опыт работы от 5 лет",
    description:
      "Ищем проактивного маркетолога, который готов брать на себя ответственность за разработку и реализацию маркетинговых стратегий. Важно стремление к росту и желание добиваться ощутимых результатов.",
    skills: [
      "Разработка и реализация маркетинговых стратегий",
      "Опыт работы в конкурентной среде",
      "Умение использовать digital маркетинг (контекстная и таргетированная реклама, SEO, SMM)",
      "Опыт работы с аналитикой и CRM",
      "Умение формировать и контролировать маркетинговый бюджет",
    ],
  },
] satisfies TVacanciesItem[];
