import { UsefulScreen } from "@/components/screens/UsefulScreen";
import { USEFUL_CONFIG } from "@/config/content-config/useful/useful.config";
import { NextPage } from "next";

const UsefulPage: NextPage = () => {
	return (
		<UsefulScreen content={USEFUL_CONFIG} />
	);
};

export default UsefulPage;
