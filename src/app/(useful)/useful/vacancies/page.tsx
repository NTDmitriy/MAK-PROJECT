import { UsefulScreen } from "@/components/screens/UsefulScreen";
import { VACANCIES_CONFIG } from "@/config/content-config/useful/vacancies/vacancies.config";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  ...METADATA.VACANCIES,
  openGraph: {
    ...METADATA.VACANCIES,
  },
};


const UsefulPage: NextPage = () => {
	return (
		<UsefulScreen content={VACANCIES_CONFIG} />
	);
};

export default UsefulPage;
