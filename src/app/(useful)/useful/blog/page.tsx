import { UsefulScreen } from "@/components/screens/UsefulScreen";
import { BLOG_CONTENT } from "@/content/useful/blog/blog.content";
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
		<UsefulScreen content={BLOG_CONTENT} />
	);
};

export default UsefulPage;
