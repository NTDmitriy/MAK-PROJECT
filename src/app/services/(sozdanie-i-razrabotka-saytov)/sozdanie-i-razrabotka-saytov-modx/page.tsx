
import { ProductScreen } from "@/components/screens/ProductScreen";
import { WEBDEV_MODX_CONFIG } from "@/config/content-config/servises/webdev/webdev-modx/webdev-modx.config";
import { NextPage } from "next";


const ProductPage: NextPage = () => {
	const content = WEBDEV_MODX_CONFIG;
	return (
		<>
			{content && <ProductScreen content={content} />}
		</>
	);
};

export default ProductPage;