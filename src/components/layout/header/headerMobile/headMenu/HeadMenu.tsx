import { IconClose, IconRightArray } from "@/components/ui/icons";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import { useMobileMenu } from "@/store/mobile-menu.store";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./HeadMenu.module.css";

interface IHeadMenu extends IGenericElementProps {}

export const HeadMenu: FC<PropsWithChildren<IHeadMenu>> = ({
  children,
  ...rest
}) => {
  const { handleClose, handleCloseSubMenu } = useMobileMenu();

  return (
    <div className={clsx(styles.head, !children ? styles.head__pl : '' )}>
      {children && (
        <button className={styles.array} onClick={handleCloseSubMenu}>
          <IconRightArray />
        </button>
      )}
      {children ? children : "Меню"}
      <button {...rest} className={styles.sub__btn} onClick={handleClose}>
        <IconClose />
      </button>
    </div>
  );
};
