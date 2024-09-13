
import { ProductScreen } from "@/components/screens/ProductScreen";
import { ADVERTISEMENT_GOOGLE_CONFIG } from "@/config/content-config/services/advertisement/advertisement-google/advertisement-google.config";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  ...METADATA.ADVERTISEMENT_GOOGLE,
  openGraph: {
    ...METADATA.ADVERTISEMENT_GOOGLE,
  },
};


const ProductPage: NextPage = () => {
	const content = ADVERTISEMENT_GOOGLE_CONFIG;
	return (
		<>
			{content && <ProductScreen content={content} />}
		</>
	);
};

export default ProductPage;