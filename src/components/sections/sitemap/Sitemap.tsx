import { Container } from "@/components/ui/container/Container";
import { Section } from "@/components/ui/section/Section";
import {
  DASHBOARD_PAGES,
  IDashboardItem,
} from "@/config/url-config/all-pages.config";
import { FC } from "react";
import styles from "./Sitemap.module.css";

type IList = {
  items: IDashboardItem[];
};
type IListItem = {
  item: IDashboardItem;
};

const List: FC<IList> = ({ items }) => {
  return (
    <ul className={styles.list}>
      {items.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </ul>
  );
};

const ListItem: FC<IListItem> = ({ item }) => {
  return (
    <>
      <li className={styles.item}>
        <a className={styles.link} href={item.url}>
          {item.name}
        </a>
        {item.childrens && <List items={item.childrens} />}
      </li>
    </>
  );
};

export const Sitemap: FC = () => {
  const allPages = DASHBOARD_PAGES.toArray();

  return (
    <>
      <Section>
        <Container>
          <div className={styles.root}>
            <List items={allPages} />
          </div>
        </Container>
      </Section>
    </>
  );
};