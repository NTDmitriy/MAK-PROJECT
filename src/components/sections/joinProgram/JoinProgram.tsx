import { Container } from "@/components/ui/container/Container";
import {
  FORM_TYPE,
  FormController,
} from "@/components/ui/forms/FormController";
import { Section } from "@/components/ui/section/Section";
import { TGenericElementProps } from "@/typing/elements.type";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import { PrimaryButton } from "../../ui/buttons/primaryButton/PrimaryButton";
import { Popup } from "../../ui/modals/popup/Popup";
import styles from "./JoinProgram.module.css";

export const JoinProgram: FC<PropsWithChildren<TGenericElementProps>> = ({
  className,
  ...rest
}) => {
  return (
    <Section className={clsx(styles.section, styles.inner)} {...rest}>
      <Container>
        <div className={styles.root}>
          <h5 className={styles.title}>
            Присоединяйтесь к партнерской программе от Make All Perfect
          </h5>
          <p className={styles.text}>
            Если у вас есть знакомые или партнеры, которым могут быть интересны
            наши маркетинговые услуги, зарабатывайте вместе с нами, рекомендуя
            наше агентство. Мы стремимся к долгосрочным и взаимовыгодным
            отношениям с нашими партнерами и всегда готовы предложить лучшие
            условия для сотрудничества
          </p>

          <div className={styles.btn__wrapper}>
            <Popup
              initComponent={<PrimaryButton>Стать партнером</PrimaryButton>}
              contentComponent={
                <FormController
                  formType={FORM_TYPE.COMPLEX_FORM}
                  title="СТАТЬ ПАРТНЕРОМ"
                  text="Оставьте свои контактные данные, и мы свяжемся с вами, чтобы обсудить условия взаимовыгодного сотрудничества. Рекомендуйте наши услуги своим клиентам, партнерам, друзьям и знакомым. Мы предлагаем прозрачные условия для долгосрочного партнерства, которое будет способствовать развитию вашего бизнеса и принесет стабильный доход."
                />
              }
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};
