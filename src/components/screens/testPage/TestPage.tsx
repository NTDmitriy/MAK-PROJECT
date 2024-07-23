import { NextPage } from "next";
import PromotionReasons from "../blocks/heroblock/hero";
import { block_promotion1 } from "@/config/blocks.config";

const TestPage: NextPage = () => {
  return (


      <PromotionReasons content={block_promotion1} />



  );
};

export default TestPage;
