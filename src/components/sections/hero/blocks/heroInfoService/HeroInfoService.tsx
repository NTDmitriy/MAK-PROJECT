import { Container } from "@/components/ui/container/Container";
import { FC } from "react";

interface IHeroInfoService {
  info: {
    title: string;
    description: string;
    image: string;
  };
}

export const HeroInfoService: FC<IHeroInfoService> = ({ info }) => {
  return <>{info && <Container></Container>}</>;
};
