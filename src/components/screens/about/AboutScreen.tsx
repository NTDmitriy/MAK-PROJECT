import { AboutUs } from "@/components/sections/aboutUs/AboutUs";
import { OurClients } from "@/components/sections/ourClients/OurClients";
import { OurStatistic } from "@/components/sections/ourStatistic/OurStatistic";
import { OurTeam } from "@/components/sections/ourTeam/OurTeam";
import { Reviwes } from "@/components/sections/reviwes/Reviwes";
import {  TUsefulScreen } from "@/interfaces/types/screens/screens.type";
import { FC, PropsWithChildren } from "react";


interface IAboutScreen {
  content: TUsefulScreen;
}

export const AboutScreen: FC<PropsWithChildren<IAboutScreen>> = ({ content }) => {
  return (
    <>
     <AboutUs />
     <OurStatistic />
     <OurClients />
     <Reviwes reviwes={content.reviwes} />
     <OurTeam 
     
     />
    </>
   
  );
};
