import { Container } from "@/components/ui/container/Container"
import { Section } from "@/components/ui/section/Section"
import { IGenericElementProps } from "@/interfaces/elements.interface"
import { FC, PropsWithChildren } from "react"
import styles from './Frontend-dev-case.module.css'

export const Frontend_dev_case: FC<PropsWithChildren<IGenericElementProps>> = ({
    className,
    ...rest
}
) => {
    return (
    <Section className={className} {...rest}>
    <Container>
    <div className={styles.content_hero}>
        <h2 className={styles.hero_title}>Увеличение продаж магазина женской одежды на Wildberries</h2>
        <p className={styles.text}>Проект по продвижению магазина женской одежды на платформе Wildberries через рекламу в ВКонтакте и Яндекс.</p>
    </div>
    </Container>
    </Section>
    )
}