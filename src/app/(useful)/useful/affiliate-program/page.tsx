import { UsefulScreen } from "@/components/screens/UsefulScreen";
import { AFFILIATE_CONFIG } from "@/config/content-config/useful/affiliate/affiliate.config";
import { NextPage } from "next";

const UsefulPage: NextPage = () => {
  return <UsefulScreen content={AFFILIATE_CONFIG} />;
};

export default UsefulPage;
