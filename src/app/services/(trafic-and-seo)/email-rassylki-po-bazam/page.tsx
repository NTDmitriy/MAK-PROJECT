import { ProductScreen } from "@/components/screens/ProductScreen";
import { SEO_EMAIL_CONTENT } from "@/content/services/seo/seo-email/seo-email.content";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  ...METADATA.SEO_EMAIL_DISTRIBUTION,
  openGraph: {
    ...METADATA.SEO_EMAIL_DISTRIBUTION,
  },
};

const ProductPage: NextPage = () => {
  const content = SEO_EMAIL_CONTENT;
  return <>{content && <ProductScreen content={content} />}</>;
};

export default ProductPage;
