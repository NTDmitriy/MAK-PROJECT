import { ProductScreen } from "@/components/screens/ProductScreen";
import { MEDICAL_CONFIG } from "@/config/content-config/services/promotion/medical/medical.config";
import { NextPage } from "next";

const ProductPage: NextPage = () => {
	const content = MEDICAL_CONFIG;
	return (
		<>
			{content && <ProductScreen content={content} />}
		</>
	);
};

export default ProductPage;