
import { ProductScreen } from "@/components/screens/ProductScreen";
import { SEO_PROMOTION_CONFIG } from "@/config/content-config/services/seo/seo-promotion/seo-promotion.config";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";


export const metadata: Metadata = {
  ...METADATA.SEO_PROMOTION,
  openGraph: {
    ...METADATA.SEO_PROMOTION,
  },
};

const ProductPage: NextPage = () => {
	const content = SEO_PROMOTION_CONFIG;
	return (
		<>
			{content && <ProductScreen content={content} />}
		</>
	);
};

export default ProductPage;