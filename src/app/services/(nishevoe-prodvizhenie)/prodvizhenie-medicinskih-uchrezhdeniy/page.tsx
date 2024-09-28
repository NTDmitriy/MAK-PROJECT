import { ProductScreen } from "@/components/screens/ProductScreen";
import { MEDICAL_CONTENT } from "@/content/services/promotion/medical/medical.content";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";


export const metadata: Metadata = {
  ...METADATA.PROMOTION_MEDICAL,
  openGraph: {
    ...METADATA.PROMOTION_MEDICAL,
  },
};

const ProductPage: NextPage = () => {
	const content = MEDICAL_CONTENT;
	return (
		<>
			{content && <ProductScreen content={content} />}
		</>
	);
};

export default ProductPage;