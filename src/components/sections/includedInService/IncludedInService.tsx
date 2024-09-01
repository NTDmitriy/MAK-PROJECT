import { Container } from "@/components/ui/container/Container";
import {
  FORM_TYPE,
  FormController,
} from "@/components/ui/forms/FormController";
import { Section } from "@/components/ui/section/Section";
import { BlockTitle } from "@/components/ui/titles/titleBlock/BlockTitle";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import { TIncludedInService } from "@/interfaces/types/block/products.type";
import { FC, PropsWithChildren } from "react";
import { DynamicSvg } from "../../ui/dynamicSvg/DynamicSvg";
import styles from "./IncludedInService.module.css";

interface IIncludedInService extends IGenericElementProps {
  includedInService: TIncludedInService;
}

export const IncludedInService: FC<PropsWithChildren<IIncludedInService>> = ({
  className,
  includedInService,
  ...rest
}) => {
  const { items, blockTitle, blockTitleDescr } = includedInService;

  return (
    <>
      <Section className={className} {...rest}>
        <BlockTitle
          leftSide={true}
          descrBottom={blockTitleDescr && blockTitleDescr}
        >
          {blockTitle ? <>{blockTitle}</> : "Что выходит в услугу"}
        </BlockTitle>
        <Container>
          <div className={styles.root}>
            <ul className={styles.list}>
              {items &&
                items.map((item, index) => (
                  <li key={index} className={styles.item}>
                    <h5 className={styles.title}>
                      <DynamicSvg
                        name="IconArrayBlackBg"
                        className={styles.img}
                      />
                      {item.title}
                    </h5>
                    <p className={styles.descr}>{item.description}</p>
                  </li>
                ))}
            </ul>
            <FormController formType={FORM_TYPE.MAIN_FORM} />
          </div>
        </Container>
      </Section>
    </>
  );
};
