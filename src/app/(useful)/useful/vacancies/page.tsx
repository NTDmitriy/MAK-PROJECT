import { UsefulScreen } from "@/components/screens/UsefulScreen";
import { VACANCIES_CONFIG } from "@/config/content-config/useful/vacancies/vacancies.config";
import { NextPage } from "next";

const UsefulPage: NextPage = () => {
	return (
		<UsefulScreen content={VACANCIES_CONFIG} />
	);
};

export default UsefulPage;
