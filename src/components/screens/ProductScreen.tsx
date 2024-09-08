import { TScreen } from "@/interfaces/types/screens/screens.type";
import { FC, PropsWithChildren } from "react";
import { DetailServices } from "../sections/detailServices/DetailServices";
import Faq from "../sections/faq/Faq";
import { Hero } from "../sections/hero/Hero";
import { HowWorks } from "../sections/howWorks/HowWorks";
import { IncludedInService } from "../sections/includedInService/IncludedInService";
import { MaybeInteresting } from "../sections/maybeInteresting/MaybeInteresting";
import { Projects } from "../sections/projects/Projects";
import { ProjectTeam } from "../sections/projectTeam/ProjectTeam";
import { Reviwes } from "../sections/reviwes/Reviwes";
import { AllSiteTypes } from "../sections/siteTypes/SiteTypes";
import { SuitableFor } from "../sections/suitableFor/SuitableFor";
import { SupplementaryDescr } from "../sections/supplementaryDescr/SupplementaryDescr";
import { Tariffs } from "../sections/tariffs/Tariffs";
import { TechnologyStack } from "../sections/technologyStack/TechnologyStack";
import { WhyUs } from "../sections/whyUs/WhyUs";
import { WorkStages } from "../sections/workStages/WorkStages";
import { Breadcrumbs } from "../ui/breadcrumbs/Breadcrumbs";

interface IProductScreen {
  content: TScreen;
}
export const ProductScreen: FC<PropsWithChildren<IProductScreen>> = ({
  content,
}) => {

  return (
    <>
      {content.url && <Breadcrumbs pathname={content.url} />}  
      <Hero
        basicContent={content.hero.basic}
        productContent={content.hero.infoProduct}
        serviceContent={content.hero.infoService}
        advertisementContent={content.hero.infoAdvertisement}
        webdewContent={content.hero.infoWebdev}
      />
      {content.supplementaryDescr && <SupplementaryDescr suppContent={content.supplementaryDescr} />}
      {content.suitableFor && <SuitableFor suitableForContent={content.suitableFor} />}
      {content.allSiteTypes && <AllSiteTypes productsConent={content.allSiteTypes} />}
      {content.projectTeam && <ProjectTeam projectTeamContent={content.projectTeam} />}
      {content.technologyStack && <TechnologyStack />}
      {content.workStages && <WorkStages workStagesContent={content.workStages} />}
      {content.detialServices && <DetailServices detailContent={content.detialServices} />}
      {content.includeService && <IncludedInService includedInService={content.includeService} />}
      {content.tariffs && <Tariffs tariffs={content.tariffs} />}
      {content.howWorks && <HowWorks howWorksContent={content.howWorks} />}
      {content.whyUs && <WhyUs whyUsContent={content.whyUs} />}
      {content.projects && <Projects cases={content.projects} formVisible={true} />}
      {content.reviwes && <Reviwes reviwes={content.reviwes} />}
      {content.faq && <Faq faq={content.faq} />}
      {content.url && <MaybeInteresting pathname={content.url} />} 

    </>
  );
};
