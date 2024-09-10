import { ListTitleBlog } from "@/components/ui-blog/listTitleBlog/ListTitleBlog";
import { SectionTitleBlog } from "@/components/ui-blog/sectionTitleBlog/SectionTitleBlog";
import { TextBlog } from "@/components/ui-blog/textBlog/TextBlog";
import { Container } from "@/components/ui/container/Container";
import { Section } from "@/components/ui/section/Section";
import { NextPage } from "next";


const Blog: NextPage = () => {
  return (
    <Section>
      <Container
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <SectionTitleBlog>Анализ целевой аудитории lorem</SectionTitleBlog>
        <ListTitleBlog>хуй</ListTitleBlog>
        <TextBlog>хуй</TextBlog>
      </Container>
    </Section>
  );
};

export default Blog;
