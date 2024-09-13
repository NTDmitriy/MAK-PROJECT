
import { ProductScreen } from "@/components/screens/ProductScreen";
import { ADVERTISEMENT_VK_CONFIG } from "@/config/content-config/services/advertisement/advertisement-vk/advertisement-vk.config";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  ...METADATA.ADVERTISEMENT_VK,
  openGraph: {
    ...METADATA.ADVERTISEMENT_VK,
  },
};

const ProductPage: NextPage = () => {
	const content = ADVERTISEMENT_VK_CONFIG;
	return (
		<>
			{content && <ProductScreen content={content} />}
		</>
	);
};

export default ProductPage;