import { block_promotion1 } from "@/config/blocks.config";
import { NextPage } from "next";
import Hero from "../blocks/heroblock/hero";

const TestPage: NextPage = () => {
  return <Hero content={block_promotion1} />;
};

export default TestPage;
