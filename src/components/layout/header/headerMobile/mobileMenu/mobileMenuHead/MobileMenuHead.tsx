import { DynamicSvg } from "@/components/ui/dynamicSvg/DynamicSvg";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import { useMobileMenu } from "@/store/mobile-menu.store";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import { SubButton } from "../subButton/SubButton";
import styles from "./MobileMenuHead.module.css";

interface IMobileMenuHead extends IGenericElementProps {
  closeSubMenu: () => void;
}

export const MobileMenuHead: FC<PropsWithChildren<IMobileMenuHead>> = ({
  children,
  closeSubMenu,
  ...rest
}) => {
  const { handleClose } = useMobileMenu();

  const closeAllMenu = () => {
    handleClose(), closeSubMenu();
  };

  return (
    <div className={clsx(styles.head, !children ? styles.head__pl : "")}>
      {children && (
        <button className={styles.array} onClick={closeSubMenu}>
          <DynamicSvg name="IconRightArray" />
        </button>
      )}
      {children ? children : "Меню"}
      <SubButton {...rest} className={styles.sub__btn} onClick={closeAllMenu}>
        <DynamicSvg name="IconClose" />
      </SubButton>
    </div>
  );
};
