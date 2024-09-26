
import { ProductScreen } from "@/components/screens/ProductScreen";
import { SEO_PROMOTION_CONTENT } from "@/content/services/seo/seo-promotion/seo-promotion.content";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";


export const metadata: Metadata = {
  ...METADATA.SEO_PROMOTION,
  openGraph: {
    ...METADATA.SEO_PROMOTION,
  },
};

const ProductPage: NextPage = () => {
	const content = SEO_PROMOTION_CONTENT;
	return (
		<>
			{content && <ProductScreen content={content} />}
		</>
	);
};

export default ProductPage;