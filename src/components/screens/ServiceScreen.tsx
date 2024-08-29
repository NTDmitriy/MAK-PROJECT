import { Hero } from "@/components/sections/hero/Hero";
import { THeroInfoService } from "@/interfaces/types/block/products.type";
import { TServiceScreen } from "@/interfaces/types/screens/screens.type";
import { FC, PropsWithChildren } from "react";
import { AllProductsService } from "../sections/allProductsService/AllProductsService";
import Faq from "../sections/faq/Faq";
import { Projects } from "../sections/projects/Projects";
import { Reviwes } from "../sections/reviwes/Reviwes";
import { SupplementaryDescr } from "../sections/supplementaryDescr/SupplementaryDescr";
import { WhyUsServices } from "../sections/whyUsServices/WhyUsServices";

interface IServiceScreen {
  content: TServiceScreen;
}

export const ServiceScreen: FC<PropsWithChildren<IServiceScreen>> = ({
  content,
}) => {
  return (
    <>
      <Hero
        basicContent={content.hero.basic}
        serviceContent={content.hero.info as THeroInfoService}
      />
			{content.supplementaryDescr && <SupplementaryDescr suppContent={content.supplementaryDescr}/>}
       <AllProductsService products={content.products} />
      <WhyUsServices />
      <Projects cases={content.projects} />
      <Reviwes reviwes={content.reviwes} />
      <Faq faq={content.faq} />
    </>
  );
};
