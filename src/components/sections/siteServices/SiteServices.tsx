import { PrimaryButton } from "@/components/ui/buttons/primaryButton/PrimaryButton";
import { Container } from "@/components/ui/container/Container";
import {
  FORM_TYPE,
  FormController,
} from "@/components/ui/forms/FormController";
import { PrimaryLinkButton } from "@/components/ui/links/primaryLinkButton/PrimaryLinkButton";
import { Popup } from "@/components/ui/modals/popup/Popup";
import { Section } from "@/components/ui/section/Section";
import { BlockTitle } from "@/components/ui/titles/titleBlock/BlockTitle";
import { WEBDEV_DASHBOARD_PAGES } from "@/config/url-config/webdev-pages.config";
import { TGenericElementProps } from "@/interfaces/elements.type";
import { FC, PropsWithChildren } from "react";
import { DynamicSvg, TSvgMapKeys } from "../../ui/dynamicSvg/DynamicSvg";
import styles from "./SiteServices.module.css";

interface ICard {
  image: string;
  name: string;
  url: string;
  description: string;
}

interface ICardList {
  cards: ICard[];
}

const CardList: FC<ICardList> = ({ cards }) => {
  return (
    <ul className={styles.card__list}>
      {cards.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          name={card.name}
          url={card.url}
          description={card.description}
        />
      ))}
    </ul>
  );
};

const Card: FC<ICard> = ({ image, name, url, description }) => {
  return (
    <li className={styles.card}>
      <div className={styles.card_content}>
        <div className={styles.img}>
          <DynamicSvg name={image as TSvgMapKeys} />
        </div>
        <div className={styles.title__wrapper}>
          <h2 className={styles.title}>{name}</h2>
          <PrimaryLinkButton href={url} className={styles.link}>
            Подробнее
          </PrimaryLinkButton>
        </div>
      </div>
      <p className={styles.description}>{description}</p>
    </li>
  );
};

export const SiteServices: FC<PropsWithChildren<TGenericElementProps>> = ({
  className,
  ...rest
}) => {
  const { childrens } = WEBDEV_DASHBOARD_PAGES.WEBDEV;

  return (
    <Section className={className} {...rest}>
      <BlockTitle leftSide={true}>
        Создание сайтов на популярных фреймворках и CMS
      </BlockTitle>
      <Container>
        <div className={styles.content}>
          <CardList cards={childrens} />

          <div className={styles.sticky}>
            <h5 className={styles.sticky__title}>ОБРАТИТЕ ВНИМАНИЕ!</h5>
            <p className={styles.sticky__text}>
              Если вы не уверены в выборе платформы для вашего сайта, мы
              предлагаем вам бесплатную консультацию. Наши эксперты помогут вам
              подобрать платформу, которая идеально подойдет и будет
              соответствовать требованиям вашего бизнеса. Мы предложим вам
              оптимальное решение, обеспечив лучшее качество и соответствие
              вашим нуждам.
            </p>
            <Popup
              initComponent={
                <PrimaryButton>Получить консультацию</PrimaryButton>
              }
              contentComponent={
                <FormController
                  formType={FORM_TYPE.COMPLEX_FORM}
                  title="Получить консультацию"
                />
              }
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};
