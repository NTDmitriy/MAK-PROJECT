import { BlogHero } from "@/components/ui-blog/blogHero/BlogHero";
import { Breadcrumbs } from "@/components/ui/breadcrumbs/Breadcrumbs";
import { BLOG_DASHBOARD_PAGES } from "@/config/url-config/blog-pages.config";
import { FC } from "react";
import { CreativeAdvertisingContent } from "./CreativeAdvertising";



export const CreativeAdvertisingScreen: FC = () => {
  return (
    <>
      <Breadcrumbs pathname={BLOG_DASHBOARD_PAGES.CREATIVE_ADVERTISING.url} />
      <BlogHero heroContent={BLOG_DASHBOARD_PAGES.CREATIVE_ADVERTISING} />
      <CreativeAdvertisingContent />
    </>
  );
};
