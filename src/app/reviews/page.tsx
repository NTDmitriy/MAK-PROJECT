import { UsefulScreen } from "@/components/screens/UsefulScreen";
import { REVIEWS_CONFIG } from "@/config/content-config/useful/reviews/reviews.config";
import { NextPage } from "next";

const UsefulPage: NextPage = () => {
	return (
		<UsefulScreen content={REVIEWS_CONFIG} />
	);
};

export default UsefulPage;
