import { FC } from "react";
import styles from "./Header.module.css";
import { HeaderDesktop } from "./headerDesktop/HeaderDesktop";
import { HeaderMobile } from "./headerMobile/HeaderMobile";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <HeaderDesktop className={styles.desktop}/>
      <HeaderMobile className={styles.mobile}/>
    </header>
  );
};
