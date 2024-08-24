import TestPage2 from "@/components/screens/testPage/TestPage2";
import { ONLINE_SCHOOL_CONFIG } from "@/config/content-config/servises/promotion/online-schools/online-schools.config";
import { NextPage } from "next";

const Test2: NextPage = () => {
  return (
    <>
      <TestPage2 content={ONLINE_SCHOOL_CONFIG} />
    </>
  );
};

export default Test2;
