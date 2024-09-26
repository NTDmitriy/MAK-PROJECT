import { UsefulScreen } from "@/components/screens/UsefulScreen";
import { VACANCIES_CONTENT } from "@/content/useful/vacancies/vacancies.content";
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
		<UsefulScreen content={VACANCIES_CONTENT} />
	);
};

export default UsefulPage;
