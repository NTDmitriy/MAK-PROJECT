import { Container } from "@/components/ui/container/Container";
import { FORM_TYPE, FormController } from "@/components/ui/forms/FormController";
import { PrimaryLinkButton } from "@/components/ui/links/primaryLinkButton/PrimaryLinkButton";
import { Section } from "@/components/ui/section/Section";
import { BlockTitle } from "@/components/ui/titles/titleBlock/BlockTitle";
import { IDashboardItem } from "@/config/url-config/all-pages.config";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import { FC, PropsWithChildren } from "react";
import styles from "./AllProductsService.module.css";

interface IAllProductsService extends IGenericElementProps {
  products: IDashboardItem;
}

export const AllProductsService: FC<PropsWithChildren<IAllProductsService>> = ({
  className,
  products,
  ...rest
}) => {
  const { childrens } = products;

  return (
    <>
      {products && (
        <Section className={className} {...rest}>
            <BlockTitle
              leftSide={true}
              descrBottom={
                <p className={styles.title__descr}>
                  Мы предлагаем{" "}
                  <span className={styles.accent}>комплексное продвижение</span> для
                  различных ниш и сфер деятельности. Выберите подходящее решение
                  для вашего бизнеса.
                </p>
              }
            >
              Наши услуги по продвижению
            </BlockTitle>
          <Container>
            <ul className={styles.list}>
              {childrens &&
                childrens.map((item, index) => (
                  <li key={index} className={styles.item}>
                    <picture>
                      <source
                        type="image/webp"
                        srcSet={`/images/services/${item.image}.webp`}
                      />
                      <img
                        className={styles.img}
                        src={`/images/services/${item.image}.jpg`}
                        alt={item.name}
                        title={item.name}
                      />
                    </picture>
                    <div className={styles.descr}>
                      {item.name && (
                        <h4 className={styles.title}>{item.name}</h4>
                      )}
                      {item.description && (
                        <p className={styles.text}>{item.description}</p>
                      )}
                      <PrimaryLinkButton href={`${item.url}`}>
                        Подробнее об услуге
                      </PrimaryLinkButton>
                    </div>
                  </li>
                ))}
            </ul>

            <FormController formType={FORM_TYPE.MAIN_FORM}/>
          </Container>
        </Section>
      )}
    </>
  );
};
