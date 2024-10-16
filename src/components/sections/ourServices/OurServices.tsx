import { Container } from "@/components/ui/container/Container";
import { DynamicSvg, TSvgMapKeys } from "@/components/ui/dynamicSvg/DynamicSvg";
import { Section } from "@/components/ui/section/Section";
import { BlockTitle } from "@/components/ui/titles/titleBlock/BlockTitle";
import { SEO_DASHBOARD_PAGES } from "@/dashboard/seo.dashboard";
import { SERVICES_DASHBOARD_PAGES } from "@/dashboard/services.dashboard";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";

import {
  FORM_TYPE,
  FormController,
} from "@/components/ui/forms/FormController";
import { MyTooltip } from "@/components/ui/tooltip/Tooltip";
import { TGenericElementProps } from "@/typing/elements.type";
import clsx from "clsx";
import styles from "./OurServices.module.css";

export const OurServices: FC<PropsWithChildren<TGenericElementProps>> = ({
  className,
  ...rest
}) => {
  const services = SERVICES_DASHBOARD_PAGES.SERVICES;
  const { childrens } = services;

  return (
    <Section className={className} {...rest}>
      <BlockTitle
        leftSide={true}
        background="НАШИ УСЛУГИ"
        descrSideway={
          <>
            Наши решения адаптированы под различные ниши и помогают
            <span className={styles.accent}>
              {" "}
              эффективно привлекать клиентов
            </span>{" "}
            и повышать узнаваемость вашего бренда
          </>
        }
      >
        Наши услуги
      </BlockTitle>
      <Container>
        <ul className={styles.list}>
          {childrens &&
            childrens.map((service, index) => (
              <li key={index} className={styles.card}>
                <Link href={service.url} className={styles.head__link}>
                  <span className={styles.link__border}>{service.name}</span>

                  <div className={styles.round_icon}></div>
                </Link>
                <div className={styles.product__list__wrapper}>
                  <ul className={styles.product__list}>
                    {service.childrens.map((subService, index) => (
                      <li key={index}>
                        <Link href={subService.url} className={styles.link}>
                          <span className={styles.link__border}>
                            {subService.smallName
                              ? subService.smallName
                              : subService.name}
                          </span>

                          {(subService.url ===
                            SEO_DASHBOARD_PAGES.SEO_INFLUENCE.url ||
                            subService.url ===
                              SEO_DASHBOARD_PAGES.SEO_POSEVY.url) && (
                            <MyTooltip
                              side="right"
                              className={clsx(styles.tooltip, styles.inner)}
                              text={subService.description}
                            />
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {service.icon && (
                    <DynamicSvg
                      name={service.icon as TSvgMapKeys}
                      className={styles.icon}
                    />
                  )}
                </div>
              </li>
            ))}
          <li className={styles.form}>
            <FormController
              formType={FORM_TYPE.FAQ_FORM}
              title="Не нашли подходящую услугу?"
              text={
                <>
                  Оставьте свои контактные данные, и наш менеджер предложит
                  идеальные решения для вашего бизнеса.{" "}
                  <span style={{color:'#FF7A00'}}> Мы найдем то, что вам нужно!</span>
                </>
              }
            />
          </li>
        </ul>
      </Container>
    </Section>
  );
};
