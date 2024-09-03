import { TScreen } from "@/interfaces/types/screens/screens.type";
import { FC, PropsWithChildren } from "react";

import { AllProductsService } from "../sections/allProductsService/AllProductsService";
import Faq from "../sections/faq/Faq";
import { Hero } from "../sections/hero/Hero";
import { HowWorks } from "../sections/howWorks/HowWorks";
import { Projects } from "../sections/projects/Projects";
import { Reviwes } from "../sections/reviwes/Reviwes";
import { SiteServices } from "../sections/siteServices/SiteServices";
import { SupplementaryDescr } from "../sections/supplementaryDescr/SupplementaryDescr";
import { WhyUs } from "../sections/whyUs/WhyUs";
import { WhyUsChecklist } from "../sections/whyUsChecklist/WhyUsChecklist";
import { WhyUsSites } from "../sections/whyUsSites/whyUsSites";
import { WorkStages } from "../sections/workStages/WorkStages";
import { Breadcrumbs } from "../ui/breadcrumbs/Breadcrumbs";

interface IServiceScreen {
  content: TScreen;
}

export const ServiceScreen: FC<PropsWithChildren<IServiceScreen>> = ({
  content,
}) => {

  return (
    <>
      <Breadcrumbs pathname={content.url}/>
      <Hero
        basicContent={content.hero.basic}
        productContent={content.hero.infoProduct}
        serviceContent={content.hero.infoService}
        advertisementContent={content.hero.infoAdvertisement}
        webdewContent={content.hero.infoWebdev}
      />
			{content.supplementaryDescr && <SupplementaryDescr suppContent={content.supplementaryDescr} />}

			{content.products && <AllProductsService productsConent={content.products} />}
			{content.siteServices && <SiteServices />}
      {content.howWorks && <HowWorks howWorksContent={content.howWorks} />}
      {content.workStages && <WorkStages workStagesContent={content.workStages} />}
			{content.whyUsChecklict && <WhyUsChecklist />}
			{content.whyUsSites && <WhyUsSites />}
      {content.whyUs && <WhyUs whyUsContent={content.whyUs} />}
      {content.projects && <Projects cases={content.projects} />}
			{content.reviwes && <Reviwes reviwes={content.reviwes} />}
			{content.faq && <Faq faq={content.faq} />}
    </>
  );
};
