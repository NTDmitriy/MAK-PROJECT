
import { ProductScreen } from "@/components/screens/ProductScreen";
import { MARKET_PLACE_CONFIG } from "@/config/content-config/servises/promotion/market-place/market-place.config";
import { NextPage } from "next";


const ProductPage: NextPage = () => {
	const content = MARKET_PLACE_CONFIG;
	return (
		<>
			{content && <ProductScreen content={content} />}
		</>
	);
};

export default ProductPage;