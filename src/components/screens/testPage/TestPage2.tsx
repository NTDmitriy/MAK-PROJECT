import { Reviwes } from "@/components/sections/reviwes/Reviwes";
import { FC } from "react";

interface ITestPage {
  content: Record<string, any>;
}

const TestPage2: FC<ITestPage> = ({ content }) => {
  return (
    <>
      <Reviwes reviwes={content.reviwes}/>
    </>
  );
};

export default TestPage2;
