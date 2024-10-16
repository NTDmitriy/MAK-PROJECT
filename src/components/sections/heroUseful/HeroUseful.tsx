import { Section } from "@/components/ui/section/Section";
import { TGenericElementProps } from "@/typing/elements.type";
import {
  THeroInfo,
  type THeroBasic
} from "@/typing/products.type";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./HeroUseful.module.css";
import { HeroBasic } from "./blocks/heroBasicUseful/HeroBasicUseful";
import { HeroInfoUseful } from "./blocks/heroInfoUseful/HeroInfoUseful";

interface IHero extends TGenericElementProps {
  basicContent: THeroBasic;
  usefulInfo?: THeroInfo;
  pathname?: string;
}

export const HeroUseful: FC<PropsWithChildren<IHero>> = ({
  className,
  basicContent,
  usefulInfo,
  pathname,
  ...rest
}) => {
  return (
    <Section {...rest} className={clsx(styles.hero, styles.inner, className)}>
      {basicContent && <HeroBasic basicContent={basicContent}  pathname={pathname} />}
      {usefulInfo && <HeroInfoUseful info={usefulInfo} />}
    </Section>
  );
};
