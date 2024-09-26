import { ProductScreen } from "@/components/screens/ProductScreen";
import { WEBDEV_REDESIGN_CONTENT } from "@/content/services/webdev/webdev-redesign/webdev-redesign.content";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  ...METADATA.WEBDEV_REDESIGN,
  openGraph: {
    ...METADATA.WEBDEV_REDESIGN,
  },
};

const ProductPage: NextPage = () => {
  const content = WEBDEV_REDESIGN_CONTENT;
  return <>{content && <ProductScreen content={content} />}</>;
};

export default ProductPage;
