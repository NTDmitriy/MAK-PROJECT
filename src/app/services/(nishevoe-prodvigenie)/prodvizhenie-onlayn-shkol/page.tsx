
import { ProductScreen } from "@/components/screens/ProductScreen";
import { ONLINE_SCHOOL_CONFIG } from "@/config/content-config/servises/promotion/online-schools/online-schools.config";
import { NextPage } from "next";

const ProductPage: NextPage = () => {
	const content = ONLINE_SCHOOL_CONFIG;
	return (
		<>
			{content && <ProductScreen content={content} />}
		</>
	);
};

export default ProductPage;