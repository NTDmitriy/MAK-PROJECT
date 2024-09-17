import { Container } from "@/components/ui/container/Container";
import { Section } from "@/components/ui/section/Section";
import { FC } from "react";
import styles from "./RedesingGuide.module.css";

export const RedesingGuide: FC = () => {
  return (
    <Section>
      <Container>
        <p className={styles.text1}>text</p>
        <p className={styles.text2}>text</p>
      </Container>
    </Section>
  );
};
