import { Container } from "@/components/ui/container/Container";
import { Section } from "@/components/ui/section/Section";
import { TGenericElementProps } from "@/interfaces/elements.type";
import { FC, PropsWithChildren } from "react";

export const CaseBoxWithe: FC<PropsWithChildren<TGenericElementProps>> = ({
  children,
  ...rest
}) => {
  return (
    <Section
      {...rest}
      style={{
        backgroundColor: "#D9D9D9",
        paddingTop: "clamp(30px, 3.2dvw, 60px)",
        paddingBottom: "clamp(30px, 3.2dvw, 60px)",
        marginTop: "clamp(30px, 3.2dvw, 60px)",
        marginBottom: "clamp(30px, 3.2dvw, 60px)",
      }}
    >
      <Container>{children}</Container>
    </Section>
  );
};
