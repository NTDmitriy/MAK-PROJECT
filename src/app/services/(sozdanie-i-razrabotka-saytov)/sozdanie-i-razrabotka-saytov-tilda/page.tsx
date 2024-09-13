
import { ProductScreen } from "@/components/screens/ProductScreen";
import { WEBDEV_TILDA_CONFIG } from "@/config/content-config/services/webdev/webdev-tilda/webdev-tilda.config";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  ...METADATA.WEBDEV_TILDA,
  openGraph: {
    ...METADATA.WEBDEV_TILDA,
  },
};


const ProductPage: NextPage = () => {
	const content = WEBDEV_TILDA_CONFIG;
	return (
		<>
			{content && <ProductScreen content={content} />}
		</>
	);
};

export default ProductPage;