import { Container } from "@/components/ui/container/Container";
import { HowWorksIcon } from "@/components/ui/icons/genericIcons/HowWorksIcon";
import { THowWorks } from "@/interfaces/types/pageTypes/products.type";
import { FC } from "react";



interface IHowWorks {
  basicContent: THowWorks;
}

export const HowWorks: FC<IHowWorks> = ({ basicContent }) => {
  const { title, description } = basicContent;

  return (
    <Container>
    <HowWorksIcon />
      <h1>{title}</h1>
      <p>{description}</p>
    </Container>
  );
};
