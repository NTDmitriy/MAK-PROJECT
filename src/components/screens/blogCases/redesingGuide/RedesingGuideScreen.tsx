import { BlogHero } from "@/components/ui-blog/blogHero/BlogHero";
import { Breadcrumbs } from "@/components/ui/breadcrumbs/Breadcrumbs";
import { ALL_BLOG_CONTENT } from "@/content/all-blog/all-blog.content";
import { FC } from "react";
import { RedesingGuide } from "./RedesingGuide";

export const RedesingGuideScreen: FC = () => {
  return (
    <>
      <Breadcrumbs pathname={ALL_BLOG_CONTENT.REDESIGN_GUIDE.url} />
      <BlogHero heroContent={ALL_BLOG_CONTENT.REDESIGN_GUIDE} />
      <RedesingGuide  />
    </>
  );
};
