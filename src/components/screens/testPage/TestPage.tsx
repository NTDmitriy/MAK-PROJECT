import { OurClients } from "@/components/sections/ourPartners/OurClients";
import { OurServices } from "@/components/sections/ourServices/OurServices";
import { OurTeam } from "@/components/sections/ourTeam/OurTeam";

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
      <OurTeam />
      <OurClients />
      <OurServices />
    </>

    
  );
};

export default TestPage;
