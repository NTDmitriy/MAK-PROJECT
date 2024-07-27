import { Projects } from "@/components/sections/projects/Projects";
import { FC } from "react";

interface ITestPage {
  content: Record<string, any>;
}

const TestPage2: FC<ITestPage> = ({ content }) => {
  return (
    <>
      {/* <Hero
        basicContent={content.hero.basic}
				productContent={content.hero.info}
      /> */}
			<Projects cases={content.projects.cases}/>
    </>
  );
};

export default TestPage2;
