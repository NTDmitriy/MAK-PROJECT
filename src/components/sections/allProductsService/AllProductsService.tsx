import { PrimaryButton } from "@/components/ui/buttons/primaryButton/PrimaryButton";
import { Container } from "@/components/ui/container/Container";
import { DynamicSvg } from "@/components/ui/dynamicSvg/DynamicSvg";
import {
  FORM_TYPE,
  FormController,
} from "@/components/ui/forms/FormController";
import { PrimaryLinkButton } from "@/components/ui/links/primaryLinkButton/PrimaryLinkButton";
import { Popup } from "@/components/ui/modals/popup/Popup";
import { Section } from "@/components/ui/section/Section";
import { BlockTitle } from "@/components/ui/titles/titleBlock/BlockTitle";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import { TServiceProducts } from "@/interfaces/types/block/products.type";
import { isNumber } from "@/utils/isNumber";
import { FC, PropsWithChildren } from "react";
import styles from "./AllProductsService.module.css";

interface IAllProductsService extends IGenericElementProps {
  productsConent: TServiceProducts;
  formVisible?: boolean;
}

export const AllProductsService: FC<PropsWithChildren<IAllProductsService>> = ({
  className,
  productsConent,
  formVisible = false,
  ...rest
}) => {
  const { blockTitle, blockTitleDescr, formTitle, formDescr, items } =
    productsConent;

  return (
    <>
      {productsConent && (
        <Section className={className} {...rest}>
          <BlockTitle
            leftSide={true}
            descrBottom={blockTitleDescr && blockTitleDescr}
          >
            {blockTitle && blockTitle}
          </BlockTitle>
          <Container>
            <ul className={styles.list}>
              {items &&
                items.map((item, index) => (
                  <li key={index} className={styles.item}>
                    <img
                      className={styles.img}
                      src={`/images/services/${item.image}.webp`}
                      alt={item.name}
                      title={item.name}
                    />

                    <div className={styles.descr}>
                      {item.name && (
                        <h4 className={styles.title}>{item.name}</h4>
                      )}
                      <div className={styles.prev}>
                        {item.deadline && (
                          <p className={styles.accent}>
                            <DynamicSvg name="IconClock" />
                            {item.deadline}
                          </p>
                        )}

                        {item.priceFrom && (
                          <p className={styles.accent}>
                            <DynamicSvg name="IconMoney" />
                            {isNumber(item.priceFrom) ? (
                              <>
                                от {item.priceFrom.toLocaleString("ru-RU")}{" "}
                                &#8381;
                              </>
                            ) : (
                              <>{item.priceFrom}</>
                            )}
                          </p>
                        )}
                      </div>

                      {item.description && (
                        <p className={styles.text}>
                          {item.description && item.description}
                        </p>
                      )}
                      {item.buttonText && (
                        <Popup
                          initComponent={
                            <PrimaryButton>
                              {item.buttonText ? (
                                <>{item.buttonText}</>
                              ) : (
                                <>Узнать подробнее</>
                              )}
                            </PrimaryButton>
                          }
                          contentComponent={
                            <FormController
                              formType={FORM_TYPE.COMPLEX_FORM}
                              title={item.buttonText}
                            />
                          }
                        />
                      )}
                      {item.url && (
                        <PrimaryLinkButton href={item.url}>
                          Узнать подробнее
                        </PrimaryLinkButton>
                      )}
                    </div>
                  </li>
                ))}
            </ul>

            {(formTitle || formVisible) && (
              <FormController
                formType={FORM_TYPE.MAIN_FORM}
                title={formTitle}
              />
            )}
          </Container>
        </Section>
      )}
    </>
  );
};
