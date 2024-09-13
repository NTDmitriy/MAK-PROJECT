
import { ProductScreen } from "@/components/screens/ProductScreen";
import { ONLINE_SCHOOL_CONFIG } from "@/config/content-config/services/promotion/online-schools/online-schools.config";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  ...METADATA.PROMOTION_ONLINE_SCHOOL,
  openGraph: {
    ...METADATA.PROMOTION_ONLINE_SCHOOL,
  },
};


const ProductPage: NextPage = () => {
	const content = ONLINE_SCHOOL_CONFIG;
	return (
		<>
			{content && <ProductScreen content={content} />}
		</>
	);
};

export default ProductPage;