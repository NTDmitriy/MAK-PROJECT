
import { ProductScreen } from "@/components/screens/ProductScreen";
import { SEO_PROMOTION_CONFIG } from "@/config/content-config/servises/seo/seo-promotion/seo-promotion.config";
import { NextPage } from "next";


const ProductPage: NextPage = () => {
	const content = SEO_PROMOTION_CONFIG;
	return (
		<>
			{content && <ProductScreen content={content} />}
		</>
	);
};

export default ProductPage;