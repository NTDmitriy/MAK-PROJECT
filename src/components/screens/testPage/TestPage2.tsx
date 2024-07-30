import { Reviwes } from "@/components/sections/reviwes/Reviwes";
import { Popup } from "@/components/ui/modals/popup/Popup";
import { FC } from "react";

interface ITestPage {
  content: Record<string, any>;
}

const TestPage2: FC<ITestPage> = ({ content }) => {
  return (
    <>
      <Popup />
      <Reviwes reviwes={content.reviwes} />
    </>
  );
};

export default TestPage2;
