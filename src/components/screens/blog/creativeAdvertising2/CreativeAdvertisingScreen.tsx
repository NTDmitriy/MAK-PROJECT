import { HeroBlog } from "@/components/ui-blog/heroBlog/HeroBlog";
import { Breadcrumbs } from "@/components/ui/breadcrumbs/Breadcrumbs";
import { CASES_DASHBOARD_PAGES } from "@/config/url-config/cases-pages.config";
import { FC } from "react";

const content = {
  title:
    "Как привлечь внимание клиентов в условиях перенасыщенного рынка: креативные подходы к рекламе ",
  date: "09.09.2024",
  time: "~10 мин",
  author: "Максим Бондаренко",
  thems: ["SEO-продвижение", "Яндекс Директ", "Сквозная аналитика"],
};

export const CreativeAdvertisingScreen: FC = () => {
  return (
    <>
      <Breadcrumbs pathname={CASES_DASHBOARD_PAGES.CONSTRUCTION_COMPANY.url} />
      <HeroBlog heroContent={content} />
    </>
  );
};
