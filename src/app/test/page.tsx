import TestPage from "@/components/screens/testPage/TestPage";
import { SiteServices } from "@/components/sections/siteServices/SiteServices";
import { ONLINE_SCHOOL_CONFIG } from "@/config/content-config/servises/promotion/online-schools/online-schools.config";

import { NextPage } from "next";

const Test: NextPage = () => {
  return (
    <>
      <SiteServices />
    </>
  );
};

export default Test;
