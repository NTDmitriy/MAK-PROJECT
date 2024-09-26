"use client";

import { BlogCard } from "@/components/ui/blogCard/BlogCard";
import { SeconderyButton } from "@/components/ui/buttons/seconderyButton/SeconderyButton";
import { Container } from "@/components/ui/container/Container";
import { SeconderyLinkButton } from "@/components/ui/links/seconderyLinkButton/SeconderyLinkButton";
import { Section } from "@/components/ui/section/Section";
import { BlockTitle } from "@/components/ui/titles/titleBlock/BlockTitle";
import { ALL_BLOG_CONTENT } from "@/content/all-blog/all-blog.content";
import { USEFUL_DASHBOARD_PAGES } from "@/dashboard/useful.dashboard";
import { TGenericElementProps } from "@/typing/elements.type";
import { FC, PropsWithChildren, useState } from "react";
import styles from "./Blog.module.css";

interface IBlog extends TGenericElementProps {
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

  const articles = ALL_BLOG_CONTENT.toArray();

  const handleShowMore = () => {
    setArticlesToShow((prev) => prev + initialArticlesToShow);
  };

  const displayedArticles = isPreview
    ? articles.reverse().slice(0, 2)
    : articles.reverse().slice(0, articlesToShow);

  return (
    <>
      {articles && articles.length > 0 && (
        <Section className={className} {...rest}>
          {headline && (
            <BlockTitle
              leftSide={true}
              background="БЛОГ"
              descrSideway={
                <>
                  Следите за нашими обновлениями и узнавайте последние тренды в
                  мире цифрового маркетинга.
                </>
              }
            >
              Наш блог
            </BlockTitle>
          )}
          <Container>
            <ul className={styles.list}>
              {displayedArticles.map((article, index) => (
                <BlogCard key={index} item={article} />
              ))}
            </ul>
            {isPreview ? (
              <div className={styles.button__wrapper}>
                <SeconderyLinkButton href={USEFUL_DASHBOARD_PAGES.BLOG.url}>
                  Перейти в блог
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
