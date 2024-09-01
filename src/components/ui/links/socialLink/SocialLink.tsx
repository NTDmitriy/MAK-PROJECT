import { ILink } from "@/interfaces/link.interface";
import clsx from "clsx";
import { FC, PropsWithChildren, ReactNode } from "react";
import styles from "./SocialLink.module.css";

interface ISocialLink extends ILink {
  tooltip?: string;
  icon: ReactNode;
}

export const SocialLink: FC<PropsWithChildren<ISocialLink>> = ({
  icon,
  className,
  tooltip,
  href,
  ...rest
}) => {
  return (
    <a
      target="_blank"
      data-tooltip={tooltip}
      href={href}
      className={clsx(styles.link, className)}
      {...rest}
    >
      {icon}
    </a>
  );
};
