"use client";

import { PrimaryButton } from "@/components/ui/buttons/primaryButton/PrimaryButton";
import { Container } from "@/components/ui/container/Container";
import { DynamicSvg } from "@/components/ui/dynamicSvg/DynamicSvg";
import {
  FORM_TYPE,
  FormController,
} from "@/components/ui/forms/FormController";
import { Popup } from "@/components/ui/modals/popup/Popup";
import { Section } from "@/components/ui/section/Section";
import { BlockTitle } from "@/components/ui/titles/titleBlock/BlockTitle";
import { TGenericElementProps } from "@/typing/elements.type";
import { TTariffs } from "@/typing/products.type";
import { isNumber } from "@/utils/isNumber";
import clsx from "clsx";
import { FC, PropsWithChildren, useState } from "react";
import { MyTooltip } from "../../ui/tooltip/Tooltip";
import styles from "./Tariffs.module.css";

interface ITariffs extends TGenericElementProps {
  tariffs: TTariffs;
}

export const Tariffs: FC<PropsWithChildren<ITariffs>> = ({ tariffs }) => {
  if (!tariffs) return null;

  const { blockTitle, blickTitleDescr, plans } = tariffs;
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <>
      {plans && (
        <Section>
          <BlockTitle
            leftSide={true}
            descrBottom={blickTitleDescr && blickTitleDescr}
          >
            {blockTitle
              ? blockTitle
              : "Тарифы и команда, работающая над вашим проектом"}
          </BlockTitle>

          <Container>
            <div className={styles.btn__tab__wrapper}>
              {plans.map((item, index) => (
                <button
                  className={clsx(
                    styles.btn,
                    activeTab === index && styles.active
                  )}
                  onClick={() => handleTabClick(index)}
                  inert={activeTab === index ? "" : undefined}
                >
                  {item.title}
                  {item.title === "ПРЕМИУМ" && (
                    <DynamicSvg name="IconShield" className={styles.shield} />
                  )}
                </button>
              ))}
            </div>

            <ul className={styles.tab__list}>
              {plans.map((plan, index) => (
                <li
                  key={index}
                  className={clsx(
                    styles.tab__list__item,
                    activeTab === index && styles.active
                  )}
                  inert={activeTab !== index ? "" : undefined}
                >
                  <div style={{ minHeight: "0" }}>
                    <div className={styles.tab__head}>
                      <p className={styles.head__descr}>{plan.description}</p>
                      <p className={styles.price}>
                        <DynamicSvg name="IconMoney" />
                        {isNumber(plan.price) ? (
                          <>
                            от {plan.price.toLocaleString("ru-RU")} &#8381;/мес
                          </>
                        ) : (
                          <>{plan.price}</>
                        )}
                      </p>
                      <p className={styles.team}>ПРОЕКТНАЯ КОМАНДА</p>

                      <Popup
                        initComponent={
                          <PrimaryButton className={styles.head__btn}>
                            Выбрать тариф
                          </PrimaryButton>
                        }
                        contentComponent={
                          <FormController
                            formType={FORM_TYPE.COMPLEX_FORM}
                            title={plan.title}
                          />
                        }
                      />
                    </div>

                    <ul className={styles.team__list}>
                      {plan.items &&
                        plan.items.map((item, index) => (
                          <li key={index} className={styles.team__item}>
                            {item.title && (
                              <div className={styles.team__item__title}>
                                <span className={styles.icon}>
                                  <DynamicSvg name="IconHuman" />
                                </span>
                                {item.title}
                                <MyTooltip
                                  side="left"
                                  id={`${index}`}
                                  className={styles.tooltip}
                                  text={item.description}
                                />
                              </div>
                            )}

                            {item.description && !item.title && (
                              <p className={styles.team__item__descr}>
                                {item.description}
                              </p>
                            )}
                          </li>
                        ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>

            <div className={styles.bottom__wrapper}>
              <div className={styles.bottom__descr}>
                <p className={styles.bottom__title}>
                  Не уверены, какой тариф выбрать?
                </p>
                <p className={styles.bottom__text}>
                  Запишитесь на консультацию, и наши специалисты помогут вам
                  подобрать оптимальный тариф для достижения ваших целей. Мы
                  ответим на все ваши вопросы и предложим лучшее решение для
                  вашего бизнеса.
                </p>
              </div>
              <Popup
                initComponent={
                  <PrimaryButton className={styles.bottom__btn}>
                    Записаться на консультацию
                  </PrimaryButton>
                }
                contentComponent={
                  <FormController
                    formType={FORM_TYPE.MAIN_FORM}
                    title="Не уверены, какой тариф выбрать?"
                    text="Запишитесь на консультацию, и наши специалисты помогут вам подобрать оптимальный тариф для достижения ваших целей. Мы ответим на все ваши вопросы и предложим лучшее решение для вашего бизнеса."
                  />
                }
              />
            </div>
          </Container>
        </Section>
      )}
    </>
  );
};
