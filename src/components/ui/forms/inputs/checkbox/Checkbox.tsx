import { useFormContext } from "react-hook-form";

import { DynamicSvg } from "@/components/ui/dynamicSvg/DynamicSvg";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import { FC } from "react";
import styles from "./Checkbox.module.css";

interface ICheckbox extends IGenericElementProps {
  value: string;
}

export const Checkbox: FC<ICheckbox> = ({ value }) => {
  const { register } = useFormContext();

  return (
    <>
      {value && (
        <label className={styles.label}>
          {value}
          <input
            type="checkbox"
            {...register("CHECKBOXES")}
            value={value}
            className={styles.checkbox}
          />

          <DynamicSvg name="IconCheck" className={styles.custom__checkbox} />
        </label>
      )}
    </>
  );
};
