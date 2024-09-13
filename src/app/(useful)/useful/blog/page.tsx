import { UsefulScreen } from "@/components/screens/UsefulScreen";
import { BLOG_CONFIG } from "@/config/content-config/useful/blog/blog.config";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  ...METADATA.BLOG,
  openGraph: {
    ...METADATA.BLOG,
  },
};


const UsefulPage: NextPage = () => {
	return (
		<UsefulScreen content={BLOG_CONFIG} />
	);
};

export default UsefulPage;
