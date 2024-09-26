
import { ProductScreen } from "@/components/screens/ProductScreen";
import { WEBDEV_TILDA_CONTENT } from "@/content/services/webdev/webdev-tilda/webdev-tilda.content";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  ...METADATA.WEBDEV_TILDA,
  openGraph: {
    ...METADATA.WEBDEV_TILDA,
  },
};


const ProductPage: NextPage = () => {
	const content = WEBDEV_TILDA_CONTENT;
	return (
		<>
			{content && <ProductScreen content={content} />}
		</>
	);
};

export default ProductPage;