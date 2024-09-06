import { Container } from "@/components/ui/container/Container";
import { DynamicSvg, TSvgMapKeys } from "@/components/ui/dynamicSvg/DynamicSvg";
import { Section } from "@/components/ui/section/Section";
import { BlockTitle } from "@/components/ui/titles/titleBlock/BlockTitle";
import { SEO_DASHBOARD_PAGES } from "@/config/url-config/seo-pages.config";
import { SERVICES_DASHBOARD_PAGES } from "@/config/url-config/servises-pages.config";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";

import {
  FORM_TYPE,
  FormController,
} from "@/components/ui/forms/FormController";
import { MyTooltip } from "@/components/ui/tooltip/Tooltip";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import styles from "./OurServices.module.css";

export const OurServices: FC<PropsWithChildren<IGenericElementProps>> = ({
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
            Наши решения адаптированы под различные ниши и помогают
            <span className="accent"> эффективно привлекать клиентов</span> и
            повышать узнаваемость вашего бренда
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
                              className={styles.tooltip}
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
            <FormController formType={FORM_TYPE.FAQ_FORM} />
          </li>
        </ul>
      </Container>
    </Section>
  );
};
