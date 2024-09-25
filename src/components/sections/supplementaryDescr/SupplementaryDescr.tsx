import { Container } from "@/components/ui/container/Container";
import { Section } from "@/components/ui/section/Section";
import { TGenericElementProps } from "@/interfaces/elements.type";
import { TSupplementaryDescr } from "@/interfaces/types/block/products.type";
import { FC, PropsWithChildren } from "react";
import styles from "./SupplementaryDescr.module.css";

interface ISuplementaryDescr extends TGenericElementProps {
  suppContent: TSupplementaryDescr;
}

export const SupplementaryDescr: FC<PropsWithChildren<ISuplementaryDescr>> = ({
  suppContent,
  className,
  ...rest
}) => {
  const { title, image, descr } = suppContent;

  return (
    <Section className={className} {...rest}>
      <Container>
        <div className={styles.root}>
          <picture className={styles.img}>
            <source srcSet={`/images/services/${image}-small.webp`} media="(max-width: 768px)" />
            <img
              src={`/images/services/${image}-large.webp`}
              alt={title}
              className={styles.img}
            />
          </picture>

          <div className={styles.descr}>
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.text}>{descr}</p>
          </div>
        </div>
      </Container>
    </Section>
  );
};
