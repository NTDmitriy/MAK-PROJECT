
import { ProductScreen } from "@/components/screens/ProductScreen";
import { SEO_INFLUENCE_CONTENT } from "@/content/services/seo/seo-influence/seo-influence.content";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";


export const metadata: Metadata = {
  ...METADATA.SEO_INFLUENCE,
  openGraph: {
    ...METADATA.SEO_INFLUENCE,
  },
};



const ProductPage: NextPage = () => {
	const content = SEO_INFLUENCE_CONTENT;
	return (
		<>
			{content && <ProductScreen content={content} />}
		</>
	);
};

export default ProductPage;