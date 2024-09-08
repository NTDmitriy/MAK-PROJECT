import { UsefulScreen } from "@/components/screens/UsefulScreen";
import { CASES_CONFIG } from "@/config/content-config/useful/cases/cases.config";
import { NextPage } from "next";

const UsefulPage: NextPage = () => {
	return (
		<UsefulScreen content={CASES_CONFIG} />
	);
};

export default UsefulPage;
