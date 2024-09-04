
import { ProductScreen } from "@/components/screens/ProductScreen";
import { WEBDEV_TILDA_CONFIG } from "@/config/content-config/servises/webdev/webdev-tilda/webdev-tilda.config";
import { NextPage } from "next";


const ProductPage: NextPage = () => {
	const content = WEBDEV_TILDA_CONFIG;
	return (
		<>
			{content && <ProductScreen content={content} />}
		</>
	);
};

export default ProductPage;