import { Container } from "@/components/ui/container/Container";
import {
  FORM_TYPE,
  FormController,
} from "@/components/ui/forms/FormController";
import { Section } from "@/components/ui/section/Section";
import { BlockTitle } from "@/components/ui/titles/titleBlock/BlockTitle";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import { TAllSiteTypes } from "@/interfaces/types/block/products.type";
import { FC, PropsWithChildren } from "react";
import { DynamicSvg } from "../../ui/dynamicSvg/DynamicSvg";
import styles from "./SiteTypes.module.css";

interface IAllSiteTypes extends IGenericElementProps {
  productsConent: TAllSiteTypes;
}

export const AllSiteTypes: FC<PropsWithChildren<IAllSiteTypes>> = ({
  className,
  productsConent,
  ...rest
}) => {
  const { items, formTitle, formDescr } = productsConent;

  const procuctItems = [...items].slice(0, -1);

  return (
    <>
      {items && (
        <Section className={className} {...rest}>
          <BlockTitle leftSide={true}>
            Типы сайтов, с которыми мы работаем:
          </BlockTitle>
          <Container>
            <ul className={styles.list}>
              {procuctItems &&
                procuctItems.map((item, index) => (
                  <li key={index} className={styles.item}>
                    <img
                      src={`/images/services/${item.image}.webp`}
                      className={styles.img}
                      alt={item.name}
                    />

                    <div className={styles.descr}>
                      <div className={styles.head}>
                        <h5 className={styles.title}>{item.name}</h5>
                        <p className={styles.deadline}>
                          <DynamicSvg name={"IconDeadline"} />
                          {item.deadline}
                        </p>
                      </div>
                      <p className={styles.text}>
                        {item.descriptionSmall && item.descriptionSmall}
                      </p>
                    </div>
                  </li>
                ))}
            </ul>
            <FormController
              formType={FORM_TYPE.MAIN_FORM}
              title={formTitle && formTitle}
              text={formDescr && formDescr}
            />
          </Container>
        </Section>
      )}
    </>
  );
};
