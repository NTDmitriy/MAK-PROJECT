
import { ProductScreen } from "@/components/screens/ProductScreen";
import { ONLINE_SCHOOL_CONTENT } from "@/content/services/promotion/online-schools/online-schools.content";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  ...METADATA.PROMOTION_ONLINE_SCHOOL,
  openGraph: {
    ...METADATA.PROMOTION_ONLINE_SCHOOL,
  },
};


const ProductPage: NextPage = () => {
	const content = ONLINE_SCHOOL_CONTENT;
	return (
		<>
			{content && <ProductScreen content={content} />}
		</>
	);
};

export default ProductPage;