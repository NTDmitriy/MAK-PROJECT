import { TProductScreen } from "@/interfaces/types/screens/screens.type";
import { FC, PropsWithChildren } from "react";
import { DetailServices } from "../sections/detailServices/DetailServices";
import { Hero } from "../sections/hero/Hero";
import { HowWorks } from "../sections/howWorks/HowWorks";
import { IncludedInService } from "../sections/includedInService/IncludedInService";
import { Projects } from "../sections/projects/Projects";
import { Reviwes } from "../sections/reviwes/Reviwes";
import { SupplementaryDescr } from "../sections/supplementaryDescr/SupplementaryDescr";
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
        productContent={content.hero.infoProduct}
        serviceContent={content.hero.infoService}
        advertisementContent={content.hero.infoAdvertisement}
      />
      {content.supplementaryDescr && (<SupplementaryDescr suppContent={content.supplementaryDescr} />)}
      {content.detialServices && (<DetailServices detailContent={content.detialServices} />)}
      {content.includeService && ( <IncludedInService includedInService={content.includeService} />)}
      {content.howWorks && <HowWorks howWorksContent={content.howWorks} />}
      {content.whyUs && <WhyUs whyUsContent={content.whyUs} />}
      {content.projects && (<Projects cases={content.projects} formVisible={true} />)}
      {content.reviwes && <Reviwes reviwes={content.reviwes} />}
    </>
  );
};
