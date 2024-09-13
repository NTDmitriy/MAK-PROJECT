import { ProductScreen } from "@/components/screens/ProductScreen";
import { MEDICAL_CONFIG } from "@/config/content-config/services/promotion/medical/medical.config";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";


export const metadata: Metadata = {
  ...METADATA.PROMOTION_MEDICAL,
  openGraph: {
    ...METADATA.PROMOTION_MEDICAL,
  },
};

const ProductPage: NextPage = () => {
	const content = MEDICAL_CONFIG;
	return (
		<>
			{content && <ProductScreen content={content} />}
		</>
	);
};

export default ProductPage;