import { ProductScreen } from "@/components/screens/ProductScreen";
import { CONSTRUCTION_COMPANY_CONTENT } from "@/content/services/promotion/consruction-company/consruction-company.content";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";


export const metadata: Metadata = {
  ...METADATA.PROMOTION_CONSTRUCTION_COMPANY,
  openGraph: {
    ...METADATA.PROMOTION_CONSTRUCTION_COMPANY,
  },
};

const ProductPage: NextPage = () => {
	const content = CONSTRUCTION_COMPANY_CONTENT;
	return (
		<>
			{content && <ProductScreen content={content} />}
		</>
	);
};

export default ProductPage;