import { ProductScreen } from "@/components/screens/ProductScreen";
import { CONSTRUCTION_COMPANY_CONFIG } from "@/config/content-config/services/promotion/consruction-company/consruction-company.config";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";


export const metadata: Metadata = {
  ...METADATA.PROMOTION_CONSTRUCTION_COMPANY,
  openGraph: {
    ...METADATA.PROMOTION_CONSTRUCTION_COMPANY,
  },
};

const ProductPage: NextPage = () => {
	const content = CONSTRUCTION_COMPANY_CONFIG;
	return (
		<>
			{content && <ProductScreen content={content} />}
		</>
	);
};

export default ProductPage;