import { AllProductsService } from "@/components/sections/allProductsService/AllProductsService";
import Faq from "@/components/sections/faq/Faq";
import { Hero } from "@/components/sections/hero/Hero";
import { Projects } from "@/components/sections/projects/Projects";
import { Reviwes } from "@/components/sections/reviwes/Reviwes";
import { WhyUsServices } from "@/components/sections/whyUsServices/WhyUsServices";
import { THeroInfoService } from "@/interfaces/types/block/products.type";
import { TServiceScreen } from "@/interfaces/types/screens/screens.type";
import { FC, PropsWithChildren } from "react";

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
      <AllProductsService products={content.products} />
      <WhyUsServices />
      <Projects cases={content.projects} />
      <Reviwes reviwes={content.reviwes} />
      <Faq faq={content.faq} />
    </>
  );
};
