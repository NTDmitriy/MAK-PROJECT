import { Hero } from "@/components/sections/hero/Hero";
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
    </>
  );
};

export default TestPage;
