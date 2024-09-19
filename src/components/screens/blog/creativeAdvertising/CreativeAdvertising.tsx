import { BlogList } from "@/components/ui-blog/blogList/BlogList";
import { BlogListItem } from "@/components/ui-blog/blogListItem/BlogListItem";
import { BlogListTitle } from "@/components/ui-blog/blogListTitle/BlogListTitle";
import { BlogText } from "@/components/ui-blog/blogText/BlogText";
import { BoxTitleBlog } from "@/components/ui-blog/boxTitleBlog/BoxTitleBlog";
import { Box } from "@/components/ui/box/Box";
import { FC } from "react";
import styles from "./CreativeAdvertising.module.css";

export const CreativeAdvertisingContent: FC = () => {
  return (
    <>
      <Box>
        <BoxTitleBlog>Введение</BoxTitleBlog>
        <BlogText margin>
          В 2024 году компании сталкиваются с вызовами в привлечении внимания
          покупателей из-за высокой конкуренции. Современные методы требуют
          оригинальных решений для поддержания конкурентоспособности. В статье
          представлены рекомендации и примеры успешных рекламных кампаний,
          которые помогут привлечь новых потребителей и удержать их.
        </BlogText>
        <div className={styles.imgs}>
          <img
            className={styles.img}
            src="/images/blog/blog_state1_img1.webp"
            alt="Картинка"
          />
          <img
            className={styles.img}
            src="/images/blog/blog_state1_img2.webp"
            alt="Картинка"
          />
        </div>
      </Box>

      <Box>
        <BoxTitleBlog>Анализ целевой аудитории</BoxTitleBlog>
        <BlogText margin>
          Для успешной кампании важно определить, кто является потенциальными
          покупателями и что они ищут. Следующие методы помогут в этом:
        </BlogText>
        <BlogList>
          <BlogListItem>
            <BlogListTitle>1. Изучение текущих клиентов:</BlogListTitle>
            <BlogText>
              Анализ демографических данных (возраст, пол, местоположение)
              помогает понять, кто уже интересуется вашими продуктами.
            </BlogText>
          </BlogListItem>
          <BlogListItem>
            <BlogListTitle>2. Сбор обратной связи:</BlogListTitle>
            <BlogText>
              Анкеты и интервью позволяют собрать ценную информацию
              о потребностях.
            </BlogText>
          </BlogListItem>
          <BlogListItem>
            <BlogListTitle>3. Использование аналитики:</BlogListTitle>
            <BlogText>
              Инструменты, такие как Google Analytics и Яндекс Метрика, помогают
              анализировать поведение посетителей на сайте и в социальных сетях.
            </BlogText>
          </BlogListItem>
        </BlogList>
      </Box>

      <Box>
        <BoxTitleBlog>Понимание нужд и предпочтений</BoxTitleBlog>
        <BlogText margin>
          После определения целевой аудитории важно выявить их потребности. Это
          поможет создавать релевантные рекламные сообщения.
        </BlogText>
        <BlogList>
          <BlogListItem>
            <BlogListTitle>1. Определение проблем:</BlogListTitle>
            <BlogText>
              Какие задачи пытаются решить потребители с помощью вашего
              продукта?
            </BlogText>
          </BlogListItem>
          <BlogListItem>
            <BlogListTitle>2. Изучение интересов:</BlogListTitle>
            <BlogText>
              Что привлекает вашу аудиторию? Какие у них увлечения?
            </BlogText>
          </BlogListItem>
          <BlogListItem>
            <BlogListTitle>3. Изучение конкурентов:</BlogListTitle>
            <BlogText>
              Какие стратегии используют конкуренты? Какие подходы применяют для
              привлечения клиентов?
            </BlogText>
          </BlogListItem>
        </BlogList>
      </Box>

      <Box>
        <BoxTitleBlog>Сегментация аудитории</BoxTitleBlog>
        <BlogText margin>
          Сегментация позволяет разбить целевую группу на подгруппы с общими
          характеристиками.
        </BlogText>
        <img
          className={styles.img3}
          src="/images/blog/blog_state1_img3.webp"
          alt="Картинка"
        />
        <BlogList grid>
          <BlogListItem>
            <BlogListTitle>1. Демографическая:</BlogListTitle>
            <BlogText>
              Возраст, пол, доход, семейное положение и образование.
            </BlogText>
          </BlogListItem>
          <BlogListItem>
            <BlogListTitle>2. Географическая:</BlogListTitle>
            <BlogText>Страна, город, регион.</BlogText>
          </BlogListItem>
          <BlogListItem>
            <BlogListTitle>3. Психографическая:</BlogListTitle>
            <BlogText>Образ жизни, интересы, ценности.</BlogText>
          </BlogListItem>
          <BlogListItem>
            <BlogListTitle>4. Поведенческая:</BlogListTitle>
            <BlogText>
              Поведение, связанное с вашим продуктом: частота покупок,
              лояльность к бренду и стадия покупательского пути.
            </BlogText>
          </BlogListItem>
        </BlogList>
      </Box>

      <Box>
        <BoxTitleBlog>Создание портретов покупателей</BoxTitleBlog>
        <BlogText margin>
          Создание персонажей помогает визуализировать целевую группу и понять,
          как лучше с ней взаимодействовать.
        </BlogText>
        <BlogList>
          <BlogListItem>
            <BlogListTitle>1. Профиль персоны:</BlogListTitle>
            <BlogText>
              Имя, возраст, профессия, а также личные характеристики.
            </BlogText>
          </BlogListItem>
          <BlogListItem>
            <BlogListTitle>2. Использование данных:</BlogListTitle>
            <BlogText>
              Основывайте персоны на реальных данных для большей точности.
            </BlogText>
          </BlogListItem>
        </BlogList>
      </Box>

      <Box>
        <BoxTitleBlog>
          Разработка уникального торгового предложения (УТП)
        </BoxTitleBlog>
        <BlogText margin>
          Уникальное торговое предложение — это то, что отличает ваш продукт от
          конкурентов.
        </BlogText>
        <BlogList>
          <BlogListItem>
            <BlogListTitle>
              1. Идентификация ключевых преимуществ:
            </BlogListTitle>
            <BlogText>
              Особенности вашего продукта, такие как инновационные технологии
              или высокое качество обслуживания.
            </BlogText>
          </BlogListItem>
          <BlogListItem>
            <BlogListTitle>2.Понимание аудитории:</BlogListTitle>
            <BlogText>
              УТП должно решать конкретные задачи, с которыми сталкиваются ваши
              клиенты.
            </BlogText>
          </BlogListItem>
          <BlogListItem>
            <BlogListTitle>3. Оценка конкурентов:</BlogListTitle>
            <BlogText>
              Изучите предложения других компаний и выделите свои сильные
              стороны.
            </BlogText>
          </BlogListItem>
          <BlogListItem>
            <BlogListTitle>4. Четкость формулировки:</BlogListTitle>
            <BlogText>
              УТП должно быть понятным и простым, акцентируя внимание на выгодах
              для покупателя.
            </BlogText>
          </BlogListItem>
        </BlogList>
      </Box>

      <Box>
        <BoxTitleBlog>Тестирование и оценка</BoxTitleBlog>
        <BlogText margin>
          Уникальное торговое предложение — это то, что отличает ваш продукт от
          конкурентов.
        </BlogText>
        <BlogList>
          <BlogListItem>
            <BlogListTitle>1. Сбор отзывов:</BlogListTitle>
            <BlogText>
              Узнайте, как клиенты воспринимают ваше предложение.
            </BlogText>
          </BlogListItem>
          <BlogListItem>
            <BlogListTitle>2. Тестирование форматов:</BlogListTitle>
            <BlogText>
              Пробуйте разные варианты УТП и анализируйте их эффективность.
            </BlogText>
          </BlogListItem>
          <BlogListItem>
            <BlogListTitle>3. Корректировка на основе данных:</BlogListTitle>
            <BlogText>Изучайте результаты и вносите изменения в УТП.</BlogText>
          </BlogListItem>
        </BlogList>
      </Box>

      <Box>
        <BoxTitleBlog>Тестирование и оценка</BoxTitleBlog>
        <BlogText margin>
          Уникальное торговое предложение — это то, что отличает ваш продукт от
          конкурентов.
        </BlogText>
        <div className={styles.list}>
          <BlogList>
            <BlogListItem>
              <BlogListTitle>1. Сбор отзывов:</BlogListTitle>
              <BlogText>
                Узнайте, как клиенты воспринимают ваше предложение.
              </BlogText>
            </BlogListItem>
            <BlogListItem>
              <BlogListTitle>2. Тестирование форматов:</BlogListTitle>
              <BlogText>
                Пробуйте разные варианты УТП и анализируйте их эффективность.
              </BlogText>
            </BlogListItem>
            <BlogListItem>
              <BlogListTitle>3. Корректировка на основе данных:</BlogListTitle>
              <BlogText>
                Изучайте результаты и вносите изменения в УТП.
              </BlogText>
            </BlogListItem>
          </BlogList>
          <img
            src="/images/blog/blog_state1_img4.webp"
            alt=" Уникальное торговое предложение — это то, что отличает ваш продукт от
          конкурентов."
          />
        </div>
      </Box>

      <Box>
        <BoxTitleBlog>
          Использование нестандартных рекламных форматов
        </BoxTitleBlog>
        <BlogText margin>
          Уникальное торговое предложение — это то, что отличает ваш продукт от
          конкурентов.
        </BlogText>
        <BlogList>
          <BlogListItem>
            <BlogListTitle>1. Видеоконтент:</BlogListTitle>
            <BlogText>
              Видеоролики передают эмоции и идеи. Короткие видео подходят для
              платформ, таких как TikTok, YouTube, Instagram.
            </BlogText>
          </BlogListItem>
          <BlogListItem>
            <BlogListTitle>
              2. Виртуальная и дополненная реальность:
            </BlogListTitle>
            <BlogText>
              Технологии VR и AR создают уникальные впечатления, погружая
              пользователя в виртуальную среду.
            </BlogText>
          </BlogListItem>
          <BlogListItem>
            <BlogListTitle>3. Геймификация:</BlogListTitle>
            <BlogText>
              Стимулирует взаимодействие с брендом. Челленджи и квесты
              мотивируют на активное участие.
            </BlogText>
          </BlogListItem>
          <BlogListItem>
            <BlogListTitle>4. Персонализированная реклама:</BlogListTitle>
            <BlogText>
              Индивидуальный подход повышает конверсию. Используйте данные для
              создания персонализированных предложений.
            </BlogText>
          </BlogListItem>
        </BlogList>
      </Box>

      <Box>
        <BoxTitleBlog>
          Использование нестандартных рекламных форматов
        </BoxTitleBlog>
        <BlogList>
          <BlogListItem>
            <BlogListTitle>1. А/Б тестирование:</BlogListTitle>
            <BlogText>
              Сравнение двух версий рекламных материалов помогает определить
              наиболее эффективную.
            </BlogText>
          </BlogListItem>
          <BlogListItem>
            <BlogListTitle>2. Оптимизация на основе данных:</BlogListTitle>
            <BlogText>
              Корректируйте стратегию, опираясь на полученные данные.
            </BlogText>
          </BlogListItem>
          <BlogListItem>
            <BlogListTitle>3. Мониторинг показателей:</BlogListTitle>
            <BlogText>
              Отслеживание ключевых метрик, таких как стоимость за клик и
              возврат инвестиций.
            </BlogText>
          </BlogListItem>
        </BlogList>
      </Box>

      <Box>
        <BoxTitleBlog>Примеры успешных рекламных кампаний</BoxTitleBlog>
        <div className={styles.imgs}>
          <img
            className={styles.img}
            src="/images/blog/blog_state1_img5.webp"
            alt="Картинка"
          />
          <img
            className={styles.img}
            src="/images/blog/blog_state1_img6.webp"
            alt="Картинка"
          />
        </div>
        <BlogList>
          <BlogListItem>
            <BlogListTitle>
              Кейс 1: Coca-Cola — «Поделись Кока-Колой»
            </BlogListTitle>
            <BlogText>
              Кампания с заменой логотипа на имена вызвала большой интерес,
              стимулировав продажи и активность в социальных сетях.
            </BlogText>
          </BlogListItem>
          <BlogListItem>
            <BlogListTitle>Кейс 2: Nike — «Just Do It»</BlogListTitle>
            <BlogText>
              Легендарная кампания, сфокусированная на мотивации, привлекла
              новую аудиторию и повысила лояльность.
            </BlogText>
          </BlogListItem>
          <BlogListItem>
            <BlogListTitle>
              Кейс 3: Old Spice — «Твой мужчина должен пахнуть как мужчина»
            </BlogListTitle>
            <BlogText>
              Оригинальный юмористический подход привлек внимание и обновил
              имидж бренда.
            </BlogText>
          </BlogListItem>
          <BlogListItem>
            <BlogListTitle>Кейс 4: ALS Ice Bucket Challenge</BlogListTitle>
            <BlogText>
              Вирусная акция с выливанием ведра холодной воды привлекла внимание
              к болезни и собрала средства.
            </BlogText>
          </BlogListItem>
        </BlogList>
      </Box>

      <Box>
        <BoxTitleBlog>Заключение</BoxTitleBlog>
        <BlogText margin>
          Для привлечения покупателей важно использовать инновационные подходы и
          решения. Применение уникальных торговых предложений, использование
          нестандартных форматов рекламы и тщательное изучение целевой аудитории
          помогают выделиться среди конкурентов. Успешные рекламные кампании
          демонстрируют, что правильные стратегии приводят к значительным
          результатам, включая рост продаж и повышение лояльности.
        </BlogText>
        <BlogText>
          Постоянный анализ и оптимизация кампаний, учет потребностей аудитории
          и адаптация к изменениям рынка являются ключевыми факторами успеха.
          Экспериментируйте с новыми идеями, анализируйте результаты и
          адаптируйтесь, чтобы оставаться конкурентоспособными и эффективно
          развивать свой бизнес.
        </BlogText>
      </Box>
    </>
  );
};
