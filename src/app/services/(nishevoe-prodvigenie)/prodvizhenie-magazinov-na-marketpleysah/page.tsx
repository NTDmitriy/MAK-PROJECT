import { ProductScreen } from "@/components/screens/ProductScreen";
import { MARKET_PLACE_CONFIG } from "@/config/content-config/services/promotion/market-place/market-place.config";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";


export const metadata: Metadata = {
  ...METADATA.PROMOTION_MARKETPLACE,
  openGraph: {
    ...METADATA.PROMOTION_MARKETPLACE,
  },
};

const ProductPage: NextPage = () => {
	const content = MARKET_PLACE_CONFIG;
	return (
		<>
			{content && <ProductScreen content={content} />}
		</>
	);
};

export default ProductPage;
