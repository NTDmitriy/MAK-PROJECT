
import { ProductScreen } from "@/components/screens/ProductScreen";
import { WEBDEV_WORDPRESS_CONFIG } from "@/config/content-config/services/webdev/webdev-wordpress/webdev-wordpress.config";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";


export const metadata: Metadata = {
  ...METADATA.WEBDEV_WORDPRESS,
  openGraph: {
    ...METADATA.WEBDEV_WORDPRESS,
  },
};

const ProductPage: NextPage = () => {
	const content = WEBDEV_WORDPRESS_CONFIG;
	return (
		<>
			{content && <ProductScreen content={content} />}
		</>
	);
};

export default ProductPage;