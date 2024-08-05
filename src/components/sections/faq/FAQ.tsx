'use client'
import { useState, useEffect, FC } from 'react';
import styles from './FAQ.module.css';
import { IconFAQ } from '@/components/ui/icons/usefulIcons/IconFAQ';
import { Container } from '@/components/ui/container/Container';
import { Section } from '@/components/ui/section/Section';
import { BlockTitle } from '@/components/ui/titles/titleBlock/BlockTitle';

interface AccordionItemProps {
    title: string;
    descr: string;
    isOpenByDefault?: boolean;
}

interface AccordionProps {
    items: AccordionItemProps[];
}

const AccordionItem: FC<AccordionItemProps> = ({ title, descr, isOpenByDefault = false }) => {
    const [isOpen, setIsOpen] = useState(isOpenByDefault);

    useEffect(() => {
        setIsOpen(isOpenByDefault);
    }, [isOpenByDefault]);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.accordionItem} onClick={toggleAccordion}>
            <div className={styles.accordionHeader} >
                <h3 className={styles.title}>{title}</h3>
                <span className={`${styles.icon} ${isOpen ? styles.rotate : ''}`}><IconFAQ /></span>
            </div>
            {isOpen && (
                <div className={styles.accordionContent}>
                    <p>{descr}</p>
                </div>
            )}
        </div>
    );
};

const Accordion: FC<AccordionProps> = ({ items }) => {
    return (
        <Section className={styles.section}>
            
            <Container>
            <BlockTitle
                leftSide={false}
                descrSideway="Ответы на самые распространенные вопросы наших клиентов"
                >Часто задаваемые вопросы</BlockTitle>
                <div className={styles.container}>
            <div className={styles.accordion}>
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    descr={item.descr}
                    isOpenByDefault={index === 0}
                />
            ))}
            </div>
            <div className={styles.form}></div>
            </div>
            </Container>
        </Section>
        
    );
};

export default Accordion;
