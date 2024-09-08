
import { ProductScreen } from "@/components/screens/ProductScreen";
import { SEO_POSEVY_CONFIG } from "@/config/content-config/services/seo/seo-posevy/seo-posevy.config";
import { NextPage } from "next";


const ProductPage: NextPage = () => {
	const content = SEO_POSEVY_CONFIG;
	return (
		<>
			{content && <ProductScreen content={content} />}
		</>
	);
};

export default ProductPage;