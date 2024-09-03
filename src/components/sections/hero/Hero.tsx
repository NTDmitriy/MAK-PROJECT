import { Section } from "@/components/ui/section/Section";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import {
  THeroInfoAdvertisement,
  THeroInfoProduct,
  THeroInfoService,
  THeroInfoWebdev,
  type THeroBasic,
} from "@/interfaces/types/block/products.type";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./Hero.module.css";
import { HeroBasic } from "./blocks/heroBasic/HeroBasic";
import { HeroInfoAdvertisement } from "./blocks/heroInfoAdvertisement/HeroInfoAdvertisement";
import { HeroInfoProduct } from "./blocks/heroInfoProduct/HeroInfoProduct";
import { HeroInfoService } from "./blocks/heroInfoService/HeroInfoService";
import { HeroInfoWebdev } from "./blocks/heroInfoWebdev/HeroInfoWebdev";

interface IHero extends IGenericElementProps {
  basicContent: THeroBasic;
  productContent?: THeroInfoProduct;
  serviceContent?: THeroInfoService;
  advertisementContent?: THeroInfoAdvertisement[];
  webdewContent?: THeroInfoWebdev;
}

export const Hero: FC<PropsWithChildren<IHero>> = ({
  className,
  basicContent,
  serviceContent,
  productContent,
  advertisementContent,
  webdewContent,
  ...rest
}) => {
  return (
    <Section {...rest} className={clsx(styles.hero, className)}>
 
      {basicContent && <HeroBasic basicContent={basicContent} />}
      {productContent && <HeroInfoProduct info={productContent} />}
      {serviceContent && <HeroInfoService info={serviceContent} />}
      {advertisementContent && (
        <HeroInfoAdvertisement info={advertisementContent} />
      )}
      {webdewContent && <HeroInfoWebdev info={webdewContent} />}
    </Section>
  );
};
