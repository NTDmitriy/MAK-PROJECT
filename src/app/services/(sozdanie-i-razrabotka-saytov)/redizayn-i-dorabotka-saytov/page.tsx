import { ProductScreen } from "@/components/screens/ProductScreen";
import { WEBDEV_REDESIGN_CONFIG } from "@/config/content-config/services/webdev/webdev-redesign/webdev-redesign.config";
import { NextPage } from "next";


const ProductPage: NextPage = () => {
	const content = WEBDEV_REDESIGN_CONFIG;
	return (
		<>
			{content && <ProductScreen content={content} />}
		</>
	);
};

export default ProductPage;