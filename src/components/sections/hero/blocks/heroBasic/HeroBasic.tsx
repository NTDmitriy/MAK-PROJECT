import { Container } from "@/components/ui/container/Container";
import { THeroBasic } from "@/interfaces/types/pageTypes/products.type";
import { FC } from "react";



interface IHeroBasic {
  basicContent: THeroBasic;
}

export const HeroBasic: FC<IHeroBasic> = ({ basicContent }) => {
  const { title, description } = basicContent;

  return (
    <Container>
      <h1>{title.text}</h1>
      <p>{description}</p>
    </Container>
  );
};
