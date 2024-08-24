
import { Projects } from "@/components/sections/projects/Projects";
import { FC } from "react";

interface ITestPage {
  content: Record<string, any>;
}

const TestPage2: FC<ITestPage> = ({ content }) => {
  return (
    <>
		<Projects cases={content.projects}/>
      {/* <OurServices /> */}
      {/* <Reviwes reviwes={content.reviwes} /> */}
    </>
  );
};

export default TestPage2;
