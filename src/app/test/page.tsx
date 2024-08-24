import TestPage from "@/components/screens/testPage/TestPage";
import { ONLINE_SCHOOL_CONFIG } from "@/config/content-config/servises/promotion/online-schools/online-schools.config";

import { NextPage } from "next";

const Test: NextPage = () => {
  return (
    <>
      <TestPage content={ONLINE_SCHOOL_CONFIG} />
    </>
  );
};

export default Test;
