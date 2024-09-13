
import { ProductScreen } from "@/components/screens/ProductScreen";
import { ADVERTISEMENT_META_CONFIG } from "@/config/content-config/services/advertisement/advertisement-meta/advertisement-meta.config";
import { METADATA } from "@/seo/metadata";

import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  ...METADATA.ADVERTISEMENT_META,
  openGraph: {
    ...METADATA.ADVERTISEMENT_META,
  },
};


const ProductPage: NextPage = () => {
	const content = ADVERTISEMENT_META_CONFIG;

	return (
		<>
			{content && <ProductScreen content={content} />}
		</>
	);
};

export default ProductPage;