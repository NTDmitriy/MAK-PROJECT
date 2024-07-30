import { Container } from "@/components/ui/container/Container";
import { Section } from "@/components/ui/section/Section";
import { BlockTitle } from "@/components/ui/titles/titleBlock/BlockTitle";
import { FC } from "react";
import styles from "./OurPartners.module.css";


export const OurPartners: FC = () => {
    return (

        <Section>
            <Container>
            <BlockTitle
            leftSide={true}
            descrSideway="Познакомьтесь с компаниями, которые доверяют нашему маркетинговому агентству. Мы работаем с лидерами рынка и помогаем им достигать высоких результатов в digital маркетинге."
            
            >
                Наши Партнеры
            </BlockTitle>
            <div className={styles.container}>

            </div>
            </Container>
        </Section>
        
    )
}