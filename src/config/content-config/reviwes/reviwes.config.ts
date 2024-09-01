import { CASES_DASHBOARD_PAGES } from "@/config/url-config/cases-pages.config";
import { TReviwe } from "@/interfaces/types/block/products.type";

export const ALL_REVIWES = [
  {
    id: 1,
    name: "Иван Назаров",
    position: "Генеральный директор компании",
    avatar: "product-icon",
    rating: 5,
    text: "Работа с маркетинговым агентством превзошла все наши ожидания. Внедрение сквозной аналитики, профессиональная настройка рекламных кампаний и эффективное SEO-продвижение позволили нам существенно увеличить продажи и повысить узнаваемость бренда. Особенно впечатлила их способность анализировать и оптимизировать трафик, что привело к значительному снижению затрат на рекламу при одновременном увеличении конверсий. Рекомендуем эту команду всем, кто хочет вывести свой бизнес на новый уровень!",
    caseUrl: CASES_DASHBOARD_PAGES.FURNITURE_STORE.url,
  },
  {
    id: 2,
    name: "Александр Смирнов",
    position: "Cобственник сети стоматологических клиник",
    avatar: "product-icon",
    rating: 5,
    text: "Спасибо ребятам из Make All Perfect! Агентство помогло нам значительно увеличить поток пациентов и повысить узнаваемость наших клиник. Разработка современного и удобного сайта, а также эффективная реклама в Яндекс Директ и ВКонтакте, принесли отличные результаты. Профессиональный подход команды и их готовность адаптироваться под наши нужды сделали сотрудничество легким и продуктивным. Мы очень довольны результатами и планируем продолжать работать вместе долгое время!",
		caseUrl: CASES_DASHBOARD_PAGES.STOMATOLOGY_CLINIC.url,
  },
  {
    id: 3,
    name: "Карельский дом",
    position: "Генеральный директор ООО “Карельский Дом”",
    avatar: "product-icon",
    rating: 5,
    text: "Начали работать с парнями с мая, до это за три года сменили три маркетинговые компании из-за мягко говоря не лучших результатов. Последняя компания с нами отработало около двух лет и мы считали в целом их работу удовлетворительной - именно на троечку, думали ранее, как сейчас поняли, мы их даже переоценивали... А вот парни сразу на первом месяце показали результаты - качество и количество лидов на порядок лучше и больше!!! Надеемся, что будет и дальше так же!",
    caseUrl: CASES_DASHBOARD_PAGES.CONSTRUCTION_COMPANY.url,
  },
  {
    id: 4,
    name: "Геннадий Кузнецов",
    position: "Владелец компании",
    avatar: "product-icon",
    rating: 5,
    text: "Работа с Дмитрием и его командой оказалась очень продуктивной. Они помогли нам настроить и оптимизировать рекламные кампании в Яндекс Директ и Google Ads, что привело к значительному увеличению количества заявок на наши услуги по оптимизации налогов. Особенно впечатлила их способность анализировать трафик и постоянно улучшать результаты кампаний. Мы рады, что выбрали именно это агентство и с уверенностью рекомендуем их другим компаниям!",
		caseUrl: CASES_DASHBOARD_PAGES.TAX_OPTIMIZATION.url,
  },
  {
    id: 5,
    name: "Эмира Эдельвейн",
    position: "Директор по маркетингу",
    avatar: "product-icon",
    rating: 5,
    text: "Качнули трафик х10 менее чем за месяц. Смогли заменить нам трех подрядчиков, внедрив одновременно горизонтальное и вертикальное масштабирование. Ранее о таких способах я никогда не слышала и эффект меня поразил. Результаты превзошли все наши ожидания!",
    caseUrl: CASES_DASHBOARD_PAGES.FRONTEND_DEVELOPMENT_UNIVERSITY.url,
  },
  {
    id: 6,
    name: "Олег Сергеев",
    position: 'Маркетолог в компании "ЭкоПродукт"',
    avatar: "product-icon",
    rating: 5,
    text: "Работа по SEO-продвижению и настройке рекламных кампаний в Google Ads позволила нам выйти на новые позиции. Сейчас активно масштабируем бюджет и продолжаем работу!",
    caseUrl: null,
  },
  {
    id: 7,
    name: "Татьяна Крылова",
    position: 'Руководитель проекта "Здоровье семьи"',
    avatar: "product-icon",
    rating: 5,
    text: "Мы обратились в агентство для разработки нового сайта и настройки рекламы в Telegram Ads. Сайт получился современным и удобным, а рекламные кампании принесли много лидов. Рекомендуем это агентство.",
    caseUrl: null,
  },
  {
    id: 8,
    name: "Сергей Волков",
    position: 'Генеральный директор "ТехноДом"',
    avatar: "product-icon",
    rating: 5,
    text: "Маркетинговое агентство помогло нам настроить эффективные рекламные кампании в Яндекс Директ и Google Ads. Их профессионализм и подход к работе впечатляют. Мы получили значительный прирост клиентов и смогли оптимизировать рекламные бюджеты. Очень довольны сотрудничеством!",
    caseUrl: null,
  },
  {
    id: 9,
    name: "Наталья Романова",
    position: 'Владелец "Арт-галереи"',
    avatar: "product-icon",
    rating: 5,
    text: "С агентством начали работать по разработке сайта и SEO-продвижению. Результаты не заставили себя ждать – посещаемость сайта значительно выросла, что положительно сказалось на продажах. Команда агентства всегда на связи, оперативно решает все вопросы и предлагает новые идеи для развития.",
    caseUrl: null,
  },
  {
    id: 10,
    name: "Анна Смирнова",
    position: 'Руководитель "Детского развивающего центра"',
    avatar: "product-icon",
    rating: 5,
    text: "Маркетинговое агентство Make All Perfect помогло нам продвинуть наш центр в социальных сетях и через Яндекс Директ. Благодаря их усилиям мы увеличили количество записей на наши курсы и мероприятия. Особенно хочется отметить их профессионализм и внимательный подход к нашим потребностям.",
    caseUrl: null,
  },
  {
    id: 11,
    name: "Владимир Зайцев",
    position: 'Директор курьерской службы доставки в Краснодаре',
    avatar: "product-icon",
    rating: 5,
    text: "Сотрудничество с агентством было очень продуктивным. Они помогли нам оформить группу и настроить рекламные кампании в ВКонтакте. Рекомендуем агентство как надежного и профессионального партнера.",
    caseUrl: null,
  },
  {
    id: 12,
    name: "Елизавета Павлова",
    position: 'Владелец "Магазина женской одежды на WB"',
    avatar: "product-icon",
    rating: 5,
    text: "Обратились в агентство для продвижения нашего магазина на Wildberries. Команда настроила эффективные рекламные кампании в ВКонтакте и Яндекс, что привело к значительному увеличению продаж. Их подход к работе и стремление к достижению лучших результатов заслуживают высокой оценки.",
    caseUrl: CASES_DASHBOARD_PAGES.WILDBERRIES_SHOP.url,
  },
  {
    id: 13,
    name: "Михаил Соколов",
    position: 'Генеральный директор Строительной компании',
    avatar: "product-icon",
    rating: 5,
    text: "Спасибо Дмитрию и его команде за проделанную работу! Для меня очень важно мое время и это именно тот случай, когда можно доверить работу под ключ профессионалам и не погружаться в детали, имея прозрачную отчетность и понимание процессов.",
    caseUrl: null,
  },
  {
    id: 14,
    name: "Ирина Козлова",
    position: 'Директор по маркетингу Туристического агентства',
    avatar: "product-icon",
    rating: 5,
    text: "С агентством работаем уже несколько месяцев, и результаты впечатляют. Они помогли обновить наш действующий сайт, который имел устаревший дизайн и долгую загрузку. Помимо этого они  настроили рекламные кампании в яндексе и вк. Мы получили множество новых клиентов и увеличили продажи туристических услуг. Очень довольны сотрудничеством!",
    caseUrl: null,
  },
  {
    id: 15,
    name: "Алексей Морозов",
    position: 'Владелец Фермерского хозяйства',
    avatar: "product-icon",
    rating: 5,
    text: "Обратились в агентство для продвижения нашего фермерского хозяйства, что привлекло внимание крупных ритейлеров к нашей продукции.",
    caseUrl: null,
  },
  {
    id: 16,
    name: "Алексей Краузе",
    position: 'Генеральный директор "ТехноСервис"',
    avatar: "product-icon",
    rating: 5,
    text: "Команда разработчиков полностью оправдала наши ожидания при разработке нового сайта для нашей компании. Сайт получился современным, удобным и функциональным. Команда агентства учла все наши пожелания и предложила множество полезных идей, которые помогли улучшить конверсию. Результатами очень довольны и рекомендуем это агентство всем, кто ищет профессионалов в области веб-разработки",
    caseUrl: null,
  },
  {
    id: 17,
    name: "Надежда Веденина",
    position: 'Владелец Магазина цветов',
    avatar: "product-icon",
    rating: 5,
    text: "Мы обратились в агентство для разработки лендинга для нашего цветочного магазина. Хочется отметить сроки исполнения заказа. Лендинг срочно нужен был к 14 февраля. Ребята справились за пару дней, как и обещали. Спасибо большое!",
    caseUrl: null,
  },
  {
    id: 18,
    name: " Дмитрий Соколов",
    position: 'Директор Логистической компании',
    avatar: "product-icon",
    rating: 5,
    text: "Разработали для нас сайт, который стал важным инструментом в привлечении новых клиентов и продвижении наших услуг. Сайт отличается высоким качеством, удобной навигацией и современным дизайном. Рекомендуем это агентство всем, кто нуждается в качественной разработке веб-сайта.",
    caseUrl: null,
	}
] satisfies TReviwe[];
