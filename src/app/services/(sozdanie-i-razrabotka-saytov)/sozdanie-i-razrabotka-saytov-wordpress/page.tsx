
import { ProductScreen } from "@/components/screens/ProductScreen";
import { WEBDEV_WORDPRESS_CONFIG } from "@/config/content-config/services/webdev/webdev-wordpress/webdev-wordpress.config";
import { NextPage } from "next";


const ProductPage: NextPage = () => {
	const content = WEBDEV_WORDPRESS_CONFIG;
	return (
		<>
			{content && <ProductScreen content={content} />}
		</>
	);
};

export default ProductPage;