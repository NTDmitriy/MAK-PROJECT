
import { PrimaryButton } from "@/components/ui/buttons/primaryButton/PrimaryButton";
import { Container } from "@/components/ui/container/Container";
import { NextPage } from "next";
import PromotionReasons from "../blocks/heroblock/hero";
import { block_promotion1 } from "@/config/blocks.config";

const TestPage: NextPage = () => {
  return (

    <Container>
      <div style={{ maxWidth: "300px", margin: '30px' }}>
        <PrimaryButton>123</PrimaryButton>
      </div>
    </Container>



      <PromotionReasons content={block_promotion1} />




  );
};

export default TestPage;
