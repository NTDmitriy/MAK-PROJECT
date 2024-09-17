import { FC } from "react";
import { Rating } from "react-simple-star-rating";
import styles from "./Rating.module.css";

interface IRatingStars {
  rating: number;
}

export const RatingStars: FC<IRatingStars> = ({ rating }) => {
  return (
    <div className={styles.rating}>
      <span>{rating.toFixed(1)}</span>
      <Rating
        initialValue={rating}
        readonly={true}
        size={28}
        fillColor={"#FFDE00"}
      />
    </div>
  );
};
