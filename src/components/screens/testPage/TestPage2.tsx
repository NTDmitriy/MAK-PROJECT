import { Hero } from "@/components/sections/hero/Hero";
import { FC } from "react";

interface ITestPage {
  content: Record<string, any>;
}

const TestPage2: FC<ITestPage> = ({ content }) => {
  return (
    <>
      <Hero
        basicContent={content.hero.basic}
   
      />
    </>
  );
};

export default TestPage2;
