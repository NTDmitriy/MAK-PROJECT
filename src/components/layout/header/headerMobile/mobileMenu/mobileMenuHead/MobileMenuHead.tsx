import { DynamicSvg } from "@/components/ui/dynamicSvg/DynamicSvg";
import { useMobileMenu } from "@/store/mobile-menu.store";
import { TGenericElementProps } from "@/typing/elements.type";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import { SubButton } from "../subButton/SubButton";
import styles from "./MobileMenuHead.module.css";

interface IMobileMenuHead extends TGenericElementProps {
  closeSubMenu: () => void;
}

export const MobileMenuHead: FC<PropsWithChildren<IMobileMenuHead>> = ({
  children,
  closeSubMenu,
  ...rest
}) => {
  const { handleClose } = useMobileMenu();

  return (
    <div className={clsx(styles.head, !children ? styles.head__pl : "")}>
      {children && (
        <button className={styles.array} onClick={closeSubMenu}>
          <DynamicSvg name="IconRightArray" />
        </button>
      )}
      {children ? children : "Меню"}
      <SubButton {...rest} className={styles.sub__btn} onClick={handleClose}>
        <DynamicSvg name="IconClose" />
      </SubButton>
    </div>
  );
};
