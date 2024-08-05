import FAQ from "@/components/sections/faq/FAQ";
import { OurClients } from "@/components/sections/ourPartners/OurClients";
import { OurServices } from "@/components/sections/ourServices/OurServices";
import { OurTeam } from "@/components/sections/ourTeam/OurTeam";
import FAQ_HOME_PAGE from "@/config/contentConfig/FAQ/homePageFaq";

import { FC } from "react";

interface ITestPage {
  content: Record<string, any>;
}

const TestPage: FC<ITestPage> = ({ content }) => {
  return (
    <>
      {/* <Hero
        basicContent={content.hero.basic}
        productContent={content.hero.info}
      />
      <HowWorks />
      <WhyUs />
      <WhyUsServices /> */}
      {/* <OurTeam />
      <OurClients />
      <OurServices /> */}
      <FAQ items={FAQ_HOME_PAGE} />
    </>

    
  );
};

export default TestPage;
