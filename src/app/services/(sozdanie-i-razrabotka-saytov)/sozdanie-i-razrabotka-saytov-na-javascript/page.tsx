import { ProductScreen } from "@/components/screens/ProductScreen";
import { WEBDEV_JS_CONTENT } from "@/content/services/webdev/webdev-js/webdev-js.content";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";


export const metadata: Metadata = {
  ...METADATA.WEBDEV_JS,
  openGraph: {
    ...METADATA.WEBDEV_JS,
  },
};


const ProductPage: NextPage = () => {
  const content = WEBDEV_JS_CONTENT;
  return <>{content && <ProductScreen content={content} />}</>;
};

export default ProductPage;
