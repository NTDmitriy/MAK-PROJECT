import { Container } from "@/components/ui/container/Container";
import { THeroInfo } from "@/interfaces/types/pageTypes/products.type";
import { FC } from "react";

interface IHeroInfoProduct {
  infoContent: THeroInfo;
}

export const HeroInfoProduct: FC<IHeroInfoProduct> = ({ infoContent }) => {
  return (
    <>
      {infoContent && (
        <Container>
					<div style={{padding: '30px'}}>

          {infoContent.title}
          {infoContent.description}
					</div>
        </Container>
      )}
    </>
  );
};
