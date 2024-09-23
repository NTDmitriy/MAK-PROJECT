import { Container } from "@/components/ui/container/Container";
import { Section } from "@/components/ui/section/Section";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import { FC, PropsWithChildren } from "react";

export const CaseBoxWithe: FC<PropsWithChildren<IGenericElementProps>> = ({
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
