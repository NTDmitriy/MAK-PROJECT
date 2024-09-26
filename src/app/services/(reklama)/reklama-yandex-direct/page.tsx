import { ProductScreen } from "@/components/screens/ProductScreen";
import { ADVERTISEMENT_YANDEX_CONTENT } from "@/content/services/advertisement/advertisement-yandex/advertisement-yandex.content";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  ...METADATA.ADVERTISEMENT_YANDEX,
  openGraph: {
    ...METADATA.ADVERTISEMENT_YANDEX,
  },
};

const ProductPage: NextPage = () => {
  const content = ADVERTISEMENT_YANDEX_CONTENT;
  return <>{content && <ProductScreen content={content} />}</>;
};

export default ProductPage;
