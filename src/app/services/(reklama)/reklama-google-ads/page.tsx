
import { ProductScreen } from "@/components/screens/ProductScreen";
import { ADVERTISEMENT_GOOGLE_CONTENT } from "@/content/services/advertisement/advertisement-google/advertisement-google.content";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  ...METADATA.ADVERTISEMENT_GOOGLE,
  openGraph: {
    ...METADATA.ADVERTISEMENT_GOOGLE,
  },
};


const ProductPage: NextPage = () => {
	const content = ADVERTISEMENT_GOOGLE_CONTENT;
	return (
		<>
			{content && <ProductScreen content={content} />}
		</>
	);
};

export default ProductPage;