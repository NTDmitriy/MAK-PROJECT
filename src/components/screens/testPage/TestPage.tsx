import { PrimaryButton } from "@/components/ui/buttons/primaryButton/PrimaryButton";
import { Container } from "@/components/ui/container/Container";
import { NextPage } from "next";

const TestPage: NextPage = () => {
  return (
    <Container>
      <div style={{ maxWidth: "300px", margin: '30px' }}>
        <PrimaryButton>123</PrimaryButton>
      </div>
    </Container>
  );
};

export default TestPage;
