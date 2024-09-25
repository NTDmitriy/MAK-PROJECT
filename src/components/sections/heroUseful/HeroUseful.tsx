import { Section } from "@/components/ui/section/Section";
import { TGenericElementProps } from "@/interfaces/elements.type";
import {
  THeroInfo,
  type THeroBasic
} from "@/interfaces/types/block/products.type";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./HeroUseful.module.css";
import { HeroBasic } from "./blocks/heroBasicUseful/HeroBasicUseful";
import { HeroInfoUseful } from "./blocks/heroInfoUseful/HeroInfoUseful";

interface IHero extends TGenericElementProps {
  basicContent: THeroBasic;
  usefulInfo?: THeroInfo;
}

export const HeroUseful: FC<PropsWithChildren<IHero>> = ({
  className,
  basicContent,
  usefulInfo,
  ...rest
}) => {
  return (
    <Section {...rest} className={clsx(styles.hero, className)}>
      {basicContent && <HeroBasic basicContent={basicContent} />}
      {usefulInfo && <HeroInfoUseful info={usefulInfo} />}
    </Section>
  );
};
