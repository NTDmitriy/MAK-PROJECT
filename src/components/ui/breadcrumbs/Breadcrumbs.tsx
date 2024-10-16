import { DASHBOARD_PAGES } from "@/dashboard/app.dashboard";
import { useFindParent } from "@/hooks/useFindParent";
import { TGenericElementProps } from "@/typing/elements.type";
import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";
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
        </div>
      )}
    </>
  );
};
