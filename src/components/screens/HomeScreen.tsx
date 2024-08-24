import { THomeScreen } from "@/interfaces/types/screens/screens.type";

import { FC, PropsWithChildren } from "react";
import { HookFormProvider } from "../ui/forms/HookFormProvider";
import { MainForm } from "../ui/forms/mainForm/MainForm";

interface IHomeScreen {
  content: THomeScreen;
}
export const HomeScreen: FC<PropsWithChildren<IHomeScreen>> = ({ content }) => {
  return (
    <>
      {/* <HeroHome />
      <OurServices />
      <Projects cases={content.projects} />*/}

      {/* <Reviwes reviwes={content.reviwes} /> */}
      {/*<OurTeam />
      <OurClients />
      <Faq faq={content.faq} />
      <Blog isPreview={true} headline={true} />
      <AffiliatePreview /> */}
      <HookFormProvider>
        <MainForm />
      </HookFormProvider>
    </>
  );
};
