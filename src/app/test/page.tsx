import TestPage from "@/components/screens/testPage/TestPage";
import { onlineSchoolsPromotion } from "@/config/contentConfig/servises/promotion/onlineSchools.config";
import { NextPage } from "next";

const Test: NextPage = () => {
  return (
    <>
      <TestPage content={onlineSchoolsPromotion} />
    </>
  );
};

export default Test;
