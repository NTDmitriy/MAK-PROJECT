import { Breadcrumbs } from "@/components/ui/breadcrumbs/Breadcrumbs";
import { BLOG_DASHBOARD_PAGES } from "@/config/url-config/blog-pages.config";
import { FC } from "react";
import { RedesingGuide } from "./RedesingGuide";

export const RedesingGuideScreen: FC = () => {
  return (
    <>
      <Breadcrumbs pathname={BLOG_DASHBOARD_PAGES.REDESIGN_GUIDE.url} />
      <RedesingGuide  />
    </>
  );
};
