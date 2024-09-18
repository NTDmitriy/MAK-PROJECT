import { IBlogItem } from "@/config/url-config/blog-pages.config";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import styles from "./BlogItem.module.css";

interface IBlog extends IGenericElementProps {
  item: IBlogItem;
}

export const BlogItem: FC<PropsWithChildren<IBlog>> = ({
  className,
  item,
  ...rest
}) => {
  const { name, description, image, date, url } = item;

  return (
    <>
      <li  {...rest}>
        <Link href={url} className={styles.item}>
          <img
            className={styles.img}
            src={`/images/blog/${image}`}
            alt={name}
            title={name}
            loading="lazy"
          />

          <h5 className={styles.title}>{name}</h5>
          <p className={styles.descr}>{description}</p>
          <div className={styles.bot__wrapper}>
            <p className={styles.link}>Читать полностью</p>
            <p className={styles.date}>{date}</p>
          </div>
        </Link>
      </li>
    </>
  );
};
