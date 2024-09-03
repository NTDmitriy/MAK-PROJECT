import { IGenericElementProps } from "@/interfaces/elements.interface";
import { InputMask } from "@react-input/mask";
import clsx from "clsx";
import { randomBytes } from "crypto";
import { FC, InputHTMLAttributes, TextareaHTMLAttributes, useEffect, useState } from "react";
import styles from "./PrimaryInput.module.css";

type TMaskParams = {
  mask: string;
  replacement: Record<string, RegExp>;
};

export interface IInput extends IGenericElementProps {
  InputProps: InputHTMLAttributes<HTMLInputElement>;
  TextareaProps?: TextareaHTMLAttributes<HTMLTextAreaElement>;
  id: string;
  label?: string;
  error?: boolean;
  maskParams?: TMaskParams;
  isTextarea?: boolean;
}

export const PrimaryInput: FC<IInput> = ({
  InputProps,
  TextareaProps,
  label,
  error = false,
  className,
  id,
  maskParams,
  isTextarea,
  ...rest
}) => {
  const [uniqueId, setUniqueId] = useState(id);

  useEffect(() => {
    const randomHash = randomBytes(4)
      .toString("base64")
      .replace(/\//g, "_")
      .replace(/\+/g, "-")
      .slice(0, 5)
    setUniqueId(`${id}-${randomHash}`);
  }, [id]);

  return (
    <div className={clsx(styles.root, className)} {...rest}>
      {!isTextarea && (
        <>
          {maskParams && (
            <InputMask
              className={clsx(
                styles.input,
                label && styles.hidden__placeholder
              )}
              mask={maskParams.mask}
              replacement={maskParams.replacement}
              id={uniqueId}
              {...InputProps}
            />
          )}
          {!maskParams && (
            <input
              className={clsx(
                styles.input,
                label && styles.hidden__placeholder
              )}
              id={uniqueId}
              {...InputProps}
            />
          )}
        </>
      )}

      {isTextarea && (
        <textarea
          rows={3}
          className={clsx(
            styles.input,
            styles.textarea,
            label && styles.hidden__placeholder
          )}
          id={uniqueId}
          {...TextareaProps}
        />
      )}

      {label && (
        <label htmlFor={uniqueId} className={styles.label}>
          {label}
        </label>
      )}

      <fieldset className={clsx(styles.fieldset, error && styles.error)}>
        <legend className={styles.legend}>
          <span>{label}</span>
        </legend>
      </fieldset>
    </div>
  );
};
