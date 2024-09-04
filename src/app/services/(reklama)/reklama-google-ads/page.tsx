
import { ProductScreen } from "@/components/screens/ProductScreen";
import { ADVERTISEMENT_GOOGLE_CONFIG } from "@/config/content-config/servises/advertisement/advertisement-google/advertisement-google.config";
import { NextPage } from "next";


const ProductPage: NextPage = () => {
	const content = ADVERTISEMENT_GOOGLE_CONFIG;
	return (
		<>
			{content && <ProductScreen content={content} />}
		</>
	);
};

export default ProductPage;