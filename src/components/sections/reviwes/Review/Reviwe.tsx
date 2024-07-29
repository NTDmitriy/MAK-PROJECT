import { SeconderyButton } from "@/components/ui/buttons/seconderyButton/SeconderyButton";
import { TReviwe } from "@/interfaces/types/pageTypes/products.type";
import clsx from "clsx";
import { FC } from "react";
import styles from "./Reviwe.module.css";

interface IReviwe {
  reviwe: TReviwe;
}

export const Reviwe: FC<IReviwe> = ({ reviwe }) => {
  const { avatar, name, position, rating, text, caseUrl } = reviwe;

  return (
    <div className={clsx(styles.reviwe)}>
      <div className={styles.head}>
        <img
          className={styles.avatar}
          src={`/images/${avatar}.png`}
          alt="avatar"
        />
        <div className={styles.head__info}>
          <p className={styles.head__name}>{name}</p>
          <p className={styles.position}>{position}</p>
        </div>
      </div>
      <div className={styles.desrc}>
        <div className={styles.rating}></div>
        <div className={styles.revive__text}>{text}</div>
        <p className={styles.revive__text__more}>Читать полностью</p>
      </div>
      <div className={styles.btn__group}>
        {caseUrl && (
          <SeconderyButton className={styles.btn}>
            Смотреть кейс{" "}
          </SeconderyButton>
        )}
      </div>
    </div>
  );
};
