import { Hero } from "@/components/sections/hero/Hero";
import { HowWorks } from "@/components/sections/howWorks/HowWorks";
import { Projects } from "@/components/sections/projects/Projects";
import { Reviwes } from "@/components/sections/reviwes/Reviwes";
import { WhyUs } from "@/components/sections/whyUs/WhyUs";
import { FC, PropsWithChildren } from "react";

interface IScreen {
  content: Record<string, any>;
}
export const PromotionOnlineSchoolPage: FC<PropsWithChildren<IScreen>> = ({
  content,
}) => {
  return (
    <>
      <Hero
        basicContent={content.hero.basic}
        productContent={content.hero.info}
      />
      <HowWorks />
      <WhyUs />
			<Projects cases={content.projects.cases}/>
			<Reviwes reviwes={content.reviwes}/>
    </>
  );
};
