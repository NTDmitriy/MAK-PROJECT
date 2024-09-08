import { TUsefulScreen } from "@/interfaces/types/screens/screens.type";
import { FC, PropsWithChildren } from "react";
import { AboutPrev } from "../sections/aboutPrev/AboutPrev";
import { AboutUs } from "../sections/aboutUs/AboutUs";
import { AffiliatePreview } from "../sections/affiliatePreview/AffiliatePreview";
import { Blog } from "../sections/blog/Blog";
import { HeroUseful } from "../sections/heroUseful/HeroUseful";
import { OurClients } from "../sections/ourClients/OurClients";
import { OurStatistic } from "../sections/ourStatistic/OurStatistic";
import { OurTeam } from "../sections/ourTeam/OurTeam";
import { Projects } from "../sections/projects/Projects";
import { Reviwes } from "../sections/reviwes/Reviwes";
import { Vacancies } from "../sections/vacancies/Vacancies";
import { VacanciesPrev } from "../sections/vacanciesPrev/VacanciesPrev";
import { Breadcrumbs } from "../ui/breadcrumbs/Breadcrumbs";

interface IUsefulScreen {
  content: TUsefulScreen;
}
export const UsefulScreen: FC<PropsWithChildren<IUsefulScreen>> = ({
  content,
}) => {
  return (
    <>
      {content.url && <Breadcrumbs pathname={content.url} />}
      {content.hero && (
        <HeroUseful
          basicContent={content.hero.basic}
          usefulInfo={content.hero.infoUseful}
        />
      )}

      {content.blog && <Blog isPreview={false} headline={false} />}
      {content.aboutUs && <AboutUs />}
      {content.ourStatistic && <OurStatistic />}
      {content.ourClients && <OurClients />}
      {content.reviwes && <Reviwes reviwes={content.reviwes} />}
      {content.reviwesList && <Reviwes reviwes={content.reviwesList}  isList={true}/>}
      {content.ourTeam && <OurTeam />}
      {content.projects && (<Projects cases={content.projects} formVisible={true} />)}
      {content.vacancies && (<Vacancies vacancies={content.vacancies}  />)}
      {content.blogPrev && ( <Blog isPreview={true} headline={true} />)}
      {content.vacanciesPrev && <VacanciesPrev/>}
      {content.affiliatePrev && <AffiliatePreview/>}
      {content.aboutPrev && <AboutPrev/>}
    </>
  );
};


