import { ProductScreen } from "@/components/screens/ProductScreen";
import { MARKET_PLACE_CONTENT } from "@/content/services/promotion/market-place/market-place.content";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";


export const metadata: Metadata = {
  ...METADATA.PROMOTION_MARKETPLACE,
  openGraph: {
    ...METADATA.PROMOTION_MARKETPLACE,
  },
};

const ProductPage: NextPage = () => {
	const content = MARKET_PLACE_CONTENT;
	return (
		<>
			{content && <ProductScreen content={content} />}
		</>
	);
};

export default ProductPage;
