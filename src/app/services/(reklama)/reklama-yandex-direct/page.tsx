import { ProductScreen } from "@/components/screens/ProductScreen";
import { ADVERTISEMENT_YANDEX_CONFIG } from "@/config/content-config/services/advertisement/advertisement-yandex/advertisement-yandex.config";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  ...METADATA.ADVERTISEMENT_YANDEX,
  openGraph: {
    ...METADATA.ADVERTISEMENT_YANDEX,
  },
};

const ProductPage: NextPage = () => {
  const content = ADVERTISEMENT_YANDEX_CONFIG;
  return <>{content && <ProductScreen content={content} />}</>;
};

export default ProductPage;
