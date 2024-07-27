import { Hero } from "@/components/sections/hero/Hero";
import { HowWorks } from "@/components/sections/howWorks/HowWorks";
import { WhyUs } from "@/components/sections/whyUs/WhyUs";
import { WhyUsServices } from "@/components/sections/whyUsServices/WhyUsServices";

import { FC } from "react";

interface ITestPage {
  content: Record<string, any>;
}

const TestPage: FC<ITestPage> = ({ content }) => {
  return (
    <>
      <Hero
        basicContent={content.hero.basic}
        productContent={content.hero.info}
      />
      <HowWorks />
      <WhyUs />
      <WhyUsServices />
    </>

    
  );
};

export default TestPage;
