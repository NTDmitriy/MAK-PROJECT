import { UsefulScreen } from "@/components/screens/UsefulScreen";
import { CASES_CONFIG } from "@/config/content-config/useful/cases/cases.config";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  ...METADATA.CASES,
  openGraph: {
    ...METADATA.CASES,
  },
};

const UsefulPage: NextPage = () => {
	return (
		<UsefulScreen content={CASES_CONFIG} />
	);
};

export default UsefulPage;
