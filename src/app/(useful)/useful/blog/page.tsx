import { UsefulScreen } from "@/components/screens/UsefulScreen";
import { BLOG_CONFIG } from "@/config/content-config/useful/blog/blog.config";
import { NextPage } from "next";

const UsefulPage: NextPage = () => {
	return (
		<UsefulScreen content={BLOG_CONFIG} />
	);
};

export default UsefulPage;
