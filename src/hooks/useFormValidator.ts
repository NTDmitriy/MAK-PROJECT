import { FormValidator } from "@/utils/FormValidator";
import { useCallback } from "react";

export const useFormValidator = () => {
  const validateForm = useCallback((data: Record<string, string>) => {
    const validator = new FormValidator(data);
    const validationErrors = validator.validate();

    if (validationErrors.length > 0) {
      return {
        values: {},
        errors: validationErrors.reduce(
          (acc, { field, message }) => ({
            ...acc,
            [field]: { type: "manual", message },
          }),
          {}
        ),
      };
    }

    return { values: data, errors: {} };
  }, []);

  return { validateForm };
};
