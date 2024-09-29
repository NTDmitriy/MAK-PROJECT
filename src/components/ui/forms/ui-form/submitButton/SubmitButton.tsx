import { PrimaryButton } from "@/components/ui/buttons/primaryButton/PrimaryButton";
import { Loader } from "@/components/ui/loader/Loader";
import { TButton } from "@/typing/button.type";
import clsx from "clsx";
import { FC } from "react";
import { useHandlerFormContext } from "../../HandleFormProvider";
import styles from "./SubmitButton.module.css";

export const SubmitButton: FC<TButton> = ({ className, ...rest }) => {
  const { loading } = useHandlerFormContext();

  return (
    <PrimaryButton
      className={className}
      {...rest}
      type="submit"
      inert={loading ? "" : undefined}
    >
      <span className={clsx(styles.text, !loading && styles.visible)}>
        Отправить
      </span>
      <Loader className={clsx(styles.loader, loading && styles.visible)} />
    </PrimaryButton>
  );
};
