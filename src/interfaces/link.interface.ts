import { AnchorHTMLAttributes } from "react";

export interface ILink extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export interface ILinkButton extends AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string;
}