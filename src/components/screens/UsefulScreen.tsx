import { TUsefulScreen } from "@/typing/screens.type";
import { FC, PropsWithChildren } from "react";
import { AboutPrev } from "../sections/aboutPrev/AboutPrev";
import { AboutUs } from "../sections/aboutUs/AboutUs";
import { AffiliateAvantages } from "../sections/affiliateAvantages/AffiliateAvantages";
import { AffiliatePreview } from "../sections/affiliatePreview/AffiliatePreview";
import { Blog } from "../sections/blog/Blog";
import { Cases } from "../sections/cases/Cases";
import { HeroUseful } from "../sections/heroUseful/HeroUseful";
import { HowAffiliateWork } from "../sections/howAffiliateWork/HowAffiliateWork";
import { JoinProgram } from "../sections/joinProgram/JoinProgram";
import { OurClients } from "../sections/ourClients/OurClients";
import { OurStatistic } from "../sections/ourStatistic/OurStatistic";
import { OurTeam } from "../sections/ourTeam/OurTeam";
import { ReviwesList } from "../sections/reviwesList/ReviwesList";
import { Vacancies } from "../sections/vacancies/Vacancies";
import { VacanciesPrev } from "../sections/vacanciesPrev/VacanciesPrev";
import { WhyUs } from "../sections/whyUs/WhyUs";


interface IUsefulScreen {
  content: TUsefulScreen;
}

export const UsefulScreen: FC<PropsWithChildren<IUsefulScreen>> = ({
  content,
}) => {

  return (
    <>
 
      {content.hero && (
        <HeroUseful
          basicContent={content.hero.basic}
          usefulInfo={content.hero.infoUseful}
          pathname={content.url} 
        />)}
      {content.howAffiliateWork && (<HowAffiliateWork howAffiliateWorkContent={content.howAffiliateWork} />)}
      {content.affiliateAvantages && <AffiliateAvantages />}
      {content.blog && <Blog isPreview={false} headline={false} />}
      {content.aboutUs && <AboutUs />}
      {content.ourStatistic && <OurStatistic />}
      {content.ourClients && <OurClients />}
      {content.reviwesList && <ReviwesList reviwes={content.reviwesList} />}
      {content.ourTeam && <OurTeam />}
      {content.projects && (<Cases cases={content.projects} formVisible={true} isPrev={false}/>)}
      {content.vacancies && <Vacancies vacancies={content.vacancies} />}
      {content.blogPrev && <Blog isPreview={true} headline={true} />}
      {content.vacanciesPrev && <VacanciesPrev />}
      {content.affiliatePrev && <AffiliatePreview />}
      {content.aboutPrev && <AboutPrev />}
      {content.partnerBenefits && (<WhyUs whyUsContent={content.partnerBenefits} />)}
      {content.joinProgram && <JoinProgram />}
    </>
  );
};
