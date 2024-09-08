import { UsefulScreen } from "@/components/screens/UsefulScreen";
import { ABOUT_US_CONFIG } from "@/config/content-config/useful/about/aboutus.config";
import { NextPage } from "next";

const UsefulPage: NextPage = () => {
	return (
		<UsefulScreen content={ABOUT_US_CONFIG} />
	);
};

export default UsefulPage;
