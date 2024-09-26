
import { ProductScreen } from "@/components/screens/ProductScreen";
import { ADVERTISEMENT_VK_CONTENT } from "@/content/services/advertisement/advertisement-vk/advertisement-vk.content";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  ...METADATA.ADVERTISEMENT_VK,
  openGraph: {
    ...METADATA.ADVERTISEMENT_VK,
  },
};

const ProductPage: NextPage = () => {
	const content = ADVERTISEMENT_VK_CONTENT;
	return (
		<>
			{content && <ProductScreen content={content} />}
		</>
	);
};

export default ProductPage;