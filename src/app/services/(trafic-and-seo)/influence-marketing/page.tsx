
import { ProductScreen } from "@/components/screens/ProductScreen";
import { SEO_INFLUENCE_CONFIG } from "@/config/content-config/services/seo/seo-influence/seo-influence.config";
import { NextPage } from "next";


const ProductPage: NextPage = () => {
	const content = SEO_INFLUENCE_CONFIG;
	return (
		<>
			{content && <ProductScreen content={content} />}
		</>
	);
};

export default ProductPage;