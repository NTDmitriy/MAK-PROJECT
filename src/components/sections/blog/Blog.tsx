"use client";

import { BlogItem } from "@/components/ui/blogItem/BlogItem";
import { SeconderyButton } from "@/components/ui/buttons/seconderyButton/SeconderyButton";
import { Container } from "@/components/ui/container/Container";
import { SeconderyLinkButton } from "@/components/ui/links/seconderyLinkButton/SeconderyLinkButton";
import { Section } from "@/components/ui/section/Section";
import { BlockTitle } from "@/components/ui/titles/titleBlock/BlockTitle";
import { BLOG_DASHBOARD_PAGES } from "@/config/url-config/blog-pages.config";
import { USEFUL_DASHBOARD_PAGES } from "@/config/url-config/useful-pages.config";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import { FC, PropsWithChildren, useState } from "react";
import styles from "./Blog.module.css";

interface IBlog extends IGenericElementProps {
  isPreview: boolean;
  headline: boolean;
}

export const Blog: FC<PropsWithChildren<IBlog>> = ({
  className,
  isPreview,
  headline,
  ...rest
}) => {
  const initialArticlesToShow = 6;
  const [articlesToShow, setArticlesToShow] = useState(initialArticlesToShow);

  const articles = BLOG_DASHBOARD_PAGES.toArray();

  const handleShowMore = () => {
    setArticlesToShow((prev) => prev + initialArticlesToShow);
  };

  const displayedArticles = isPreview
    ? articles.slice(0, 2)
    : articles.slice(0, articlesToShow);

  return (
    <>
      {articles && articles.length > 0 && (
        <Section className={className} {...rest}>
          {headline && (
            <BlockTitle
              leftSide={true}
              background="СТАТЬИ"
              descrSideway={
                <>
                  Следите за нашими обновлениями и узнавайте последние тренды в
                  мире цифрового маркетинга.
                </>
              }
            >
              Полезные статьи
            </BlockTitle>
          )}
          <Container>
            <ul className={styles.list}>
              {displayedArticles.map((article, index) => (
                <BlogItem key={index} item={article} />
              ))}
            </ul>
            {isPreview ? (
              <div className={styles.button__wrapper}>
                <SeconderyLinkButton href={USEFUL_DASHBOARD_PAGES.BLOG.url}>
                  Все статьи
                </SeconderyLinkButton>
              </div>
            ) : (
              articlesToShow < articles.length && (
                <div className={styles.button__wrapper}>
                  <SeconderyButton onClick={handleShowMore}>
                    Показать еще
                  </SeconderyButton>
                </div>
              )
            )}
          </Container>
        </Section>
      )}
    </>
  );
};
