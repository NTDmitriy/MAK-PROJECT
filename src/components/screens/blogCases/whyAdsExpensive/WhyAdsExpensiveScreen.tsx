import { BlogHero } from "@/components/ui-blog/blogHero/BlogHero";
import { Breadcrumbs } from "@/components/ui/breadcrumbs/Breadcrumbs";
import { ALL_BLOG_CONTENT } from "@/content/all-blog/all-blog.content";
import { FC } from "react";
import { WhyAdsExpensive } from "./WhyAdsExpensive";

export const WhyAdsExpensiveScreen: FC = () => {
  return (
    <>
      <Breadcrumbs pathname={ALL_BLOG_CONTENT.WHY_ADS_EXPENSIVE.url} />
      <BlogHero heroContent={ALL_BLOG_CONTENT.WHY_ADS_EXPENSIVE} />
      <WhyAdsExpensive  />
    </>
  );
};
