
import { ProductScreen } from "@/components/screens/ProductScreen";
import { SEO_POSEVY_CONFIG } from "@/config/content-config/services/seo/seo-posevy/seo-posevy.config";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";


export const metadata: Metadata = {
  ...METADATA.SEO_POSEVY,
  openGraph: {
    ...METADATA.SEO_POSEVY,
  },
};


const ProductPage: NextPage = () => {
	const content = SEO_POSEVY_CONFIG;
	return (
		<>
			{content && <ProductScreen content={content} />}
		</>
	);
};

export default ProductPage;