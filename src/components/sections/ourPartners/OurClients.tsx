import { Container } from "@/components/ui/container/Container";
import { Section } from "@/components/ui/section/Section";
import { BlockTitle } from "@/components/ui/titles/titleBlock/BlockTitle";
import { FC } from "react";
import styles from "./OurClients.module.css";


const icons = [
    {image:"/images/client1.png"},
    {image:"/images/client2.png"},
    {image:"/images/client3.png"},
    {image:"/images/client4.png"},
    {image:"/images/client5.png"},
    {image:"/images/client6.png"},
    {image:"/images/client7.png"},
    {image:"/images/client8.png"},
]

export const OurClients: FC = () => {
    return (

        <Section className={styles.ourclients}>
            <Container>
            <BlockTitle
            leftSide={true}
            descrSideway="Познакомьтесь с компаниями, которые доверяют нашему маркетинговому агентству. Мы работаем с лидерами рынка и помогаем им достигать высоких результатов в digital маркетинге."
            
            >
                Наши Партнеры
            </BlockTitle>
            <div className={styles.container}>
                {icons.map(icon => 
                    <img src={icon.image} className={styles.image}></img>
                   
                )}
            </div>
            <p className={styles.descr}>И еще более тысячи довольных клиентов, которые доверяют нашему опыту и профессионализму, ежедневно получая результаты от наших маркетинговых стратегий</p>
           
            </Container>
        </Section>
        
    )
}