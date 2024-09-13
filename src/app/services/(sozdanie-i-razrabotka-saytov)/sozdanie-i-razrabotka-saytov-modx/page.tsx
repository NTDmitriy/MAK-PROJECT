
import { ProductScreen } from "@/components/screens/ProductScreen";
import { WEBDEV_MODX_CONFIG } from "@/config/content-config/services/webdev/webdev-modx/webdev-modx.config";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";


export const metadata: Metadata = {
  ...METADATA.WEBDEV_MODX,
  openGraph: {
    ...METADATA.WEBDEV_MODX,
  },
};

const ProductPage: NextPage = () => {
	const content = WEBDEV_MODX_CONFIG;
	return (
		<>
			{content && <ProductScreen content={content} />}
		</>
	);
};

export default ProductPage;