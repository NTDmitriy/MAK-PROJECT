import { DASHBOARD_PAGES } from "@/config/url-config/all-pages.config";
import { useFindParent } from "@/hooks/useFindParent";
import { TGenericElementProps } from "@/interfaces/elements.type";
import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";
import { Container } from "../container/Container";
import styles from "./Breadcrumbs.module.css";

interface IBreadcrumbs extends TGenericElementProps {
  pathname: string;
}

export const Breadcrumbs: FC<IBreadcrumbs> = ({
  className,
  pathname,
  ...rest
}) => {
  const parents = useFindParent(DASHBOARD_PAGES.toArray(), pathname);
  return (
    <>
      {parents && (
        <div className={clsx(styles.root, className)} {...rest}>
          <Container>
            <ul className={styles.list}>
              {parents.map((item, index) => (
                <li key={index} className={styles.item}>
                  <Link
                    href={item.url}
                    className={styles.link}
                    inert={index === parents.length - 1 ? "" : undefined}
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      )}
    </>
  );
};
