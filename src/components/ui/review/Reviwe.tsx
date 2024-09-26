import { TReviwe } from "@/interfaces/types/block/products.type";
import clsx from "clsx";
import { FC } from "react";
import { SeconderyLinkButton } from "../links/seconderyLinkButton/SeconderyLinkButton";
import { ButtonMore } from "./buttonMore/ButtonMore";
import { RatingStars } from "./rating/Rating";
import styles from "./Reviwe.module.css";

interface IReviwe {
  reviwe: TReviwe;
  isFull?: boolean;
}

export const Reviwe: FC<IReviwe> = ({ reviwe, isFull }) => {
  const { avatar, name, position, rating, text, caseUrl } = reviwe;

  return (
    <div className={clsx(styles.reviwe, isFull && styles.reviwe__full)}>
      <div className={styles.head}>
        {avatar && (
          <img
            className={styles.avatar}
            src={`/images/avatars/${avatar}.webp`}
            alt="avatar"
            loading="lazy"
          />
        )}
        {!avatar && (
          <img
            className={styles.avatar}
            src={`/images/avatars/avatar-default.webp`}
            alt="avatar"
            loading="lazy"
          />
        )}

        <div className={styles.head__info}>
          <p className={styles.head__name}>{name}</p>
          {position && <p className={styles.position}>{position}</p>}
        </div>
      </div>
      <div className={styles.desrc}>
        <RatingStars rating={rating} />
        <div className={styles.reviwe__text}>{text}</div>
        {!isFull && <ButtonMore reviwe={reviwe} />}
      </div>
      <div className={styles.btn__group}>
        {caseUrl && (
          <SeconderyLinkButton
            className={clsx(styles.btn, styles.inner)}
            href={caseUrl}
          >
            Смотреть кейс
          </SeconderyLinkButton>
        )}
      </div>
    </div>
  );
};
