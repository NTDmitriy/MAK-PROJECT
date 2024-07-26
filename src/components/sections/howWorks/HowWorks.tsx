import { Container } from "@/components/ui/container/Container";
import { HowWorksIcon } from "@/components/ui/icons/genericIcons/HowWorksIcon";
import { BlockTitle } from "@/components/ui/titles/titleBlock/BlockTitle";
import { FC } from "react";
import styles from "./HowWorks.module.css";

export const HowWorks: FC = () => {
    return (
        <Container>
            <BlockTitle
                leftSide={false}
                descrSideway=""
                background=""
                className={styles.howWorks__title}
            >
                Почему нас выбирают
            </BlockTitle>

            <div className={styles.card_container}>
                <div className={styles.card}>
                    <HowWorksIcon />
                    <h3 className={styles.card_title}>Опыт и профессионализм</h3>
                    <p className={styles.card_text}>Наши специалисты <span className={styles.highlightedText}>имеют богатый опыт работы</span> с онлайн-школами и знают, как достичь максимальных результатов.</p>
                </div>
                <div className={styles.card}>
                    <HowWorksIcon />
                    <h3 className={styles.card_title}>Индивидуальный подход</h3>
                    <p className={styles.card_text}>Мы разрабатываем <span className={styles.highlightedText}>уникальные стратегии</span> для каждого клиента, учитывая все особенности и потребности бизнеса.</p>
                </div>
                <div className={styles.card}>
                    <HowWorksIcon />
                    <h3 className={styles.card_title}>Прозрачность и отчетность</h3>
                    <p className={styles.card_text}><span className={styles.highlightedText}>Вы всегда будете в курсе</span> того, как идут дела с вашими кампаниями, благодаря регулярным отчетам и открытой коммуникации.</p>
                </div>
                <div className={styles.card}>
                    <HowWorksIcon />
                    <h3 className={styles.card_title}>Комплексный подход</h3>
                    <p className={styles.card_text}>Мы охватываем <span className={styles.highlightedText}>все аспекты интернет-маркетинга</span>, чтобы обеспечить всестороннее продвижение вашей онлайн-школы.</p>
                </div>
            </div>
        </Container>
    );
};
