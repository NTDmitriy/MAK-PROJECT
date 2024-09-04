
import { ProductScreen } from "@/components/screens/ProductScreen";
import { ADVERTISEMENT_TELEGRAM_CONFIG } from "@/config/content-config/servises/advertisement/advertisement-telegram/advertisement-telegram.config";
import { NextPage } from "next";


const ProductPage: NextPage = () => {
	const content = ADVERTISEMENT_TELEGRAM_CONFIG;
	return (
		<>
			{content && <ProductScreen content={content} />}
		</>
	);
};

export default ProductPage;