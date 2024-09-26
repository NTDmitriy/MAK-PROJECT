
import { BlogBoxTitle } from "@/components/ui-blog/blogBoxTitle/BlogBoxTitle";
import { ContactBlog } from "@/components/ui-blog/blogContact/BlogContact";
import { BlogList } from "@/components/ui-blog/blogList/BlogList";
import { BlogListItem } from "@/components/ui-blog/blogListItem/BlogListItem";
import { BlogListTitle } from "@/components/ui-blog/blogListTitle/BlogListTitle";
import { BlogText } from "@/components/ui-blog/blogText/BlogText";
import { BlogTextTitle } from "@/components/ui-blog/blogTextTitle/BlogTextTitle";
import { Box } from "@/components/ui/box/Box";
import {
  FORM_TYPE,
  FormController,
} from "@/components/ui/forms/FormController";
import { WEBDEV_DASHBOARD_PAGES } from "@/dashboard/webdev.dashboard";
import { FC } from "react";

export const RedesingGuide: FC = () => {
  return (
    <>
      <Box>
        <BlogBoxTitle>Что такое редизайн сайта и зачем он нужен</BlogBoxTitle>
        <BlogTextTitle>Определение редизайна</BlogTextTitle>
        <BlogText margin>
          Редизайн сайта — это процесс изменения структуры, дизайна и
          функционала веб-ресурса для повышения удобства использования,
          улучшение конверсий или обновление внешнего вида. Это не обязательно
          полная перестройка сайта с нуля, хотя в некоторых случаях это может
          потребоваться. Редизайн может быть частичным, когда меняются только
          отдельные элементы, или полным, когда сайт переделывается полностью
        </BlogText>

        <BlogTextTitle>Основные цели редизайна</BlogTextTitle>
        <BlogList>
          <BlogListItem>
            <BlogListTitle>Устранение ошибок</BlogListTitle>
            <BlogText>
              Со временем на сайте могут возникать технические проблемы:
              устаревшие плагины, медленная загрузка страниц, неправильное
              отображение элементов на мобильных устройствах и многое другое.
              Редизайн позволяет устранить эти ошибки, сделав сайт снова
              стабильным и надежным. Кроме того, устранение ошибок помогает
              повысить доверие к вашему бизнесу, так как пользователи ценят
              стабильность и удобство в использовании.
            </BlogText>
          </BlogListItem>
          <BlogListItem>
            <BlogListTitle>Адаптация под современные технологии</BlogListTitle>
            <BlogText>
              С каждым годом появляются новые технологии, которые изменяют
              подход к созданию и поддержке сайтов. Например, несколько лет
              назад мобильные устройства не играли такую важную роль, как
              сегодня. Теперь адаптивный дизайн — это обязательное условие для
              любого веб-ресурса. Редизайн сайта помогает не только сделать сайт
              доступным на всех устройствах, но и внедрить современные
              технологии, такие как ускоренные мобильные страницы (AMP) или
              прогрессивные веб-приложения (PWA), которые улучшают
              пользовательский опыт и скорость работы сайта.
            </BlogText>
          </BlogListItem>
          <BlogListItem>
            <BlogListTitle>Улучшение пользовательского опыта</BlogListTitle>
            <BlogText>
              Пользовательский опыт (UX) — один из ключевых факторов успеха
              сайта. Если навигация сложная, тексты нечитабельны или функционал
              непонятен, пользователи быстро покидают сайт. Цель редизайна —
              улучшить все аспекты взаимодействия посетителей с вашим сайтом,
              сделать его интуитивно понятным и удобным для пользователей разных
              возрастов и уровней технической подготовки. Оптимизация UX
              напрямую влияет на показатели отказов и времени, проведенного на
              сайте, что, в свою очередь, улучшает общую эффективность сайта.
            </BlogText>
          </BlogListItem>
          <BlogListItem>
            <BlogListTitle>Привлечение новой аудитории</BlogListTitle>
            <BlogText>
              Редизайн — это не только про улучшение функционала, но и про
              привлечение новой аудитории. Обновленный сайт с современным
              дизайном и улучшенным UX создаёт положительное впечатление и может
              стать стимулом для привлечения большего числа пользователей.
              Современные тренды в веб-дизайне также играют важную роль:
              минималистичные и чистые интерфейсы, хорошо подобранные шрифты и
              цветовые схемы могут стать важными факторами для улучшения
              восприятия бренда.
            </BlogText>
          </BlogListItem>
        </BlogList>
      </Box>

      <Box>
        <BlogBoxTitle>Когда необходимо проводить редизайн сайта</BlogBoxTitle>
        <BlogText margin>
          Редизайн сайта – важное решение, требующее понимания времени и
          обстоятельств. Есть несколько ключевых признаков, которые могут
          подсказать, что настало время для обновления веб-ресурса.
        </BlogText>

        <BlogList>
          <BlogListItem>
            <BlogListTitle>
              Сайт устарел и не отвечает современным требованиям
            </BlogListTitle>
            <BlogText>
              Со временем технологии развиваются, и сайт, который раньше работал
              эффективно, может оказаться устаревшим. Если дизайн был актуальным
              несколько лет назад, сейчас он может выглядеть старомодным и не
              привлекать внимание пользователей. Например, многие старые сайты
              имеют статичные элементы, не адаптированы под современные экраны и
              не поддерживают мобильные устройства. Посетители могут потерять
              интерес к такому сайту, так как он не соответствует их ожиданиям.
              Кроме того, поисковые системы, такие как Google, всё больше
              ориентируются на современные технологии, такие как скорость
              загрузки страниц и мобильная адаптация. Если сайт не соответствует
              этим критериям, он может потерять позиции в поисковой выдаче.
            </BlogText>
          </BlogListItem>
          <BlogListItem>
            <BlogListTitle>
              Сайт не адаптирован под мобильные устройства
            </BlogListTitle>
            <BlogText>
              Мобильный интернет занимает всё большую долю в общем объеме
              трафика, и если ваш сайт не адаптирован для мобильных устройств,
              это может привести к потере значительного количества потенциальных
              клиентов. Пользователи, которые заходят на сайт с телефона или
              планшета, ожидают, что навигация будет удобной, а страницы —
              быстро загружаться. Если сайт не оптимизирован для мобильных
              устройств, пользователи могут столкнуться с проблемами в
              отображении контента, что повлияет на их решение о взаимодействии
              с вашим бизнесом. Редизайн, направленный на адаптацию под
              мобильные устройства, улучшит пользовательский опыт и увеличит
              лояльность посетителей.
            </BlogText>
          </BlogListItem>
          <BlogListItem>
            <BlogListTitle>
              Сайт теряет позиции в поисковых системах
            </BlogListTitle>
            <BlogText>
              Алгоритмы поисковых систем постоянно меняются, и если ваш сайт не
              обновлялся уже несколько лет, его позиции в поисковых системах
              могут снижаться. Старые сайты могут не соответствовать новым
              требованиям SEO: медленная загрузка страниц, отсутствие
              адаптивности или неправильная структура URL могут привести к
              ухудшению индексации. Если вы заметили, что трафик снижается, а
              конверсии падают, это явный сигнал к тому, что сайт нуждается в
              редизайне. Новый дизайн и оптимизация помогут вернуть утраченные
              позиции в поисковой выдаче и привлечь больше целевых
              пользователей.
            </BlogText>
          </BlogListItem>
          <BlogListItem>
            <BlogListTitle>
              Бизнес изменил стратегию или расширился
            </BlogListTitle>
            <BlogText>
              Иногда редизайн необходим в связи с изменениями в бизнесе.
              Например, если компания расширилась, ввела новые продукты или
              услуги, то старый сайт может не отражать текущие предложения и
              потребности бизнеса. Важно, чтобы веб-ресурс был актуальным и
              соответствовал текущей стратегии компании. Редизайн может включать
              изменение навигации, добавление новых разделов, улучшение
              пользовательских сценариев или полную модернизацию функционала
              сайта.
            </BlogText>
          </BlogListItem>
        </BlogList>
      </Box>

      <ContactBlog
        blockTitle="Хотите обновить ваш сайт и сделать его более современным и эффективным?"
        btnText="Услуга по редизайну"
        to={WEBDEV_DASHBOARD_PAGES.WEBDEV_REDESIGN.url}
      />

      <Box>
        <BlogBoxTitle>Как подготовиться к редизайну сайта</BlogBoxTitle>
        <BlogText margin>
          Правильная подготовка к редизайну — это основа для результата. Прежде
          чем приступить к изменениям, важно провести всесторонний анализ и
          четко определить цели редизайна.
        </BlogText>
        <BlogTextTitle>Анализ текущего состояния сайта</BlogTextTitle>
        <BlogText margin>
          Правильная подготовка к редизайну — это основа для результата. Прежде
          чем приступить к изменениям, важно провести всесторонний анализ и
          четко определить цели редизайна.
        </BlogText>

        <BlogList grid margin>
          <BlogListItem>
            <BlogListTitle>Оценка SEO</BlogListTitle>
            <BlogText>
              SEO (поисковая оптимизация) играет важную роль в видимости сайта в
              поисковых системах. Аудит SEO помогает выявить слабые стороны,
              такие как использование устаревших ключевых слов, медленная
              загрузка страниц или неэффективная внутренняя структура ссылок. В
              процессе редизайна важно устранить эти проблемы, чтобы не потерять
              текущие позиции в поисковой выдаче, а, наоборот, улучшить их.
            </BlogText>
          </BlogListItem>
          <BlogListItem>
            <BlogListTitle>Анализ контента</BlogListTitle>
            <BlogText>
              Контент — это то, что привлекает пользователей и заставляет их
              оставаться на сайте. Важно провести ревизию всех текстов,
              изображений и видео, чтобы определить, что следует обновить или
              удалить. Возможно, часть контента устарела или не соответствует
              новым целям бизнеса. Качественный контент не только улучшает
              пользовательский опыт, но и способствует более высокому
              ранжированию сайта в поисковых системах.
            </BlogText>
          </BlogListItem>
          <BlogListItem>
            <img
              src="/images/blog/redesign-guide-1.webp"
              alt="Изучение конкурентов"
              style={{ maxWidth: "100%" }}
            />
          </BlogListItem>
          <BlogListItem>
            <BlogListTitle>Изучение конкурентов</BlogListTitle>
            <BlogText>
              Изучение сайтов конкурентов поможет лучше понять, какие элементы
              дизайна и функционала работают лучше всего в вашей нише. Это может
              быть полезным при планировании редизайна, чтобы учесть успешные
              примеры и внедрить их в собственный проект. Важно не копировать, а
              адаптировать лучшие идеи под особенности вашего бизнеса.
            </BlogText>
          </BlogListItem>
        </BlogList>

        <BlogTextTitle>Определение целей редизайна</BlogTextTitle>
        <BlogText margin>
          Когда анализ завершен, следующим шагом становится определение целей
          редизайна. Эти цели помогут сфокусироваться на ключевых аспектах,
          которые необходимо улучшить.
        </BlogText>
        <BlogList>
          <BlogListItem>
            <BlogListTitle>Улучшение функционала</BlogListTitle>
            <BlogText>
              Возможно, сайт требует улучшения функционала, чтобы удовлетворить
              потребности пользователей. Это может включать добавление новых
              модулей, таких как система онлайн-бронирования, интеграция с
              CRM-системами или настройка интернет-магазина. Чем больше функций
              предлагает сайт, тем больше он соответствует ожиданиям
              пользователей и потребностям бизнеса.
            </BlogText>
          </BlogListItem>
          <BlogListItem>
            <BlogListTitle>Визуальные изменения</BlogListTitle>
            <BlogText>
              Визуальный дизайн — это то, что первым привлекает внимание
              пользователей. Современный и привлекательный дизайн может
              значительно повысить конверсии. Важно учитывать текущие тренды в
              дизайне, чтобы сделать сайт свежим и современным, при этом
              сохраняя его уникальный стиль и айдентику бренда.
            </BlogText>
          </BlogListItem>

          <BlogListItem>
            <BlogListTitle>Оптимизация для мобильных устройств</BlogListTitle>
            <BlogText>
              С ростом использования мобильных устройств оптимизация сайта под
              мобильные платформы стала критически важной. Мобильный трафик
              составляет значительную часть посещений большинства сайтов, и если
              ваш сайт не адаптирован для смартфонов и планшетов, это может
              привести к потере пользователей. Редизайн должен учитывать
              адаптивный дизайн, чтобы сайт одинаково хорошо отображался на всех
              типах устройств.
            </BlogText>
          </BlogListItem>
        </BlogList>
      </Box>

      <Box>
        <BlogBoxTitle>Виды редизайна</BlogBoxTitle>
        <BlogText margin>
          Редизайн сайта может включать разные подходы в зависимости от задач и
          состояния самого ресурса. Важно выбрать тот вид редизайна, который
          соответствует бизнес-целям и текущим потребностям сайта. Рассмотрим
          основные виды редизайна, применяемые в практике.
        </BlogText>
        <BlogList>
          <BlogListItem>
            <BlogListTitle>Полный редизайн</BlogListTitle>
            <BlogText margin>
              Полный редизайн предполагает кардинальные изменения сайта — как
              визуальные, так и функциональные. Это может включать обновление
              дизайна, пересмотр структуры, замену всех текстов, модернизацию
              программного обеспечения. Такой тип редизайна часто требуется,
              если сайт сильно устарел или бизнес значительно изменил свои цели.
              В результате может остаться лишь основная идея сайта, тогда как
              весь остальной контент и функции создаются заново.
            </BlogText>
            <BlogText>
              Полный редизайн подходит для сайтов, которые давно не обновлялись
              или имеют существенные технические ограничения. В этом случае
              проще создать новый сайт с нуля, чем пытаться адаптировать старый.
            </BlogText>
          </BlogListItem>
          <BlogListItem>
            <BlogListTitle>Визуальный редизайн</BlogListTitle>
            <BlogText margin>
              Этот вид редизайна направлен на изменение внешнего вида сайта без
              серьёзного вмешательства в его функциональность. Основные
              элементы, которые подвергаются изменениям, включают в себя
              цветовые схемы, типографику, изображения и макеты страниц. Цель
              визуального редизайна — сделать сайт более современным
              и привлекательным, не изменяя его структуру или внутренние
              процессы.
            </BlogText>
            <BlogText>
              Визуальный редизайн чаще всего применяется, если сайт работает
              стабильно, но его внешний вид уже не соответствует актуальным
              тенденциям дизайна. Однако важно учитывать, что пользователи могут
              негативно воспринять кардинальные изменения внешнего вида,
              особенно если они привыкли к старому интерфейсу.
            </BlogText>
          </BlogListItem>
          <BlogListItem>
            <BlogListTitle>Технический редизайн</BlogListTitle>
            <BlogText margin>
              Технический редизайн затрагивает внутреннюю архитектуру сайта —
              его серверные и программные компоненты. Этот вид изменений может
              включать оптимизацию скорости загрузки, переход на более
              современную систему управления контентом (CMS), обновление
              серверного оборудования или изменение кода для повышения
              безопасности. Часто такие улучшения проходят «за кулисами» и могут
              быть незаметны пользователям, но они значительно улучшают общую
              производительность сайта.
            </BlogText>
            <BlogText>
              Технический редизайн необходим, если сайт имеет проблемы с
              производительностью, часто выходит из строя или работает на
              устаревшем ПО, которое больше не поддерживается.
            </BlogText>
          </BlogListItem>
          <BlogListItem>
            <BlogListTitle>Функциональный редизайн</BlogListTitle>
            <BlogText margin>
              Функциональный редизайн связан с добавлением или изменением
              функций сайта. Он может включать интеграцию новых модулей, таких
              как системы электронной коммерции, чат-боты для поддержки
              клиентов, автоматизация процессов и улучшение взаимодействия с
              пользователями. Это более тонкий подход, который позволяет
              обновить сайт без изменения его внешнего вида, но с добавлением
              новых возможностей.
            </BlogText>
            <BlogText>
              Функциональный редизайн полезен, когда бизнес расширяется и
              появляются новые потребности, такие как онлайн-продажи или
              внедрение CRM-системы для управления клиентами.
            </BlogText>
          </BlogListItem>
        </BlogList>
      </Box>

      <Box>
        <FormController
          formType={FORM_TYPE.MAIN_FORM}
          title="Сроки редизайна и доработки"
          text="Сроки редизайна и доработки сайта зависят от индивидуальных особенностей и потребностей вашего проекта. Мы подходим к каждому клиенту персонально и учитываем все нюансы, чтобы предложить оптимальное решение. Для точной оценки сроков и объема работ нам необходимо ознакомиться с вашим действующим сайтом и понять ваши цели. Запишитесь на консультацию, чтобы мы могли обсудить все детали и предложить вам наилучший план действий"
        />
      </Box>
      <Box>
        <BlogBoxTitle>Этапы проведения редизайна</BlogBoxTitle>
        <BlogText margin>
          Редизайн сайта — это комплексный процесс, который требует тщательной
          подготовки и поэтапного выполнения. Рассмотрим основные этапы, которые
          помогут провести редизайн эффективно.
        </BlogText>
        <BlogList>
          <BlogListItem>
            <BlogListTitle>Планирование и подготовка</BlogListTitle>
            <BlogText margin>
              Планирование — это фундамент успешного редизайна. На этом этапе
              проводится анализ текущего состояния сайта, выявляются слабые
              места и определяются цели изменений. Важно четко понять, какие
              задачи должен решить обновлённый сайт: улучшение пользовательского
              опыта, увеличение скорости загрузки, оптимизация под мобильные
              устройства или другие цели.
            </BlogText>
            <BlogText>
              Планирование также включает формирование технического задания для
              дизайнеров и разработчиков, определение бюджета и сроков
              выполнения работ.
            </BlogText>
          </BlogListItem>
          <BlogListItem>
            <BlogListTitle>Разработка прототипов и макетов</BlogListTitle>
            <BlogText margin>
              Прежде чем приступить к разработке, создаются прототипы и макеты
              будущего сайта. Прототипы позволяют визуализировать структуру
              страниц, а также расположение ключевых элементов, таких как меню,
              кнопки, формы и другие интерактивные элементы. Этот шаг важен для
              согласования всех изменений с заказчиком, чтобы избежать
              недопонимания и минимизировать возможные правки на этапе
              разработки.
            </BlogText>
            <BlogText>
              Макеты включают в себя визуальное представление будущего сайта,
              включая выбор цветовой палитры, шрифтов и стиля оформления. После
              утверждения макетов можно переходить к следующему этапу —
              разработке.
            </BlogText>
          </BlogListItem>
          <BlogListItem>
            <BlogListTitle>Работа над дизайном и функционалом</BlogListTitle>
            <BlogText margin>
              Этот этап включает непосредственное создание нового дизайна и
              внедрение необходимых функций. Дизайнеры и разработчики работают
              совместно, чтобы реализовать все задумки из прототипов и макетов.
              На этом этапе важно обратить внимание на соответствие дизайна
              бренду компании, а также на удобство взаимодействия пользователей
              с интерфейсом.
            </BlogText>
            <BlogText>
              Кроме визуальных изменений, в данный этап входит доработка или
              добавление нового функционала: интеграция с внешними сервисами,
              установка модулей для электронной коммерции, подключение
              CRM-систем или других нужных инструментов для бизнеса. Всё это
              должно быть сделано с учётом удобства использования и скорости
              работы сайта.
            </BlogText>
          </BlogListItem>
          <BlogListItem>
            <BlogListTitle>
              Тестирование и запуск обновленного сайта
            </BlogListTitle>
            <BlogText margin>
              Когда работы по редизайну завершены, начинается этап тестирования.
              Здесь проверяются все аспекты работы сайта: функциональность,
              правильность отображения элементов на разных устройствах и в
              разных браузерах, скорость загрузки, а также общая
              производительность. Важно убедиться, что сайт работает корректно и
              без ошибок как на десктопах, так и на мобильных устройствах.
            </BlogText>
            <BlogText>
              После успешного тестирования наступает этап запуска. Обновленный
              сайт размещается на основном сервере и становится доступным для
              пользователей. При этом важно продолжать следить за его работой в
              первые дни, чтобы оперативно устранить возможные ошибки или
              недочёты, которые могут проявиться в процессе использования.
            </BlogText>
          </BlogListItem>
        </BlogList>
      </Box>

      <Box>
        <BlogBoxTitle>
          Как выбрать между обновлением и созданием нового сайта
        </BlogBoxTitle>
        <BlogText margin>
          Когда сайт начинает терять свою эффективность, перед бизнесом встает
          вопрос: обновлять существующий ресурс или создавать новый с нуля? Оба
          варианта имеют свои преимущества и недостатки, поэтому важно понять,
          что лучше для конкретной ситуации.
        </BlogText>
        <BlogTextTitle>Когда стоит обновить сайт</BlogTextTitle>
        <BlogList margin>
          <BlogListItem>
            <BlogListTitle>Сайту менее 3 лет</BlogListTitle>
            <BlogText>
              Если вашему сайту меньше трёх лет, возможно, обновление станет
              лучшим решением. За это время сайт может оставаться актуальным по
              функциональности, и достаточно будет внести небольшие изменения в
              дизайн или структуру, чтобы вернуть его эффективность. Адаптация
              контента и визуального оформления, улучшение SEO — это всё можно
              сделать без кардинальной переделки.
            </BlogText>
          </BlogListItem>
          <BlogListItem>
            <BlogListTitle>Необходимы незначительные правки</BlogListTitle>
            <BlogText>
              Когда проблемы сайта касаются только отдельных элементов,
              например, устаревших изображений, некорректного отображения на
              мобильных устройствах или необходимости улучшения скорости
              загрузки, обновление будет более экономичным решением. Этот подход
              позволяет сохранить текущую структуру и основу сайта, делая
              небольшие улучшения там, где это нужно.
            </BlogText>
          </BlogListItem>
        </BlogList>
        <img
          src="/images/blog/redesign-guide-2.webp"
          alt="Изучение конкурентов"
          style={{ maxWidth: "100%", marginBottom: "30px" }}
        />
        <BlogTextTitle>Когда стоит создать новый сайт</BlogTextTitle>
        <BlogList>
          <BlogListItem>
            <BlogListTitle>Сайт не соответствует брендингу</BlogListTitle>
            <BlogText>
              Если сайт больше не отражает текущие ценности и стиль вашего
              бизнеса, создание нового сайта — лучшее решение. Например, если
              компания изменила стратегию, начала предоставлять новые продукты
              или услуги, важно, чтобы сайт соответствовал этим изменениям.
              Старый сайт, скорее всего, не сможет правильно донести новый имидж
              бренда до аудитории.
            </BlogText>
          </BlogListItem>
          <BlogListItem>
            <BlogListTitle>Проблемы с управлением сайтом</BlogListTitle>
            <BlogText>
              Если ваш сайт сложно администрировать, например, добавление нового
              контента требует много времени и ресурсов, это явный признак
              необходимости создания нового ресурса. Современные системы
              управления контентом (CMS) позволяют легко и быстро обновлять сайт
              без глубоких технических знаний, что значительно упрощает процесс
              его поддержки.
            </BlogText>
          </BlogListItem>
          <BlogListItem>
            <BlogListTitle>Сложности в навигации и функционале</BlogListTitle>
            <BlogText>
              Если пользователи не могут найти нужную информацию на сайте или
              столкнулись с трудностями при взаимодействии с его функционалом,
              это может негативно сказываться на их опыте и конверсии. В таком
              случае создание нового сайта с улучшенной навигацией и
              пользовательским интерфейсом станет более эффективным решением,
              чем обновление старого.
            </BlogText>
          </BlogListItem>
        </BlogList>
      </Box>

      <Box>
        <BlogBoxTitle>Примеры успешного редизайна</BlogBoxTitle>
        <BlogText margin>
          Редизайн — это не только способ улучшить функциональность сайта, но и
          возможность полностью обновить восприятие бренда пользователями.
          Рассмотрим несколько примеров успешного редизайна известных компаний.
        </BlogText>
        <BlogList>
          <BlogListItem>
            <BlogListTitle>Skype</BlogListTitle>
            <BlogText>
              Редизайн сайта Skype стал примером успешного минимализма. Компания
              уменьшила объем текста на главной странице, сфокусировав
              пользователей на ключевых функциях. Лаконичность дизайна,
              использование крупных изображений и простых элементов помогли
              улучшить восприятие бренда и сделать сайт более понятным и удобным
              для пользователей.
            </BlogText>
          </BlogListItem>
          <BlogListItem>
            <BlogListTitle>Apple</BlogListTitle>
            <BlogText>
              Apple также использует минималистический подход в своем дизайне.
              Один из ключевых аспектов редизайна — это упрощение интерфейса и
              сокращение текстовых блоков на главной странице. Это позволило
              улучшить пользовательский опыт и сделать акцент на визуальном
              восприятии продукции компании.
            </BlogText>
          </BlogListItem>
          <BlogListItem>
            <BlogListTitle>Adobe</BlogListTitle>
            <BlogText>
              Adobe сделал редизайн с акцентом на креативные визуальные решения.
              Вместо традиционных промо-материалов, компания использовала
              динамичные изображения и уникальные графические элементы, что
              помогло усилить креативный имидж бренда и сделать сайт более
              привлекательным для целевой аудитории.
            </BlogText>
          </BlogListItem>
        </BlogList>
      </Box>
      <Box>
        <BlogBoxTitle>Заключение</BlogBoxTitle>
        <BlogText margin>
          Редизайн сайта — это важный и необходимый процесс для любого бизнеса,
          который стремится оставаться конкурентоспособным в условиях
          стремительно меняющегося цифрового мира. Важно не просто изменить
          внешний вид сайта, но и улучшить его функциональные возможности,
          адаптировать под современные технологии и требования пользователей.
          Независимо от того, выбираете ли вы частичное обновление или полную
          переделку сайта, грамотно проведенный редизайн поможет вашему бизнесу
          привлечь больше клиентов и повысить свою эффективность.
        </BlogText>
        <BlogText>
          Заказать редизайн сайта — это шаг к улучшению вашей онлайн-платформы и
          достижению новых высот.
        </BlogText>
      </Box>
    </>
  );
};
