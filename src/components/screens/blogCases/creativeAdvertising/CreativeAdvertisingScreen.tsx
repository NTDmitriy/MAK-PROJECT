import { BlogHero } from "@/components/ui-blog/blogHero/BlogHero";
import { Breadcrumbs } from "@/components/ui/breadcrumbs/Breadcrumbs";
import { ALL_BLOG_CONTENT } from "@/content/all-blog/all-blog.content";
import { FC } from "react";
import { CreativeAdvertisingContent } from "./CreativeAdvertising";



export const CreativeAdvertisingScreen: FC = () => {
  return (
    <>
      <Breadcrumbs pathname={ALL_BLOG_CONTENT.CREATIVE_ADVERTISING.url} />
      <BlogHero heroContent={ALL_BLOG_CONTENT.CREATIVE_ADVERTISING} />
      <CreativeAdvertisingContent />
    </>
  );
};
