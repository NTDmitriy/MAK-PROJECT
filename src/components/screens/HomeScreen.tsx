import { THomeScreen } from "@/typing/screens.type";
import { FC, PropsWithChildren } from "react";
import { AboutPrev } from "../sections/aboutPrev/AboutPrev";
import { AffiliatePreview } from "../sections/affiliatePreview/AffiliatePreview";
import { Blog } from "../sections/blog/Blog";

import { Cases } from "../sections/cases/Cases";
import Faq from "../sections/faq/Faq";
import { HeroHome } from "../sections/heroHome/HeroHome";
import { OurClients } from "../sections/ourClients/OurClients";
import { OurServices } from "../sections/ourServices/OurServices";
import { OurTeam } from "../sections/ourTeam/OurTeam";
import { Reviwes } from "../sections/reviwesSlider/ReviwesSlider";

interface IHomeScreen {
  content: THomeScreen;
}
export const HomeScreen: FC<PropsWithChildren<IHomeScreen>> = ({ content }) => {
  return (
    <>
      {/* <Section>
        <Container>
          <FormController formType={FORM_TYPE.MAIN_FORM} />
        </Container>
      </Section> */}

      <HeroHome />
      <AboutPrev/>
      <OurServices />
      <Cases cases={content.projects} isPrev={true}/>
      <Reviwes reviwes={content.reviwes} />
      <OurTeam />
      <OurClients />
      <Faq faq={content.faq} />
      <Blog isPreview={true} headline={true} />
      <AffiliatePreview formVisible={true} />
    </>
  );
};
