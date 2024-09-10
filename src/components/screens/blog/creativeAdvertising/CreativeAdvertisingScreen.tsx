import { HeroBlog } from "@/components/ui-blog/heroBlog/HeroBlog";
import { Breadcrumbs } from "@/components/ui/breadcrumbs/Breadcrumbs";
import { BLOG_DASHBOARD_PAGES } from "@/config/url-config/blog-pages.config";
import { FC } from "react";



export const CreativeAdvertisingScreen: FC = () => {
  return (
    <>
      <Breadcrumbs pathname={BLOG_DASHBOARD_PAGES.CREATIVE_ADVERTISING.url} />
      <HeroBlog heroContent={BLOG_DASHBOARD_PAGES.CREATIVE_ADVERTISING} />
    </>
  );
};
