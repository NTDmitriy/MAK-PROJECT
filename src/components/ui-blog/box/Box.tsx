import { Container } from "@/components/ui/container/Container";
import { Section } from "@/components/ui/section/Section";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import { FC, PropsWithChildren } from "react";

export const Box: FC<PropsWithChildren<IGenericElementProps>> = ({
  children,
  ...rest
}) => {
  return (
    <Section {...rest}>
      <Container>{children}</Container>
    </Section>
  );
};
