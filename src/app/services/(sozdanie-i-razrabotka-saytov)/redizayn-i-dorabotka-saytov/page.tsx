import { ProductScreen } from "@/components/screens/ProductScreen";
import { WEBDEV_REDESIGN_CONFIG } from "@/config/content-config/services/webdev/webdev-redesign/webdev-redesign.config";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  ...METADATA.WEBDEV_REDESIGN,
  openGraph: {
    ...METADATA.WEBDEV_REDESIGN,
  },
};

const ProductPage: NextPage = () => {
  const content = WEBDEV_REDESIGN_CONFIG;
  return <>{content && <ProductScreen content={content} />}</>;
};

export default ProductPage;
