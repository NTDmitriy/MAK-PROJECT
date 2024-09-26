import { UsefulScreen } from "@/components/screens/UsefulScreen";
import { CASES_CONTENT } from "@/content/useful/cases/cases.content";
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
		<UsefulScreen content={CASES_CONTENT} />
	);
};

export default UsefulPage;
