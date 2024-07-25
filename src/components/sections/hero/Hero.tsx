import { Section } from "@/components/ui/section/Section";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import { THeroInfo, type THeroBasic } from "@/interfaces/types/pageTypes/products.type";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./Hero.module.css";
import { HeroBasic } from "./blocks/heroBasic/HeroBasic";
import { HeroInfoProduct } from "./blocks/heroInfoProduct/HeroInfoProduct";

interface IHero extends IGenericElementProps {
  basicContent: THeroBasic;
  productContent?: THeroInfo;
  serviceContent?: Record<string, any>;
}

export const Hero: FC<PropsWithChildren<IHero>> = ({
  className,
  basicContent,
  serviceContent,
  productContent,
  ...rest
}) => {
  return (
    <Section {...rest} className={clsx(styles.hero, className)}>
      {basicContent && <HeroBasic basicContent={basicContent} />}
      {productContent && <HeroInfoProduct infoContent={productContent} />}

      {/*
      {serviceContent && <HeroInfoService info={serviceContent} />} */}
    </Section>
  );
};
