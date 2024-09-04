
import { ProductScreen } from "@/components/screens/ProductScreen";
import { ADVERTISEMENT_VK_CONFIG } from "@/config/content-config/servises/advertisement/advertisement-vk/advertisement-vk.config";
import { NextPage } from "next";


const ProductPage: NextPage = () => {
	const content = ADVERTISEMENT_VK_CONFIG;
	return (
		<>
			{content && <ProductScreen content={content} />}
		</>
	);
};

export default ProductPage;