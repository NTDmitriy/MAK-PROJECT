
import { ProductScreen } from "@/components/screens/ProductScreen";
import { WEBDEV_JS_CONFIG } from "@/config/content-config/servises/webdev/webdev-js/webdev-js.config";
import { NextPage } from "next";


const ProductPage: NextPage = () => {
	const content = WEBDEV_JS_CONFIG;
	return (
		<>
			{content && <ProductScreen content={content} />}
		</>
	);
};

export default ProductPage;