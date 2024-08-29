import { Container } from "@/components/ui/container/Container";
import { Section } from "@/components/ui/section/Section";
import { BlockTitle } from "@/components/ui/titles/titleBlock/BlockTitle";
import { FC, PropsWithChildren } from "react";
import styles from './SiteServices.module.css';
import { PrimaryLinkButton } from "@/components/ui/links/primaryLinkButton/PrimaryLinkButton";
import { WEBDEV_DASHBOARD_PAGES } from "@/config/url-config/webdev-pages.config";
import clsx from "clsx";

interface CardProps {
    image: string;
    name: string;
    url: string;
    description: string;
}

interface CardListProps {
    cards: CardProps[];
}


const cardData: CardProps[] = WEBDEV_DASHBOARD_PAGES.WEBDEV.childrens.map(item => ({
    image: item.image,
    name: item.name,
    url: item.url,
    description: item.description,
}));

const Card: FC<CardProps> = ({ image, name, url, description }) => {
    return (
        <div className={styles.card}>
            <div className={styles.card_content}>
                    <img src={image} alt={name} className={styles.image} />
                    <h2 className={styles.title}>{name}</h2>
                <PrimaryLinkButton href={url} className={styles.link}>
                    Подробнее
                </PrimaryLinkButton>
            </div>
            <p className={styles.description}>{description}</p>
        </div>
    );
};

const CardList: FC<CardListProps> = ({ cards }) => {
    return (
        <div className={styles.cardList}>
            {cards.map((card, index) => (
                <Card
                    key={index}
                    image={card.image}
                    name={card.name}
                    url={card.url}
                    description={card.description}
                />
            ))}
        </div>
    );
};

export const SiteServices: FC<PropsWithChildren> = () => {
    return (
        <Section>
            <BlockTitle leftSide={true}>Создание сайтов на популярных фреймворках и CMS</BlockTitle>
            <Container className={styles.content}>
                <CardList cards={cardData} />
                <div className={styles.form}>
                </div>
            </Container>

        </Section>
    );
};
