import { UsefulScreen } from "@/components/screens/UsefulScreen";
import { ABOUT_US_CONFIG } from "@/config/content-config/useful/about/aboutus.config";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  ...METADATA.ABOUT,
  openGraph: {
    ...METADATA.ABOUT,
  },
};


const UsefulPage: NextPage = () => {
	return (
		<UsefulScreen content={ABOUT_US_CONFIG} />
	);
};

export default UsefulPage;
