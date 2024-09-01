import { AboutScreen } from "@/components/screens/about/AboutScreen";
import { ABOUT_US_CONFIG } from "@/config/content-config/about/aboutus.config";
import { NextPage } from "next";

const About: NextPage = () => {
	return (
		<AboutScreen content={ABOUT_US_CONFIG} />
	);
};

export default About;
