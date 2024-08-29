import { ProductScreen } from "@/components/screens/ProductScreen";
import { CONSTRUCTION_COMPANY_CONFIG } from "@/config/content-config/servises/promotion/consruction-company/consruction-companyconfig";
import { NextPage } from "next";

const ProductPage: NextPage = () => {
	const content = CONSTRUCTION_COMPANY_CONFIG;
	return (
		<>
			{content && <ProductScreen content={content} />}
		</>
	);
};

export default ProductPage;