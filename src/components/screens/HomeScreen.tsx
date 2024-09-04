import { THomeScreen } from "@/interfaces/types/screens/screens.type";
import { FC, PropsWithChildren } from "react";
import { AffiliatePreview } from "../sections/affiliatePreview/AffiliatePreview";
import { Blog } from "../sections/blog/Blog";
import Faq from "../sections/faq/Faq";
import { HeroHome } from "../sections/heroHome/HeroHome";
import { OurClients } from "../sections/ourClients/OurClients";
import { OurServices } from "../sections/ourServices/OurServices";
import { OurTeam } from "../sections/ourTeam/OurTeam";
import { Projects } from "../sections/projects/Projects";
import { Reviwes } from "../sections/reviwes/Reviwes";

interface IHomeScreen {
  content: THomeScreen;
}
export const HomeScreen: FC<PropsWithChildren<IHomeScreen>> = ({ content }) => {
  return (
    <>
      <HeroHome />
      <OurServices />
      <Projects cases={content.projects} />
      <Reviwes reviwes={content.reviwes} />
      <OurTeam />
      <OurClients />
      <Faq faq={content.faq} />
      <Blog isPreview={true} headline={true} />
      <AffiliatePreview formVisible={true} />
    </>
  );
};
