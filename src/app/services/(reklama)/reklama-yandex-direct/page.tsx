
import { ProductScreen } from "@/components/screens/ProductScreen";
import { ADVERTISEMENT_YANDEX_CONFIG } from "@/config/content-config/services/advertisement/advertisement-yandex/advertisement-yandex.config";
import { NextPage } from "next";


const ProductPage: NextPage = () => {
	const content = ADVERTISEMENT_YANDEX_CONFIG;
	return (
		<>
			{content && <ProductScreen content={content} />}
		</>
	);
};

export default ProductPage;