
import { ProductScreen } from "@/components/screens/ProductScreen";
import { ADVERTISEMENT_META_CONFIG } from "@/config/content-config/servises/advertisement/advertisement-meta/advertisement-meta.config";

import { NextPage } from "next";


const ProductPage: NextPage = () => {
	const content = ADVERTISEMENT_META_CONFIG;

	return (
		<>
			{content && <ProductScreen content={content} />}
		</>
	);
};

export default ProductPage;