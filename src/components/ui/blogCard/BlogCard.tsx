import { IBlogItem } from "@/content/all-blog/all-blog.content";
import { TGenericElementProps } from "@/typing/elements.type";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import styles from "./BlogCard.module.css";

interface IBlogCard extends TGenericElementProps {
  item: IBlogItem;
}

export const BlogCard: FC<PropsWithChildren<IBlogCard>> = ({
  className,
  item,
  ...rest
}) => {
  const { name, description, image, date, url } = item;

  return (
    <>
      <li className={styles.item} {...rest}>
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
          <Link href={url} className={styles.link}>
            <span className={styles.link__text}>Читать полностью</span>
          </Link>

          <p className={styles.date}>{date}</p>
        </div>
      </li>
    </>
  );
};
