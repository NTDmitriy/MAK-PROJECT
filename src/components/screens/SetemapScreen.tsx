import { FC } from "react";
import { Sitemap } from "../sections/sitemap/Sitemap";
import { Breadcrumbs } from "../ui/breadcrumbs/Breadcrumbs";

export const SitemapScreen: FC = () => {
  return (
    <>
      <Breadcrumbs pathname={"/sitemap"} />
      <Sitemap />
    </>
  );
};
