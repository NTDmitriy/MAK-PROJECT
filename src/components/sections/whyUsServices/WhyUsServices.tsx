import { Container } from "@/components/ui/container/Container";
import { BlockTitle } from "@/components/ui/titles/titleBlock/BlockTitle";
import { FC } from "react";
import styles from "./WhyUsServices.module.css"
import { WhyUsIcon } from "@/components/ui/icons/genericIcons/WhyUsIcon";
import { WhyUsServicesIcon } from "@/components/ui/icons/genericIcons/WhyUsServicesIcon";

export const WhyUsServices: FC = () => {
    return (
        <Container>
            <BlockTitle
                leftSide={false}
                descrSideway=""
                background=""
                className={styles.whyUs__title}
            >
                Почему выбирают нас для продвижения
            </BlockTitle>

            <div className={styles.card_container}>
                <div className={styles.card}>
                    <div className={styles.title_container}>
                <span className={styles.after}><WhyUsServicesIcon /></span>
                    <h3 className={styles.title}>Опытная команда специалистов</h3>
                    </div>
                    
                    
                </div>
                <div className={styles.card}>
                    <div className={styles.title_container}>
                <span className={styles.after}><WhyUsServicesIcon /></span>
                    <h3 className={styles.title}>Индивидуальный подход к каждому проекту</h3>
                    </div>
                    
                    
                </div>
                <div className={styles.card}>
                    <div className={styles.title_container}>
                <span className={styles.after}><WhyUsServicesIcon /></span>
                    <h3 className={styles.title}>Прозрачность и честность</h3>
                    </div>
                    
                    
                </div>
                <div className={styles.card}>
                    <div className={styles.title_container}>
                <span className={styles.after}><WhyUsServicesIcon /></span>
                    <h3 className={styles.title}>Использование современных решений</h3>
                    </div>
                  
                    
                </div>
                <div className={styles.card}>
                    <div className={styles.title_container}>
                <span className={styles.after}><WhyUsServicesIcon /></span>
                    <h3 className={styles.title}>Высокая эффективность и результативность</h3>
                    </div>
                  
                    
                </div>
                <div className={styles.card}>
                    <div className={styles.title_container}>
                <span className={styles.after}><WhyUsServicesIcon /></span>
                    <h3 className={styles.title}>Ежедневная отчетность и подробная аналитика</h3>
                    </div>
                  
                    
                </div>
            </div>
        </Container>
    );
};
