import { Section } from "@/components/ui/section/Section";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import {
	THeroInfo,
	THeroInfoService,
	type THeroBasic,
} from "@/interfaces/types/block/products.type";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./Hero.module.css";
import { HeroBasic } from "./blocks/heroBasic/HeroBasic";
import { HeroInfoProduct } from "./blocks/heroInfoProduct/HeroInfoProduct";
import { HeroInfoService } from "./blocks/heroInfoService/HeroInfoService";

interface IHero extends IGenericElementProps {
  basicContent: THeroBasic;
  productContent?: THeroInfo;
  serviceContent?: THeroInfoService;
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
      {productContent && <HeroInfoProduct info={productContent} />}
      {serviceContent && <HeroInfoService info={serviceContent} />}
    </Section>
  );
};
