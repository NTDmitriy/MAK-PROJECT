import { Container } from "@/components/ui/container/Container";
import { Section } from "@/components/ui/section/Section";
import { TGenericElementProps } from "@/interfaces/elements.type";
import { FC, PropsWithChildren } from "react";

export const Box: FC<PropsWithChildren<TGenericElementProps>> = ({
  children,
  ...rest
}) => {
  return (
    <Section {...rest}>
      <Container>{children}</Container>
    </Section>
  );
};
