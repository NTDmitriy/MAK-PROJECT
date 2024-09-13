
import { ProductScreen } from "@/components/screens/ProductScreen";
import { ADVERTISEMENT_TELEGRAM_CONFIG } from "@/config/content-config/services/advertisement/advertisement-telegram/advertisement-telegram.config";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";


export const metadata: Metadata = {
  ...METADATA.ADVERTISEMENT_TG,
  openGraph: {
    ...METADATA.ADVERTISEMENT_TG,
  },
};


const ProductPage: NextPage = () => {
	const content = ADVERTISEMENT_TELEGRAM_CONFIG;
	return (
		<>
			{content && <ProductScreen content={content} />}
		</>
	);
};

export default ProductPage;