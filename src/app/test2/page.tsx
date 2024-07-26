import TestPage2 from "@/components/screens/testPage/TestPage2";
import { onlineSchoolsPromotion } from "@/config/contentConfig/servises/promotion/onlineSchools.config";
import { NextPage } from "next";

const Test2: NextPage = () => {
  return (
    <>
      <TestPage2 content={onlineSchoolsPromotion} />
    </>
  );
};

export default Test2;
