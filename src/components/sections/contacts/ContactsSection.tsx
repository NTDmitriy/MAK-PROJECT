'use client'

import { IGenericElementProps } from "@/interfaces/elements.interface";
import clsx from "clsx";
import { FC, PropsWithChildren, useState } from "react";
import styles from './ContactsSection.module.css';
import { Section } from "@/components/ui/section/Section";

import CopyIcon from '@/assets/svg/copy.svg';
import { CONTACTS_PUBLIC } from "@/config/contact.config";


import IconPhone from '@/assets/svg/iconPhone.svg';
import IconEMail from '@/assets/svg/iconEMail.svg';
import IconDeadline from '@/assets/svg/iconDeadline.svg';
import { Container } from "@/components/ui/container/Container";
import { SocialLink } from "@/components/ui/links/socialLink/SocialLink";
import { DynamicSvg } from "@/components/ui/dynamicSvg/DynamicSvg";
import { FORM_TYPE, FormController } from "@/components/ui/forms/FormController";

export const ContactsSection: FC<PropsWithChildren<IGenericElementProps>> = (props) => {
    const [copied, setCopied] = useState<string | null>(null);
    const [visibleIcon, setVisibleIcon] = useState<string | null>(null);

    const handleCopy = (text: string, id: string) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setCopied(text);
                setVisibleIcon(id); // Отображаем иконку только для того элемента, который был кликнут
                setTimeout(() => setVisibleIcon(null), 2000); // Скрываем иконку через 2 секунды
            })
            .catch(err => console.error("Failed to copy text: ", err));
    };
    return (
        <Section {...props} className={clsx(styles.contacts, props.className)}>
            <Container>
                <div className={styles.content}>
                    <div className={styles.cards_wrapper}>
                    <div className={styles.card}>
                <h2 className={styles.title}>Реквизиты</h2>

                <p
                    className={styles.text}
                    onClick={() => handleCopy(`${CONTACTS_PUBLIC.LEGAL_ENTRY_TYPE} ${CONTACTS_PUBLIC.LEGAL_ENTRY}`, 'legal')}
                >
                    <span className={styles.span}>Юр. лицо:</span> {CONTACTS_PUBLIC.LEGAL_ENTRY_TYPE} {CONTACTS_PUBLIC.LEGAL_ENTRY}
                    <CopyIcon className={clsx(styles.svg_icon, visibleIcon === 'legal' && styles.visible)} />
                </p>

                <p
                    className={styles.text}
                    onClick={() => handleCopy(CONTACTS_PUBLIC.OGRN, 'ogrn')}
                >
                    <span className={styles.span}>ОГРН:</span> {CONTACTS_PUBLIC.OGRN}
                    <CopyIcon className={clsx(styles.svg_icon, visibleIcon === 'ogrn' && styles.visible)} />
                </p>

                <p
                    className={styles.text}
                    onClick={() => handleCopy(CONTACTS_PUBLIC.INN, 'inn')}
                >
                    <span className={styles.span}>ИНН:</span> {CONTACTS_PUBLIC.INN}
                    <CopyIcon className={clsx(styles.svg_icon, visibleIcon === 'inn' && styles.visible)} />
                </p>

                <p
                    className={styles.text}
                    onClick={() => handleCopy(CONTACTS_PUBLIC.ADDRESS, 'address')}
                >
                    <span className={styles.span}>Адрес:</span> {CONTACTS_PUBLIC.ADDRESS}
                    <CopyIcon className={clsx(styles.svg_icon, visibleIcon === 'address' && styles.visible)} />
                </p>
            </div>

                        <div className={styles.card} >
                            <h2 className={styles.title}>НАШИ КОНТАКТЫ</h2>

                            <div className={styles.link}><IconEMail className={styles.svg} /><a className={styles.text} href={`mailto:${CONTACTS_PUBLIC.EMAIL}`}>{CONTACTS_PUBLIC.EMAIL}</a></div>
                            <div className={styles.link}><IconPhone className={styles.svg} /> <a className={styles.text} href={`tel:${CONTACTS_PUBLIC.PHONE}`}>{CONTACTS_PUBLIC.PHONE}</a></div>
                            <div className={styles.link}><IconDeadline className={styles.svg} /><p className={clsx(styles.text, styles.text_nopointer)}>Пн-Пт, с 9:00 до 18:00 (МСК)</p></div>
                        </div>

                        <div className={styles.card} >
                            <h2 className={styles.title}>СОЦИАЛЬНЫЕ СЕТИ</h2>
                            <div className={styles.social__btns}>
                                <SocialLink
                                    className={styles.btn}
                                    icon={<DynamicSvg name="IconTelegram" />}
                                    href={CONTACTS_PUBLIC.TELEGRAM_PUBLIC}
                                />
                                <SocialLink
                                    className={styles.btn}
                                    icon={<DynamicSvg name="IconVk" />}
                                    href={CONTACTS_PUBLIC.VK}
                                />
                                <SocialLink
                                    className={styles.btn}
                                    icon={<DynamicSvg name="IconDzen" />}
                                    href={CONTACTS_PUBLIC.DZEN}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={styles.form}>
                        <FormController
                            formType={FORM_TYPE.FAQ_FORM}
                        />
                    </div>
                </div>
            </Container>
        </Section>
    );
}
