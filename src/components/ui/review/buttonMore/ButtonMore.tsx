import { Popup } from "@/components/ui/modals/popup/Popup";
import { TReviwe } from "@/interfaces/types/block/products.type";
import { FC, PropsWithChildren } from "react";
import { Reviwe } from "../Reviwe";
import styles from "./ButtonMore.module.css";

interface IButtonMore {
  reviwe: TReviwe;
}

export const ButtonMore: FC<PropsWithChildren<IButtonMore>> = ({ reviwe }) => {
  return (
    <Popup
      initComponent={<button className={styles.more}>Читать полностью</button>}
      contentComponent={<Reviwe reviwe={reviwe} isFull={true} />}
    />
  );
};
