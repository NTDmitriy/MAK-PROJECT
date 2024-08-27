import { THeroInfo } from "@/interfaces/types/block/products.type";
import { TProductScreen } from "@/interfaces/types/screens/screens.type";
import { FC, PropsWithChildren } from "react";
import { DetailServices } from "../sections/detailServices/DetailServices";
import { Hero } from "../sections/hero/Hero";
import { HowWorks } from "../sections/howWorks/HowWorks";
import { Projects } from "../sections/projects/Projects";
import { Reviwes } from "../sections/reviwes/Reviwes";
import { WhyUs } from "../sections/whyUs/WhyUs";

interface IProductScreen {
  content: TProductScreen;
}
export const ProductScreen: FC<PropsWithChildren<IProductScreen>> = ({
  content,
}) => {
  return (
    <>
      <Hero
        basicContent={content.hero.basic}
        productContent={content.hero.info as THeroInfo}
      />
      <DetailServices detailContent={content.detialServices} />
      <HowWorks />
      <WhyUs />
      <Projects cases={content.projects} formVisible={true}/>
    
      <Reviwes reviwes={content.reviwes} />
    </>
  );
};
