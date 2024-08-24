import { DynamicSvg, TSvgMapKeys } from "@/components/ui/dynamicSvg/DynamicSvg";
import { IDashboardItem } from "@/config/url-config/all-pages.config";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import clsx from "clsx";
import Link from "next/link";
import {
	FC,
	PropsWithChildren,
	ReactNode,
	SyntheticEvent,
	useState,
} from "react";
import DropdownLink from "../dropdownLink/DropdownLink";
import styles from "./DropdownMenu.module.css";

interface IDropdownMenu extends IGenericElementProps {
  page: IDashboardItem;
}

export const DropdownMenu: FC<PropsWithChildren<IDropdownMenu>> = ({
  page,
  className,
  ...rest
}) => {
  const [value, setValue] = useState<number | null>(null);
  const { childrens, url } = page;
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const isServices = url === "/services";

  return (
    <>
      <div {...rest} className={styles.content}>
        <ul className={styles.tablist} key={"menu"}>
          {childrens &&
            childrens.map((item, index) => (
              <li key={index}>
                <DropdownLink
                  onMouseEnter={(event) => handleChange(event, index)}
                  href={item.url}
                  arrayRight={isServices}
                  isActive={value === index && isServices ? true : false}
                >
                  {item.icon && (
                    <DynamicSvg
                      name={item.icon as TSvgMapKeys}
                      className={styles.icon}
                    />
                  )}
                  {item.name && item.name}
                </DropdownLink>
              </li>
            ))}
        </ul>
        {value !== null && (
          <>
            {childrens &&
              isServices &&
              childrens.map((item, index) => (
                <CustomTabPanel
                  className={styles.tab__panel}
                  key={index}
                  value={value}
                  index={index}
                >
                  {item.childrens &&
                    item.childrens.map((child, childIndex) => (
                      <Link
                        href={child.url}
                        key={childIndex}
                        className={styles.tab__panel__item}
                      >
                        <img
                          src={`/images/${child.icon}.jpg`}
                          alt={child.name}
                          title={child.name}
                        />
                        <div className={styles.item__descr__wrapper}>
                          <h3 className={styles.item__descr__title}>
                            {child.name}
                          </h3>
                          <p className={styles.item__descr__text}>
                            {child.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                </CustomTabPanel>
              ))}
          </>
        )}
      </div>
    </>
  );
};

interface ITabPanelProps {
  children?: ReactNode;
  className?: string;
  index: number;
  value: number;
}

const CustomTabPanel = (props: ITabPanelProps) => {
  const { children, value, index, className, ...other } = props;
  return (
    <div className={clsx(className)} {...other}>
      {value === index && <>{children} </>}
    </div>
  );
};
