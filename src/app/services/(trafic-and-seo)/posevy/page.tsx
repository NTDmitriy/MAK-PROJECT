
import { ProductScreen } from "@/components/screens/ProductScreen";
import { SEO_POSEVY_CONTENT } from "@/content/services/seo/seo-posevy/seo-posevy.content";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";


export const metadata: Metadata = {
  ...METADATA.SEO_POSEVY,
  openGraph: {
    ...METADATA.SEO_POSEVY,
  },
};


const ProductPage: NextPage = () => {
	const content = SEO_POSEVY_CONTENT;
	return (
		<>
			{content && <ProductScreen content={content} />}
		</>
	);
};

export default ProductPage;