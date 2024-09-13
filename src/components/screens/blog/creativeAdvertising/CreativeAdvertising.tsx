import { ListTitleBlog } from "@/components/ui-blog/listTitleBlog/ListTitleBlog";
import { SectionTitleBlog } from "@/components/ui-blog/sectionTitleBlog/SectionTitleBlog";
import { TextBlog } from "@/components/ui-blog/textBlog/TextBlog";
import { Container } from "@/components/ui/container/Container";
import { Section } from "@/components/ui/section/Section";
import { FC } from "react";
import styles from "./CreativeAdvertising.module.css";

export const CreativeAdvertisingContent: FC = () => {
  return (
    <>
      <Section>
        <Container>
          <SectionTitleBlog>Введение</SectionTitleBlog>
          <TextBlog>
            В 2024 году компании сталкиваются с вызовами в привлечении внимания
            покупателей из-за высокой конкуренции. Современные методы требуют
            оригинальных решений для поддержания конкурентоспособности. В статье
            представлены рекомендации и примеры успешных рекламных кампаний,
            которые помогут привлечь новых потребителей и удержать их.
          </TextBlog>
          <div className={styles.imgs}>
            <img
              className={styles.img}
              src="/images/blog/blog_state1_img1.webp"
              alt="Картинка "
            ></img>
            <img
              className={styles.img}
              src="/images/blog/blog_state1_img2.webp"
              alt="Картинка "
            ></img>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitleBlog>Анализ целевой аудитории</SectionTitleBlog>
          <TextBlog margin>
            Для успешной кампании важно определить, кто является потенциальными
            покупателями и что они ищут. Следующие методы помогут в этом:
          </TextBlog>
          <ul className={styles.list}>
            <li>
              <ListTitleBlog>1. Изучение текущих клиентов:</ListTitleBlog>
              <TextBlog>
                Анализ демографических данных (возраст, пол, местоположение)
                помогает понять, кто уже интересуется вашими продуктами.
              </TextBlog>
            </li>
            <li>
              <ListTitleBlog>2. Сбор обратной связи:</ListTitleBlog>
              <TextBlog>
                Анкеты и интервью позволяют собрать ценную информацию
                о потребностях.
              </TextBlog>
            </li>
            <li>
              <ListTitleBlog>3. Использование аналитики:</ListTitleBlog>
              <TextBlog>
                Инструменты, такие как Google Analytics и Яндекс Метрика,
                помогают анализировать поведение посетителей на сайте
                и в социальных сетях.
              </TextBlog>
            </li>
          </ul>
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionTitleBlog>Понимание нужд и предпочтений</SectionTitleBlog>
          <TextBlog margin>
            После определения целевой аудитории важно выявить их потребности.
            Это поможет создавать релевантные рекламные сообщения.
          </TextBlog>
          <ul className={styles.list}>
            <li>
              <ListTitleBlog>1. Определение проблем:</ListTitleBlog>
              <TextBlog>
                Какие задачи пытаются решить потребители с помощью вашего
                продукта?
              </TextBlog>
            </li>
            <li>
              <ListTitleBlog>2. Изучение интересов:</ListTitleBlog>
              <TextBlog>
                Что привлекает вашу аудиторию? Какие у них увлечения?
              </TextBlog>
            </li>
            <li>
              <ListTitleBlog>3. Изучение конкурентов:</ListTitleBlog>
              <TextBlog>
                Какие стратегии используют конкуренты? Какие подходы применяют
                для привлечения клиентов?
              </TextBlog>
            </li>
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitleBlog>Сегментация аудитории</SectionTitleBlog>
          <TextBlog margin>
            Сегментация позволяет разбить целевую группу на подгруппы с общими
            характеристиками.
          </TextBlog>
          <img
            className={styles.img3}
            src="/images/blog/blog_state1_img3.webp"
            alt="Картинка "
          ></img>
          <ul className={styles.list_grid}>
            <li>
              <ListTitleBlog>1. Демографическая:</ListTitleBlog>
              <TextBlog>
                Возраст, пол, доход, семейное положение и образование.
              </TextBlog>
            </li>
            <li>
              <ListTitleBlog>2. Географическая:</ListTitleBlog>
              <TextBlog>Страна, город, регион.</TextBlog>
            </li>
            <li>
              <ListTitleBlog>3. Психографическая:</ListTitleBlog>
              <TextBlog>Образ жизни, интересы, ценности.</TextBlog>
            </li>
            <li>
              <ListTitleBlog>4. Поведенческая:</ListTitleBlog>
              <TextBlog>
                Поведение, связанное с вашим продуктом: частота покупок,
                лояльность к бренду и стадия покупательского пути.
              </TextBlog>
            </li>
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitleBlog>Создание портретов покупателей</SectionTitleBlog>
          <TextBlog margin>
            Создание персонажей помогает визуализировать целевую группу
            и понять, как лучше с ней взаимодействовать.
          </TextBlog>
          <ul className={styles.list}>
            <li>
              <ListTitleBlog>1. Профиль персоны:</ListTitleBlog>
              <TextBlog>
                Имя, возраст, профессия, а также личные характеристики.
              </TextBlog>
            </li>
            <li>
              <ListTitleBlog>2. Использование данных:</ListTitleBlog>
              <TextBlog>
                Основывайте персоны на реальных данных для большей точности.
              </TextBlog>
            </li>
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitleBlog>
            Разработка уникального торгового предложения (УТП)
          </SectionTitleBlog>
          <TextBlog margin>
            Уникальное торговое предложение — это то, что отличает ваш продукт
            от конкурентов.
          </TextBlog>
          <ul className={styles.list}>
            <li>
              <ListTitleBlog>
                1. Идентификация ключевых преимуществ:
              </ListTitleBlog>
              <TextBlog>
                Особенности вашего продукта, такие как инновационные технологии
                или высокое качество обслуживания.
              </TextBlog>
            </li>
            <li>
              <ListTitleBlog>2.Понимание аудитории:</ListTitleBlog>
              <TextBlog>
                УТП должно решать конкретные задачи, с которыми сталкиваются
                ваши клиенты.
              </TextBlog>
            </li>
            <li>
              <ListTitleBlog>3. Оценка конкурентов:</ListTitleBlog>
              <TextBlog>
                Изучите предложения других компаний и выделите свои сильные
                стороны.
              </TextBlog>
            </li>
            <li>
              <ListTitleBlog>4. Четкость формулировки:</ListTitleBlog>
              <TextBlog>
                УТП должно быть понятным и простым, акцентируя внимание
                на выгодах для покупателя.
              </TextBlog>
            </li>
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitleBlog>Тестирование и оценка</SectionTitleBlog>
          <TextBlog margin>
            Уникальное торговое предложение — это то, что отличает ваш продукт
            от конкурентов.
          </TextBlog>
          <ul className={styles.list}>
            <li>
              <ListTitleBlog>1. Сбор отзывов:</ListTitleBlog>
              <TextBlog>
                Узнайте, как клиенты воспринимают ваше предложение.
              </TextBlog>
            </li>
            <li>
              <ListTitleBlog>2. Тестирование форматов:</ListTitleBlog>
              <TextBlog>
                Пробуйте разные варианты УТП и анализируйте их эффективность.
              </TextBlog>
            </li>
            <li>
              <ListTitleBlog>3. Корректировка на основе данных:</ListTitleBlog>
              <TextBlog>
                Изучайте результаты и вносите изменения в УТП.
              </TextBlog>
            </li>
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitleBlog>Тестирование и оценка</SectionTitleBlog>
          <TextBlog margin>
            Уникальное торговое предложение — это то, что отличает ваш продукт
            от конкурентов.
          </TextBlog>
          <div className={styles.list_3}>
            <ul className={styles.list}>
              <li>
                <ListTitleBlog>1. Сбор отзывов:</ListTitleBlog>
                <TextBlog>
                  Узнайте, как клиенты воспринимают ваше предложение.
                </TextBlog>
              </li>
              <li>
                <ListTitleBlog>2. Тестирование форматов:</ListTitleBlog>
                <TextBlog>
                  Пробуйте разные варианты УТП и анализируйте их эффективность.
                </TextBlog>
              </li>
              <li>
                <ListTitleBlog>
                  3. Корректировка на основе данных:
                </ListTitleBlog>
                <TextBlog>
                  Изучайте результаты и вносите изменения в УТП.
                </TextBlog>
              </li>
            </ul>
            <img src="/images/blog/blog_state1_img4.webp" alt=""></img>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitleBlog>
            Использование нестандартных рекламных форматов
          </SectionTitleBlog>
          <TextBlog margin>
            Уникальное торговое предложение — это то, что отличает ваш продукт
            от конкурентов.
          </TextBlog>
          <ul className={styles.list}>
            <li>
              <ListTitleBlog>1. Видеоконтент:</ListTitleBlog>
              <TextBlog>
                Видеоролики передают эмоции и идеи. Короткие видео подходят для
                платформ, таких как TikTok, YouTube, Instagram.
              </TextBlog>
            </li>
            <li>
              <ListTitleBlog>
                2. Виртуальная и дополненная реальность:
              </ListTitleBlog>
              <TextBlog>
                Технологии VR и AR создают уникальные впечатления, погружая
                пользователя в виртуальную среду.
              </TextBlog>
            </li>
            <li>
              <ListTitleBlog>3. Геймификация:</ListTitleBlog>
              <TextBlog>
                Стимулирует взаимодействие с брендом. Челленджи и квесты
                мотивируют на активное участие.
              </TextBlog>
            </li>
            <li>
              <ListTitleBlog>4. Персонализированная реклама:</ListTitleBlog>
              <TextBlog>
                Индивидуальный подход повышает конверсию. Используйте данные для
                создания персонализированных предложений.
              </TextBlog>
            </li>
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitleBlog>
            Использование нестандартных рекламных форматов
          </SectionTitleBlog>
          <ul className={styles.list}>
            <li>
              <ListTitleBlog>1. А/Б тестирование:</ListTitleBlog>
              <TextBlog>
                Сравнение двух версий рекламных материалов помогает определить
                наиболее эффективную.
              </TextBlog>
            </li>
            <li>
              <ListTitleBlog>2. Оптимизация на основе данных:</ListTitleBlog>
              <TextBlog>
                Корректируйте стратегию, опираясь на полученные данные.
              </TextBlog>
            </li>
            <li>
              <ListTitleBlog>3. Мониторинг показателей:</ListTitleBlog>
              <TextBlog>
                Отслеживание ключевых метрик, таких как стоимость за клик и
                возврат инвестиций.
              </TextBlog>
            </li>
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitleBlog>
            Примеры успешных рекламных кампаний
          </SectionTitleBlog>
          <div className={styles.imgs}>
            <img
              className={styles.img}
              src="/images/blog/blog_state1_img5.webp"
              alt="Картинка "
            ></img>
            <img
              className={styles.img}
              src="/images/blog/blog_state1_img6.webp"
              alt="Картинка "
            ></img>
          </div>
          <ul className={styles.list}>
            <li>
              <ListTitleBlog>
                Кейс 1: Coca-Cola — «Поделись Кока-Колой»
              </ListTitleBlog>
              <TextBlog>
                Кампания с заменой логотипа на имена вызвала большой интерес,
                стимулировав продажи и активность в социальных сетях.
              </TextBlog>
            </li>
            <li>
              <ListTitleBlog>Кейс 2: Nike — «Just Do It»</ListTitleBlog>
              <TextBlog>
                Легендарная кампания, сфокусированная на мотивации, привлекла
                новую аудиторию и повысила лояльность.
              </TextBlog>
            </li>
            <li>
              <ListTitleBlog>
                Кейс 3: Old Spice — «Твой мужчина должен пахнуть как мужчина»
              </ListTitleBlog>
              <TextBlog>
                Оригинальный юмористический подход привлек внимание и обновил
                имидж бренда.
              </TextBlog>
            </li>
            <li>
              <ListTitleBlog>Кейс 4: ALS Ice Bucket Challenge</ListTitleBlog>
              <TextBlog>
                Вирусная акция с выливанием ведра холодной воды привлекла
                внимание к болезни и собрала средства.
              </TextBlog>
            </li>
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitleBlog>Заключение</SectionTitleBlog>
          <TextBlog margin>
            Для привлечения покупателей важно использовать инновационные подходы
            и решения. Применение уникальных торговых предложений, использование
            нестандартных форматов рекламы и тщательное изучение целевой
            аудитории помогают выделиться среди конкурентов. Успешные рекламные
            кампании демонстрируют, что правильные стратегии приводят к
            значительным результатам, включая рост продаж и повышение
            лояльности.
          </TextBlog>
          <TextBlog>
            Постоянный анализ и оптимизация кампаний, учет потребностей
            аудитории и адаптация к изменениям рынка являются ключевыми
            факторами успеха. Экспериментируйте с новыми идеями, анализируйте
            результаты и адаптируйтесь, чтобы оставаться конкурентоспособными и
            эффективно развивать свой бизнес.
          </TextBlog>
        </Container>
      </Section>
    </>
  );
};
