
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
      /> */}
      {/* <HowWorks /> */}
      {/* <WhyUs /> */}
      {/* <WhyUsServices />  */}

      {/* <OurServices />  */}
			{/* <OurTeam /> */}
      {/* <OurClients /> */}
      {/* <Reviwes reviwes={content.reviwes}  /> */}
      {/* <Faq faq={content.faq} /> */}
    </>
  );
};

export default TestPage;
