
"use client";

import {FC} from 'react';
import styles from './hero.module.css';
import { Container } from "@/components/ui/container/Container";

interface heroProps {
  content: {
    title: string;
    text: string;
    img: string;
  };
}

const hero: FC<heroProps> = ({ content }) => {
  return (
    <div className={styles.container}>
      <Container>
      <h2 className={styles.title}>{content.title}</h2>
      <p className={styles.text}>{content.text}</p>
       <img src={content.img} alt={content.title} className={styles.image} />
      </Container>
      </div>
  );
};

export default hero;
