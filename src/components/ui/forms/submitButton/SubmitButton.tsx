import clsx from "clsx";
import { PrimaryButton } from "../../buttons/primaryButton/PrimaryButton";
import { Loader } from "../../loader/Loader";
import { useHandlerFormContext } from "../HandleFormProvider";
import styles from "./SubmitButton.module.css";

export const SubmitButton = () => {
  const { loading } = useHandlerFormContext();

  return (
    <PrimaryButton type="submit" inert={loading ? "" : undefined } >
      <span className={clsx(styles.text, !loading && styles.visible)}>
        Отправить
      </span>
      <Loader className={clsx(styles.loader, loading && styles.visible)} />
    </PrimaryButton>
  );
};
