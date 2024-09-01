import { WhyUs } from "@/components/sections/whyUs/WhyUs";
import { WhyUsChecklist } from "@/components/sections/whyUsChecklist/WhyUsChecklist";
import { WhyUsSites } from "@/components/sections/whyUsSites/whyUsSites";
import { NextPage } from "next";

const Contact: NextPage = () => {
	return (
		<>
			<WhyUs />
			<WhyUsChecklist />
			<WhyUsSites />

		</>
	);
};

export default Contact;
