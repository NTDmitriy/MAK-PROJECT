import { FC, SVGProps } from "react";
import { svgMap } from "./svg-map";

export type TSvgMapKeys = keyof typeof svgMap;

interface IDynamicSvg extends SVGProps<SVGSVGElement> {
  name: TSvgMapKeys;
}

export const DynamicSvg: FC<IDynamicSvg> = ({ name, ...props }) => {
  const SvgComponent = svgMap[name];

  if (!SvgComponent) {
    return null;
  }

  return <SvgComponent {...props} />;
};
