import { BlogHero } from "@/components/ui-blog/blogHero/BlogHero";
import { ALL_BLOG_CONTENT } from "@/content/all-blog/all-blog.content";
import { FC } from "react";
import { CreativeAdvertisingContent } from "./CreativeAdvertising";

export const CreativeAdvertisingScreen: FC = () => {
  return (
    <>
      <BlogHero heroContent={ALL_BLOG_CONTENT.CREATIVE_ADVERTISING} />
      <CreativeAdvertisingContent />
    </>
  );
};
