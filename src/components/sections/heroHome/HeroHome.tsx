import { Section } from "@/components/ui/section/Section";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./HeroHome.module.css";
import { HeroBasic } from "./blocks/heroBasic/HeroBasic";
import { HeroInfo } from "./blocks/heroInfo/HeroInfo";

export const HeroHome: FC<PropsWithChildren<IGenericElementProps>> = ({
  className,
  ...rest
}) => {
  return (
    <Section {...rest} className={clsx(styles.hero, className)}>
      <HeroBasic />
      <HeroInfo />
      
    </Section>
  );
};
