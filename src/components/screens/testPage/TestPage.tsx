import { OurPartners } from "@/components/sections/ourPartners/OurPartners";
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
      <OurPartners />
    </>

    
  );
};

export default TestPage;
