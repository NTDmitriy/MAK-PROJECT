
import { ProductScreen } from "@/components/screens/ProductScreen";
import { SEO_EMAIL_CONFIG } from "@/config/content-config/services/seo/seo-email/seo-email.config";
import { NextPage } from "next";


const ProductPage: NextPage = () => {
	const content = SEO_EMAIL_CONFIG;
	return (
		<>
			{content && <ProductScreen content={content} />}
		</>
	);
};

export default ProductPage;